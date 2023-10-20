<script lang="ts">
	import { page } from '$app/stores';

	export let href: string;
</script>

<a class={$page.url.pathname === href ? 'tab tab-active' : 'tab'} {href} {...$$restProps}>
	<slot />
</a>
