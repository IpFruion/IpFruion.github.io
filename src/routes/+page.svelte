<script lang="ts">
	import { onMount } from 'svelte';
	import { quadInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	let visible = false;
	onMount(() => {
		visible = true;
	});
</script>
<main> <!-- This should wrap all your main content. 
I'm actually not sure if this is the best spot for it but I think I'd break all your divs by moving it all around if you're okay with that.-->
	<div class="hero min-h-screen">
		<div class="hero-content">
			<div class="w-full">
				<div class="text-center"><!-- Again, I'd kinda like to put a <section> here but it would mean re-nesting all your divs. 
				<section> only needs to have a heading tag (in this case, <h1>) and then other content like <p> and <img>
				I'd call this section something like "about-me" -->
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
							My name is Derrick Lockwood and this is my portfolio website about the passion I have
							for software engineering. It includes a simple biography, a timeline of my career,
							language expertise, and some projects I have participated in throughout my life.
						</p>
						<p>
							I am an avid Software Developer that has many years of programming and development
							experience. I have a Bachelors of Science in Software Engineering from Iowa State
							University (ISU). I continue to persue my passion by working on personal projects that I
							find interesting. I like creating software others use and can take pride in the work
							that I develop.
						</p>
						<p>
							I am currently working at a full-time position as a senior software engineer in the
							e-commerce space. This involves creating checkout and order related backend REST apis in
							Golang, TS, and Rust.
						</p>
						<p> <!--Noticed you had this as a <span> tag but I'm not sure why? 
						As I understand it <span> is an inline element but I think you want this content on it's own so it makes more sense as a paragraph. -->
							For more information see the <a class="text-primary" href="/timeline">Timeline</a>
							page
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>

