<script lang="ts">
	import tooltip from '$lib';
	import SvelteTooltip from 'svelte-tooltip';

	let config = {
		body: 'This is a tooltip comment',
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
		<div class="wrapper__tooltip-container__tooltip-box" use:SvelteTooltip={config}>
			Hover On Me
		</div>
		<div class="wrapper__tooltip-container__tooltip-box" use:tooltip={config}>DevHover On Me</div>
		<div class="wrapper__tooltip-container__options">
			Options
			<h2>{config.effect}</h2>
			<button on:click={handleChange} name="effect" value="solid">Solid</button>
			<button on:click={handleChange} name="effect" value="float">Float</button>

			<h2>{config.place}</h2>
			<button on:click={handleChange} name="place" value="top">Top</button>
			<button on:click={handleChange} name="place" value="bottom">Bottom</button>
			<button on:click={handleChange} name="place" value="right">Right</button>
			<button on:click={handleChange} name="place" value="left">Left</button>

			<h2>{config.type}</h2>
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
		font-family: Helvetica, Arial, sans-serif;
		font-size: 16px;
		letter-spacing: 1.4px;
	}
	.wrapper {
		border: solid 2px blue;
	}
	.wrapper__header {
		border-bottom: solid 1px blue;
		width: 100%;
		height: 60px;
		display: flex;
		justify-content: center;
	}
	.wrapper__header__title {
	}

	.wrapper__tooltip-container {
		/* width: 600px;
		height: 400px; */
		border: solid 1px red;
		margin: 0 auto;
	}

	.wrapper__tooltip-container__options {
		border: solid 1px green;
	}
	.wrapper__tooltip-container__tooltip-box {
		border: solid 1px;
		width: 100px;
		height: 100px;
		border-radius: 50%;
		margin: 0 auto;
		padding: 1rem;
		text-align: center;
	}
</style>
