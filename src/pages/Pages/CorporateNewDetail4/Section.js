import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

//import images
import news from '../../../assets/images/news.jpg';

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          className="bg-half-260 d-table w-100"
          style={{
            background: `url(${news})`,
            backgroundSize: `contain`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: `center`,
          }}
        >
          <div className="bg-overlay"></div>
          <Container>
            <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                <ul className="breadcrumb bg-white rounded shadow mb-0 px-4 py-2">
                  <li className="breadcrumb-item">
                    <Link to="/">Upfue</Link>
                  </li>{' '}
                  <li className="breadcrumb-item active" aria-current="page">
                    News
                  </li>
                </ul>
              </nav>
            </div>
          </Container>
        </section>
        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Section;
