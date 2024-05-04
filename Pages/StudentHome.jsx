import React from 'react'
import UserHeader from '../components/UserHeader';

function StudentHome() {
  return (
    <div>

        {/* main-slider */}
        <section className="w3l-main-slider" id="home">
            <div className="companies20-content">
                <div className="owl-one owl-carousel owl-theme">
                    <div className="item">
                        <li>
                            <div className="slider-info banner-view bg bg2">
                                <div className="banner-info">
                                    <div className="container">
                                        <div className="banner-info-bg">
                                            <h5>Ask question related to specific subjects</h5>
                                            <p className="mt-4 pr-lg-4">
                                                Take the first step to your journey to success
                                            </p>
                                            <a className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2" href="/Question"> 
                                            Ask a question!
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>
                    <div className="item">
                        <li>
                            <div className="slider-info  banner-view banner-top1 bg bg2">
                                <div className="banner-info">
                                    <div className="container">
                                        <div className="banner-info-bg">
                                            <h5>Learn and Improve Yourself in Less Time </h5>
                                            <p className="mt-4 pr-lg-4">
                                                Clarify and improve along with assignment space
                                            </p>
                                            <a className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2" href="/Question"> 
                                            Ready to get started?
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>
                    <div className="item">
                        <li>
                            <div className="slider-info banner-view banner-top2 bg bg2">
                                <div className="banner-info">
                                    <div className="container">
                                        <div className="banner-info-bg">
                                            <h5>Be More Productive, learn more in less time</h5>
                                            <p className="mt-4 pr-lg-4">
                                                Don't waste your time, ask your confunsion
                                            </p>
                                            <a className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2" href="/Question"> 
                                                Ask a question!
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>
                    <div className="item">
                        <li>
                            <div className="slider-info banner-view banner-top3 bg bg2">
                                <div className="banner-info">
                                    <div className="container">
                                        <div className="banner-info-bg">
                                            <h5>Enhance your skills with best online courses</h5>
                                            <p className="mt-4 pr-lg-4">
                                                Take the first step to your journey to success with us
                                            </p>
                                            <a className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2" href="/Question"> 
                                                Ready to get started?
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>
                </div>
            </div>

            <div className="waveWrapper waveAnimation">
                <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                    <path d="M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                        style={{stroke: "none"}}></path>
                </svg>
            </div>
        </section>
        {/* /main-slider */}
        <section className="w3l-courses">
            <div className="blog pb-5" id="courses">
                <div className="container py-lg-5 py-md-4 py-2">
                    <h5 className="title-small text-center mb-1">Ask question related to</h5>
                    <h3 className="title-big text-center mb-sm-5 mb-4">Featured <span>Courses</span></h3>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 item">
                            <div className="card">
                                <div className="card-header p-0 position-relative">
                                    <a href="#course-single" className="zoom d-block">
                                        <img className="card-img-bottom d-block" src="assets/images/c1.jpg"
                                            alt="Card cap" />
                                    </a>
                                </div>
                                <div className="card-body course-details">
                                    <a href="#course-single" className="course-desc">Human Computer Interaction</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 item mt-md-0 mt-5">
                            <div className="card">
                                <div className="card-header p-0 position-relative">
                                    <a href="#course-single" className="zoom d-block">
                                        <img className="card-img-bottom d-block" src="assets/images/c2.jpg"
                                            alt="Card cap" />
                                    </a>
                                </div>
                                <div className="card-body course-details">
                                    <a href="#course-single" className="course-desc">Distributive and Cloud System</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 item mt-lg-0 mt-5">
                            <div className="card">
                                <div className="card-header p-0 position-relative">
                                    <a href="#course-single" className="zoom d-block">
                                        <img className="card-img-bottom d-block" src="assets/images/c3.jpg"
                                            alt="Card cap" />
                                    </a>
                                </div>
                                <div className="card-body course-details">
                                    <a href="#course-single" className="course-desc">Collaborative Development</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="w3l-features py-5" id="facilities">
            <div className="call-w3 py-lg-5 py-md-4 py-2">
                <div className="container">
                    <div className="row main-cont-wthree-2">
                        <div className="col-lg-5 feature-grid-left">
                            <h5 className="title-small mb-1">Study and raise query</h5>
                            <h3 className="title-big mb-4">How website works </h3>
                        </div>
                        <div className="col-lg-7 feature-grid-right mt-lg-0 mt-5">
                            <div className="call-grids-w3 d-grid">
                                <div className="grids-1 box-wrap">
                                    <a href="#more" className="icon"><span className="fa fa-certificate"></span></a>
                                    <h4><a href="#feature" className="title-head">Upload your document</a></h4>
                                    <p>Upload a .pdf document.</p>
                                </div>
                                <div className="grids-1 box-wrap">
                                    <a href="#more" className="icon"><span className="fa fa-book"></span></a>
                                    <h4><a href="#feature" className="title-head">Select Subject.</a></h4>
                                    <p>Select the subject of the related pdf file or your query subject.</p>
                                </div>
                                <div className="grids-1 box-wrap">
                                    <a href="#more" className="icon"><span className="fa fa-trophy"></span></a>
                                    <h4><a href="#feature" className="title-head">Raise the question</a></h4>
                                    <p>Ask any question and clarify until you understand.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default StudentHome;