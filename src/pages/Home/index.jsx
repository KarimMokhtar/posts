import { Popconfirm, Space, Table } from "antd";

const Home = () => {


  const handleDelete = () => {

  }
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

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
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Home;
