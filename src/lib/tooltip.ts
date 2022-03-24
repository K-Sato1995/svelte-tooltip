import type { SvelteComponent } from 'svelte';
import Tooltip from './Tooltip.svelte';
import type { ToolTipConifg } from './types';

const defaultConfig: ToolTipConifg = {
	body: '',
	place: 'right',
	effect: 'float',
	type: 'dark'
};

export const tooltip = (node, props: ToolTipConifg) => {
	let tooltipComp: SvelteComponent;

	const handleMouseOver = (event: MouseEvent) => {
		const place = props.place ? props.place : defaultConfig.place;
		const effect = props.effect ? props.effect : defaultConfig.effect;
		const type = props.type ? props.type : defaultConfig.type;
		const DOMRect = node.getBoundingClientRect();

		tooltipComp = new Tooltip({
			props: {
				targetDOMRect: DOMRect,
				mouseX: event.pageX,
				mouseY: event.pageY,
				config: {
					body: props.body,
					place: place,
					effect: effect,
					type: type
				}
			},
			target: document.body
		});
	};

	const handleMouseMove = (event: MouseEvent) => {
		tooltipComp.$set({ mouseX: event.pageX, mouseY: event.pageY });
	};

	const handleMouseLeave = () => {
		tooltipComp.$destroy();
	};

	node.addEventListener('mouseover', handleMouseOver);
	node.addEventListener('mousemove', handleMouseMove);
	node.addEventListener('mouseleave', handleMouseLeave);

	return {
		destroy() {
			node.removeEventListener('mouseover', handleMouseOver);
			node.removeEventListener('mousemove', handleMouseMove);
			node.removeEventListener('mouseleave', handleMouseLeave);
		},
		update(newConfig) {
			props = newConfig;
		}
	};
};
