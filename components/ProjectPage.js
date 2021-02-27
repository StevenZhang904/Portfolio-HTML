import {renderProjectNavbar} from "./ProjectNavBar.js";

export  function renderProjectPage(Projects) {
  document.querySelector(".container").innerHTML = `<br><br><br>
      <a href="render.html">Go Back</a>
  <h1>
    IOS project using Swift
  </h1>
       ${renderProjectNavbar(Object.keys(Projects))};
        ${renderPic(Projects.DetailImg)}
        ${renderDescrption(Projects)}
        ${renderFeatures(Projects)}
    `;
}

function renderPic(Pic) {
  var content = `<section id = "DetailImg">`;
  
  Pic.forEach(function(items) {
    content += `    <img
    src="${items}"
    width="382"
    height="667"
  />`;
  });
  return `${content} </section>`;
}

function renderDescrption(Text) {
  var content = `<br>`;
  content += `<section id = "DetailDescription">`;
  content += `Description:<br>${Text.DetailDescription}</section>`;
  return `${content}`;

}

function renderFeatures(Text){
  var content = `<br>`;
  content += `<section id = "Features">Features:`;
  Text.Features.forEach(function(items) {
    content += `
    <ul style="list-style-type:disc">
      <li>${items}</li>

    </ul>`;
  });
  return `${content}</section>`;
}