function Loader({loaded}) {
  return (
<div className="lux-loader">

      {/* PARTICLES */}
      <div className="particles"></div>

      {/* IMAGE LOGO */}
      <div className="logo-wrapper">

        {/* LOADING CIRCLE */}
        <svg className="loading-circle" viewBox="0 0 300 300">

          <circle
            className="circle-bg"
            cx="150"
            cy="150"
            r="120"
          />

          <circle
            className="circle-loader"
            cx="150"
            cy="150"
            r="120"
          />

        </svg>

        {/* IMAGE */}
        <img
          src="./Logo.png"
          alt="HB Logo"
          className="logo-image"
        />

      </div>

    </div>
    
  );

}


function Navbar() {
const [darkMode, setDarkMode] =
React.useState(true);
  return (
  <>
    <nav
      className="
      navbar
      navbar-expand-md
      navbar-dark
      bg-transparent
      px-5
      py-4
      "
    >
{/* LOGO IN NAVBAR */}
      <a
        className="navbar-brand d-flex align-items-center gap-3"
        href="#"
      >

        <img
        src="./Logo.png"
        className="navbar-logo"
        />

      </a>
      
      <div className="ms-auto">

        <ul
          className="
          navbar-nav
          d-flex
          flex-row
          gap-4
          "
        >

          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#skills">
              Skills
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#projects">
              Projects
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
          <li class="nav-item">
  <a
    class="nav-link"
    href="dashboard.html"
  >
    Dashboard
  </a>
</li>
        </ul>
        
      </div>

    </nav>
    <button
  className="
  theme-btn
  btn
  btn-outline-light
  "
>

  Light

</button>
</>
  );

}

/* HERO */

function Hero() {

  return (

    <section 
      className="
      container
      min-vh-100
      d-flex
      align-items-center
      "
    >

      <div className="row align-items-center text-center text-lg-start">

        <div className="col-lg-6">

          <p className="text-info">
            WEB DEVELOPER
          </p>

          <h1 className="display-2 fw-bold hero-title">

            Modern React <br />
            Portfolio

          </h1>

          <p
            className="
            text-secondary
            fs-5
            my-4
            "
          >

            I create responsive and modern
            websites using React and Bootstrap.

          </p>

          <button
            className="
            btn
            btn-info
            btn-lg
            px-4
            w-100 w-md-auto"
          >
           <a href="#" download > Download CV</a>
          </button>
        
        </div>

        <div
          className="
          col-lg-6
          text-center
          mt-5
          mt-lg-0
          "
        >

          <div className="glass-card p-5">

            <h2 className="fw-bold">
              Frontend Developer
            </h2>

            <p className="text-secondary">

              React • Bootstrap • JavaScript

            </p>

          </div>

        </div>

      </div>

    </section>

  );

}

/* ABOUT */

function About() {

  return (

    <section
      id="about"
      className="container py-5"
    >

      <h2 className="section-title">
        About Me
      </h2>

      <div className="about-card">

        <p>

          Passionate frontend developer focused on
          creating interactive and modern digital
          experiences with clean UI and responsive
          design.

        </p>

      </div>

    </section>

  );

}

/* SKILLS */

function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Bootstrap",
    "GitHub"
  ];

  return (

    <section
      id="skills"
      className="container py-5"
    >

      <h2 className="section-title">
        Skills
      </h2>

      <div className="row g-4">

        {skills.map((skill, index) => (

          <div
            className="col-md-4"
            key={index}
          >

            <div className="skill-card">

              <h4>{skill}</h4>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}

/* PROJECTS */

function Projects() {

  const projects = JSON.parse( localStorage.getItem("projects") ) || [];
  return (

    <section
      id="projects"
      className="container py-5"
    >

      <h2 className="section-title">
        Projects
      </h2>

      <div className="row g-4">

        {projects.map((project, index) => (

          <div
            className="col-lg-4"
            key={index}
          >

            <div className="project-card">

              <h3>{project.title}</h3>

              <p className="text-secondary">

                {project.desc}

              </p>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}

/* CONTACT */

function Contact() {

  return (

    <section
      id="contact"
      className="container py-5"
    >

      <h2 className="section-title">
        Contact
      </h2>

      <form className="contact-form">

        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Your Email"
        />

        <textarea
          placeholder="Your Message"
        ></textarea>

        <button
          className="
          btn
          btn-info
          btn-lg
          "
        >

          Send Message

        </button>

      </form>

    </section>

  );

}

/* FOOTER */

function Footer() {

  return (

    <footer className="text-center py-4">

      <p className="text-secondary">

        © 2026 Hassna Portfolio

      </p>

    </footer>

  );

}

/* APP */

function App() {

  const [loading, setLoading] = React.useState(true);

  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {

    // animation finale logo
    setTimeout(() => {

      setLoaded(true);

    }, 1200);

    // disparition loader
    setTimeout(() => {

      setLoading(false);

    }, 2000);

  }, []);

  if (loading) {

    return <Loader loaded={loaded} />;

  }

  return (

    <div>

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Contact />

      <Footer />

    </div>

  );

}
ReactDOM.render(
  <App />,
  document.getElementById("root")
);
