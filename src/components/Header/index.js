import React, { useState } from 'react';
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    Nav,
    NavbarBrand
} from 'reactstrap';
import {NavLink} from 'react-router-dom'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const closeNav = () => setIsOpen(false)

  return (
        <Navbar color="primary" light expand="md" >
            
                <NavbarBrand href='/staffs'>Home</NavbarBrand>
                <NavbarToggler onClick={() => toggle() } />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem onClick={closeNav}>
                            <NavLink className={isActive =>
        "nav-link" + (!isActive ? " unselected" : "")
    } to={'/staffs'}>
                                <span className="fa fa-users fa-lg"></span>{' '}
                                Staffs
                            </NavLink>
                        </NavItem>
                        <NavItem onClick={closeNav}>
                            <NavLink to={'/departments'} className={isActive =>
        "nav-link" + (!isActive ? " unselected" : "")
    } >
                                <span className="fa fa-address-card fa-lg"></span>{' '}
                                Departments
                            </NavLink>
                        </NavItem>
                        <NavItem onClick={closeNav}>
                            <NavLink className={isActive =>
        "nav-link" + (!isActive ? " unselected" : "")
    } to={'/salary'}>
                                <span className="fa fa-money fa-lg"></span>{' '}
                                Salary
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            
        </Navbar>
   
  );
}

export default Header;