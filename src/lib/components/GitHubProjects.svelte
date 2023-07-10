<script lang="ts">
    import type {GitHubProject} from "../specific/github-project";
    import {getGitHubProject, beatifyProjectName} from "../specific/github-project"

    const username = "Iskanred"
    const projectNames = [
        "message-generating-backend",
        "message-obtain-app",
        "internship-test-russianpost",
        "innotes-web-app"
    ];

    async function fillProjectDescription(projectName: string): Promise<string> {
        const project: GitHubProject = await getGitHubProject(username, projectName);
        console.log(`GitHub project "${projectName}":`, project);
        return project.description;
    }
</script>

<ul>
    {#each projectNames as projectName}
        <li>
            <a href="https://github.com/{username}/{projectName}">{beatifyProjectName(projectName)}</a>
            {#await fillProjectDescription(projectName) then projectDescription}
                <p>{projectDescription}</p>
            {/await}
        </li>
    {/each}
</ul>
