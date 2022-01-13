import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

export default function Forms() {
  return (
    <div className="form-container">
      <Form className="signup-form">
        <Form.Group className="form-group">
          <Form.Control
            className="username-form-control form-control"
            type="text"
            placeholder="username"
            name="username"
          ></Form.Control>
          <Form.Control
            className="email-form-control form-control"
            type="text"
            placeholder="email"
            name="email"
          ></Form.Control>
          <Button className="form-button" value="submit" type="submit">
            SUBMIT
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
