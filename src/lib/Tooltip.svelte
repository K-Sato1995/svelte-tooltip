<script lang="ts">
	import type { TooltipOffset, TooltipPlace } from '$lib/types';
	export let body;
	export let mouseX;
	export let mouseY;
	export let place: TooltipPlace;
	// export let offset: TooltipOffset;
	// const { top, left } = offset;

	const placeMap = {
		top: { xAxis: -50, yAxis: -110, top: -15, left: 0 },
		bottom: { xAxis: -50, yAxis: 0, top: 15, left: 0},
		left: { xAxis: -110, yAxis: -50, top: 0, left: -15 },
		right: { xAxis: 0, yAxis: -50, top: 0, left: 15 }
	};

	const {xAxis, yAxis, top, left} = placeMap[place]
</script>

<div
	style="top: {mouseY + top}px; left: {mouseX + left}px; transform: translate({xAxis}%, {yAxis}%);"
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
