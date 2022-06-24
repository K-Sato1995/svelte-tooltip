import type { SvelteComponent } from 'svelte';
import Tooltip from './Tooltip.svelte';
import type { TooltipConifg } from './types';

const defaultConfig: TooltipConifg = {
	body: '',
	bodyAsHTML: false,
	place: 'right',
	effect: 'float',
	type: 'dark',
	style: ''
};

export const tooltip = (node, props: TooltipConifg) => {
	let tooltipComp: SvelteComponent;

	const handleMouseOver = (event: MouseEvent) => {
		const bodyAsHTML = props?.bodyAsHTML ?? defaultConfig.bodyAsHTML;
		const place = props?.place ?? defaultConfig.place;
		const type = props?.type ?? defaultConfig.type;
		const style = props?.style ?? defaultConfig.style;
		const effect = props?.effect ?? defaultConfig.effect;

		tooltipComp = new Tooltip({
			props: {
				mouseX: event.pageX,
				mouseY: event.pageY,
				config: {
					body: props.body,
					bodyAsHTML,
					place,
					effect,
					style,
					type
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
