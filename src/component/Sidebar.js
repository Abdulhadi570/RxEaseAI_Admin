import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="bg-dark text-white" style={{ width: 250, height: '100vh', position: 'fixed' }}>
    <div className="p-3">
      <h4 className="text-white mb-4">RxEaseAI Admin</h4>
      <Nav className="flex-column">
        <Nav.Link as={Link} to="/app/dashboard" className="text-white-50">Dashboard</Nav.Link>
        <Nav.Link as={Link} to="/app/users" className="text-white-50">Users</Nav.Link>
        <Nav.Link as={Link} to="/app/prescriptions" className="text-white-50">Prescriptions</Nav.Link>
        <Nav.Link as={Link} to="/app/medicines" className="text-white-50">Medicines</Nav.Link>
        <Nav.Link as={Link} to="/app/reminders" className="text-white-50">Reminders</Nav.Link>
        <Nav.Link as={Link} to="/app/reports" className="text-white-50">Reports</Nav.Link>
        <Nav.Link as={Link} to="/app/settings" className="text-white-50">Settings</Nav.Link>
        <Nav.Link as={Link} to="/app/support" className="text-white-50">Support</Nav.Link>
      </Nav>
    </div>
  </div>
);

export default Sidebar;