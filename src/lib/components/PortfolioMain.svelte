<script>
    import GitHubProjects from "./GitHubProjects.svelte";
</script>

<main class="left">
    <div class="left" style="margin-right: 10%;">
        <section id="about-me-section">
            <h2>ABOUT ME</h2>
            <hr class="solid">
            <div class="section-main-content">
                <p>
                    A motivated Java/Kotlin Backend
                    developer receiving specialized
                    education. Responsible person,
                    like to work in a team, learn new things.
                    Enjoy developing reliable, safe,
                    and fast web-services.
                    Have experience in Android Development,
                    Machine Learning, Frontend Web Development,
                    Compiler Construction.
                </p>
            </div>
        </section>
        <section id="competencies-section">
            <h2>KEY COMPETENCIES</h2>
            <hr class="solid">
            <div class="section-main-content">
                <ul>
                    <li>Java/Kotlin</li>
                    <li>Spring Boot - MVC, WebFlux, Data, Security</li>
                    <li>PostgreSql/Oracle</li>
                    <li>Hibernate, Liquidbase</li>
                    <li>Kafka</li>
                    <li>Docker, Kubernetes</li>
                    <li>Gradle/Maven</li>
                    <li>Git</li>
                    <li>Junit, ArchUnit, Mockito, MockK, Testcontainers</li>
                    <li>Agile, Kanban</li>
                </ul>
            </div>
        </section>
        <section id="projects-section">
            <h2>PROJECTS</h2>
            <hr class="solid">
            <div class="section-main-content">
                <GitHubProjects/>
            </div>
        </section>
    </div>
    <div style="margin-right: 10%;">
        <section id="work-expirience-section">
            <h2>WORK EXPIRIENCE</h2>
            <hr class="solid">
            <div class="section-main-content">
                <h3>TINKOFF BANK</h3>
                <p class="caption">Kotlin Backend Dev | Jun 2020 一 present</p>
                <ul>
                    <li>
                        Developing a verification system
                        for people who take credit
                        products from Tinkoff Bank
                    </li>
                    <li>
                        Optimizing usability and
                        reliability of services,
                        migrating them to new technology
                        stack
                    </li>
                </ul>
            </div>
            <div class="section-main-content">
                <h3>INNOPOLIS UNIVERSITY</h3>
                <p class="caption">Parser Engineer | Jun 2021</p>
                <ul>
                    <li>
                        Implemented Go parser with use of
                        ANTLR tool on Java
                    </li>
                </ul>
            </div>
        </section>
        <section id="academic-backround-section">
            <h2>ACADEMIC BACKGROUND</h2>
            <hr class="solid">
            <div class="section-main-content">
                <h3>INNOPOLIS UNIVERSITY</h3>
                <p class="caption">Bachelor of Computer Science | 2020 一 2024</p>
                <ul>
                    <li>
                        BS Computer Science
                    </li>
                    <li>
                        Specialized in software
                        development
                    </li>
                    <li>
                        GPA: 4.66
                    </li>
                </ul>
            </div>
            <div class="section-main-content">
                <h3>IT SCHOOL SAMSUNG</h3>
                <p class="caption">Student | 2018 - 2019</p>
                <ul>
                    <li>
                        Android Development on Java
                    </li>
                    <li>
                        Winner of the contest "IT school chooses the strongest"
                    </li>
                    <li>
                        Honor Certificate
                    </li>
                </ul>
            </div>
        </section>
    </div>
</main>

<style>
    main {
        display: grid;
        grid-template-columns: 50% 50%;
        border: 5px solid;
        border-radius: 1px;
        padding-left: 5%;
        padding-right: 5%;
        margin-bottom: 30px;
    }

    section {
        margin-top: 10%;
    }

    .caption {
        font-style: italic;
    }

    .left {
        float: left;
    }
</style>
