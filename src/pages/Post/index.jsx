import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPost } from "../../redux/actions/posts";
import { Form, Input, Button } from "antd";
import TextArea from "antd/lib/input/TextArea";

const Post = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const { selectedPost, loading } = useSelector(({ posts }) => posts);
  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  const onFinish = values => {
    console.log(values);
  };

  if (loading) return <div>...Loading</div>;
  return (
    <div>
      <Form
        initialValues={{ body: selectedPost.body, title: selectedPost.title }}
        layout="vertical"
        form={form}
        name="control-hooks"
        onFinish={onFinish}>
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="body"
          label="Description"
          rules={[
            {
              required: true,
            },
          ]}>
          <TextArea />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Post;
