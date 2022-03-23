<script lang="ts">
	import type { TooltipOffset, TooltipPlace, TooltipEffect } from '$lib/types';
	export let body;
	export let mouseX;
	export let mouseY;
	export let effect: TooltipEffect;
	export let place: TooltipPlace;
	export let targetDOMRect;
	export let offset: TooltipOffset;

	const { top: offsetTop, left: offsetLeft } = offset;

	// FLOAT: Relative to the mouse position
	const floatPlaceMap = {
		top: { xAxis: -50, yAxis: -100, top: -offsetTop, left: 0 },
		bottom: { xAxis: -50, yAxis: 0, top: offsetTop, left: 0 },
		left: { xAxis: -100, yAxis: -50, top: 0, left: -offsetLeft },
		right: { xAxis: 0, yAxis: -50, top: 0, left: offsetLeft }
	};

	const { xAxis: floatXAxis, yAxis: floatYAxis, top, left } = floatPlaceMap[place];

	// SOLID: Relative to the target DOM
	const { left: targetLeft, top: targetTop, height, width } = targetDOMRect;
	const solidPlaceMap = {
		top: {
			xAxis: -50,
			yAxis: 0,
			top: targetTop - height / 2 - offsetTop,
			left: targetLeft + width / 2
		},
		bottom: {
			xAxis: -50,
			yAxis: 0,
			top: targetTop + height + offsetTop,
			left: targetLeft + width / 2
		},
		left: { xAxis: -100, yAxis: 50, top: targetTop, left: targetLeft - offsetLeft },
		right: { xAxis: 0, yAxis: 50, top: targetTop, left: targetLeft + width + offsetLeft }
	};

	const { xAxis: solidXAxis, yAxis: solidYAxis, top: topPos, left: leftPos } = solidPlaceMap[place];
</script>

<div
	style={effect === 'float'
		? `top: ${mouseY + top}px; left: ${
				mouseX + left
		  }px; transform: translate(${floatXAxis}%, ${floatYAxis}%);`
		: `left: ${leftPos}px; top: ${topPos}px; transform: translate(${solidXAxis}%, ${solidYAxis}%)`}
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
		border-color: var(--main-bg-color) transparent transparent transparent;
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
		border-color: transparent transparent var(--main-bg-color) transparent;
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
		border-color: transparent transparent transparent var(--main-bg-color);
	}
</style>
