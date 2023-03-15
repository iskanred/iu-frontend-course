import {request} from "../support/request";

export interface GitHubProject {
    description: string;
}

export async function getGitHubProject(userName: string, projectName: string): Promise<GitHubProject> {
    const url = `https://api.github.com/repos/${userName}/${projectName}`;
    return request(url);
}

export function beatifyProjectName(name: string): string {
    const words = name.split("-");

    return words.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(" ");
}
