import React from 'react';
import { Row, Col, Form, Button, Card, Table, Badge, InputGroup } from 'react-bootstrap';

const Medicines = () => (
  <div>
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h2>Medicine Database</h2>
      <Button variant="primary">Add New Medicine</Button>
    </div>

    {/* Search and Filters */}
    <Card className="mb-4">
      <Card.Body>
        <Row>
          <Col md={4}>
            <InputGroup>
              <Form.Control placeholder="Search medicines..." />
              <Button variant="outline-secondary">
                <i className="bi bi-search"></i>
              </Button>
            </InputGroup>
          </Col>
          <Col md={2}>
            <Form.Select>
              <option>All Categories</option>
              <option>Antibiotics</option>
              <option>Pain Relief</option>
              <option>Heart Medication</option>
              <option>Diabetes</option>
            </Form.Select>
          </Col>
          <Col md={2}>
            <Form.Select>
              <option>All Status</option>
              <option>Available</option>
              <option>Low Stock</option>
              <option>Out of Stock</option>
            </Form.Select>
          </Col>
          <Col md={2}>
            <Form.Select>
              <option>All Types</option>
              <option>Tablet</option>
              <option>Capsule</option>
              <option>Liquid</option>
              <option>Injection</option>
            </Form.Select>
          </Col>
          <Col md={2}>
            <Button variant="outline-secondary" className="w-100">Filter</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>

    {/* Medicines Table */}
    <Card>
      <Card.Header>
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Medicines (2,345 total)</h5>
          <div>
            <Button variant="outline-secondary" size="sm" className="me-2">Export</Button>
            <Button variant="outline-secondary" size="sm">Import</Button>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Table responsive hover>
          <thead>
            <tr>
              <th><Form.Check type="checkbox" /></th>
              <th>Medicine Name</th>
              <th>Generic Name</th>
              <th>Category</th>
              <th>Type</th>
              <th>Strength</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Form.Check type="checkbox" /></td>
              <td>
                <div>
                  <div className="fw-bold">Lisinopril</div>
                  <small className="text-muted">MED001234</small>
                </div>
              </td>
              <td>Lisinopril</td>
              <td><Badge bg="info">Heart Medication</Badge></td>
              <td>Tablet</td>
              <td>10mg</td>
              <td>
                <div>
                  <span className="fw-bold">1,250</span>
                  <br />
                  <small className="text-success">In Stock</small>
                </div>
              </td>
              <td>$0.85</td>
              <td><Badge bg="success">Available</Badge></td>
              <td>
                <Button variant="outline-primary" size="sm" className="me-1">View</Button>
                <Button variant="outline-secondary" size="sm" className="me-1">Edit</Button>
                <Button variant="outline-warning" size="sm">Reorder</Button>
              </td>
            </tr>
            <tr>
              <td><Form.Check type="checkbox" /></td>
              <td>
                <div>
                  <div className="fw-bold">Metformin</div>
                  <small className="text-muted">MED001235</small>
                </div>
              </td>
              <td>Metformin HCl</td>
              <td><Badge bg="warning">Diabetes</Badge></td>
              <td>Tablet</td>
              <td>500mg</td>
              <td>
                <div>
                  <span className="fw-bold">45</span>
                  <br />
                  <small className="text-warning">Low Stock</small>
                </div>
              </td>
              <td>$0.32</td>
              <td><Badge bg="warning">Low Stock</Badge></td>
              <td>
                <Button variant="outline-primary" size="sm" className="me-1">View</Button>
                <Button variant="outline-secondary" size="sm" className="me-1">Edit</Button>
                <Button variant="warning" size="sm">Urgent Reorder</Button>
              </td>
            </tr>
            <tr>
              <td><Form.Check type="checkbox" /></td>
              <td>
                <div>
                  <div className="fw-bold">Amoxicillin</div>
                  <small className="text-muted">MED001236</small>
                </div>
              </td>
              <td>Amoxicillin</td>
              <td><Badge bg="primary">Antibiotics</Badge></td>
              <td>Capsule</td>
              <td>250mg</td>
              <td>
                <div>
                  <span className="fw-bold">0</span>
                  <br />
                  <small className="text-danger">Out of Stock</small>
                </div>
              </td>
              <td>$1.25</td>
              <td><Badge bg="danger">Out of Stock</Badge></td>
              <td>
                <Button variant="outline-primary" size="sm" className="me-1">View</Button>
                <Button variant="outline-secondary" size="sm" className="me-1">Edit</Button>
                <Button variant="danger" size="sm">Emergency Order</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  </div>
);

export default Medicines;
