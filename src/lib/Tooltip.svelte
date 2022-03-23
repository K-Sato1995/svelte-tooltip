<script lang="ts">
	import type { TooltipOffset, TooltipPlace } from '$lib/types';
	export let body;
	export let mouseX;
	export let mouseY;
	export let place: TooltipPlace;
	export let offset: TooltipOffset;

	const { top, left } = offset;

	const placeMap = {
		top: { xAxis: -50, yAxis: -110 },
		bottom: { xAxis: -50, yAxis: 10 },
		left: { xAxis: -110, yAxis: -50 },
		right: { xAxis: 10, yAxis: -50 }
	};
</script>

<div
	style="top: {mouseY + top}px; left: {mouseX + left}px; transform: translate({placeMap[place]
		.xAxis}%, {placeMap[place].yAxis}%);"
	class="tooltip"
>
	{body}
</div>

<style>
	.tooltip {
		border: solid 1px;
		position: absolute;
		padding: 4px;
		background: #fff;
		white-space: nowrap;
	}
</style>
