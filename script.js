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
        getProjectDescription(`/repos/Iskanred/${project}`)
            .then((response) => {
                p.innerText = response.data.description;
            }); 
    });
}

fillProjectsDescriptions();

/* ==== Homework 2 ==== */

function fetchId(email) {
    const url =  'https://fwd.innopolis.app/api/hw2'
    const params = new URLSearchParams();
    params.append('email', email);
    return fetch(url + '?' + params.toString())
        .then(resp => resp.json());
}

function fetchXkcdComicById(id) {
    const url =  'https://getxkcd.vercel.app/api/comic'
    const params = new URLSearchParams();
    params.append('num', id);
    return fetch(url + '?' + params.toString())
        .then(resp => resp.json());
}

async function fetchXkcdComic() {
    const email = "i.nafikov@innopolis.university";

    const id = await fetchId(email);
    console.log('Request ID is:', id);

    const comicJson = await fetchXkcdComicById(id)
    console.log('Response:', comicJson)

    return comicJson
}

async function addComic() {
    const titleHtml = document.getElementById('comic-title')
    const imgHtml = document.getElementById('comic-image')
    const captionHtml = document.getElementById('comic-upload-date-caption')
    
    const comic = await fetchXkcdComic()
    
    const date = new Date(Date.UTC(comic.year, comic.month, comic.day)).toLocaleDateString();
    const title = comic.title
    const imgSrc = comic.img
    
    titleHtml.innerText = title
    imgHtml.src = imgSrc
    captionHtml.innerText = `Upload date: ${date}`

    captionHtml.style.display = 'initial'
}

await addComic()
