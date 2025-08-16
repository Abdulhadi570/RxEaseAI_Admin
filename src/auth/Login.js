import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/app/dashboard');
  };

  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100">
      <Row className="w-100">
        <Col md={6} lg={4} className="mx-auto">
          <Card>
            <Card.Body className="p-4">
              <div className="text-center mb-4">
                <h3>RxEase AI Admin</h3>
                <p className="text-muted">Sign in to your account</p>
              </div>
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter your password" required />
                </Form.Group>
                <Form.Check type="checkbox" label="Remember me" className="mb-3" />
                <Button type="submit" variant="primary" className="w-100 mb-3">Sign In</Button>
                <div className="text-center mb-3">
                  <Link to="/forgot-password" className="text-decoration-none">Forgot Password?</Link>
                </div>
                <div className="text-center">
                  <span className="text-muted">Don't have an account? </span>
                  <Link to="/signup" className="text-decoration-none">Sign Up</Link>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
