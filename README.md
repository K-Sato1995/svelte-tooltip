# @sato0130/svelte-tooltip

Light weight svelte-action based tooltip.

## Demo

## Installation

```bash
$ npm i @sato0130/svelte-tooltip
```

or

```bash
$ yarn add @sato0130/svelte-tooltip
```

## Usage

1. Import `SvelteTooltip`.

```typescript
import SvelteTooltip from '@sato0130/svelte-tooltip';
```

2. Use `SvelteTooltip` in any element

You can see the other options below.

```svelte
<div use:SvelteTooltip={{body: "Tooltip content"}}>Hover Me</div>
```

## Options

| Name      | isRequired | type | Description |
| --- | ---|---|---|
| body      | true       | `string` or `SvelteComponent`       | Content in the tooltip       |
| place   | false        |`top`, `bottom`, `right` or `left`        | Place of the tooltip(Relative to the cursor)       |
| type   | false        |`dark`, `success`, `warning`, `error` or `info`| Tooltip theme        |
| style   | false        |`string`| custom style     |


## License

MIT