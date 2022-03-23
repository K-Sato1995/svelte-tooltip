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
		bottom: { xAxis: -50, yAxis: 0, top: 15, left: 0 },
		left: { xAxis: -110, yAxis: -50, top: 0, left: -15 },
		right: { xAxis: 0, yAxis: -50, top: 0, left: 15 }
	};

	const { xAxis, yAxis, top, left } = placeMap[place];
</script>

<div
	style="top: {mouseY + top}px; left: {mouseX + left}px; transform: translate({xAxis}%, {yAxis}%);"
	class="tooltip {place}"
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

	.top::after {
		content: ' ';
		position: absolute;
		top: 100%; /* At the bottom of the tooltip */
		left: 50%;
		margin-left: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: black transparent transparent transparent;
	}

	.bottom::after {
		content: ' ';
		position: absolute;
		bottom: 100%; /* At the top of the tooltip */
		left: 50%;
		margin-left: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: transparent transparent black transparent;
	}

	.right::after {
		content: ' ';
		position: absolute;
		top: 50%;
		right: 100%; /* To the left of the tooltip */
		margin-top: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: transparent black transparent transparent;
	}
	
	.left::after {
		content: ' ';
		position: absolute;
		top: 50%;
		left: 100%; /* To the right of the tooltip */
		margin-top: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: transparent transparent transparent black;
	}
</style>
