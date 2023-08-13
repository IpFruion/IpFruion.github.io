<script lang="ts">
	import Tab from '$lib/Tab.svelte';
	import { writable } from 'svelte/store';
	import '../app.css';
	import { setContext } from 'svelte';
	import Github from '$lib/icons/Github.svelte';
	import Resume from '$lib/icons/Resume.svelte';

	let toggle: boolean;

	const mode = writable();
	$: mode.set(toggle);

	setContext('mode', mode);
</script>

<!-- position: fixed; top: 0px; width: 100%; overflow: hidden -->
<div class="sticky top-0 z-50">
	<div class="m-3">
		<div class="alert alert-info">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="stroke-current shrink-0 w-6 h-6"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/></svg
			>
			<span>Work in Progress</span>
		</div>
	</div>
	<div class="flex justify-center w-full m-3">
		<div class="tabs tabs-boxed items-center">
			<Tab href="/">Home</Tab>
			<Tab href="/timeline">Timeline</Tab>
			<Tab href="/languages">Languages</Tab>
			<Tab href="/projects">Projects</Tab>
			<!-- <input bind:value={toggle} type="checkbox" class="toggle m-2" /> -->
			<Tab href="https://github.com/IpFruion"><Github /></Tab>
			<Tab href="media/derrick_lockwood_resume.pdf" download="derrick_lockwood_resume"
				><Resume /></Tab
			>
		</div>
	</div>
</div>
<slot />
