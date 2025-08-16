import React from 'react';
import { Row, Col, Button, Card, Badge } from 'react-bootstrap';

const PrescriptionDetails = () => (
  <div>
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h2>Prescription Details</h2>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#prescriptions">Prescriptions</a></li>
            <li className="breadcrumb-item active">#RX001234</li>
          </ol>
        </nav>
      </div>
      <div>
        <Button variant="outline-secondary" className="me-2">Edit Prescription</Button>
        <Button variant="outline-danger">Cancel Prescription</Button>
      </div>
    </div>

    <Row>
      <Col md={8}>
        <Card className="mb-4">
          <Card.Header>
            <h5 className="mb-0">Prescription Information</h5>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={6}>
                <div className="mb-3">
                  <strong>Prescription ID:</strong>
                  <br />
                  <span>#RX001234</span>
                </div>
                <div className="mb-3">
                  <strong>Medication:</strong>
                  <br />
                  <span>Lisinopril</span>
                </div>
                <div className="mb-3">
                  <strong>Dosage:</strong>
                  <br />
                  <span>10mg daily</span>
                </div>
                <div className="mb-3">
                  <strong>Quantity:</strong>
                  <br />
                  <span>30 tablets</span>
                </div>
              </Col>
              <Col md={6}>
                <div className="mb-3">
                  <strong>Prescribed Date:</strong>
                  <br />
                  <span>March 10, 2024</span>
                </div>
                <div className="mb-3">
                  <strong>Start Date:</strong>
                  <br />
                  <span>March 11, 2024</span>
                </div>
                <div className="mb-3">
                  <strong>End Date:</strong>
                  <br />
                  <span>April 10, 2024</span>
                </div>
                <div className="mb-3">
                  <strong>Status:</strong>
                  <br />
                  <Badge bg="success">Active</Badge>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>

      <Col md={4}>
        <Card className="mb-4">
          <Card.Header>
            <h6 className="mb-0">Patient Information</h6>
          </Card.Header>
          <Card.Body>
            <div className="text-center mb-3">
              <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2" style={{width: 60, height: 60}}>
                <span className="text-white h5 mb-0">JD</span>
              </div>
              <h6>John Doe</h6>
              <small className="text-muted">john.doe@email.com</small>
            </div>
            <div className="mb-2">
              <strong>Age:</strong> 45
            </div>
            <div className="mb-2">
              <strong>Weight:</strong> 180 lbs
            </div>
            <div className="mb-2">
              <strong>Allergies:</strong> None known
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
);

export default PrescriptionDetails;
