import { useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";

function BodyShorthandExample() {
  const { setToken } = useContext(AuthContext)
  const navigate = useNavigate

  const signOut = () => {
    setToken(null)
    navigate("/login")
  }


  return (
    <Container>
      <h1 className='my-3'>Dashboard</h1>
      <Button onClick={signOut}> Sign Out</Button>
      <Row>
        <Col md={4}>
          <Card className="my-3">
            <Card.Body>
              <Card.Title>Sigma School Analytics</Card.Title>
              <Card.Text>People who graduate who get jobs: 80%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default BodyShorthandExample;