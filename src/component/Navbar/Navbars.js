
import React, {useState} from 'react'
import './navbar.css'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    // NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    // NavbarText
  } from 'reactstrap';

const Navbars = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    

    return (
        <div>
            <div className="header-logo">
                <img src="assets/images/logo.png" />
            </div>
            
            <Navbar color="" light expand="md" >
                {/* <NavbarBrand href="/">Logo</NavbarBrand> */}
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="m-auto" navbar>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            SHOP NOW
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                            Interior Detailing
                            </DropdownItem>
                            <DropdownItem>
                            Exterior Detailing
                            </DropdownItem>
                            {/* <DropdownItem divider /> */}
                            <DropdownItem>
                            Kit and Combo's
                            </DropdownItem>
                        </DropdownMenu>
                        </UncontrolledDropdown>

                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            BEST SELLERS
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                            Best Sellers
                            </DropdownItem>
                            <DropdownItem>
                            Kit and Combo's
                            </DropdownItem>
                            {/* <DropdownItem divider /> */}
                            <DropdownItem>
                            Shop By Category
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                    <NavItem>
                    <NavLink href="/components/">TRAINING VIDEOS</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="">HOW TO GUIDE</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="">HAPPY CUSTOMERS</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="">ABOUT US</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
            <hr className="navbar-line"></hr>
        </div>
    )
}

export default Navbars
