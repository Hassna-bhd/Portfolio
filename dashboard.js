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
const projects =
JSON.parse(
  localStorage.getItem("projects")
) || [];

document.getElementById(
  "totalProjects"
).innerText =
projects.length;
function saveProjects(projects) {

  localStorage.setItem(
    "projects",
    JSON.stringify(projects)
  );

}

function addProject(){

  const title =
  document.getElementById("title").value;

  const desc =
  document.getElementById("desc").value;

  const tech =
  document.getElementById("tech").value;

  const image =
  document.getElementById("image").value;

  const github =
  document.getElementById("github").value;

  const demo =
  document.getElementById("demo").value;

  const projects =
  getProjects();

  projects.push({
    title,
    desc,
    tech,
    image,
    github,
    demo
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

  container.innerHTML += `

<div class="card p-3 mb-3">

  <img
    src="${project.image}"
    style="
      width:100%;
      max-height:200px;
      object-fit:cover;
    "
  >

  <h4 class="mt-3">
    ${project.title}
  </h4>

  <p>${project.desc}</p>

  <p>
    <strong>Tech:</strong>
    ${project.tech}
  </p>

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
