import type { SvelteComponent } from 'svelte';
import Tooltip from './Tooltip.svelte';
import type { TooltipConifg } from './types';

const defaultConfig: TooltipConifg = {
	body: '',
	place: 'right',
	effect: 'float',
	type: 'dark',
	style: ''
};

export const tooltip = (node, props: TooltipConifg) => {
	let tooltipComp: SvelteComponent;

	const handleMouseOver = (event: MouseEvent) => {
		const place = props.place ? props.place : defaultConfig.place;
		const type = props.type ? props.type : defaultConfig.type;
		const customStyle = props.style ? props.style : defaultConfig.style;

		tooltipComp = new Tooltip({
			props: {
				mouseX: event.pageX,
				mouseY: event.pageY,
				config: {
					body: props.body,
					place: place,
					effect: defaultConfig.effect,
					style: customStyle,
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
