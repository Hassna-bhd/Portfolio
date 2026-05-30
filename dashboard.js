if(
  localStorage.getItem("isAdmin")
  !== "true"
){
  window.location.href =
    "login.html";
}
function getProjects() {

  return JSON.parse(
    localStorage.getItem("projects")
  ) || [];

}

function saveProjects(projects) {

  localStorage.setItem(
    "projects",
    JSON.stringify(projects)
  );

}

function addProject() {

  const title =
    document.getElementById("title").value;

  const desc =
    document.getElementById("desc").value;

  const projects =
    getProjects();

  projects.push({
    title,
    desc
  });

  saveProjects(projects);

  renderProjects();

}

function deleteProject(index) {

  const projects =
    getProjects();

  projects.splice(index, 1);

  saveProjects(projects);

  renderProjects();

}

function renderProjects() {

  const container =
    document.getElementById("project-list");

  const projects =
    getProjects();

  container.innerHTML = "";

  projects.forEach((project, index) => {

    container.innerHTML += `
      <div class="card mb-3 p-3">

        <h4>${project.title}</h4>

        <p>${project.desc}</p>

        <button
          class="btn btn-danger"
          onclick="deleteProject(${index})"
        >
          Delete
        </button>

      </div>
    `;

  });

}
function logout(){

  localStorage.removeItem(
    "isAdmin"
  );

  window.location.href =
    "login.html";
}
renderProjects();
