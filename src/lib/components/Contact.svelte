<script lang="ts">
    export let styleClass: string;
    export let link: string;
    export let name: string;
</script>

<tr>
    <td>
        <i class="fa li {styleClass} link-icon"></i>
    </td>
    <td class="contact">
        <a href="{link}">{name}</a>
    </td>
</tr>

<style>
    .contact {
        font-size: 85%;
    }
    .link-icon {
        font-size: 120%;
    }
</style>
