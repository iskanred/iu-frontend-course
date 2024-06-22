<script>
	import GitHubProjects from './GitHubProjects.svelte';
</script>

<main class="expanded">
	<div class="left" style="margin-right: 10%;">
		<section id="about-me-section">
			<h2>ABOUT ME</h2>
			<hr class="solid" />
			<div class="section-main-content">
				<p>
					A motivated Java/Kotlin Backend Developer and Site Reliability Engineer
					receiving specialized education. Responsible person, like to work in a team,
					learn new things. Enjoy developing reliable, safe, and fast web-services. Have
					experience in Android Development, Distributed Systems, Frontend Development.
				</p>
			</div>
		</section>
		<section id="competencies-section">
			<h2>KEY COMPETENCIES</h2>
			<hr class="solid" />
			<div class="section-main-content">
				<ul>
					<li>Java, Kotlin</li>
					<li>Spring Boot</li>
					<li>Postgres, Oracle</li>
					<li>Kafka</li>
					<li>Docker, Kubernetes, Helm</li>
					<li>Ansible, Terraform</li>
					<li>Grafana, Prometheus</li>
				</ul>
			</div>
		</section>
		<section id="projects-section">
			<h2>PET PROJECTS</h2>
			<hr class="solid" />
			<div class="section-main-content">
				<GitHubProjects />
			</div>
		</section>
	</div>
	<div style="margin-right: 10%;">
		<section id="work-expirience-section">
			<h2>WORK EXPIRIENCE</h2>
			<hr class="solid" />
			<div class="section-main-content">
				<h3>T-BANK</h3>
				<p class="caption">Kotlin Backend Dev + SRE | Jun 2022 一 present</p>
				<ul>
					<li>
						Optimizing usability and reliability of services, migrating them to new
						technology stack
					</li>
					<li>
						Having SRE role. I am engaged in reliability, availability and fault
						tolerance of services, work with infrastructure and advise developer.
						Created Business SLA which helped to reduce number of incidents by 20% and
						reduced their impact.
					</li>
					<li>
						Managing a project to abandon the deprecated vendor CRM system within the
						department. Communicating with employees from different departments, writing
						regulations, using my technical skills. Under my leadership, our department
						has eliminated 80% of dependencies on the old system.
					</li>
					<li>
						Participating in educational events: Lecturing, Checking students'
						homeworks, Facilitating in job fair, etc.
					</li>
					<li>
						Conducting technical interviews at the company and general interviews at the
						Bachelor Program of Moscow Central University. Conducted over 15 technical
						interviews and over 20 general in total.
					</li>
				</ul>
			</div>
			<div class="section-main-content">
				<h3>INNOPOLIS UNIVERSITY - ADVANCED ENGINEERING SCHOOL</h3>
				<p class="caption" />
				<p class="caption">Fullstack Dev | Nov 2023 一 present</p>
				<ul>
					<li>Writing a bachelor's thesis with a description of the project</li>
					<li>
						Implementing <a href="https://code-vis.ru">Code Visualization Web Service</a
						> from the scratch
					</li>
					<li>
						Developed frontend, backend, monitoring and deployed application to Yandex
						Cloud.
					</li>
				</ul>
			</div>
		</section>
		<section id="academic-backround-section">
			<h2>ACADEMIC BACKGROUND</h2>
			<hr class="solid" />
			<div class="section-main-content">
				<h3>INNOPOLIS UNIVERSITY</h3>
				<p class="caption">Bachelor of Computer Science | 2020 一 2024</p>
				<ul>
					<li>Specialized in Software Development</li>
					<li>GPA: 4.75</li>
				</ul>
			</div>
			<div class="section-main-content">
				<h3>IT SCHOOL SAMSUNG</h3>
				<p class="caption">Android Development on Java | 2018 - 2019</p>
				<ul>
					<li>Winner of the contest "IT school chooses the strongest"</li>
					<li>Honor Certificate</li>
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
