<script lang="ts">
	import PortfolioHeader from '$lib/components/PortfolioHeader.svelte';
	import PortfolioMain from '$lib/components/PortfolioMain.svelte';
</script>

<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>

<div>
	<PortfolioHeader />
	<PortfolioMain />
</div>

<style>
	div {
		/*width: 130%;*/
		max-width: 92%;
	}
</style>
