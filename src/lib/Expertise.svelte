<script lang="ts">
	type Expertise = {
		class: string;
		dataContent: string;
		name: string;
	};

	const steps: Expertise[] = [
		{
			class: 'step-error',
			dataContent: '?',
			name: 'Basic'
		},
		{
			class: 'step-warning',
			dataContent: '!',
			name: 'Intermediate'
		},
		{
			class: 'step-info',
			dataContent: '✓',
			name: 'Proficient'
		},
		{
			class: 'step-success',
			dataContent: '★',
			name: 'Expert'
		}
	];

	export let step: number;
	step = Math.max(Math.min(step, steps.length), 1);

	let showingSteps: Expertise[] = [];
	for (let i = 0; i < steps.length; i++) {
		const showingStep = i < step ? steps[i] : { ...steps[i], class: '' };
		showingSteps.push(showingStep);
	}
</script>

<ul class="steps w-1/3">
	{#each showingSteps as step}
		<li class="step {step.class}" data-content={step.dataContent}>{step.name}</li>
	{/each}
</ul>
