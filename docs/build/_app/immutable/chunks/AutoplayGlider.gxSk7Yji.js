const n=`<script context="module">
  const example = "AutoplayGlider"
<\/script>

<script lang="ts">
  import type {SvelteComponent} from 'svelte'
  import {onMount, onDestroy} from 'svelte'

  import type {GliderMethods} from '..'
  import Glider from '..'
  import Details from './lib/Details.svelte'

  const INTERVAL: number = 5000
  const MAX:      number = 11
  let timer:      number = 0

  let gliderRef:  SvelteComponent
  let gliderJs:   GliderMethods

  const startTimer = () => {
    timer = setInterval(
      () => {
        let index = gliderJs.page
        if (index < MAX) {
          index += 1
        } else {
          index = 0
        }
        gliderJs.scrollItem(index, false)
      },
      INTERVAL
    )
  }

  const stopTimer = () => {
    if (timer > 0) {
      clearInterval(timer)
      timer = -1
    }
  }

  onMount(() => {
    gliderJs = gliderRef?.getGliderJs()

    if (gliderJs && !timer)
      startTimer()
  })

  onDestroy(stopTimer)
<\/script>

<div class="container">
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
//# sourceMappingURL=AutoplayGlider.gxSk7Yji.js.map
