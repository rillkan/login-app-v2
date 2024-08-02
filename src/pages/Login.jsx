import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"; //Will return a function that can help navigate to a specific url. In this case, /dashboard
import { AuthContext } from "../AuthContext"

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const authContext = useContext(AuthContext)

  function login() {
    const isCorrectUsername = username === "mjkan96@gmail.com"
    const isCorrectPassword = password === "123";
    if (isCorrectUsername && isCorrectPassword) {
      authContext.setToken("1234");
      navigate("/dashboard");
    }
  }

  return (
    <Container>
      <h1 className="my-3">Login to your account</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Form.Text className="text-muted">
            We&apos; never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" onClick={login}>
          Login
        </Button>
      </Form>
    </Container>

  );
}

