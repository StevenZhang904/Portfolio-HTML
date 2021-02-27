function ProjectFilter(buttons){
  buttons.forEach(cond=>cond.addEventListener('change', function(event){
    const buttonValue = this.value;
    const filter = data.Projects.filter(projects =>{
      if (projects.tag.toLowerCase()==buttonValue.toLowerCase()){
        return projects;        
      }
    });
      document.querySelector(".project-list").innerHTML = renderProjectItems(filter);
}  
));
  
}



function Newshandler(event){
  const keyword = this.value;
  const filter = data.News.filter(news => {
    return news.Content.toLowerCase().includes(keyword.toLowerCase());
  });

  document.querySelector(".News-list").innerHTML = renderNewsItems(filter);
}

let data = null;
fetch("/data.json")
  .then(response => {
    return response.json();
  })
  .then(_data => {
    data = _data;
    renderMainPage(data);
    const queryString = window.location.search;
    GenerateHTML(queryString, data);
  });


function GenerateHTML(queryString, data) {
  if (queryString.includes("Projects")) {
    var projectId = queryString.replace("?Projects=", "");
    data.Projects.forEach(function(item) {
      if (item.ID === projectId) {
        renderProjectPage(item);
      } else {
        console.log("error1!!!!!!");
      }
    });
  } else {
    renderMainPage(data);
  }
}

function renderMainPage(data) {
  document.querySelector(".container").innerHTML = `
        ${renderNavbar("main", Object.keys(data))}
        ${renderAbout(data.About)}
        ${renderNews(data.News)}
        ${renderProjects(data.Projects)}
    `;
  document
    .querySelector('.search input[name="News"]')
    .addEventListener("input", Newshandler);
  let buttons = document.querySelectorAll('.filter input[name="filter"]');
  ProjectFilter(buttons);

}

function renderNavbar(page, keys) {
  return `
    <nav class="flex-container">
      <ul style="list-style-type:disc">
        <a class="animate__animated animate__bounce animate__repeat-5" href="#${
          keys[0]
        }">"${keys[0]}"</a>
        <a class="animate__animated animate__bounce animate__repeat-5" href="#${
          keys[1]
        }">"${keys[1]}"</a>
        <a class="animate__animated animate__bounce animate__repeat-5" href="#${
          keys[2]
        }">"${keys[2]}"</a>
      </ul>
    </nav>
    `;
}

function renderAbout(About) {
  return `
      <h2>${About.Name}</h2>
      <div class="center ,col-6">
        <img
          src="${About.Photo}"
          alt="Image it yourself haha"
          width="300"
          height="400"
        />
        <h3>
          ${About.Slogan}
        </h3>
        <p>
          ${About.Contact_info}
        </p>

        <p>
          <a href="?Projects=${About.InsLink}"
            ><i class="fab fa-instagram"></i
          ></a>
          | <a href="?Projects=${About.ResumeLink}"><i class="fas fa-file"></i>Resume</a> |
          <a href="?Projects=${About.GithubLink}"
            ><i class="fab fa-github"></i
          ></a>
        </p>
        <div style="display:inline-block;text-align: left">
          ${About.Intro}
        </div>
      </div>
   `;
}

function renderNews(News) {
  return `
    <h2 class="style1">News</h2>
    <div class="search">
      <input type="search" name='News' placeholder="Search News...">
    </div>
    <div class = "News-list"> 
      ${renderNewsItems(News)} 
    </div>
 `;
}

function renderNewsItems(News) {
  return News.map(
    d =>
      `
    <div class="col-8">
      ${d.Content}
    </div>
    <div class="col-4">
      ${d.Time}<br />
    </div>
  `
  ).join("");
}

function renderProjects(Projects) {
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
            <i class="fas fa-video"></i>Demo</a
          >
          <a
            class="style3"
            href="${d.SourceCode}"
            ><i class="fas fa-code"></i>Source Code</a
          >
        </div>
      </div>
		</div>
	`
  ).join("");
}

function renderProjectPage(Projects) {
  document.querySelector(".container").innerHTML = `
      <a href="render.html">Go Back</a>
  <h1>
    IOS project using Swift
  </h1>
       
        ${renderPic(Projects.DetailImg)}
        ${renderText(Projects)}
    `;
}

function renderPic(Pic) {
  var content = ``;
  Pic.forEach(function(items) {
    content += `    <img
    src="${items}"
    width="382"
    height="667"
  />`;
  });
  return `${content}`;
}
function renderText(Text) {
  var content = `<br>`;
  content += `${Text.DetailDescription}`;
  content += `${Text.DetailDescription}<br>`;
  content += `Features:`;
  Text.Features.forEach(function(items) {
    content += `
    <ul style="list-style-type:disc">
      <li>${items}</li>

    </ul>`;
  });
  return `${content}`;
}
