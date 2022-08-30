import { Component } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export class Navigation extends Component{
    render(){
        return(            
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="/afood">AddFood</Nav.Link>
                    <Nav.Link href="/lfood">ListFood</Nav.Link>
                    </Nav>
                </Container>                
            </Navbar>            
        )
    }
}