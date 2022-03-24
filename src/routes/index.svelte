<script lang="ts">
	import tooltip from '$lib';

	let config = {
		body: 'Tooltip body',
		effect: 'float',
		place: 'right',
		type: 'dark',
		style: ''
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
	<div class="wrapper__header"><h1 class="wrapper__header__title">@sato0130/svelte-tooltip</h1></div>
	<div class="wrapper__tooltip-container">
		<div class="wrapper__tooltip-container__tooltip-box" use:tooltip={config}>Hover Me</div>

		<div class="wrapper__tooltip-container__options">
			<h3 class="wrapper__tooltip-container__options__title">Effect:</h3>
			<div class="wrapper__tooltip-container__options__button-list">
				<button on:click={handleChange} name="effect" value="solid" disabled>Solid(Not Implemented yet)</button>
				<button class:active={config.effect === "float"} on:click={handleChange} name="effect" value="float">Float(Default)</button>
			</div>

			<h3 class="wrapper__tooltip-container__options__title">Place:</h3>
			<div class="wrapper__tooltip-container__options__button-list">
				<button class:active={config.place === "top"} on:click={handleChange} name="place" value="top">Top</button>
				<button class:active={config.place === "bottom"}  on:click={handleChange} name="place" value="bottom">Bottom</button>
				<button class:active={config.place === "right"}  on:click={handleChange} name="place" value="right">Right(Default)</button>
				<button class:active={config.place === "left"}  on:click={handleChange} name="place" value="left">Left</button>
			</div>

			<h3 class="wrapper__tooltip-container__options__title">Type:</h3>
			<div class="wrapper__tooltip-container__options__button-list">
				<button class:active={config.type === "dark"} on:click={handleChange} name="type" value="dark">Dark(Default)</button>
				<button class:active={config.type === "success"} on:click={handleChange} name="type" value="success">Success</button>
				<button class:active={config.type === "error"} on:click={handleChange} name="type" value="error">Error</button>
				<button class:active={config.type === "warning"} on:click={handleChange} name="type" value="warning">Warning</button>
				<button class:active={config.type === "info"}  on:click={handleChange} name="type" value="info">Info</button>
			</div>
		</div>
	</div>

	<div class="wrapper__extra-info">
		<p class="wrapper__extra-info-sentence">
			You can also <b>set a svelte component as the body of your tooltip</b> and <b>customise the style</b>.
			Check <a href="https://svelte.dev/repl/868fdbead6c54d8492891f69d090ee1c?version=3.46.4" target="_blank">Here</a> for those usages.
	</p>
	</div>
</div>

<style>
	:root {
		--main-color: #2583FD;
		--secondary-color: #6A7281;
		--border-color: #e5e7eb;
		font-family: Helvetica, Arial, sans-serif;
		font-size: 16px;
		letter-spacing: 1.4px;
	}

	button {
		background-color: #fff;
		border: solid 1px var(--border-color);
		border-radius: 5px;
		cursor: pointer;
		padding: 10px;
		letter-spacing: 1.4px;
		font-weight: bold;
	}

	.active {
		color: #fff;
		background-color: var(--main-color);
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
		margin: 0 auto;
		padding: 2rem;
	}

	.wrapper__tooltip-container__tooltip-box {
		border: solid 2px var(--main-color);
		width: 300px;
		border-radius: 10px;
		margin: 0 auto;
		padding: 1rem;
		margin-bottom: 1rem;
		text-align: center;
	}

	.wrapper__tooltip-container__options {
		padding: 1rem;
	}
	
	.wrapper__tooltip-container__options__title {
		font-size: 1.2rem;
	}
	.wrapper__tooltip-container__options__button-list {
		border-bottom: solid 1px var(--border-color);
		padding-bottom: 1rem;
	}

	.wrapper__tooltip-container__options__button-list > button {
		margin-right:  0.5rem;
		margin: 0.5rem 0.5rem 0.5rem 0;
	}

	.wrapper__extra-info {
		padding: 0 2rem 2rem 2rem;
	}

	.wrapper__extra-info-sentence {
		padding: 0 1rem;
		line-height: 30px;
	}

	.wrapper__extra-info-sentence > a{
		color: var(--main-color)
	} 


</style>
