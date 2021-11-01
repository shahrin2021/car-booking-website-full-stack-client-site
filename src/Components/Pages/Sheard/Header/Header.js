import React from 'react';
import { Container, Nav, Navbar,Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

const Header = () => {
  const {user, logOut ,isLoading} =useAuth()
  if(isLoading){
    return  (<div  style={{height:'100vh'}}className='d-flex justify-content-center align-items-center'>
    <Spinner animation="border" variant="danger" />
    </div>);
    
}
    return (
        <div>
            <Navbar className="bg-primary" variant="light"  collapseOnSelect expand="xl">
    <Container>
    <Navbar.Brand style={{fontSize:'40px',color:'#fff'}} href="#home">BIN<sub style={{fontSize:'40px',color:'#ff1500'}}>Travels</sub></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto d-flex justify-content-center align-items-center ">
      <Nav.Link style={{color:'#ffff',fontSize:'18px'}}   as={Link} to="/home">Home</Nav.Link>
      <Nav.Link style={{color:'#ffff',fontSize:'18px'}}  as={Link}to="/services">Services</Nav.Link>
      <Nav.Link style={{color:'#ffff',fontSize:'18px'}}  as={Link} to="/addservice">Add service</Nav.Link>
      <Nav.Link style={{color:'#ffff',fontSize:'18px'}}  as={Link} to="/myorder">My Order</Nav.Link>
      <Nav.Link style={{color:'#ffff',fontSize:'18px'}}  as={Link} to="/mannageorder">All Manage Order</Nav.Link>
      <Nav.Link style={{color:'#ffff',fontSize:'18px'}}  as={Link} to="/contact">Contact</Nav.Link>
      {
        user.email &&  <div className='d-flex align-items-center ms-4'>
          <img style={{width:'40px',height:'40px', borderRadius:'50%', }}src={user.photoURL} alt="" />
          <h6 className='mb-0 ms-2'>{user.displayName}</h6>
          </div>
      }
     
    </Nav>
    <div >
    {
      user.email ? <button className='btn btn-warning'  onClick={logOut}>sign out</button>: <Nav.Link style={{color:'#ffff',fontSize:'20px'}} as ={Link} to='/login'>Login</Nav.Link>
      
    }
 
    
    </div>
  
    </Navbar.Collapse>

   
    </Navbar.Collapse>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;