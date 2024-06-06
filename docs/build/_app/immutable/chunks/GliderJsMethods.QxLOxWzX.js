const n=`<script context="module">
  const example = "GliderJsMethods"
<\/script>

<script lang="ts">
  import type {SvelteComponent} from 'svelte'
  import {onMount} from 'svelte'

  import type {GliderMethods} from '..'
  import Glider from '..'
  import Details from './lib/Details.svelte'

  let gliderRef:  SvelteComponent
  let gliderJs:   GliderMethods

  const randomize = () => {
    if (gliderJs) {
      const random = Math.floor(Math.random() * 12)
      gliderJs.scrollItem(random)
    }
  }

  onMount(() => {
    gliderJs = gliderRef?.getGliderJs()
  })
<\/script>

<div class="container">
  <button type="button" on:click={randomize}>
    Scroll to random item
  </button>
  <Glider
    class="glider-container"
    draggable
    hasDots
    slidesToShow={1}
    scrollLock
    bind:this={gliderRef}
  >
    <div class="slide">
      <span>1</span>
    </div>
    <div class="slide">
      <span>2</span>
    </div>
    <div class="slide">
      <span>3</span>
    </div>
    <div class="slide">
      <span>4</span>
    </div>
    <div class="slide">
      <span>5</span>
    </div>
    <div class="slide">
      <span>6</span>
    </div>
    <div class="slide">
      <span>7</span>
    </div>
    <div class="slide">
      <span>8</span>
    </div>
    <div class="slide">
      <span>9</span>
    </div>
    <div class="slide">
      <span>10</span>
    </div>
    <div class="slide">
      <span>11</span>
    </div>
    <div class="slide">
      <span>12</span>
    </div>
  </Glider>
  <Details {example} />
</div>
`;export{n as default};
//# sourceMappingURL=GliderJsMethods.QxLOxWzX.js.map
