import { Button, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export default function Home() {

  const navigate = useNavigate();

  const goTologin = () => {
    navigate("/login")
  }

  return (
    <Container>
      <h1 className="my-3">Welcome Home</h1>
      <Button onClick={goTologin}>Login Page</Button>
    </Container>
  )
}