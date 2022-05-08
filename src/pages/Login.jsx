import { Button, Form } from "react-bootstrap";

const Login = () => {
  return (
    <div className="container">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Search Student</Form.Label>
          <Form.Control type="name" placeholder="Enter Student Name" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
