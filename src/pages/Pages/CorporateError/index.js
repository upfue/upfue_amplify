// React Basic and Bootstrap
import React, { Component } from "react";
import { Link, } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

// import images
import img404 from "../../../assets/images/404.svg";
import NavBar from "../../CorporateBusiness/NavBar";
import Footer1 from "../PageFooterLayouts/Footer1";

class ErrorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment> 
        <NavBar/>     
        <div className="back-to-home rounded d-none d-sm-block">
          <Link to="/" className="btn btn-icon btn-soft-primary">
            <i>
              <FeatherIcon icon="arrow-left" className="icons" />
            </i>
          </Link>
        </div>

        <section className="bg-home d-flex align-items-center">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} md={12} className="text-center">
                <img src={img404} className="img-fluid" alt="" />
                <div className="text-uppercase mt-4 display-3">Oh ! no</div>
                <div className="text-capitalize text-dark mb-4 error-page">
                  Page Not Found
                </div>
                <p className="text-muted para-desc mx-auto">
                  Start working with{" "}
                  <span className="text-primary fw-bold">
                    UPFUE
                  </span>{" "}
                  that can provide everything you need to generate awareness,
                  drive traffic, connect.
                </p>
              </Col>
            </Row>

            <Row>
              <Col md="12" className="text-center">
                <Link
                  to="#"
                  className="btn btn-outline-primary mt-4"
                >
                  Go Back
                </Link>{" "}
                <Link to="/" className="btn btn-primary mt-4 ms-2">
                  Go To Home
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer1/>
      </React.Fragment>
    );
  }
}
export default ErrorPage;