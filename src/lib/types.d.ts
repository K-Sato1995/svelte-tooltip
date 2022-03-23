type TooltipPlace = 'top' | 'right' | 'bottom' | 'left';

type TooltipType = 'dark' | 'success' | 'warning' | 'error' | 'info';

type TooltipEffect = 'float' | 'solid';

interface ToolTipConifg {
	body: string;
	place?: Place;
	type?: TooltipType;
	effect?: TooltipEffect;
}

export type { TooltipPlace, TooltipType, TooltipEffect, TooltipOffset, ToolTipConifg };
