import React from 'react';
import { Row, Col, Form, Button, Card, Table, Badge, InputGroup } from 'react-bootstrap';

const Prescriptions = () => (
  <div>
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h2>Prescription Management</h2>
      <Button variant="primary">Add New Prescription</Button>
    </div>

    {/* Search and Filters */}
    <Card className="mb-4">
      <Card.Body>
        <Row>
          <Col md={3}>
            <InputGroup>
              <Form.Control placeholder="Search prescriptions..." />
              <Button variant="outline-secondary">
                <i className="bi bi-search"></i>
              </Button>
            </InputGroup>
          </Col>
          <Col md={2}>
            <Form.Select>
              <option>All Status</option>
              <option>Active</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </Form.Select>
          </Col>
          <Col md={2}>
            <Form.Select>
              <option>All Doctors</option>
              <option>Dr. Smith</option>
              <option>Dr. Johnson</option>
              <option>Dr. Williams</option>
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

    {/* Prescriptions Table */}
    <Card>
      <Card.Header>
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Prescriptions (5,678 total)</h5>
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
              <th>Prescription ID</th>
              <th>Patient</th>
              <th>Medication</th>
              <th>Dosage</th>
              <th>Prescribed By</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Form.Check type="checkbox" /></td>
              <td>#RX001234</td>
              <td>
                <div>
                  <div className="fw-bold">John Doe</div>
                  <small className="text-muted">john.doe@email.com</small>
                </div>
              </td>
              <td>Lisinopril</td>
              <td>10mg daily</td>
              <td>Dr. Smith</td>
              <td>Mar 10, 2024</td>
              <td><Badge bg="success">Active</Badge></td>
              <td>
                <Button variant="outline-primary" size="sm" className="me-1">View</Button>
                <Button variant="outline-secondary" size="sm" className="me-1">Edit</Button>
                <Button variant="outline-danger" size="sm">Cancel</Button>
              </td>
            </tr>
            <tr>
              <td><Form.Check type="checkbox" /></td>
              <td>#RX001235</td>
              <td>
                <div>
                  <div className="fw-bold">Jane Smith</div>
                  <small className="text-muted">jane.smith@email.com</small>
                </div>
              </td>
              <td>Metformin</td>
              <td>500mg twice daily</td>
              <td>Dr. Johnson</td>
              <td>Mar 9, 2024</td>
              <td><Badge bg="success">Active</Badge></td>
              <td>
                <Button variant="outline-primary" size="sm" className="me-1">View</Button>
                <Button variant="outline-secondary" size="sm" className="me-1">Edit</Button>
                <Button variant="outline-danger" size="sm">Cancel</Button>
              </td>
            </tr>
            <tr>
              <td><Form.Check type="checkbox" /></td>
              <td>#RX001236</td>
              <td>
                <div>
                  <div className="fw-bold">Mike Brown</div>
                  <small className="text-muted">mike.brown@email.com</small>
                </div>
              </td>
              <td>Amoxicillin</td>
              <td>250mg three times daily</td>
              <td>Dr. Williams</td>
              <td>Mar 8, 2024</td>
              <td><Badge bg="secondary">Completed</Badge></td>
              <td>
                <Button variant="outline-primary" size="sm" className="me-1">View</Button>
                <Button variant="outline-secondary" size="sm" className="me-1">Refill</Button>
                <Button variant="outline-info" size="sm">Archive</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  </div>
);

export default Prescriptions;
