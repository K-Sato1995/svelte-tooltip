type Place = 'top' | 'right' | 'bottom' | 'left';

type TooltipType = 'dark' | 'success' | 'warning' | 'error' | 'info';

type TooltipEffect = 'float' | 'solid';

type TooltipOffset = {
	top: number;
	left: number;
};

interface ToolTipConifg {
	body: string;
	place?: Place;
	type?: TooltipType;
	effect?: TooltipEffect;
	offset?: TooltipOffset;
}

export type { Place, TooltipType, TooltipEffect, TooltipOffset, ToolTipConifg };
