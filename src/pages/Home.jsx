import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProposeForm from '../components/ProposeForm';
import Image from '../static/images/hero.svg';

const Home = ({ className = '' }) => (
  <header className={`hero ${className}`}>
    <Container>
      <Row className="hero_content justify-content-between py-5">
        <Col md={7} lg={6} className="hero_text-wrapper">
          <div className="hero_text">
            <h1 className="hero_text-title mb-2">
              Ready to <span className="text-danger">Declare Your Love</span>?
            </h1>
            <p className="hero_text-description">
              Don't fret; I'm here to assist you. Enter your valentine's name and create a heartfelt proposal link.
            </p>

            <ProposeForm className="hero_text-form mt-4 mt-md-5" />
            <p className="hero_credit">
               Developed by{' '}
              <a
                href="https://arnab-portfolio-v2.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
              >
                Arnab Manna
              </a>
            </p>
          </div>
        </Col>
        <Col md={5} className="hero_media-wrapper">
          <div className="hero_media">
            <img
              src={Image}
              alt="Ready to Declare Your Love?"
              className="hero_media-img img-fluid"
            />
          </div>
        </Col>
      </Row>
    </Container>
  </header>
);

export default Home;
