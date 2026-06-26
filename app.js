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
          src="./images/Logo.png"
          alt="HB Logo"
          className="logo-image"
        />

      </div>

    </div>
    
  );

}

function Navbar({ darkMode, setDarkMode }) {
  return (
  <>
<nav className="navbar navbar-expand-lg">

  <div className="container-fluid">

    <a className="navbar-brand" href="#">
      <img
        src="./images/Logo.png"
        className="navbar-logo"
      />
    </a>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarMenu"
>
<span className="navbar-toggler-icon"></span>
    </button>

    <div
      className="collapse navbar-collapse"
      id="navbarMenu"
    >
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link" href="#hero">
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

        

      </ul>
    </div>

  </div>

</nav>

<button
  className="
  theme-btn
  btn
  btn-outline-light
  " 
  onClick={() =>
    setDarkMode(!darkMode)
  }
>
  {darkMode ? "Light" : "Dark"}
</button>
</>
  );

}

/* HERO */
function Hero() {
  return (
    <section id="hero" className="hero-section container">

      <div className="row align-items-center">

        {/* LEFT SIDE */}

        <div className="col-lg-6 order-2 order-lg-1">

          <span className="hero-badge">
            Hi, I'm Hassna 👋
          </span>

          <h1 className="hero-title">
            Web
            <span className="text-info">
    {" "}Developer
  </span>
          </h1>

          <p className="hero-subtitle">
            I build modern, responsive and
            user-friendly web applications
            using React, JavaScript
            and modern web technologies.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="btn btn-info btn-lg"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="btn btn-outline-light btn-lg"
            >
              Contact Me
            </a>

          </div>

          <div className="hero-stats mt-5">

            <div className="stat-item">
              <h3>5+</h3>
              <span>Projects</span>
            </div>

            <div className="stat-item">
              <h3>100%</h3>
              <span>Responsive</span>
            </div>

            <div className="stat-item">
              <h3>React</h3>
              <span>Developer</span>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="col-lg-6 text-center order-1 order-lg-2">

          <div className="hero-logo-wrapper">

            <div className="logo-ring"></div>

            <img
              src="./images/Logo.png"
              alt="HB Logo"
              className="hero-logo"
            />

          </div>

        </div>

      </div>

    </section>
  
  );
}


/* SKILLS */

function Skills() {

  const skills = [
  { icon: "fa-brands fa-html5", name: "HTML5" },
  { icon: "fa-brands fa-css3-alt", name: "CSS3" },
  { icon: "fa-brands fa-js", name: "JavaScript" },
  { icon: "fa-brands fa-react", name: "React" },
  { icon: "fa-brands fa-bootstrap", name: "Bootstrap" },
  { icon: "fa-brands fa-github", name: "GitHub" },
  { icon: "fa-brands fa-wordpress", name: "WordPress"}
];
  return (

    <section
      id="skills"
      className="container py-5"
    >

      <h2 className="section-title">
        Skills
      </h2>

      <div className="skills-grid">

        {skills.map((skill,index)=>(

          <div
            key={index}
            className="skill-card"
          >
            <div className="skill-icon">
  <i className={skill.icon}></i>
</div>

            <h5>
              {skill.name}
            </h5>
          </div>

        ))}

      </div>

    </section>

  );
}

/* PROJECTS */

function Projects({projects}) {

  
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

  <img
    src={project.image}
    alt={project.title}
    className="project-image"
  />

  <h3>
    {project.title}
  </h3>

  <p>
    {project.desc}
  </p>

  <p className="text-info">
    {project.tech}
  </p>

  <div className="d-flex gap-2">

    <a
      href={project.github}
      target="_blank"
      className="btn btn-info"
    >
      GitHub
    </a>

    <a
      href={project.demo}
      target="_blank"
      className="btn btn-outline-light"
    >
      Live Demo
    </a>

  </div>

</div>
          </div>

        ))}

      </div>

    </section>

  );

}

/* CONTACT */

function Contact() {
const [status, setStatus] = React.useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const response = await fetch(
    "https://formspree.io/f/xlgvyenv",
    {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    }
  );

  if(response.ok){
    setStatus("✅ Message sent successfully!");
    e.target.reset();
  }else{
    setStatus("❌ Error sending message.");
  }
};
  return (

    <section
      id="contact"
      className="container py-5"
    >

      <h2 className="section-title">
        Contact
      </h2>

      <form className="contact-form" onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <textarea
          placeholder="Your Message"
          name="message"
          required
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
{status && (
          <p className="form-message">
            {status}
          </p>
        )}
            
      </form>

    </section>

  );

}

/* FOOTER */

function Footer() {

  return (

    <footer className="text-center py-4">

      <p className="text-secondary">

        © 2026 H.B

      </p>

    </footer>

  );

}

/* APP */

function App() {

  const [loading, setLoading] = React.useState(true);

  const [loaded, setLoaded] = React.useState(false);
  const [darkMode, setDarkMode] =
React.useState(true);
  const [projects,setProjects] =
  React.useState([]);
  React.useEffect(() => {

  fetch(
    "/api/projects"
  )
    .then(res => res.json())
    .then(data => {

      setProjects(data);

    });

}, []);
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


     <div className={darkMode ? "dark-theme" : "light-theme"}>
    <Navbar
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />

      <Hero />

      <Skills />

      <Projects projects={projects} />

      <Contact />

      <Footer />
      <button
  className="back-to-top"
  onClick={() =>
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
>
  ↑
</button>

    </div>

  );

}
/*ReactDOM.render(
  <App />,
  document.getElementById("root")
);*/
ReactDOM.createRoot(document.getElementById("root")).render(
  React.createElement(App)
);
