import type { SvelteComponent } from 'svelte';

type TooltipPlace = 'top' | 'right' | 'bottom' | 'left';

type TooltipType = 'dark' | 'success' | 'warning' | 'error' | 'info';

type TooltipEffect = 'float' | 'solid';

interface ToolTipConifg {
	body: SvelteComponent | string;
	place?: Place;
	type?: TooltipType;
	effect?: TooltipEffect;
	style: string;
}

export type { TooltipPlace, TooltipType, TooltipEffect, TooltipOffset, ToolTipConifg };
