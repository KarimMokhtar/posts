import React, { useEffect } from "react";
import { Popconfirm, Space, Table } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost, getPosts } from "../../redux/actions/posts";
import Pagination from "../../components/Pagination";
import { initiatePages } from "../../redux/actions/pagination";

const perPage = 10;

const Home = () => {
  const dispatch = useDispatch();
  const { posts, pagination } = useSelector(({ posts: { posts }, pagination }) => ({
    posts,
    pagination,
  }));

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  useEffect(() => {
    if (posts.length) {
      const total = posts.length;
      const totalPages = Math.ceil(total / 10);
      let currPage = pagination.currPage;
      if (currPage > totalPages) currPage--;
      dispatch(initiatePages({ total, totalPages: totalPages + 1, currPage }));
    }
  }, [dispatch, posts, pagination.currPage]);

  const handleDelete = async id => {
    await dispatch(deletePost(id));
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text, record) => <Link to={`/post/${record.id}`}>{text}</Link>,
    },
    {
      title: "Description",
      dataIndex: "body",
      key: "body",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => {
              handleDelete(record.id);
            }}>
            <span>Delete</span>
          </Popconfirm>
          <Link to={`/post/${record.id}`}>Edit</Link>
        </Space>
      ),
    },
  ];
  return (
    <div className="home-page">
      <h1>Welcome to posts home</h1>
      <Table
        dataSource={posts.slice((pagination.currPage - 1) * perPage, pagination.currPage * perPage)}
        pagination={false}
        columns={columns}
      />
      <Pagination />
    </div>
  );
};

export default Home;
