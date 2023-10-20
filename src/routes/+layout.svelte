<script lang="ts">
	import Tab from '$lib/Tab.svelte';
	import { writable } from 'svelte/store';
	import '../app.css';
	import { setContext } from 'svelte';
	import Github from '$lib/icons/Github.svelte';
	import Resume from '$lib/icons/Resume.svelte';
	import Info from '$lib/icons/Info.svelte';

	let toggle: boolean;

	const mode = writable();
	$: mode.set(toggle);

	setContext('mode', mode);
</script>

<!-- position: fixed; top: 0px; width: 100%; overflow: hidden -->
<div class="sticky top-0 z-50">
	<div class="m-3">
		<div class="alert alert-info">
			<Info />
			<span>Work in Progress</span>
		</div>
	</div>
	<div class="flex justify-center m-3">
		<div class="tabs tabs-boxed items-center">
			<Tab href="/">Home</Tab>
			<Tab href="/timeline">Timeline</Tab>
			<Tab href="/languages">Languages</Tab>
			<Tab href="/projects">Projects</Tab>
			<Tab href="https://github.com/IpFruion"><Github /></Tab>
			<Tab href="media/derrick_lockwood_resume.pdf" download="derrick_lockwood_resume"
				><Resume /></Tab
			>
		</div>
	</div>
</div>
<div class="flex justify-center m-3 pt-3">
	<slot />
</div>
