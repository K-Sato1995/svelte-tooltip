import type { SvelteComponent } from 'svelte';
import Tooltip from './Tooltip.svelte';
import type { ToolTipConifg } from './types';

const defaultConfig: ToolTipConifg = {
	body: '',
	place: 'right',
	effect: 'float',
	type: 'dark',
	offset: { top: 0, left: 0 }
};

export const tooltip = (node, props: ToolTipConifg) => {
	let tooltipComp: SvelteComponent;

	const offset = props.offset ? props.offset : defaultConfig.offset;
	const place = props.place ? props.place : defaultConfig.place;
	const DOMRect = node.getBoundingClientRect()
	
	const handleMouseOver = (event: MouseEvent) => {
		tooltipComp = new Tooltip({
			props: {
				body: props.body,
				mouseX: event.pageX,
				mouseY: event.pageY,
				offset: offset,
				place: place,
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
