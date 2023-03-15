<script lang="ts">
    import type {XkcdComic} from "../specific/comic";
    import {extractDate, fetchXkcdComic} from "../specific/comic";

    let date: string;
    let title: string;
    let src: string;
    let alt: string;

    async function fillComicInfo() {
        const comic: XkcdComic = await fetchXkcdComic();
        date = extractDate(comic).toLocaleDateString();
        title = comic.title;
        src = comic.img;
        alt = comic.alt;
    }
</script>

<footer>
    {#await fillComicInfo()}
        <h2 class="comic-title">an XKCD comic</h2>
        <img class="comic-img" alt="XKCD comic" src="">
    {:then _}
        <h2 class="comic-title">{title}</h2>
        <figure>
            <img class="comic-img" {alt} {src}>
            <figcaption>Upload Date: {date}</figcaption>
        </figure>
    {/await}
</footer>

<style>
    footer {
        margin: auto;
        justify-content: space-evenly;
    }

    footer figure {
        display: flex;
        flex-direction: column;
    }

    .comic-title {
        text-align: center;
    }

    figcaption {
        margin-top: 1%;
        color: grey;
    }

    .comic-img {
        border: 1px solid;
        border-radius: 10%;
    }
</style>
