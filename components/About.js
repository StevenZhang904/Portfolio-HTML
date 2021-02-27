export function renderAbout(About) {
  return `
  <section id="About">
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
      </section>
   `;
}