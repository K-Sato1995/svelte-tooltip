<script lang="ts">
	import { tooltip as devTooltip } from '$lib/tooltip';
	import type { ToolTipConifg } from '$lib/types';
	import SvelteTooltip from 'svelte-tooltip';

	const tooltipConfig: ToolTipConifg = {
		body: 'testbody',
		effect: 'float',
		place: 'right',
		type: 'success'
	};
</script>

<h1 class="box" use:devTooltip={tooltipConfig}>Hello World</h1>

<h1 use:SvelteTooltip={tooltipConfig}>Packfage</h1>

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
	.box {
		border: solid 1px;
		width: 400px;
		margin: 0 auto;
		margin-top: 300px;
		height: 100px;
	}
</style>
