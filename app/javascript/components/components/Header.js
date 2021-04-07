import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  console.log(props.logged_in);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">Home Sweet Home</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            </Nav>
          <Nav>
          <NavItem>
            <NavLink href="/findapartments">Find Apartments</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/addapartment">Add Apartment</NavLink>
          </NavItem>
        </Nav>
        <Nav>

          { !props.logged_in &&
              <NavItem>
                <NavLink href={ props.sign_in_route }>Sign In</NavLink>
              </NavItem>
            }
            { props.logged_in &&
              <NavItem>
                <NavLink href={ props.sign_out_route }>Sign out</NavLink>
               </NavItem>
              }
            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
