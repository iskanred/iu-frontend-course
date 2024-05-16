<script>
    import GitHubProjects from "./GitHubProjects.svelte";
</script>

<main class="expanded">
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
                    Distributed Systems, Frontend Web Development,
                    Compiler Construction.
                </p>
            </div>
        </section>
        <section id="competencies-section">
            <h2>KEY COMPETENCIES</h2>
            <hr class="solid">
            <div class="section-main-content">
                <ul>
                    <li>Java, Kotlin</li>
                    <li>Spring Boot - MVC, WebFlux, Data, Security, Cloud</li>
                    <li>Postgres, Oracle</li>
                    <li>Hibernate, JPA, JDBC, Liquibase</li>
                    <li>Kafka</li>
                    <li>Docker, Kubernetes, GitLab, GitHub</li>
                    <li>Gradle, Maven</li>
                    <li>JUnit, ArchUnit, Mockito, MockK, TestContainers</li>
                </ul>
            </div>
        </section>
        <section id="projects-section">
            <h2>PET PROJECTs</h2>
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
                <p class="caption">Kotlin Backend Dev | Jun 2022 一 present</p>
                <ul>
                    <li>
                        Optimizing usability and
                        reliability of services,
                        migrating them to new technology
                        stack. Decreased response time up to 20%
                        for several web-services
                    </li>
                    <li>
                        Having SRE role. I am engaged in reliability, availability
                        and fault tolerance of services,
                        work with infrastructure and advise developer.
                        Created Business SLA which helped to reduce number of
                        incidents by 35% and reduced their impact
                    </li>
                    <li>
                        Managing a project to abandon the vendor CRM system within the department.
                        Communicating with employees from different departments,
                        writing regulations, using my technical skills
                    </li>
                    <li>
                        Participating in Tinkoff Education events:
                        lecturing, checking students' homeworks, facilitating in stock market, etc.
                    </li>
                    <li>
                        Conducting interviews at the company and at the Tinkoff Central University.
                        Conducted over 20 technical interviews
                    </li>
                </ul>
            </div>
            <div class="section-main-content">
                <h3>INNOPOLIS UNIVERSITY</h3>
                <p class="caption"></p>
                <p class="caption">Fullstack Dev | Nov 2023 一 present</p>
                <ul>
                    <li>
                        Writing a bachelor's thesis with a description of the project
                    </li>
                    <li>
                        Implementing <a href="https://code-vis.ru">Code Visualization Web Service</a> from the scratch
                    </li>
                    <li>
                        Integrating the service into the GitFlame, Russian equivalent of GitHub
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
                        Specialized in Software Development
                    </li>
                    <li>
                        GPA: 4.75
                    </li>
                </ul>
            </div>
            <div class="section-main-content">
                <h3>IT SCHOOL SAMSUNG</h3>
                <p class="caption">2018 - 2019</p>
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
        grid-template-columns: 40% 60%;
        border: 5px solid;
        border-radius: 1px;
        padding-left: 3%;
        padding-right: 3%;
        margin-bottom: 1%;
        float: left;
        width: 100%;
    }

    li {
        margin-bottom: 1em; /* Расстояние снизу */
    }
</style>
