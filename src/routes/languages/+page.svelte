<script>
	import Expertise from '$lib/Expertise.svelte';

	const languages = [
		{
			language: 'Rust',
			expertise: 4
		},
		{
			language: 'Java',
			expertise: 4
		},
		{
			language: 'Python',
			expertise: 3
		},
		{
			language: 'C / C++',
			expertise: 1
		},
		{
			language: 'Golang',
			expertise: 3
		},
		{
			language: 'TS / JS',
			expertise: 2
		}
	];
</script>

<div class="grow flex flex-col justify-around space-y-4 items-stretch">
	{#each languages as language}
		<div class="flex flex-row items-center space-x-4 justify-center">
			<h1 class="text-xl">{language.language}</h1>
			<Expertise value={language.expertise} />
		</div>
	{/each}
</div>
