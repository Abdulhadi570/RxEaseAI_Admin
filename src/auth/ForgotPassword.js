import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ForgotPassword = () => (
  <Container className="d-flex align-items-center justify-content-center min-vh-100">
    <Row className="w-100">
      <Col md={6} lg={4} className="mx-auto">
        <Card>
          <Card.Body className="p-4">
            <div className="text-center mb-4">
              <h3>Reset Password</h3>
              <p className="text-muted">Enter your email to reset your password</p>
            </div>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Button variant="primary" className="w-100 mb-3">Send Reset Link</Button>
              <div className="text-center">
                <Link to="/login" className="text-decoration-none">Back to Login</Link>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default ForgotPassword;
