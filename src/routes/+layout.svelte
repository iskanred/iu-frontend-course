<script>
    import '../app.css'
    import {base} from "$app/paths";
</script>

<div>
    <nav>
        <a href="{base}/">Portfolio</a>
        <a href="{base}/comic/">Comic</a>
    </nav>
</div>

<slot />

<style>
    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    nav {
        text-align: center;
        background-color: #dedddd;
        padding: 2px;
        width: 200px;
        border: solid 2px #403d3c;
        border-radius: 5px;
    }
</style>
