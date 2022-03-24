# @sato0130/svelte-tooltip

![npm bundle size](https://img.shields.io/bundlephobia/minzip/@sato0130/svelte-tooltip)
![npm](https://img.shields.io/npm/v/@sato0130/svelte-tooltip?color=green)

Light weight svelte-action based tooltip.

## Demo

https://svelte-tooltip-k-sato1995.vercel.app/

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

2. Use `SvelteTooltip` in the element you want the tooltip to be on

You can see the other options below.

```svelte
<div use:SvelteTooltip={{body: "Tooltip content"}}>Hover Me</div>
```

## Options

| Name      | isRequired | type | Description |
| --- | ---|---|---|
| body      | true       | `string`, `SvelteComponent`       | Content in the tooltip       |
| place   | false        |`top`, `bottom`, `right`, `left`        | Place of the tooltip(Relative to the cursor)       |
| type   | false        |`dark`, `success`, `warning`, `error`, `info`| Tooltip theme        |
| style   | false        |`string`| custom style     |


## License

MIT