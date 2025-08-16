import React from 'react';
import { Row, Col, Form, Button, Card, Table, Badge, InputGroup } from 'react-bootstrap';

const Reminders = () => (
  <div>
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h2>Reminder Management</h2>
      <Button variant="primary">Create New Reminder</Button>
    </div>

    {/* Search and Filters */}
    <Card className="mb-4">
      <Card.Body>
        <Row>
          <Col md={3}>
            <InputGroup>
              <Form.Control placeholder="Search reminders..." />
              <Button variant="outline-secondary">
                <i className="bi bi-search"></i>
              </Button>
            </InputGroup>
          </Col>
          <Col md={2}>
            <Form.Select>
              <option>All Types</option>
              <option>Medication</option>
              <option>Appointment</option>
              <option>Refill</option>
              <option>Lab Test</option>
            </Form.Select>
          </Col>
          <Col md={2}>
            <Form.Select>
              <option>All Status</option>
              <option>Active</option>
              <option>Sent</option>
              <option>Pending</option>
              <option>Failed</option>
            </Form.Select>
          </Col>
          <Col md={2}>
            <Form.Control type="date" />
          </Col>
          <Col md={2}>
            <Form.Control type="date" />
          </Col>
          <Col md={1}>
            <Button variant="outline-secondary" className="w-100">Filter</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>

    {/* Reminders Table */}
    <Card>
      <Card.Header>
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Reminders (2,345 total)</h5>
          <div>
            <Button variant="outline-secondary" size="sm" className="me-2">Send Bulk</Button>
            <Button variant="outline-secondary" size="sm">Export</Button>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Table responsive hover>
          <thead>
            <tr>
              <th><Form.Check type="checkbox" /></th>
              <th>Patient</th>
              <th>Type</th>
              <th>Message</th>
              <th>Scheduled</th>
              <th>Status</th>
              <th>Method</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Form.Check type="checkbox" /></td>
              <td>
                <div>
                  <div className="fw-bold">John Doe</div>
                  <small className="text-muted">john.doe@email.com</small>
                </div>
              </td>
              <td><Badge bg="primary">Medication</Badge></td>
              <td>Time to take your Lisinopril (10mg)</td>
              <td>Today, 8:00 AM</td>
              <td><Badge bg="success">Sent</Badge></td>
              <td>
                <Badge bg="info" className="me-1">SMS</Badge>
                <Badge bg="secondary">Email</Badge>
              </td>
              <td>
                <Button variant="outline-primary" size="sm" className="me-1">View</Button>
                <Button variant="outline-secondary" size="sm" className="me-1">Edit</Button>
                <Button variant="outline-warning" size="sm">Resend</Button>
              </td>
            </tr>
            <tr>
              <td><Form.Check type="checkbox" /></td>
              <td>
                <div>
                  <div className="fw-bold">Jane Smith</div>
                  <small className="text-muted">jane.smith@email.com</small>
                </div>
              </td>
              <td><Badge bg="warning">Appointment</Badge></td>
              <td>Reminder: Doctor appointment tomorrow at 2:00 PM</td>
              <td>Tomorrow, 10:00 AM</td>
              <td><Badge bg="secondary">Pending</Badge></td>
              <td>
                <Badge bg="info" className="me-1">SMS</Badge>
                <Badge bg="secondary">Push</Badge>
              </td>
              <td>
                <Button variant="outline-primary" size="sm" className="me-1">View</Button>
                <Button variant="outline-secondary" size="sm" className="me-1">Edit</Button>
                <Button variant="outline-success" size="sm">Send Now</Button>
              </td>
            </tr>
            <tr>
              <td><Form.Check type="checkbox" /></td>
              <td>
                <div>
                  <div className="fw-bold">Mike Brown</div>
                  <small className="text-muted">mike.brown@email.com</small>
                </div>
              </td>
              <td><Badge bg="success">Refill</Badge></td>
              <td>Your prescription is ready for refill</td>
              <td>Yesterday, 3:00 PM</td>
              <td><Badge bg="danger">Failed</Badge></td>
              <td>
                <Badge bg="secondary">Email</Badge>
              </td>
              <td>
                <Button variant="outline-primary" size="sm" className="me-1">View</Button>
                <Button variant="outline-secondary" size="sm" className="me-1">Edit</Button>
                <Button variant="outline-danger" size="sm">Retry</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  </div>
);

export default Reminders;
