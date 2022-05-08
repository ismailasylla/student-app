import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  const [studentData, setStudentData] = useState({
    name: "",
  });

  const { name } = studentData;

  const onChange = (e) => {
    setStudentData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Search Student</Form.Label>
          <Form.Control
            type="text"
            id="name"
            placeholder="Enter Student Name"
            onChange={onChange}
            value={name}
            name="name"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
