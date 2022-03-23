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
		--main-bg-color: rgba(20, 19, 24, 0.9);
	}

	.tooltip {
		background-color: var(--main-bg-color);
		color: #fff;
		border: solid 1px;
		opacity: 1;
		position: absolute;
		padding: 1em;
		border-radius: 4px;
    white-space: nowrap;
	}

	.top::after {
		content: ' ';
		position: absolute;
		top: 100%;
		left: 50%;
		margin-left: -5px;
		border-width: 5px;
		border-style: solid;
		border-color:  var(--main-bg-color) transparent transparent transparent;
		opacity: 0.9;
	}

	.bottom::after {
		content: ' ';
		position: absolute;
		bottom: 100%;
		left: 50%;
		margin-left: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: transparent transparent  var(--main-bg-color) transparent;
	}

	.right::after {
		content: ' ';
		position: absolute;
		top: 50%;
		right: 100%;
		margin-top: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: transparent var(--main-bg-color) transparent transparent;
	}

	.left::after {
		content: ' ';
		position: absolute;
		top: 50%;
		left: 100%;
		margin-top: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: transparent transparent transparent  var(--main-bg-color);
	}
</style>
