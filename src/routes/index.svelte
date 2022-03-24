<script lang="ts">
	import tooltip from '$lib';
	import SvelteTooltip from 'svelte-tooltip';

	let config = {
		body: 'This comment',
		effect: 'float',
		place: 'right',
		type: 'dark'
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		const newConfig = {
			...config,
			[name]: value
		};
		config = newConfig;
	};
</script>

<div class="wrapper">
	<div class="wrapper__header"><h1 class="wrapper__header__title">Svelte Tooltip</h1></div>
	<div class="wrapper__tooltip-container">
		<!-- <div class="wrapper__tooltip-container__tooltip-box" use:SvelteTooltip={config}>
			Hover On Me
		</div> -->
		<div class="wrapper__tooltip-container__tooltip-box" use:tooltip={config}>DevHover On Me</div>
		<div class="wrapper__tooltip-container__options">
			<h2>Effect: {config.effect}</h2>
			<button on:click={handleChange} name="effect" value="solid" disabled>Solid(Not Implemented yet)</button>
			<button on:click={handleChange} name="effect" value="float">Float</button>

			<h2>Place: {config.place}</h2>
			<button on:click={handleChange} name="place" value="top">Top</button>
			<button on:click={handleChange} name="place" value="bottom">Bottom</button>
			<button on:click={handleChange} name="place" value="right">Right</button>
			<button on:click={handleChange} name="place" value="left">Left</button>

			<h2>Type: {config.type}</h2>
			<button on:click={handleChange} name="type" value="dark">Dark</button>
			<button on:click={handleChange} name="type" value="success">Success</button>
			<button on:click={handleChange} name="type" value="error">Error</button>
			<button on:click={handleChange} name="type" value="warning">Warning</button>
			<button on:click={handleChange} name="type" value="info">Info</button>
		</div>
	</div>
</div>

<!-- 
  react-tooltip
  props {
    place: top | right | bottom | left,
    type: dark | success | warning | errror | info | light
    effect: solid | float
    offset: { top: 10, left: 10 }
  }
 -->
<style>
	:root {
		--main-color: #E6F3FF;
		--secondary-color: #6A7281;
		--border-color: #e5e7eb;
		font-family: Helvetica, Arial, sans-serif;
		font-size: 16px;
		letter-spacing: 1.4px;
	}
	.wrapper {
		border: solid 2px blue;
		margin: 0 !important;
	}

	.wrapper__header {
		border-bottom: solid 1px var(--border-color);
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.wrapper__header__title {
		font-size: 1.5rem;
	}

	.wrapper__tooltip-container {
		/* width: 600px;
		height: 400px; */
		/* border: solid 1px red;  */
		margin: 0 auto;
		padding: 2rem;
	}

	.wrapper__tooltip-container__options {
		border: solid 1px green;
	}
	.wrapper__tooltip-container__tooltip-box {
		border: solid 1px var(--secondary-color);
		width: 300px;
		/* height: 300px; */
		border-radius: 10px;
		margin: 0 auto;
		padding: 1rem;
		text-align: center;
	}
</style>
