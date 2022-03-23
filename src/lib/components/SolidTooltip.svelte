<script lang="ts">
  export let body: string
  export let place: string
  export let targetDOMRect

  console.log(targetDOMRect)
  const { left, top, right, bottom, height, width } = targetDOMRect

  const offset = 15
  
	const placeMap = {
		top: { xAxis: -50, yAxis: 0, top: (top - height / 2) - offset, left: left + width / 2 },
    bottom: { xAxis: -50, yAxis: 0, top: top + height + offset, left: left + width / 2 },
		left: { xAxis: -100, yAxis: 50, top: top, left: left - offset },
		right: { xAxis: 0, yAxis: 50, top: top, left: left + width + offset}
	};

  const { xAxis, yAxis, top:topPos, left:leftPos } = placeMap[place];
</script>

<!-- <div
  style="left: {right + 15}px; top: {top + (height / 2)}px;"
	class="tooltip-solid {place}"
> -->

<div
  style="left: {leftPos}px; top: {topPos}px; transform: translate({xAxis}%, {yAxis}%);"
	class="tooltip-solid {place}"
>
	{body}
</div>

<style>
	.tooltip-solid {
		--main-bg-color: rgba(20, 19, 24, 0.9);
	}
  .tooltip-solid {
		background-color: var(--main-bg-color);
		color: #fff;
		opacity: 1;
		padding: 1em;
		border-radius: 4px;
    white-space: nowrap;
    display: inline;
    position: absolute;
    
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
