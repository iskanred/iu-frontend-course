<script lang="ts">
   import Contact from "./Contact.svelte";
   import {base} from "$app/paths";

   const myPhoto = `${base}/images/my-photo.jpeg`;
</script>

<header>
    <div id="header-info-div">
        <h1>ISKANDER NAFIKOV</h1>
        <div id="under-name-div">
            <div id="profession">
                <p>- Java/Kotlin Backend Developer</p>
                <p>- Innopolis University Student</p>
            </div>
            <div id="contacts-div">
                <table>
                    <Contact styleClass="fa-envelope-square" name="Mail" link="mailto:nafikov.iskander@mail.ru" />
                    <Contact styleClass="fa-telegram" name="Telegram" link="https://t.me/iskanred"/>
                    <Contact styleClass="fa-github-square" name="GitHub" link="https://github.com/Iskanred"/>
                    <Contact styleClass="fa-linkedin-square" name="LinkedIn" link="https://www.linkedin.com/in/iskander-nafikov-31a9a41ab"/>
                </table>
            </div>
        </div>
    </div>
    <div id="header-photo-div">
        <img id="main-photo" src="{myPhoto}" alt="Me">
    </div>
</header>

<style>
    header {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 2%;
    }

    header h1 {
        font-size: 380%
    }

    #header-photo-div {
        margin-left: 2%;
    }

    #main-photo {
        border: 5px solid;
        border-radius: 100%;
        width: 230px;
    }

    #header-info-div {
        margin-right: 2%;
    }

    #profession {
        font-size: 140%;
    }

    #under-name-div {
        display: grid;
        grid-template-columns: 80% 10%;
    }

    #contacts-div {
        float: right;
    }
</style>
