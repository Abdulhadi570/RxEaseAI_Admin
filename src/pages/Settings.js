import React from 'react';
import { Row, Col, Form, Button, Card, Tab, Tabs } from 'react-bootstrap';

const Settings = () => (
  <div>
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h2>Settings</h2>
      <Button variant="primary">Save Changes</Button>
    </div>

    <Tabs defaultActiveKey="general" className="mb-3">
      <Tab eventKey="general" title="General">
        <Card>
          <Card.Body>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>System Name</Form.Label>
                  <Form.Control type="text" defaultValue="RxEase AI Admin" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Admin Email</Form.Label>
                  <Form.Control type="email" defaultValue="admin@rxease.com" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Time Zone</Form.Label>
                  <Form.Select defaultValue="UTC-5">
                    <option value="UTC-5">Eastern Time (UTC-5)</option>
                    <option value="UTC-6">Central Time (UTC-6)</option>
                    <option value="UTC-7">Mountain Time (UTC-7)</option>
                    <option value="UTC-8">Pacific Time (UTC-8)</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Language</Form.Label>
                  <Form.Select defaultValue="en">
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Date Format</Form.Label>
                  <Form.Select defaultValue="MM/DD/YYYY">
                    <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                    <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                    <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Tab>

      <Tab eventKey="notifications" title="Notifications">
        <Card>
          <Card.Body>
            <h5>Email Notifications</h5>
            <Form.Check type="switch" id="email-new-users" label="New user registrations" className="mb-2" defaultChecked />
            <Form.Check type="switch" id="email-prescriptions" label="New prescriptions" className="mb-2" defaultChecked />
            <Form.Check type="switch" id="email-system" label="System alerts" className="mb-4" defaultChecked />
            
            <h5>SMS Notifications</h5>
            <Form.Check type="switch" id="sms-critical" label="Critical system alerts" className="mb-2" defaultChecked />
            <Form.Check type="switch" id="sms-reminders" label="Failed reminder notifications" className="mb-2" />
          </Card.Body>
        </Card>
      </Tab>

      <Tab eventKey="security" title="Security">
        <Card>
          <Card.Body>
            <h5>Password Policy</h5>
            <Form.Check type="checkbox" id="password-length" label="Minimum 8 characters" className="mb-2" defaultChecked />
            <Form.Check type="checkbox" id="password-special" label="Require special characters" className="mb-2" defaultChecked />
            <Form.Check type="checkbox" id="password-numbers" label="Require numbers" className="mb-4" defaultChecked />
            
            <h5>Session Management</h5>
            <Form.Group className="mb-3">
              <Form.Label>Session Timeout (minutes)</Form.Label>
              <Form.Control type="number" defaultValue="30" />
            </Form.Group>
          </Card.Body>
        </Card>
      </Tab>
    </Tabs>
  </div>
);

export default Settings;
