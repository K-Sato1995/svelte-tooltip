import type { SvelteComponent } from 'svelte';
import Tooltip from './Tooltip.svelte';
import type { ToolTipConifg } from './types';

const defaultConfig: ToolTipConifg = {
	body: '',
	place: 'right',
	effect: 'float',
	type: 'dark',
};

export const tooltip = (node, props: ToolTipConifg) => {
	let tooltipComp: SvelteComponent;

	const place = props.place ? props.place : defaultConfig.place;
	const effect = props.effect ? props.effect : defaultConfig.effect;
	const DOMRect = node.getBoundingClientRect();

	const handleMouseOver = (event: MouseEvent) => {
		tooltipComp = new Tooltip({
			props: {
				body: props.body,
				mouseX: event.pageX,
				mouseY: event.pageY,
				place: place,
				effect: effect,
				targetDOMRect: DOMRect
			},
			target: document.body
		});
	};

	const handleMouseMove = (event: MouseEvent) => {
		tooltipComp.$set({
			mouseX: event.pageX,
			mouseY: event.pageY
		});
	};

	function handleMouseLeave() {
		tooltipComp.$destroy();
	}

	node.addEventListener('mouseover', handleMouseOver);
	node.addEventListener('mousemove', handleMouseMove);
	node.addEventListener('mouseleave', handleMouseLeave);

	return {
		destroy() {
			node.removeEventListener('mouseover', handleMouseOver);
			node.removeEventListener('mousemove', handleMouseMove);
			node.removeEventListener('mouseleave', handleMouseLeave);
		}
	};
};
