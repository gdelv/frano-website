import { useState } from "react";
import "./App.scss";
// import "./App.css";
import logo from "./images/logo.jpg";

function App() {
  const [activeStr, setActiveStr] = useState("");
  const handleClick = () => {
    console.log("clicked");
    if (activeStr === "") {
      setActiveStr("is-active");
    } else setActiveStr("");
  };
  const linksInfo = [
    {
      title: "Phone Repair",
      description:
        "Phonefixit is committed to your happiness, which is why our expert repair technicians are fully trained in Apple iPhone Repair, Samsung Galaxy Repair and all other models. With our Repair Services, you’ll be thrilled you came to us for your repair. Bring us whatever you need us to fix, and experience the Phonefixit difference. Get your iPhone screen replaces by us in under 20 minutes.",
      img: "https://images.pexels.com/photos/4921398/pexels-photo-4921398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Tablet Repair",
      description:
        "Our technicians aren't limited to just phones, Technicians are also trained to repair all current and past Apple iPad & Samsung tablets models. Our team members are more than happy to answer any of your questions before, during, and after the repair process. Not satisfied? We’ll be sure to do everything in our power to get the job done right. Get in touch with us today to find out more about this service.",
      img: "https://images.pexels.com/photos/3785868/pexels-photo-3785868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Computer Repair",
      description:
        "Since 2014, we’ve provided customers with convenient and comprehensive services for all their repair needs. phonefixit.com is committed to helping make your life easier. Computer Repairs are also available to all of our clients. Combined with phone and tablet services we'll be your one stop shop for all repair services. Contact us today for more information.",
      img: "https://images.pexels.com/photos/3589903/pexels-photo-3589903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  return (
    <div className="App">
      <section class="hero is-white is-medium">
        {/* <!-- Hero head: will stick at the top --> */}
        <div class="hero-head">
          <nav class="navbar">
            <div class="container">
              <div class="navbar-brand">
                <a class="navbar-item">
                  <img src={logo} alt="Logo" />
                </a>
                <span
                  class={`navbar-burger ${activeStr}`}
                  data-target="navbarMenuHeroA"
                  onClick={handleClick}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroA" class={`navbar-menu ${activeStr}`}>
                <div class="navbar-end">
                  {/* <a class="navbar-item is-active">Home</a> */}
                  <a class="navbar-item">
                  <button class="button is-link has-text-black">Contact Us</button>

                  </a>
                  {/* <a class="navbar-item">Documentation</a> */}
                  {/* <span class="navbar-item">
              <a class="button is-primary is-inverted">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Download</span>
              </a>
            </span> */}
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* <!-- Hero content: will be in the middle --> */}
        <div class="hero-body top-hero">
          <div class="container has-text-centered">
            <p class="title has-text-white is-capitalized is-size-1	">
              <span style={{ color: "orange" }}>Repair</span> when you need it
            </p>
            <p class="subtitle has-text-white is-size-3">
              Trusthworthy <span style={{ color: "orange" }}>service</span> for
              all your devices
            </p>
          </div>
        </div>

        {/* <!-- Hero footer: will stick at the bottom --> */}
        {/* <div class="hero-foot">
    <nav class="tabs">
      <div class="container">
        <ul>
          <li class="is-active"><a>Overview</a></li>
          <li><a>Modifiers</a></li>
          <li><a>Grid</a></li>
          <li><a>Elements</a></li>
          <li><a>Components</a></li>
          <li><a>Layout</a></li>
        </ul>
      </div>
    </nav>
  </div> */}
      </section>
      {/* Wave Start */}
      <div class="wave-animation">
        <div class="wave"></div>
      </div>
      {/* Wave End */}
      <section class="section is-small">
        <div className="tile is-ancestor">
          {linksInfo.map((link) => {
            return (
              <div className="tile repair-card p-4">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-3by4">
                      <img src={link.img} alt="services card" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-4 has-text-centered">
                          {link.title}
                        </p>
                      </div>
                    </div>
                    <div className="content">{link.description}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <div class="wave-animation" id="reverse">
        <div class="wave"></div>
      </div>
      <section className="hero is-info is-medium">
            <div className="hero-body">
                <div className="container">
                    <p className="title is-spaced is-uppercase has-text-white is-1">We do it right!</p>
                    <p className="subtitle has-text-white is-4">When you decide to work with us, you get so much more than your average <span style={{color: "orange"}}>repair</span> shop.</p> 
                    <p className="subtitle has-text-white is-4">Everything we do at Phonefixit is geared towards providing our customers with a unique and one of a kind <span style={{color: "orange"}}>repair</span> experience.</p>
                    <p class="subtitle has-text-white is-4">From Live Phone Support to In Depth Market Knowledge, we provide extra features for our customers to provide the best <span style={{color: "orange"}}>service</span>.</p>
                    <button class="button is-link has-text-black">Contact Us</button>
                </div>
            </div>
        </section>
        <footer class="footer is-flex">
            <div class="columns">

                <div class="column is-one-quarter">
                    <img
                        src={logo}
                        width="112"
                        height="28"
                        alt="logo"
                    />
                    <h6 class="subtitle is-6 is-size-7-mobile">© {new Date().getFullYear()} Phonefixit.com, Inc. All Rights Reserved</h6>
                </div>
                <div class="column is-half">
                    <h4 class="title is-4 is-size-5-mobile">Address</h4>

                    <h6 class="subtitle is-6 is-size-6-mobile is-spaced">94 South Broadway Hicksville NY, 11801 USA</h6>

                    <h6 class="subtitle is-6 is-size-6-mobile is-spaced ">208 Glen St. Glen Cove, NY, 11542 USA</h6>
                </div>
                <div class="column is-one-third">
                    <h4 class="title is-4 is-size-5-mobile ">Contact</h4>
                    <h6 class="subtitle is-6 is-size-6-mobile is-spaced">Hicksville, NY (516)-513-0800</h6>
                    <h6 class="subtitle is-6 is-size-6-mobile is-spaced">Glen Cove, NY (516)-801-6320</h6>
                </div>
            </div>
        </footer>
    </div>
  );
}

export default App;
