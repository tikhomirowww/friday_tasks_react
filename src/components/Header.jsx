import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <>
    <Navbar bg="warning">
      <Container>
        <Link to='/'>Home page</Link >
        <Link to='/addPost'>Add post</Link>
      </Container>
    </Navbar>
    </>
  )
}

export default Header;