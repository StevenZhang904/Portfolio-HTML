import {MaterialIcon} from "./MaterialIcon.js";

export function handleProjectFilter(data, buttons){
    buttons.forEach(cond=>cond.addEventListener('change', function(event){
    const buttonValue = this.value;
    const filter = data.Projects.filter(projects =>{
      if (projects.tag.toLowerCase()==buttonValue.toLowerCase()){
        return projects;        
      }
      else if(buttonValue.toLowerCase() == "all"){
        return projects;
      }
    });
      document.querySelector(".project-list").innerHTML = renderProjectItems(filter);
}  
)); 
}

export  function renderProjects(Projects) {
  return `
    <section id="Projects">
        <h1 class="title">Projects</h1>
        <div class="filter">
	        <label>
	          <input type="radio" name="filter" value="all" checked>
          All
          </label>
	      <label>
	          <input type="radio" name="filter" value="Using Firebase">
          Using Firebase
	      </label>
	      <label>
          <input type = "radio" name = "filter" value= "Not using Firebase">
          Not using Firebase
          </label>
      </div>
      
        <div class="project-list">
            ${renderProjectItems(Projects)}
        </div>
    </section>`;
}
function renderProjectItems(Projects) {
  return Projects.map(
    d => `
	  <div class="row">
      <div class="col-8">
        <div class="project-title">
          <a href="?Projects=${d.ID}">${d.Project_title}</a>
        </div>

      <div class = "col-5" >
          <a
            class="style2"
            href="${d.DemoVideo}"
            target="_blank"
          >
            ${MaterialIcon("Video")}Demo</a
          >
          <a
            class="style3"
            href="${d.SourceCode}"
            >${MaterialIcon("Code")}Source Code</a
          >
        </div>
      </div>
		</div>
	`
  ).join("");
}