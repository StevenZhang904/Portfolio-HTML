import {renderNavbar} from './Navbar.js';
import {renderAbout} from './About.js';
import {renderNews, handleNewsFilter} from './News.js';
import {renderProjects,handleProjectFilter} from './Projects.js';

export function renderMainPage(data) {
  document.querySelector(".container").innerHTML = `
        ${renderNavbar("main", Object.keys(data))}
        ${renderAbout(data.About)}
        ${renderNews(data.News)}
        ${renderProjects(data.Projects)}
    `;
  handleNewsFilter(data);
  let buttons = document.querySelectorAll('.filter input[name="filter"]');
  
  handleProjectFilter(data,buttons);
}

