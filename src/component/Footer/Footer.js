import React from 'react'
import './footer.css'
import {
    Container,
    Col,
    Row
  } from 'reactstrap';

const Footer = () => {
    return (
        <div>
            <hr className="footer-line"></hr>
            <Container >
                <div className="footer-content"> 
                    <div className="text-center">
                        <h6>DEAL ALERT</h6>
                        <p className="deal-alert">
                            Suscribe and win a free detailing hamper every month!
                        </p>
                        <div className="footer-email">
                            <input type="email" name="email" placeholder="Enter your email address" />
                        </div>
                        <div className="text-left">
                            <button type="submit" className="footer-btn">SUBSCRIBE</button>
                        </div>
                    </div>
                    <div className="text-center">
                        <h6>WE ARE SOCIAL</h6>
                        <div className="footer-icons">
                            <div><i class="fa fa-facebook fa-2x"></i></div>
                            <div><i class="fa fa-instagram fa-2x"></i></div>
                            <div><i class="fa fa-youtube fa-2x"></i></div>
                        </div>
                    </div>
                    <div className="text-center">
                        <h6>QUICK LINKS</h6>
                        <div className="text-justify">
                            <p>Home</p>
                            <p>Search</p>
                            <p>About Us</p>
                            <p>Contact</p>
                            <p>All Products</p>
                            <p>Privacy Policy</p>
                            <p>Refund policy</p>
                            <p>Terms of Service</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer
