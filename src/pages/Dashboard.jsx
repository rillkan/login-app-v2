import { Container, Row, Col, Card } from "react-bootstrap"

function BodyShorthandExample() {
  return (
    <Container>
      <h1 className='my-3'>Dashboard</h1>
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