
import React, {useState} from 'react'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

const Navbars = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Logo</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                    <NavLink href="/components/">SHOP NOW</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">BEST SELLERS</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Latest Products
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                        Interior Detailing
                        </DropdownItem>
                        <DropdownItem>
                        Exterior Detailing
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                        Kit and Combo's
                        </DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                <NavbarText>TRAINING VIDEOS</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Navbars
