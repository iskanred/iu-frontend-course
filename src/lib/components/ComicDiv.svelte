<script lang="ts">
	import type { XkcdComic } from '../specific/comic';
	import { extractDate, fetchXkcdComic } from '../specific/comic';
	import ProgressRing from '$lib/components/ProgressRing.svelte';

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

<div id="container">
	{#await fillComicInfo()}
		<ProgressRing />
	{:then _}
		<h2 class="comic-title">{title}</h2>
		<figure>
			<img class="comic-img" {alt} {src} />
			<figcaption>Upload Date: {date}</figcaption>
		</figure>
	{:catch error}
		<p>Error occurred: [{error}]</p>
	{/await}
</div>

<style>
	#container {
		margin: auto;
		justify-content: space-evenly;
		padding-top: 20px;
	}

	div figure {
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
</style>
