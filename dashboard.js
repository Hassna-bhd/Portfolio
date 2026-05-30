let editIndex = null;
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

  const project = {
    title,
    desc,
    tech,
    image,
    github,
    demo
  };

  if(editIndex !== null){

    projects[editIndex] =
    project;

    editIndex = null;

  }else{

    projects.push(project);

  }

  saveProjects(projects);

  clearForm();

  renderProjects();

}
function editProject(index){

  const projects =
  getProjects();

  const project =
  projects[index];

  document.getElementById("title").value =
  project.title;

  document.getElementById("desc").value =
  project.desc;

  document.getElementById("tech").value =
  project.tech;

  document.getElementById("image").value =
  project.image;

  document.getElementById("github").value =
  project.github;

  document.getElementById("demo").value =
  project.demo;

  editIndex = index;
}
function deleteProject(index) {

  const projects =
    getProjects();

  projects.splice(index, 1);

  saveProjects(projects);

  renderProjects();

}
function clearForm(){

  document.getElementById("title").value = "";

  document.getElementById("desc").value = "";

  document.getElementById("tech").value = "";

  document.getElementById("image").value = "";

  document.getElementById("github").value = "";

  document.getElementById("demo").value = "";

}
function renderProjects() {

  const container =
    document.getElementById("project-list");

  const projects =
    getProjects();

  container.innerHTML = "";

  projects.forEach((project, index) => {

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

  <div class="d-flex gap-2">

    <button
      class="btn btn-warning"
      onclick="editProject(${index})"
    >
      Edit
    </button>

    <button
      class="btn btn-danger"
      onclick="deleteProject(${index})"
    >
      Delete
    </button>

  </div>

</div>

`;

  });

}function logout(){

  localStorage.removeItem(
    "isAdmin"
  );

  window.location.href =
    "login.html";
}
renderProjects();
