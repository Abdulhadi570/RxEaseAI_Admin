import React from 'react';
import { Row, Col, Form, Button, Card, Table, Badge, InputGroup } from 'react-bootstrap';

const Users = () => (
  <div>
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h2>User Management</h2>
      <Button variant="primary">Add New User</Button>
    </div>

    {/* Search and Filters */}
    <Card className="mb-4">
      <Card.Body>
        <Row>
          <Col md={4}>
            <InputGroup>
              <Form.Control placeholder="Search users..." />
              <Button variant="outline-secondary">
                <i className="bi bi-search"></i>
              </Button>
            </InputGroup>
          </Col>
          <Col md={3}>
            <Form.Select>
              <option>All Status</option>
              <option>Active</option>
              <option>Suspended</option>
              <option>Pending</option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Form.Select>
              <option>All Roles</option>
              <option>Patient</option>
              <option>Doctor</option>
              <option>Admin</option>
            </Form.Select>
          </Col>
          <Col md={2}>
            <Button variant="outline-secondary" className="w-100">Filter</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>

    {/* Users Table */}
    <Card>
      <Card.Header>
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Users (1,234 total)</h5>
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
              <th>User</th>
              <th>Email</th>
              <th>Status</th>
              <th>Role</th>
              <th>Joined</th>
              <th>Prescriptions</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Form.Check type="checkbox" /></td>
              <td>
                <div className="d-flex align-items-center">
                  <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-2" style={{width: 32, height: 32}}>
                    <span className="text-white">JD</span>
                  </div>
                  <div>
                    <div className="fw-bold">John Doe</div>
                    <small className="text-muted">+1 (555) 123-4567</small>
                  </div>
                </div>
              </td>
              <td>john.doe@email.com</td>
              <td><Badge bg="success">Active</Badge></td>
              <td><Badge bg="secondary">Patient</Badge></td>
              <td>Jan 15, 2024</td>
              <td>12</td>
              <td>
                <Button variant="outline-primary" size="sm" className="me-1">View</Button>
                <Button variant="outline-secondary" size="sm" className="me-1">Edit</Button>
                <Button variant="outline-danger" size="sm">Suspend</Button>
              </td>
            </tr>
            <tr>
              <td><Form.Check type="checkbox" /></td>
              <td>
                <div className="d-flex align-items-center">
                  <div className="bg-success rounded-circle d-flex align-items-center justify-content-center me-2" style={{width: 32, height: 32}}>
                    <span className="text-white">JS</span>
                  </div>
                  <div>
                    <div className="fw-bold">Dr. Jane Smith</div>
                    <small className="text-muted">+1 (555) 987-6543</small>
                  </div>
                </div>
              </td>
              <td>jane.smith@hospital.com</td>
              <td><Badge bg="success">Active</Badge></td>
              <td><Badge bg="primary">Doctor</Badge></td>
              <td>Dec 8, 2023</td>
              <td>156</td>
              <td>
                <Button variant="outline-primary" size="sm" className="me-1">View</Button>
                <Button variant="outline-secondary" size="sm" className="me-1">Edit</Button>
                <Button variant="outline-danger" size="sm">Suspend</Button>
              </td>
            </tr>
            <tr>
              <td><Form.Check type="checkbox" /></td>
              <td>
                <div className="d-flex align-items-center">
                  <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center me-2" style={{width: 32, height: 32}}>
                    <span className="text-white">MB</span>
                  </div>
                  <div>
                    <div className="fw-bold">Mike Brown</div>
                    <small className="text-muted">+1 (555) 456-7890</small>
                  </div>
                </div>
              </td>
              <td>mike.brown@email.com</td>
              <td><Badge bg="warning">Pending</Badge></td>
              <td><Badge bg="secondary">Patient</Badge></td>
              <td>Feb 20, 2024</td>
              <td>0</td>
              <td>
                <Button variant="outline-primary" size="sm" className="me-1">View</Button>
                <Button variant="outline-success" size="sm" className="me-1">Approve</Button>
                <Button variant="outline-danger" size="sm">Reject</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  </div>
);

export default Users;
