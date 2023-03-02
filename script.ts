export { }; // make file a module to use top-level await

console.log("Script execution is started");

function executeWithError<T>(block: () => T): T {
    try {
        return block();
    } catch (e) {
        console.error(e);
        throw e;
    }
}

async function handleResponse<T>(resp: Response): Promise<T> {
    if (!resp.ok) {
        throw Error(`Response status is ${resp.status} ${resp.statusText}`);
    }
    return await resp.json();
}

async function request<T>(url: string): Promise<T> {
    const resp: Response = await fetch(url);
    return handleResponse(resp);
}

/* ==== Homework 1 ==== */

interface ProjectDescription {
    description: string
}

async function getProjectDescription(path: string): Promise<ProjectDescription> {
    const url = 'https://api.github.com' + path;
    return request(url);
}

async function fillProjectsDescriptions() {
    const projectNames = [
        'message-generating-backend',
        'message-obtain-app',
        'internship-test-russianpost'
    ];

    for (const project of projectNames) {
        const p = document.getElementById(project) as HTMLParagraphElement;
        try {
            const projectDescription = await getProjectDescription(`/repos/Iskanred/${project}`);
            p.innerText = projectDescription.description;
        } catch (e) {
            console.error(e);
        }
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
    const url = 'https://fwd.innopolis.app/api/hw2';
    const params = new URLSearchParams();
    params.append('email', email);

    return request(buildUrl(url, params));
}

async function fetchXkcdComicById(id: string): Promise<XkcdComic> {
    const url = 'https://getxkcd.vercel.app/api/comic';
    const params = new URLSearchParams();
    params.append('num', id);

    return request(buildUrl(url, params));
}

async function fetchXkcdComic(): Promise<XkcdComic> {
    const email = "i.nafikov@innopolis.university";

    const id: string = await executeWithError(() => fetchId(email));
    console.log('Request ID is:', id);

    const comicJson: XkcdComic = await executeWithError(() => fetchXkcdComicById(id));
    console.log('Response:', comicJson);

    return comicJson;
}

async function addComic() {
    const titleHtml = document.getElementById('comic-title') as HTMLHeadingElement;
    const imgHtml = document.getElementById('comic-image') as HTMLImageElement;
    // figcaption does not have special type in typescript
    const captionHtml = document.getElementById('comic-upload-date-caption') as HTMLElement;

    try {
        const comic: XkcdComic = await fetchXkcdComic();
        const date = new Date(Date.UTC(comic.year, comic.month, comic.day)).toLocaleDateString();
        const title = comic.title;
        const imgSrc = comic.img;

        titleHtml.innerText = title;
        imgHtml.src = imgSrc;
        captionHtml.innerText = `Upload date: ${date}`;

        captionHtml.style.display = 'initial';
    } catch (e) { }
}

await addComic();
