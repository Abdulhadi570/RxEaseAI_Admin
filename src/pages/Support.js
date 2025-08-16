import React from 'react';
import { Row, Col, Form, Button, Card, Table, Badge, InputGroup } from 'react-bootstrap';

const Support = () => (
  <div>
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h2>Support Tickets</h2>
      <Button variant="primary">Create New Ticket</Button>
    </div>

    {/* Search and Filters */}
    <Card className="mb-4">
      <Card.Body>
        <Row>
          <Col md={4}>
            <InputGroup>
              <Form.Control placeholder="Search tickets..." />
              <Button variant="outline-secondary">
                <i className="bi bi-search"></i>
              </Button>
            </InputGroup>
          </Col>
          <Col md={2}>
            <Form.Select>
              <option>All Status</option>
              <option>Open</option>
              <option>In Progress</option>
              <option>Resolved</option>
              <option>Closed</option>
            </Form.Select>
          </Col>
          <Col md={2}>
            <Form.Select>
              <option>All Priority</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
              <option>Critical</option>
            </Form.Select>
          </Col>
          <Col md={2}>
            <Form.Select>
              <option>All Categories</option>
              <option>Technical</option>
              <option>Account</option>
              <option>Prescription</option>
              <option>General</option>
            </Form.Select>
          </Col>
          <Col md={2}>
            <Button variant="outline-secondary" className="w-100">Filter</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>

    {/* Support Tickets Table */}
    <Card>
      <Card.Header>
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Support Tickets (156 total)</h5>
          <div>
            <Button variant="outline-secondary" size="sm" className="me-2">Export</Button>
            <Button variant="outline-secondary" size="sm">Bulk Actions</Button>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Table responsive hover>
          <thead>
            <tr>
              <th><Form.Check type="checkbox" /></th>
              <th>Ticket ID</th>
              <th>Subject</th>
              <th>User</th>
              <th>Category</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Form.Check type="checkbox" /></td>
              <td>#SUP001234</td>
              <td>Cannot access prescription history</td>
              <td>
                <div>
                  <div className="fw-bold">John Doe</div>
                  <small className="text-muted">john.doe@email.com</small>
                </div>
              </td>
              <td><Badge bg="info">Technical</Badge></td>
              <td><Badge bg="danger">High</Badge></td>
              <td><Badge bg="warning">In Progress</Badge></td>
              <td>Mar 10, 2024</td>
              <td>
                <Button variant="outline-primary" size="sm" className="me-1">View</Button>
                <Button variant="outline-success" size="sm" className="me-1">Resolve</Button>
                <Button variant="outline-secondary" size="sm">Assign</Button>
              </td>
            </tr>
            <tr>
              <td><Form.Check type="checkbox" /></td>
              <td>#SUP001235</td>
              <td>Reminder notifications not working</td>
              <td>
                <div>
                  <div className="fw-bold">Jane Smith</div>
                  <small className="text-muted">jane.smith@email.com</small>
                </div>
              </td>
              <td><Badge bg="warning">Account</Badge></td>
              <td><Badge bg="warning">Medium</Badge></td>
              <td><Badge bg="primary">Open</Badge></td>
              <td>Mar 9, 2024</td>
              <td>
                <Button variant="outline-primary" size="sm" className="me-1">View</Button>
                <Button variant="outline-info" size="sm" className="me-1">Assign</Button>
                <Button variant="outline-secondary" size="sm">Close</Button>
              </td>
            </tr>
            <tr>
              <td><Form.Check type="checkbox" /></td>
              <td>#SUP001236</td>
              <td>Question about medication dosage</td>
              <td>
                <div>
                  <div className="fw-bold">Mike Brown</div>
                  <small className="text-muted">mike.brown@email.com</small>
                </div>
              </td>
              <td><Badge bg="success">Prescription</Badge></td>
              <td><Badge bg="success">Low</Badge></td>
              <td><Badge bg="success">Resolved</Badge></td>
              <td>Mar 8, 2024</td>
              <td>
                <Button variant="outline-primary" size="sm" className="me-1">View</Button>
                <Button variant="outline-secondary" size="sm" className="me-1">Reopen</Button>
                <Button variant="outline-info" size="sm">Archive</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  </div>
);

export default Support;
