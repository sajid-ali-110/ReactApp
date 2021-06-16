import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
function header() {
    return (
        <div>
        <Navbar bg="dark" expand="lg">
  <Navbar.Brand href="#" className="text-light">TechZoid</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="ml-auto my-2 my-lg-0 sajjuu"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav className="nav">
      <Nav.Link href="#action1">Home</Nav.Link>
      <Nav.Link href="#action2">About</Nav.Link>
      <Nav.Link href="#action3">blogs</Nav.Link>
      <Nav.Link href="#action4">contact</Nav.Link>
      <Nav.Link href="#action5">services</Nav.Link>
      </Nav>
      {/* <Nav.Link href="#" disabled>
        Link
      </Nav.Link> */}
    </Nav>
    <Form className="d-flex">
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default header
