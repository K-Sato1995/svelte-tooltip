import type { SvelteComponent } from 'svelte';
import Tooltip from './Tooltip.svelte';

const tooltip = (node, props) => {
	let tooltipComp: SvelteComponent;

	const { body, offset } = props;

	const handleMouseOver = (event) => {
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

	const handleMouseMove = (event) => {
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
			node.removeEventListner('mouseover', handleMouseOver);
			node.removeEventListner('mousemove', handleMouseMove);
			node.removeEventListner('mouseleave', handleMouseLeave);
		}
	};
};

export { tooltip };
