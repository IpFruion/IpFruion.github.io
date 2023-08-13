<script lang="ts">
	import { onMount } from 'svelte';
	import { quadInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	let visible = false;
	onMount(() => {
		visible = true;
	});
</script>

<div class="hero min-h-screen">
	<div class="hero-content">
		<div class="w-full">
			<div class="text-center">
				{#if visible}
					<h1
						transition:fly={{ y: '-7vw', easing: quadInOut, duration: 3000 }}
						class="text-5xl font-bold"
					>
						Hi, I'm Derrick
					</h1>
				{/if}
			</div>
			<div class="content flex py-10">
				<img class="w-48 h-48 mask mask-circle" src="media/pics/profile.jpeg" alt="profile" />
				<div class="item-body font-normal text-2xl px-3">
					<p>
						My name is Derrick Lockwood and this is my website about the passion I have for software
						development. It includes a simple biography, a timeline of my career, language
						expertise, and some other information.
					</p>
					<br />
					<p>
						I am an avid Software Developer that has many years of programming and development
						experience. I have a Bachelors of Science in Software Engineering from Iowa State
						University (ISU). I continue to persue my passion by working on personal projects that I
						find interesting. I like creating software others use and can take pride in the work
						that I develop.
					</p>
					<br />
					<span>
						For more information see the <a class="text-primary" href="/timeline">Timeline</a>
						page
					</span>
				</div>
			</div>
		</div>
	</div>
</div>
