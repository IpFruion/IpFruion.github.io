<script lang="ts">
	const content = [
		{
			title: 'Skipify',
			timeRange: 'Nov 2022 - Present',
			content: 'Designed and developed e-commerce checkout solutions in Rust and Golang.'
		},
		{
			title: 'Source Allies',
			timeRange: 'May 2021 - Nov 2022',
			content: 'Did R&D into augment reality soltuions for a big agricultural company.'
		},
		{
			title: 'Iowa State University - Research Assistant',
			timeRange: 'May 2018 - Aug 2019',
			content:
				'Developed software for identifying security vulnerabilities in Java applications using dynamic analysis.'
		}
	];

	const getStepColor = (index: number) => (index === 0 ? 'step-primary' : '');
</script>

<div class="flex justify-center items-stretch w-screen">
	<ul class="steps steps-vertical w-1/3">
		{#each content as c, i}
			<li class="step {getStepColor(i)}" data-content="">
				<div class="m-6 card bg-neutral text-neutral-content shadow-xl">
					<div class="card-body text-start">
						<h2 class="card-title">{c.title}</h2>
						<h4 class="card-title text-gray-400 dark:text-gray-600">{c.timeRange}</h4>
						<p>{c.content}</p>
					</div>
				</div>
			</li>
		{/each}
	</ul>
</div>
