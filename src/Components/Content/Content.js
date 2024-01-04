import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import Card from 'react-bootstrap/Card';

function Content() {
  return (
  
    <Container>
       <Row>
        <Col>
        <Card className='bg-danger m-5 text-white'>
      <Card.Header>AdminSection</Card.Header>
      <Card.Body>
        <Card.Title>25</Card.Title>
        <Card.Text>
       There are 25 admin users are there 
        </Card.Text>
        <Button variant="primary">Go to Admin portal</Button>
      </Card.Body>
    </Card>
    
        </Col>
        <Col>
        <Card className='bg-warning m-5 text-white'>
      <Card.Header>Employee</Card.Header>
      <Card.Body>
        <Card.Title>50</Card.Title>
        <Card.Text>
        .There are 50 Employees are there 
        </Card.Text>
        <Button variant="primary">Go to Employee portal</Button>
      </Card.Body>
    </Card>
    
        </Col>
       
      </Row>
  <Form className="m-5  border shadow p-5 ">
   
      <Row className='m-5 '>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>
      <Row className="m-5">
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>
      </Row>

      <Row className="m-5">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>
<Row className='m-5'>
<Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      
</Row>
<Button variant="primary" type="submit" className='mx-5'>
        Submit
      </Button>
    </Form>
    </Container>
  
      
   

  
  );
}

export default Content;