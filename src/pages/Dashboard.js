import React from 'react';
import { Row, Col, Card, Badge, ProgressBar, Button } from 'react-bootstrap';

const Dashboard = () => (
  <div>
    <h2 className="mb-4">Dashboard</h2>
    
    {/* Key Metrics */}
    <Row className="mb-4">
      <Col md={3}>
        <Card className="text-center">
          <Card.Body>
            <h3 className="text-primary">1,234</h3>
            <p className="text-muted mb-0">Total Users</p>
            <small className="text-success">+12% this week</small>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="text-center">
          <Card.Body>
            <h3 className="text-success">892</h3>
            <p className="text-muted mb-0">Active Users Today</p>
            <small className="text-success">+8% this week</small>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="text-center">
          <Card.Body>
            <h3 className="text-warning">5,678</h3>
            <p className="text-muted mb-0">Total Prescriptions</p>
            <small className="text-success">+15% this week</small>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="text-center">
          <Card.Body>
            <h3 className="text-info">2,345</h3>
            <p className="text-muted mb-0">Reminders Sent</p>
            <small className="text-success">+20% this week</small>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    {/* Charts Row */}
    <Row className="mb-4">
      <Col md={8}>
        <Card>
          <Card.Header>
            <h5 className="mb-0">User Activity (Last 7 Days)</h5>
          </Card.Header>
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <h6>New Users</h6>
                <ProgressBar now={75} className="mb-2" />
              </div>
              <div>
                <h6>Active Users</h6>
                <ProgressBar now={90} className="mb-2" />
              </div>
              <div>
                <h6>Prescriptions</h6>
                <ProgressBar now={60} className="mb-2" />
              </div>
            </div>
            <div className="text-center">
              <small className="text-muted">Chart placeholder - would show line chart here</small>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Header>
            <h5 className="mb-0">Quick Actions</h5>
          </Card.Header>
          <Card.Body>
            <Button variant="primary" className="w-100 mb-2">Send Notification</Button>
            <Button variant="outline-primary" className="w-100 mb-2">Generate Report</Button>
            <Button variant="outline-secondary" className="w-100 mb-2">View Logs</Button>
            <Button variant="outline-info" className="w-100">Support Tickets</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    {/* Recent Activity */}
    <Row>
      <Col md={6}>
        <Card>
          <Card.Header>
            <h5 className="mb-0">Recent Activity</h5>
          </Card.Header>
          <Card.Body>
            <div className="d-flex align-items-center mb-3">
              <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: 40, height: 40}}>
                <span className="text-white">U</span>
              </div>
              <div className="flex-grow-1">
                <strong>New user registered</strong>
                <br />
                <small className="text-muted">john.doe@email.com - 2 minutes ago</small>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3">
              <div className="bg-success rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: 40, height: 40}}>
                <span className="text-white">P</span>
              </div>
              <div className="flex-grow-1">
                <strong>New prescription added</strong>
                <br />
                <small className="text-muted">Dr. Smith - 15 minutes ago</small>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3">
              <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: 40, height: 40}}>
                <span className="text-white">R</span>
              </div>
              <div className="flex-grow-1">
                <strong>Reminder sent</strong>
                <br />
                <small className="text-muted">Medicine reminder - 1 hour ago</small>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div className="bg-info rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: 40, height: 40}}>
                <span className="text-white">S</span>
              </div>
              <div className="flex-grow-1">
                <strong>Support ticket created</strong>
                <br />
                <small className="text-muted">User #1234 - 2 hours ago</small>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card>
          <Card.Header>
            <h5 className="mb-0">System Status</h5>
          </Card.Header>
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span>Server Status</span>
              <Badge bg="success">Online</Badge>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span>Database</span>
              <Badge bg="success">Connected</Badge>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span>API Services</span>
              <Badge bg="success">Running</Badge>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span>Notifications</span>
              <Badge bg="warning">Pending</Badge>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span>Last Backup</span>
              <small className="text-muted">2 hours ago</small>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
);

export default Dashboard;
