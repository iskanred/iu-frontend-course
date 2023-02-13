import { Octokit } from "https://cdn.skypack.dev/@octokit/core";

console.log("Script execution is started");

async function getProjectDescription(path) {
    const octokit = new Octokit({
        baseURL: 'https://api.github.com/'
    });

    return await octokit.request(`GET ${path}`, {
        owner: 'OWNER',
        repo: 'REPO'
    });
}

function fillProjectsDescriptions() {
    const projectNames = [
        'message-generating-backend',
        'message-obtain-app',
        'internship-test-russianpost'
    ];

    projectNames.forEach((project) => {
        const p = document.getElementById(project);
        getProjectDescription(`/repos/Iskanred/${project}`).then((response) => {
            p.innerText = response.data.description;
        }); 
    });
}

fillProjectsDescriptions();
