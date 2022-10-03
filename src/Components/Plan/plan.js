import React from "react";
import "./plan.styles.scss";
import { Card, Button, Row, Col } from "reactstrap";

const Plans = () => {
    return (
        <div className="plans">
            <div className="choose-a-plan">
                <h1>Choose one plan and watch everything on <span className="net">Netflix</span></h1>
            </div>
            <Row className="card-row">
                <Col sm="12" md='3' className="plan-col">
                    <Card className="card-plan">
                        <div className="image">
                            <img src={require("./planImage.png")} alt="..." className="planImage" />
                            <h1 className="basic">Basic</h1>
                        </div>
                        <div className="basic-text">
                            <p className="hd">HD Available</p>
                            <p className="UntraHd">Ultra HD Available</p>
                            <p className="no-of-watch">Watch multiple screen at the same time</p>
                            <p className="price">$USD 8.99</p>
                            <Button className="pay-now-btn">Pay Now</Button>
                        </div>
                    </Card>
                </Col>
                <Col  sm="12" md='3' className="plan-col">
                    <Card className="card-plan1">
                        <div className="image">
                            <img src={require("./planImage.png")} alt="..." className="planImage" />
                            <p className="standard-rate">Standard</p>
                        </div>
                        <div className="standard">
                            <p className="hd">HD Available</p>
                            <p className="UntraHd">Ultra HD Available</p>
                            <p className="no-of-watch">Watch multiple screen at the same time</p>
                            <p className="price">$USD 9.99</p>
                            <Button className="pay-now-btn">Pay Now</Button>
                        </div>
                    </Card>
                </Col>
                <Col  sm="12" md='3'  className="plan-col">
                    <Card className="card-plan">
                        <div className="image">
                            <img src={require("./planImage.png")} alt="..." className="planImage" />
                            <p className="rate">Premium</p>
                        </div>
                        <div className="basic-text">
                            <p className="hd">HD Available</p>
                            <p className="UntraHd">Ultra HD Available</p>
                            <p  className="no-of-watch">Watch multiple screen at the same time</p>
                            <p className="price">$USD 20</p>
                            <Button className="pay-now-btn">Pay Now</Button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Plans;