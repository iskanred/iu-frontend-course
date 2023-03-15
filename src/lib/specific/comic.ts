import {buildUrl, request} from "../support/request";
import {executeWithError} from "../support/execution";

export interface XkcdComic {
    month: string,
    year: string,
    day: string,
    alt: string,
    img: string,
    title: string,

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

export async function fetchXkcdComic(): Promise<XkcdComic> {
    const email = "i.nafikov@innopolis.university";

    const id: string = await executeWithError(() => fetchId(email));
    console.log('Comic request ID by email is:', id);

    const comicJson: XkcdComic = await executeWithError(() => fetchXkcdComicById(id));
    console.log(`XkcdComic "${comicJson.title}":`, comicJson);

    return comicJson;
}

export function extractDate(comic: XkcdComic): Date {
    return executeWithError(() => new Date(parseInt(comic.year), parseInt(comic.month) - 1, parseInt(comic.day)));
}
