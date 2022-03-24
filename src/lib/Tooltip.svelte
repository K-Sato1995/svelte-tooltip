<script lang="ts">
	import type { ToolTipConifg } from '$lib/types';
	export let mouseX: number;
	export let mouseY: number;
	export let config: ToolTipConifg;
	export let targetDOMRect;

	const { type, effect, place, body } = config;
	const offset = { offsetTop: 15, offsetLeft: 15 };

	// FLOAT: Relative to the mouse position
	const floatPlaceMap = {
		top: { xAxis: -50, yAxis: -100, top: -offset.offsetTop, left: 0 },
		bottom: { xAxis: -50, yAxis: 0, top: offset.offsetTop, left: 0 },
		left: { xAxis: -100, yAxis: -50, top: 0, left: -offset.offsetLeft },
		right: { xAxis: 0, yAxis: -50, top: 0, left: offset.offsetLeft }
	};

	const { xAxis: floatXAxis, yAxis: floatYAxis, top, left } = floatPlaceMap[place];

	// SOLID: Relative to the target DOM
	const { left: targetLeft, top: targetTop, height, width } = targetDOMRect;
	const solidPlaceMap = {
		top: {
			xAxis: -50,
			yAxis: 0,
			top: targetTop - height / 2 - offset.offsetTop,
			left: targetLeft + width / 2
		},
		bottom: {
			xAxis: -50,
			yAxis: 0,
			top: targetTop + height + offset.offsetTop,
			left: targetLeft + width / 2
		},
		left: { xAxis: -100, yAxis: 50, top: targetTop, left: targetLeft - offset.offsetLeft },
		right: { xAxis: 0, yAxis: 50, top: targetTop, left: targetLeft + width + offset.offsetLeft }
	};

	const { xAxis: solidXAxis, yAxis: solidYAxis, top: topPos, left: leftPos } = solidPlaceMap[place];
</script>

<div
	style={effect === 'float'
		? `top: ${mouseY + top}px; left: ${
				mouseX + left
		  }px; transform: translate(${floatXAxis}%, ${floatYAxis}%);`
		: `left: ${leftPos}px; top: ${topPos}px; transform: translate(${solidXAxis}%, ${solidYAxis}%)`}
	class="svelte-tooltip {type} {place}"
>
	{body}
</div>

<style>
	.svelte-tooltip {
		--main-bg-color: rgba(20, 19, 24, 0.9);
		--success-bg-color: rgba(40, 167, 70, 0.9);
		--error-bg-color: rgba(220, 52, 70, 0.9);
		--warning-bg-color: rgba(252, 200, 34, 0.9);
		--info-bg-color: rgba(35, 162, 184, 0.9);
	}

	.svelte-tooltip {
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

	.success {
		background-color: var(--success-bg-color);
	}
	.error {
		background-color: var(--error-bg-color);
	}
	.warning {
		background-color: var(--warning-bg-color);
	}
	.info {
		background-color: var(--info-bg-color);
	}

	.right[class~='success']::after {
		border-color: transparent var(--success-bg-color) transparent transparent;
	}
	.right[class~='error']::after {
		border-color: transparent var(--error-bg-color) transparent transparent;
	}
	.right[class~='warning']::after {
		border-color: transparent var(--warning-bg-color) transparent transparent;
	}
	.right[class~='info']::after {
		border-color: transparent var(--info-bg-color) transparent transparent;
	}

	.left[class~='success']::after {
		border-color: transparent transparent transparent var(--success-bg-color);
	}
	.left[class~='error']::after {
		border-color: transparent transparent transparent var(--error-bg-color);
	}
	.left[class~='warning']::after {
		border-color: transparent transparent transparent var(--warning-bg-color);
	}
	.left[class~='info']::after {
		border-color: transparent transparent transparent var(--info-bg-color);
	}

	.bottom[class~='success']::after {
		border-color: transparent transparent var(--success-bg-color) transparent;
	}
	.bottom[class~='error']::after {
		border-color: transparent transparent var(--error-bg-color) transparent;
	}
	.bottom[class~='warning']::after {
		border-color: transparent transparent var(--warning-bg-color) transparent;
	}
	.bottom[class~='info']::after {
		border-color: transparent transparent var(--info-bg-color) transparent;
	}

	.top[class~='success']::after {
		border-color: var(--success-bg-color) transparent transparent transparent;
	}
	.top[class~='error']::after {
		border-color: var(--error-bg-color) transparent transparent transparent;
	}
	.top[class~='warning']::after {
		border-color: var(--warning-bg-color) transparent transparent transparent;
	}
	.top[class~='info']::after {
		border-color: var(--info-bg-color) transparent transparent transparent;
	}
</style>
