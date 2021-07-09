import React from 'react'
import {
    Container,Card,
   CardBody,
    CardTitle, CardSubtitle, Button,
    Row,Col
  } from 'reactstrap';

  import './homecard.css'

const HomeCard = () => {
    return (
        <div>
            <Container fluid>
            <Row>
                <Col>
                <Card className="card-img card-img-a">
                    <CardBody>
                        <div className="inner-div">
                            <CardSubtitle tag="h6" className="h6-tag white">BEST SELLERS</CardSubtitle>
                            <CardTitle tag="h5"  className="h5-tag white">SHOP OUR BEST SELLERS</CardTitle>
                            <Button className="btns-clr bg-light"><span className="font-black">SHOP NOW</span></Button>
                        </div>
                    </CardBody>
                </Card>
                </Col>
                <Col>
                <Card className="card-img card-img-b">
                    <CardBody>
                        <div className="inner-div">
                            <CardSubtitle tag="h6" className="h6-tag white">EXTERIOR DETAILING</CardSubtitle>
                            <CardTitle tag="h5"  className="h5-tag white">SHOP OUR EXTERIOR RANGE</CardTitle>
                            <Button className="btns-clr bg-light"><span className="font-black">SHOP NOW</span></Button>
                        </div>
                    </CardBody>
                </Card>
                </Col>
                <Col>
                <Card className="card-img card-img-c">
                    <CardBody>
                        <div className="inner-div">
                            <CardSubtitle tag="h6" className="h6-tag white">INTERIOR DETAILING</CardSubtitle>
                            <CardTitle tag="h5"  className="h5-tag white">SHOP OUR INTERIOR RANGE</CardTitle>
                            <Button className="btns-clr bg-light"><span className="font-black">SHOP NOW</span></Button>
                        </div>
                    </CardBody>
                </Card>
                </Col>
            </Row>
            <Row className="second">
                <Col>
                <Card className="card-img card-img-d">
                    <CardBody>
                        <div className="inner-div">
                            <CardSubtitle tag="h6" className="h6-tag white">BODY SHOP</CardSubtitle>
                            <CardTitle tag="h5"  className="h5-tag white">SHOP OUR DETAILERS RANGE</CardTitle>
                            <Button className="btns-clr bg-light"><span className="font-black">SHOP NOW</span></Button>
                        </div>
                    </CardBody>
                </Card>
                </Col>
                <Col>
                <Card className="card-img card-img-e">
                    <CardBody>
                        <div className="inner-div">
                            <CardSubtitle tag="h6" className="h6-tag white">ACCESSORIES</CardSubtitle>
                            <CardTitle tag="h5"  className="h5-tag white">SHOP OUR ACCESSORIES</CardTitle>
                            <Button className="btns-clr bg-light"><span className="font-black">SHOP NOW</span></Button>
                        </div>
                    </CardBody>
                </Card>
                </Col>
                <Col>
                <Card className="card-img card-img-f">
                    <CardBody>
                        <div className="inner-div">
                            <CardSubtitle tag="h6" className="h6-tag white">SHOP ALL PRODUCTS</CardSubtitle>
                            <CardTitle tag="h5"  className="h5-tag white">ALL PRODUCTS</CardTitle>
                            <Button className="btns-clr bg-light"><span className="font-black">SHOP NOW</span></Button>
                        </div>
                    </CardBody>
                </Card>
                </Col>
            </Row>
            <Row className="second">
                <Col>
                <Card className="card-img card-img-g">
                    <CardBody>
                        <div className="inner-div-botom">
                            <Button className="btns-clr-bottom bg-light"><span className="font-black">LEARN MORE ></span></Button>
                        </div>
                    </CardBody>
                </Card>
                </Col>
                <Col>
                <Card className="card-img card-img-h">
                    <CardBody>
                        <div className="inner-div-botom">
                            <Button className="btns-clr-bottom bg-light"><span className="font-black">VIEW PRODUCTS ></span></Button>
                        </div>
                    </CardBody>
                </Card>
                </Col>
                <Col>
                <Card className="card-img card-img-i">
                    <CardBody>
                        <div className="inner-div-botom">
                            <Button className="btns-clr-bottom bg-light"><span className="font-black">VIEW OFFERS ></span></Button>
                        </div>
                    </CardBody>
                </Card>
                </Col>
            </Row>
            </Container>

        </div>
    )
}

export default HomeCard
