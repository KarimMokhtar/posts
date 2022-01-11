import { Popconfirm, Space, Table } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPosts } from "../../redux/actions/posts";
import Pagination from "../../components/Pagination";

const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector(({ posts: { posts } }) => ({ posts }));
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  const handleDelete = () => {};

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: text => <a>{text}</a>,
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
            <a>Delete</a>
          </Popconfirm>
          <a>Edit</a>
        </Space>
      ),
    },
  ];

  return (
    <div className="home-page">
      <h1>Welcome to posts home</h1>
      <Table dataSource={posts} pagination={false} columns={columns} />
      <Pagination />
    </div>
  );
};

export default Home;
