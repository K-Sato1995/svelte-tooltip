<script lang="ts">
	import { tooltip as devTooltip } from '$lib/tooltip';
	import tooltip from 'svelte-tooltip';

	const tooltipConfig = {
		body: 'ToolTipName',
		// type:
		// effect:
		offset: { top: 10, left: 30 }
	};
</script>

<h1 use:devTooltip={tooltipConfig}>Hello World</h1>
<h1 use:tooltip={tooltipConfig}>Package</h1>

<!-- 
  react-tooltip
  props {
    place: top | right | bottom | left,
    type: dark | success | warning | errror | info | light
    effect: solid | float
    offset: { top: 10, left: 10 }
  }
 -->
<style>
	/* .box {
		border: solid 1px;
		width: 400px;
		height: 400px;
	} */
</style>
