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
        font-size: 20px;
    }
    .link-icon {
        font-size: 24px;
    }
</style>
