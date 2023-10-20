<script lang="ts">
	import { getContext } from 'svelte';

	const getFill = (mode: boolean) => (mode ? 'hsl(var(--nc))' : 'hsl(var(--nf))');
	const getTextStyle = (mode: boolean) =>
		`white-space: pre; fill:${getFill(
			mode
		)}; font-family: times-new-roman, serif; font-size: 199.7px;`;
	const mode: boolean = getContext('mode');

	let fill = getFill(mode);
	let textStyle = getTextStyle(mode);
	$: fill = getFill(mode);
	$: textStyle = getTextStyle(mode);
</script>

<svg width="35" viewBox="0, 0, 500, 500" xmlns="http://www.w3.org/2000/svg">
	<path
		d="M 126.31 405.516 C 118.868 405.516 112.356 402.725 106.775 397.144 C 101.193 391.562 98.403 385.051 98.403 377.609 L 98.403 61.329 C 98.403 53.887 101.193 47.375 106.775 41.794 C 112.356 36.213 118.868 33.422 126.31 33.422 L 284.45 33.422 L 396.078 145.05 L 396.078 270.632 L 368.171 270.632 L 368.171 163.655 L 265.845 163.655 L 265.845 61.329 L 126.31 61.329 L 126.31 377.609 L 317.008 377.609 L 317.008 405.516 L 126.31 405.516 Z M 432.357 405.981 L 372.822 346.446 L 372.822 404.586 L 344.915 404.586 L 344.915 298.539 L 450.962 298.539 L 450.962 326.446 L 392.357 326.446 L 451.892 385.981 L 432.357 405.981 Z M 126.31 377.609 L 126.31 61.329 L 126.31 377.609 Z"
		{fill}
	/>

	<text style={textStyle} x="167.651" y="317.898">R</text>
</svg>
