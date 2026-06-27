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
  return React.createElement("nav", { className: "navbar navbar-expand-lg" },
    React.createElement("div", { className: "container-fluid" },

      React.createElement("a", { className: "navbar-brand" },
        React.createElement("img", {
          src: "./images/Logo.png",
          className: "navbar-logo"
        })
      ),

      React.createElement("button", {
        className: "btn btn-outline-light",
        onClick: () => setDarkMode(!darkMode)
      }, darkMode ? "Light" : "Dark")

    )
  );
}

/* HERO */
function Hero() {
  return React.createElement("section", { id: "hero", className: "container" },
    React.createElement("h1", null, "Web Developer")
  );
}

/* SKILLS */
function Skills() {
  return React.createElement("section", { id: "skills", className: "container" },
    React.createElement("h2", null, "Skills")
  );
}

/* PROJECTS */
function Projects({ projects }) {
  return React.createElement("section", { id: "projects", className: "container" },
    React.createElement("h2", null, "Projects"),

    projects.map((p, i) =>
      React.createElement("div", { key: i },
        React.createElement("h3", null, p.title)
      )
    )
  );
}

/* CONTACT */
function Contact() {
  return React.createElement("section", { className: "container" },
    React.createElement("h2", null, "Contact")
  );
}

/* FOOTER */
function Footer() {
  return React.createElement("footer", { className: "text-center" },
    "© 2026 H.B"
  );
}

/* APP */
function App() {

  const [projects, setProjects] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://portfolio-vite-virid-xi.vercel.app/api/projects")
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) return React.createElement(Loader);

  return React.createElement("div",
    { className: darkMode ? "dark-theme" : "light-theme" },

    React.createElement(Navbar, { darkMode, setDarkMode }),
    React.createElement(Hero),
    React.createElement(Skills),
    React.createElement(Projects, { projects }),
    React.createElement(Contact),
    React.createElement(Footer)
  );
}

ReactDOM.createRoot(document.getElementById("root"))
  .render(React.createElement(App));
