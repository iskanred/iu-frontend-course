<script lang="ts">
	import Contact from './Contact.svelte';
	import { base } from '$app/paths';

	const myPhoto = `${base}/images/my-photo.jpeg`;
</script>

<header>
	<div>
		<h1>ISKANDER NAFIKOV</h1>
		<div id="under-name-div">
			<div id="profession">
				<p>Java/Kotlin Backend Developer</p>
				<p>Site Reliability Engineer (SRE)</p>
			</div>
			<div id="contacts-div">
				<table>
					<Contact
						styleClass="fa-envelope-square"
						name="nafikov.iskander@mail.ru"
						link="mailto:nafikov.iskander@mail.ru"
					/>
					<Contact
						styleClass="fa-telegram"
						name="iskanred"
						link="https://t.me/iskanred"
					/>
					<Contact
						styleClass="fa-github-square"
						name="isknared"
						link="https://github.com/Iskanred"
					/>
					<Contact
						styleClass="fa-linkedin-square"
						name="iskander-nafikov-31a9a41ab"
						link="https://www.linkedin.com/in/iskander-nafikov-31a9a41ab"
					/>
				</table>
			</div>
		</div>
	</div>
	<div id="header-photo-div">
		<img id="main-photo" src={myPhoto} alt="Me" />
	</div>
</header>

<style>
	header {
		display: flex;
		align-items: start;
		justify-content: flex-start;
		padding-bottom: 1%;
		width: 200%;
		margin-left: 18%;
	}

	header h1 {
		font-size: 260%;
	}

	#header-photo-div {
		margin-left: 3%;
	}

	#main-photo {
		border: 2px solid;
		border-radius: 100%;
		width: 200px;
	}

	#profession {
		font-size: 100%;
		margin-right: 20%;
	}

	#under-name-div {
		display: grid;
		grid-template-columns: 50% 50%;
	}

	#contacts-div {
		float: right;
	}
</style>
