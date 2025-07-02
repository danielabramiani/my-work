import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "./css/styles.css";

const Portfolio = () => {
  return (
    <>
      {/* Navbar */}
      <nav id="navbar-top" className="navbar-nav">
        <div>
          <a href="#" className="link">Portfolio</a>
          <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" className="nav-menu">
            <i className="bi bi-menu-button-fill"></i>
          </button>
          <div id="navbarNav">
            <ul>
              <li><a href="#" className="link">Home</a></li>
              <li><a href="#service" className="link">Service</a></li>
              <li><a href="#about" className="link">About</a></li>
              <li><a href="#portfolio" className="link">Portfolio</a></li>
              <li><a href="#testimonial" className="link">Testimonials</a></li>
            </ul>
          </div>
          <button className="c-btn">Contact</button>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="home">
        <div>
          <div data-aos="slide-right">
            <h2>
              Hello! I Am <br />
              <span className="c-orange">Daniel Abramiani</span>
            </h2>
            <p>
              future full stack developer And <br /> this is my portfolio have fun :&gt;
            </p>
            <button className="c-btn h-btn">Hire Me</button>
            <a href="#" className="link">See My Work</a>
          </div>
          <div>
            <img src="images/daniel.png" alt="Daniel" />
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="service" className="expertise">
        <div className="heading">
          <small>My Expertise</small>
          <h3>Provide Wide Range of <br /> Digital Services</h3>
        </div>
        <div>
          {[1, 2, 3].map((index) => {
            const titles = ["Web Design", "Web Development", "Ai"];
            return (
              <div data-aos="fade-up" key={index} className="service-card">
                <div>
                  <div>
                    <img src={`images/service-icon${index}.png`} alt="" />
                  </div>
                  <div>
                    <h4>{titles[index - 1]}</h4>
                    <p>
                      Dolor repellendus temporibus autem quibusdam officiis debitis rerum neces aibus minima veniam.
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Skills Section */}
      <section id="about" className="skill">
        <div>
          <div data-aos="slide-right">
            <div>
              {["HTML & CSS", "JavaScript", "Python", "C"].map((skill, index) => (
                <div key={skill} className="progress-card">
                  <div className="circular-progress">
                    <div className={`progress-value ${skill.toLowerCase().replace(/\s|&/g, '')}-progress`}>0%</div>
                  </div>
                  <br />
                  <span className="text">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          <div data-aos="slide-left" className="heading">
            <div>
              <small>My Skills</small>
              <h3>Beautiful & Unique Digital Experiences</h3>
              <p>I started programming in 2023 26th September in Goal-Oriented-Academy-Goa</p>
              <p>Right now I'm learning jsx-react, want to be full stack dev</p>
              <button className="c-btn">
                <a style={{ textDecoration: "none", color: "#fff" }}>Download CV</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="post">
        <div className="heading">
          <small>Creative Work</small>
          <h3>Check My Portfolio</h3>
        </div>
        <div id="myBtnContainer">
          {["All", "Game", "Web App", "Website", "Brand"].map((type) => (
            <button data-filter={type.toLowerCase().replace(" ", "")}>{type}</button>
          ))}
        </div>
        <div>
          {[...Array(2)].map((_, rowIndex) => (
            <div key={rowIndex} className="card">
              {[
                {
                  title: "puzzle Game",
                  img: "game.png",
                  tags: ["HTML&CSS", "JavaScript", "Game"],
                  className: "game"
                },
                {
                  title: rowIndex === 0 ? "Spotify Copy" : "Sneakers Shop",
                  img: rowIndex === 0 ? "music.png" : "shoe.png",
                  tags: ["HTML&CSS", "JavaScript", rowIndex === 0 ? "Website" : "Shopping App"],
                  className: "website"
                },
                {
                  title: rowIndex === 0 ? "Chat Bot" : "Porsche Site",
                  img: rowIndex === 0 ? "Bot.png" : "porsche.png",
                  tags: ["HTML&CSS", "JavaScript", rowIndex === 0 ? "AI App" : "Web App"],
                  className: rowIndex === 0 ? "webapp" : "all"
                },
              ].map((item) => (
                <div key={item.title} className="card">
                  <div>
                    <img src={`images/${item.img}`} alt={item.title} />
                    <div className="content">
                      <h4>{item.title}</h4>
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                      <br />
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
