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

<div class="m-4 grid grid-cols-1 gap-4">
	{#each languages as language}
		<!-- "grid grid-cols-1 grid-rows-2 justify-items-center w-full" -->
		<div class="flex flex-row justify-center w-full">
			<h1>{language.language}</h1>
			<Expertise step={language.expertise} />
		</div>
	{/each}
</div>
