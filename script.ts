export { }; // make file a module to use top-level await

console.log("Script execution is started");

/* ==== Homework 1 ==== */

interface ProjectDescription {
    description: string
}

async function getProjectDescription(path: string): Promise<ProjectDescription> {
    const url = 'https://api.github.com' + path;
    const resp: Response = await fetch(url);
    return await resp.json();
}

async function fillProjectsDescriptions() {
    const projectNames = [
        'message-generating-backend',
        'message-obtain-app',
        'internship-test-russianpost'
    ];

    for (const project of projectNames) {
        const p = document.getElementById(project) as HTMLParagraphElement;
        const projectDescription = await getProjectDescription(`/repos/Iskanred/${project}`)
        p.innerText = projectDescription.description;
    }
}

await fillProjectsDescriptions();

/* ==== Homework 2 ==== */

interface XkcdComic {
    month: number,
    year: number,
    day: number,
    img: string,
    title: string,
}

function buildUrl(baseUrl: string, params: URLSearchParams): string {
    return baseUrl + '?' + params.toString();
}

async function fetchId(email: string): Promise<string> {
    const url = 'https://fwd.innopolis.app/api/hw2'
    const params = new URLSearchParams();
    params.append('email', email);

    const resp: Response = await fetch(buildUrl(url, params));
    return await resp.json();
}

async function fetchXkcdComicById(id: string): Promise<XkcdComic> {
    const url = 'https://getxkcd.vercel.app/api/comic'
    const params = new URLSearchParams();
    params.append('num', id);

    const resp: Response = await fetch(buildUrl(url, params));
    return await resp.json()
}

async function fetchXkcdComic(): Promise<XkcdComic> {
    const email = "i.nafikov@innopolis.university";

    const id: string = await fetchId(email);
    console.log('Request ID is:', id);

    const comicJson: XkcdComic = await fetchXkcdComicById(id)
    console.log('Response:', comicJson)

    return comicJson
}

async function addComic() {
    const titleHtml = document.getElementById('comic-title') as HTMLHeadingElement
    const imgHtml = document.getElementById('comic-image') as HTMLImageElement
    // figcaption does not have special type in typescript
    const captionHtml = document.getElementById('comic-upload-date-caption') as HTMLElement

    const comic: XkcdComic = await fetchXkcdComic()

    const date = new Date(Date.UTC(comic.year, comic.month, comic.day)).toLocaleDateString();
    const title = comic.title
    const imgSrc = comic.img

    titleHtml.innerText = title
    imgHtml.src = imgSrc
    captionHtml.innerText = `Upload date: ${date}`

    captionHtml.style.display = 'initial'
}

await addComic()
