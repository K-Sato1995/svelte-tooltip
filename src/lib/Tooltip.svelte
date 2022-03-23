<script lang="ts">
	import type { TooltipOffset } from '$lib/types';

	export let body;
	export let mouseX;
	export let mouseY;
	export let offset: TooltipOffset;

	const { top, left } = offset;
</script>

<div style="top: {mouseY + top}px; left: {mouseX + left}px" class="tooltip">
	{body}
</div>

<style>
	.tooltip {
		border: solid 1px;
		position: absolute;
		padding: 4px;
		background: #fff;
	}
</style>
