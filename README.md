# [svelte-glider](https://github.com/warren-bank/js-svelte-glider)

A [Svelte](https://svelte.dev/) wrapper for [Glider.js](https://github.com/NickPiscitelli/Glider.js/).

### [Demo](https://warren-bank.github.io/js-svelte-glider/docs/build/index.html)

## Quick Start

### Installation:

```sh
npm install "@warren-bank/svelte-glider"
```

### Usage

```html
<script lang="ts">
  import Glider from '@warren-bank/svelte-glider'

  import 'glider-js/glider.min.css'
  import '@warren-bank/svelte-glider/glider.defaults.css'
</script>

<Glider
  class="gradient-outline hide-scrollbar"
  draggable
  hasArrows
  hasDots
  slidesToShow={2}
  slidesToScroll={1}
>
  <div class="slide"><h1>1</h1></div>
  <div class="slide"><h1>2</h1></div>
  <div class="slide"><h1>3</h1></div>
  <div class="slide"><h1>4</h1></div>
  <div class="slide"><h1>5</h1></div>
  <div class="slide"><h1>6</h1></div>
  <div class="slide"><h1>7</h1></div>
  <div class="slide"><h1>8</h1></div>
  <div class="slide"><h1>9</h1></div>
  <div class="slide"><h1>10</h1></div>
  <div class="slide"><h1>11</h1></div>
  <div class="slide"><h1>12</h1></div>
</Glider>
```

### CSS

You may import the _Glider.js_ CSS:

```js
import 'glider-js/glider.min.css'
```

_Note that the `glider-js` module is a dependency of _this_ package. As such, your project can import its CSS file without needing to add `glider-js` as an explicit dependency._

_Note that this CSS only includes the minimal set of rules required for basic functionality. You will want to include additional style for proper appearance._

Additionally, _this_ package exposes a CSS file containing minimal appearance styling intended to provide sane defaults. The above [usage example](#usage) is styled by this CSS file:

```js
import '@warren-bank/svelte-glider/glider.defaults.css'
```

Though CSS bundling is recommended, if necessary, both of these CSS files could be included into an HTML document by external links:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/glider-js@1.7.9/glider.min.css"
/>

<link
  rel="stylesheet"
  href="https://unpkg.com/@warren-bank/svelte-glider@1.1.0/defaults/glider.defaults.css"
/>
```

### `Glider` Svelte component parameters

| Parameter          | Description                                                                                                                                                                                                                                                 |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                 | Add "id" attribute with specified value to DOM element used to initialize Glider.js                                                                                                                                                                         |
| hasArrows          | Show/hide arrows. (default = false)                                                                                                                                                                                                                         |
| hasDots            | Show/hide dots. (default = false)                                                                                                                                                                                                                           |
| scrollToSlide      | Starting slide (default = 0)                                                                                                                                                                                                                                |
| scrollToPage       | Starting page (default = 0)                                                                                                                                                                                                                                 |
| slidesToShow       | The number of slides to show in container. If this value is set to auto, it will be automatically calculated based upon the number of items able to fit within the container viewport. This requires setting the itemWidth option.                          |
| slidesToScroll     | The number of slides to scroll when arrow navigation is used. If this value is set to auto, it will match the value of slidesToScroll.                                                                                                                      |
| itemWidth          | This value is ignored unless slidesToShow is set to auto, in which it is then required.                                                                                                                                                                     |
| exactWidth         | This prevents resizing items to fit when slidesToShow is set to auto.                                                                                                                                                                                       |
| resizeLock         | If true, Glider.js will lock to the nearest slide on resizing of the window                                                                                                                                                                                 |
| rewind             | If true, Glider.js will scroll to the beginning/end when its respective endpoint is reached                                                                                                                                                                 |
| duration           | An aggravator used to control animation speed. Higher is slower. (default = 0.5)                                                                                                                                                                            |
| dots               | A string containing the dot container selector                                                                                                                                                                                                              |
| arrows             | An object containing the prev/next arrows selectors                                                                                                                                                                                                         |
| draggable          | If true, the list can be scrolled by click and dragging with the mouse. (default = false)                                                                                                                                                                   |
| dragVelocity       | How much to aggravate the velocity of the mouse dragging. (default = 3.3)                                                                                                                                                                                   |
| scrollPropagate    | Whether or not to release the scroll events from the container. (default = true)                                                                                                                                                                            |
| scrollLock         | If true, Glider.js will scroll to the nearest slide after any scroll interactions. (default = false)                                                                                                                                                        |
| skipTrack          | Whether or not Glider.js should skip wrapping its children with a 'glider-track' `<div>`. NOTE: If true, Glider.js will assume that the 'glider-track' element has been added manually. All slides must be children of the track element. (default = false) |
| scrollLockDelay    | How long (ms) to wait after scroll event before locking, if too low, it might interrupt normal scrolling. (default = 250)                                                                                                                                   |
| responsive         | An object containing custom settings per provided breakpoint. Glider.js breakpoints are mobile-first, be conscious of your ordering. Supported responsive settings are `slidesToShow`, `slidesToScroll`, `itemWidth`, and `duration`.                       |
| containerComponent | Replace container &lt;div&gt; with a Svelte component.                                                                                                                                                                                                      |
| containerElement   | Replace container &lt;div&gt; with a different HTML element.                                                                                                                                                                                                |
| easing             | Use any custom easing function, compatible with most easing plugins.                                                                                                                                                                                        |

### `Glider` Svelte component slots

| Slot               | Description                                                                                                                                                                                                                                                 |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| iconLeft           | Left arrow.  (default = '«'). Ignored when either: `hasArrows` is false, or `arrows.prev` parameter is defined.                                                                                                                                             |
| iconRight          | Right arrow. (default = '»')  Ignored when either: `hasArrows` is false, or `arrows.next` parameter is defined.                                                                                                                                             |

### Example: Arrows (parameter, CSS selectors)

```html
<Glider
  hasArrows
  arrows={{
    prev: '#buttonPrev',
    next: '#buttonNext'
  }}
>
  <!-- ... -->
</Glider>
```

_Note that if you have multiple Glider elements on the same page, you need to assign a different CSS selector to each Glider._

### Example: Arrows (parameter, DOM elements)

```html
<Glider
  hasArrows
  arrows={{
    prev: document.getElementById("prev"),
    next: document.getElementById("next")
  }}
>
  <!-- ... -->
</Glider>
```

### Example: Arrows (slots)

```html
<Glider
  hasArrows
>
  <button slot="iconLeft">Prev</button>
  <button slot="iconRight">Next</button>
  <!-- ... -->
</Glider>
```

### Responsive mode

You can set different settings for different viewport widths.

```html
<Glider
  slidesToShow={1}
  scrollLock
  responsive={[
    {
      breakpoint: 864,
      settings: {
        slidesToShow: 3,
      },
    },
  ]}
>
  <!-- ... -->
</Glider>
```

_Note that Glider.js is designed to be mobile-first, so the order of your breakpoints should be small-to-large._

### Example: Replace container (HTML element)

```html
<Glider
  containerElement="p"
>
  <!-- ... -->
</Glider>
```

### Example: Replace container (Svelte component)

```html
<script lang="ts">
  import {Blockquote} from 'flowbite-svelte'
</script>

<Glider
  containerComponent={Blockquote}
>
  <!-- ... -->
</Glider>
```

### Events

| Event          | Description                                                                   |
| -------------- | ----------------------------------------------------------------------------- |
| onLoad         | Called after Glider component is initialized.                                 |
| onAnimated     | Called whenever a Glider.js paging animation is complete                      |
| onRemove       | Called whenever a Glider.js animation is complete                             |
| onSlideVisible | Called whenever a slide a shown. Passed an object containing the slide index  |
| onRefresh      | Called whenever Glider.js refreshes it's elements or settings                 |
| onAdd          | Called whenever an item is added to Glider.js                                 |
| onDestroy      | Called whenever a Glider.js is destroyed                                      |
| onSlideHidden  | Called whenever a slide a hidden. Passed an object containing the slide index |

### Glider.js Instance Methods

To get access to the instance of _Glider.js_ used by a `Glider` Svelte component:

1. bind the `Glider` Svelte component to a local variable
2. wait until after the `onMount` component lifecycle event is called
3. get a reference to the instance of _Glider.js_ from the component method: `getGliderJs()`

```html
<script lang="ts">
  import {onMount} from 'svelte'

  let gliderRef
  let gliderJs

  onMount(() => {
    gliderJs = gliderRef.getGliderJs()
  })
</script>

<Glider
  bind:this={gliderRef}
>
  <!-- ... -->
</Glider>
```

### Perspective View

The CSS for the "Perspective View" [Demo](https://warren-bank.github.io/js-svelte-glider/docs/build/index.html) is not included in _Glider.js_ or this package. You can find it in [`perspective.css`](https://github.com/warren-bank/js-svelte-glider/blob/gh-pages/docs/src/lib/assets/css/perspective.css). Please do not file bugs for it as I do not want to support it.

### Examples

You may view the examples used in the _docs_ page in the [./examples](https://github.com/warren-bank/js-svelte-glider/tree/gh-pages/examples) directory.

## FAQs

### Can I customize the appearance of the dots/pagination elements?

You may customize the dots by overriding the CSS for `div.glider-dots` and `button.glider-dot`.

Alternatively, you may pass a CSS selector to the `dots` property to assign a DOM element as the container for the Glider's pagination. This allows you to override the CSS for `.glider-dots` using CSS specificity.

```
.my-dots-container.glider-dots {
  /* ... */
}
```

This is also possible when using CSS modules and allows you to have multiple Glider components on the same page, each with different styles.

```html
<div class={styles.banner}>
  <Glider
    dots={`.${style.dots}`}
    slidesToShow={1}
  >
    <!-- ... -->
  </Glider>
  <div class={style.dots} />
</div>
```

### Can I lazyload images on inactive slides?

The recommended approach for lazy loading images is to use the browser's `loading="lazy"` implementation. You can use the slide's index to know which images should have the attribute set.

### Which browsers are supported?

As `svelte-glider` is a wrapper for _Glider.js_, it should run on all modern browsers. Support for older browsers can be achieved by polyfilling `document.classList`, `window.requestAnimationFrame`, `Object.assign` and `CustomEvent`.

## Building

```sh
npm install

cd docs
npm install
npm run build

# serve ./build
```

## Legal

* copyright: [Warren Bank](https://github.com/warren-bank)
* license: [GPL-2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt)

## Thanks to

* [Nick Piscitelli](https://github.com/NickPiscitelli)
  - for his excellent [_Glider.js_](https://github.com/NickPiscitelli/Glider.js) library
* [Kevin Farrugia](https://github.com/kevinfarrugia)
  - for his [react-glider](https://github.com/kevinfarrugia/react-glider) ReactJS wrapper for Glider.js
  - although our two projects don't share any code, the excellent organization of his project allowed me to use his _docs_ and _examples_ as a starting point that significantly sped up my work. In fact, version 1.0 was published in less than one day.
