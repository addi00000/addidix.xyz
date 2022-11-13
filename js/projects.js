
fetch("https://gh-pinned-repos.egoist.dev/?username=addi00000")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((repo) => {
            document.getElementsByClassName("projects")[0].innerHTML += `
                <div class="project">
                    <div class="project-title">
                        <a href="${repo.link}">${repo.repo}</a>
                    </div>
                    <div class="project-description">
                        ${repo.description}
                    </div>
                    <div class="project-language">
                        <div class="project-language-color" style="background-color: ${repo.languageColor}"></div>
                        <div class="project-language-name">${repo.language}</div>
                    </div>
                </div>
            `;
        });
});