//render news

export function renderNews(News) {
  return `
  <section id="News">
    <h2 class="style1">News</h2>
    <div class="search">
      <input type="search" name='News' placeholder="Search News...">
    </div>
    <div class = "News-list"> 
      ${renderNewsItems(News)} 
    </div>
    </section>
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


function Newshandler(data){

  const keyword = this.value;
  const filter = data.News.filter(news => {
    return news.Content.toLowerCase().includes(keyword.toLowerCase());
  });

  document.querySelector(".News-list").innerHTML = renderNewsItems(filter);
}

/*
export function handleNewsFilter(data){
    document
    .querySelector('.search input[name="News"]')
    .addEventListener("input", Newshandler);
  
}
*/
export function handleNewsFilter(data){
    document
    .querySelector('.search input[name="News"]')
    .addEventListener("input", function(){
        const keyword = this.value;
  const filter = data.News.filter(news => {
    return news.Content.toLowerCase().includes(keyword.toLowerCase());
  });

  document.querySelector(".News-list").innerHTML = renderNewsItems(filter);
    }
                     );
  
}
