import React from "react";
import Header from "../components/Header";
import BreadCrumps from '../components/BreadCrumps'
function About() {
  return (
    <div>
      <Header/>
      <BreadCrumps  page="About us"  title="About Company"  />
      <section id="about" className="home-services pt-lg-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="box-wrap">
                <div className="box-wrap-grid">
                  <div className="icon">
                    <span className="fa fa-graduation-cap"></span>
                  </div>
                  <div className="info">
                    <p>Our</p>
                    <h4>
                      <a href="#url">Mission</a>
                    </h4>
                  </div>
                </div>
                <p className="mt-4">
                "Our mission is to provide accessible, high-quality education to learners worldwide,empowering them to achieve their academic and career goals."
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-md-0 mt-4">
              <div className="box-wrap">
                <div className="box-wrap-grid">
                  <div className="icon">
                    <span className="fa fa-book"></span>
                  </div>
                  <div className="info">
                    <p>Our</p>
                    <h4>
                      <a href="#url">Vision</a>
                    </h4>
                  </div>
                </div>
                <p className="mt-4">
                "Our vision is to become a global leader in online education, renowned for innovation, excellence, and inclusivity, shaping the future of learning."
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-lg-0 mt-4">
              <div className="box-wrap">
                <div className="box-wrap-grid">
                  <div className="icon">
                    <span className="fa fa-trophy"></span>
                  </div>
                  <div className="info">
                    <p>Our</p>
                    <h4>
                      <a href="#url">Goal</a>
                    </h4>
                  </div>
                </div>
                <p className="mt-4">
                  "Enhance the learning experience through innovative technologies and teaching methods."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w3l-aboutblock1 py-5" id="about">
        <div className="container py-lg-5 py-md-4 py-2">
          <div className="row">
            <div className="col-lg-6 align-self">
              <span className="title-small mb-2">About Us</span>
              <h3 className="title-big mx-0">
                Welcome to the Assignment Space- your question buddy.
              </h3>
              <p className="mt-lg-4 mt-3">
              Explore our website to learn more about our programs, faculty, 
              and commitment to student success. We invite you to join our 
              global community of learners and discover the endless possibilities 
              that await you. Claarify your queires to your heart content.
              </p>
            </div>
            <div className="col-lg-6 left-wthree-img mt-lg-0 mt-sm-5 mt-4">
              <img
                src="assets/images/about.jpg"
                alt=""
                className="img-fluid radius-image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;