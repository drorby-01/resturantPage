import React from "react"
import Form from "react-bootstrap/Form"
function ConfigurationForm(){
    return <>
    <Form>
    <Form.Group controlId="formBasicEmail">
    <Form.Label>name</Form.Label>
    <Form.Control type="text" placeholder="Enter email" />
    <Form.Label>description</Form.Label>
    <Form.Control as="textarea" />
    <Form.Label>image</Form.Label>
    <Form.Control type="text" />
    <Form.Label>rank</Form.Label>
    <Form.Control type="number" />
  </Form.Group>
  </Form>
    </>
}

export default ConfigurationForm