import type { SvelteComponent } from 'svelte';
import Tooltip from './Tooltip.svelte';

export const tooltip = (node, props) => {
	let tooltipComp: SvelteComponent;

	const { body, offset } = props;

	const handleMouseOver = (event: MouseEvent) => {
		tooltipComp = new Tooltip({
			props: {
				body: body,
				mouseX: event.pageX,
				mouseY: event.pageY,
				offset: offset
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
