const { useState, useEffect } = React;

/* LOADER */
function Loader() {
  return React.createElement("div", { className: "lux-loader" },
    React.createElement("div", { className: "particles" }),
    React.createElement("div", { className: "logo-wrapper" },
      React.createElement("img", {
        src: "./images/Logo.png",
        className: "logo-image"
      })
    )
  );
}

/* NAVBAR */
function Navbar({ darkMode, setDarkMode }) {
  return React.createElement(
    React.Fragment,
    null,

    React.createElement(
      "nav",
      { className: "navbar navbar-expand-lg" },

      React.createElement(
        "div",
        { className: "container-fluid" },

        React.createElement(
          "a",
          { className: "navbar-brand", href: "#" },
          React.createElement("img", {
            src: "./images/Logo.png",
            className: "navbar-logo"
          })
        ),

        React.createElement(
          "button",
          {
            className: "navbar-toggler",
            type: "button",
            "data-bs-toggle": "collapse",
            "data-bs-target": "#navbarMenu",
            "aria-controls": "navbarMenu",
            "aria-expanded": "false",
            "aria-label": "Toggle navigation"
          },
          React.createElement("span", {
            className: "navbar-toggler-icon"
          })
        ),

        React.createElement(
          "div",
          {
            className: "collapse navbar-collapse",
            id: "navbarMenu"
          },

          React.createElement(
            "ul",
            { className: "navbar-nav ms-auto" },

            React.createElement(
              "li",
              { className: "nav-item" },
              React.createElement(
                "a",
                {
                  className: "nav-link",
                  href: "#hero"
                },
                "About"
              )
            ),

            React.createElement(
              "li",
              { className: "nav-item" },
              React.createElement(
                "a",
                {
                  className: "nav-link",
                  href: "#skills"
                },
                "Skills"
              )
            ),

            React.createElement(
              "li",
              { className: "nav-item" },
              React.createElement(
                "a",
                {
                  className: "nav-link",
                  href: "#projects"
                },
                "Projects"
              )
            ),

            React.createElement(
              "li",
              { className: "nav-item" },
              React.createElement(
                "a",
                {
                  className: "nav-link",
                  href: "#contact"
                },
                "Contact"
              )
            )
          )
        )
      )
    ),

    React.createElement(
      "button",
      {
        className: "theme-btn btn btn-outline-light",
        onClick: () => setDarkMode(!darkMode)
      },
      darkMode ? "Light" : "Dark"
    )
  );
}
/* HERO */
function Hero() {
  return React.createElement(
    "section",
    { id: "hero", className: "hero-section container" },

    React.createElement(
      "div",
      { className: "row align-items-center" },

      // LEFT TEXT
      React.createElement(
        "div",
        { className: "col-lg-6" },

        React.createElement("span", { className: "hero-badge" }, "Hi, I'm Hassna 👋"),

        React.createElement(
          "h1",
          { className: "hero-title" },
          "Web ",
          React.createElement("span", { className: "text-info" }, "Developer")
        ),

        React.createElement(
          "p",
          { className: "hero-subtitle" },
          "I build modern, responsive and user-friendly web applications using React, JavaScript and modern web technologies."
        ),

        React.createElement(
          "div",
          { className: "hero-buttons" },

          React.createElement("a", {
            href: "#projects",
            className: "btn btn-info btn-lg"
          }, "View Projects"),

          React.createElement("a", {
            href: "#contact",
            className: "btn btn-outline-light btn-lg"
          }, "Contact Me")
        )
      ),

      // RIGHT IMAGE
      React.createElement(
        "div",
        { className: "col-lg-6 text-center" },

        React.createElement("img", {
          src: "./images/Logo.png",
          className: "hero-logo",
          style: { maxWidth: "280px" }
        })
      )
    )
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
    { icon: "fa-brands fa-github", name: "GitHub" }
  ];

  return React.createElement(
    "section",
    { id: "skills", className: "container py-5" },

    React.createElement("h2", { className: "section-title" }, "Skills"),

    React.createElement(
      "div",
      { className: "skills-grid" },

      skills.map((s, i) =>
        React.createElement(
          "div",
          { key: i, className: "skill-card" },

          React.createElement("i", { className: s.icon + " skill-icon" }),
          React.createElement("h5", null, s.name)
        )
      )
    )
  );
}
/* PROJECTS */
function Projects({ projects }) {
  return React.createElement(
    "section",
    { id: "projects", className: "container py-5" },

    React.createElement("h2", null, "Projects"),

    React.createElement(
      "div",
      { className: "row g-4" },

      projects.map((p, i) =>
        React.createElement(
          "div",
          { className: "col-lg-4", key: i },

          React.createElement(
            "div",
            { className: "project-card" },

            React.createElement("img", {
              src: p.image,
              className: "project-image"
            }),

            React.createElement("h3", null, p.title),
            React.createElement("p", null, p.desc),
            React.createElement("p", { className: "text-info" }, p.tech),

            React.createElement(
  "div",
  { className: "d-flex gap-2" },

  React.createElement(
    "a",
    {
      href: p.demo,
      className: "btn btn-outline-light",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    "Live Demo"
  ),

  React.createElement(
    "a",
    {
      href: p.github,
      className: "btn btn-info",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    "GitHub"
  )
)
          )
        )
      )
    )
  );
}
/* CONTACT */
function Contact() {

  const [status, setStatus] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/xlgvyenv", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" }
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      e.target.reset();
    } else {
      setStatus("Error sending message");
    }
  };

  return React.createElement(
    "section",
    { id: "contact", className: "container py-5" },

    React.createElement("h2", { className: "section-title" }, "Contact"),

    React.createElement(
      "form",
      { className: "contact-form", onSubmit: handleSubmit },

      React.createElement("input", {
        type: "text",
        name: "name",
        placeholder: "Your Name",
        required: true
      }),

      React.createElement("input", {
        type: "email",
        name: "email",
        placeholder: "Your Email",
        required: true
      }),

      React.createElement("textarea", {
        name: "message",
        placeholder: "Your Message",
        required: true
      }),

      React.createElement("button", {
        className: "btn btn-info btn-lg",
        type: "submit"
      }, "Send"),

      status && React.createElement("p", { className: "form-message" }, status)
    )
  );
}
/* FOOTER */
function Footer() {
  return React.createElement(
    "footer",
    { className: "text-center py-4" },
    "© 2026 H.B - Portfolio"
  );
}
/* APP */
function App() {

  const [loading, setLoading] = React.useState(true);
  const [loaded, setLoaded] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(true);
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    fetch("https://portfolio-vite-virid-xi.vercel.app/api/projects")
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  React.useEffect(() => {
    setTimeout(() => setLoaded(true), 1200);
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return React.createElement(Loader, { loaded });
  }

  return React.createElement(
    "div",
    { className: darkMode ? "dark-theme" : "light-theme" },

    React.createElement(Navbar, { darkMode, setDarkMode }),
    React.createElement(Hero),
    React.createElement(Skills),
    React.createElement(Projects, { projects }),
    React.createElement(Contact),
    React.createElement(Footer),

    React.createElement(
      "button",
      {
        className: "back-to-top",
        onClick: () =>
          window.scrollTo({ top: 0, behavior: "smooth" })
      },
      "↑"
    )
  );
}
ReactDOM.createRoot(document.getElementById("root"))
  .render(React.createElement(App));
