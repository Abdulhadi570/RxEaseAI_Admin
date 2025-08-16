import React from 'react';
import { Row, Col, Button, Card, Badge, Tab, Tabs, Table } from 'react-bootstrap';

const UserDetails = () => (
  <div>
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h2>User Details</h2>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#users">Users</a></li>
            <li className="breadcrumb-item active">John Doe</li>
          </ol>
        </nav>
      </div>
      <div>
        <Button variant="outline-secondary" className="me-2">Edit User</Button>
        <Button variant="outline-danger">Suspend User</Button>
      </div>
    </div>

    <Row>
      <Col md={4}>
        <Card className="mb-4">
          <Card.Body className="text-center">
            <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: 80, height: 80}}>
              <span className="text-white h3 mb-0">JD</span>
            </div>
            <h4>John Doe</h4>
            <p className="text-muted">Patient</p>
            <Badge bg="success" className="mb-3">Active</Badge>
            <div className="d-grid gap-2">
              <Button variant="primary">Send Message</Button>
              <Button variant="outline-secondary">View Activity</Button>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            <h6 className="mb-0">Contact Information</h6>
          </Card.Header>
          <Card.Body>
            <div className="mb-3">
              <strong>Email:</strong>
              <br />
              <span>john.doe@email.com</span>
            </div>
            <div className="mb-3">
              <strong>Phone:</strong>
              <br />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="mb-3">
              <strong>Address:</strong>
              <br />
              <span>123 Main St, City, State 12345</span>
            </div>
            <div>
              <strong>Emergency Contact:</strong>
              <br />
              <span>Jane Doe - +1 (555) 987-6543</span>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col md={8}>
        <Tabs defaultActiveKey="overview" className="mb-3">
          <Tab eventKey="overview" title="Overview">
            <Row>
              <Col md={6}>
                <Card className="mb-3">
                  <Card.Body>
                    <h6>Account Information</h6>
                    <div className="mb-2">
                      <strong>User ID:</strong> #12345
                    </div>
                    <div className="mb-2">
                      <strong>Joined:</strong> January 15, 2024
                    </div>
                    <div className="mb-2">
                      <strong>Last Login:</strong> 2 hours ago
                    </div>
                    <div className="mb-2">
                      <strong>Status:</strong> <Badge bg="success">Active</Badge>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="mb-3">
                  <Card.Body>
                    <h6>Health Summary</h6>
                    <div className="mb-2">
                      <strong>Total Prescriptions:</strong> 12
                    </div>
                    <div className="mb-2">
                      <strong>Active Medications:</strong> 3
                    </div>
                    <div className="mb-2">
                      <strong>Reminders Set:</strong> 8
                    </div>
                    <div className="mb-2">
                      <strong>Last Prescription:</strong> March 10, 2024
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Tab>

          <Tab eventKey="prescriptions" title="Prescriptions">
            <Card>
              <Card.Header>
                <h6 className="mb-0">Prescription History</h6>
              </Card.Header>
              <Card.Body>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Medication</th>
                      <th>Dosage</th>
                      <th>Prescribed By</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mar 10, 2024</td>
                      <td>Lisinopril</td>
                      <td>10mg daily</td>
                      <td>Dr. Smith</td>
                      <td><Badge bg="success">Active</Badge></td>
                    </tr>
                    <tr>
                      <td>Feb 15, 2024</td>
                      <td>Metformin</td>
                      <td>500mg twice daily</td>
                      <td>Dr. Johnson</td>
                      <td><Badge bg="success">Active</Badge></td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Tab>

          <Tab eventKey="activity" title="Activity Log">
            <Card>
              <Card.Header>
                <h6 className="mb-0">Recent Activity</h6>
              </Card.Header>
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-success rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: 32, height: 32}}>
                    <span className="text-white">✓</span>
                  </div>
                  <div>
                    <strong>Medication taken</strong>
                    <br />
                    <small className="text-muted">Lisinopril - 2 hours ago</small>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: 32, height: 32}}>
                    <span className="text-white">📱</span>
                  </div>
                  <div>
                    <strong>Logged in to app</strong>
                    <br />
                    <small className="text-muted">3 hours ago</small>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Tab>
        </Tabs>
      </Col>
    </Row>
  </div>
);

export default UserDetails;
