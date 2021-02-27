import {renderMainPage} from './components/MainPage.js';
import {renderProjectPage} from './components/ProjectPage.js';


fetch("/data.json")
  .then(response => {
    return response.json();
  })
  .then(data => {
    data 
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