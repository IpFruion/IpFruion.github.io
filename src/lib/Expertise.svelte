<script lang="ts">
	export let value: number;

	const colors = ['progress-error', 'progress-warning', 'progress-info', 'progress-success'];
</script>

<progress class="progress {colors[value - 1]} w-1/3 h-4" {value} max="4" />
