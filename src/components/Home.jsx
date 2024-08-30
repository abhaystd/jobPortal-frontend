import React from "react";
import C1 from "./img/coursel/c1.png"
import C2 from "./img/coursel/c2.png"
import C3 from "./img/coursel/c3.png"
function Home() {
    return (
        <div>
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="bd-placeholder-img" src={C1} alt="c1"></img>
                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1>Welcome to you on job Seeker's</h1>
                                <p>Sign up on reputed job portals job Seeker's to find job openings that match your qualifications and interests.
                                    .</p>
                                <p><a className="btn btn-lg btn-primary" href="/signup">Sign up today</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="bd-placeholder-img" src={C2} alt="c2"></img>
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Find the most exciting jobs.</h1>
                                <p>To know more click on learn more.</p>
                                <p><a className="btn btn-lg btn-primary" href="#" >Learn more</a></p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="bd-placeholder-img" src={C3} alt="c3"></img>
                        <div className="container">
                            <div className="carousel-caption text-end">
                                <h1>Sign up on reputed job portals.</h1>
                                <p>Some representative placeholder content for the third slide of this carousel.</p>
                                <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container marketing">
                <div className="row">
                    <div className="col-lg-4">
                        <img className="bd-placeholder-img rounded-circle" width="140" height="140" src="https://images.pexels.com/photos/4164088/pexels-photo-4164088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="card1"></img>
                        <h2>Heading</h2>
                        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                        <p><a className="btn btn-secondary" href="#" >View details &raquo;</a></p>
                        
                    </div>
                    <div className="col-lg-4">
                        <img className="bd-placeholder-img rounded-circle" width="140" height="140" src="https://images.pexels.com/photos/7014403/pexels-photo-7014403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="card2"></img>

                        <h2>Heading</h2>
                        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                        <p><a className="btn btn-secondary" href="#" >View details &raquo;</a></p>
                
                    </div>
                    <div className="col-lg-4">
                        <img className="bd-placeholder-img rounded-circle" width="140" height="140" src="https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg" alt="card3"></img>

                        <h2>Heading</h2>
                        <p>And lastly this, the third column of representative placeholder content.</p>
                        <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;