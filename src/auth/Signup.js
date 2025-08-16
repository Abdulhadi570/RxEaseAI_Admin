import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate('/app/dashboard');
  };

  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100">
      <Row className="w-100">
        <Col md={6} lg={5} className="mx-auto">
          <Card>
            <Card.Body className="p-4">
              <div className="text-center mb-4">
                <h3>RxEase AI Admin</h3>
                <p className="text-muted">Create your admin account</p>
              </div>
              <Form onSubmit={handleSignup}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter first name" required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter last name" required />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="tel" placeholder="Enter phone number" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Role</Form.Label>
                  <Form.Select required>
                    <option value="">Select your role</option>
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                    <option value="staff">Staff</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Create password" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="Confirm password" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Check 
                    type="checkbox" 
                    label="I agree to the Terms of Service and Privacy Policy" 
                    required 
                  />
                </Form.Group>
                <Button type="submit" variant="primary" className="w-100 mb-3">
                  Create Account
                </Button>
                <div className="text-center">
                  <span className="text-muted">Already have an account? </span>
                  <Link to="/login" className="text-decoration-none">Sign In</Link>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
