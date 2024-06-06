<script context="module">
  const example = "UpdatingPropsGlider"
</script>

<script lang="ts">
  import Glider  from '..'
  import Details from './lib/Details.svelte'

  let slidesToShow: number = 1
</script>

<div class="container">
  Number of slides:
  <select bind:value={slidesToShow}>
    {#each Array(4) as _, i}
      <option>{i+1}</option>
    {/each}
  </select>
  <Glider
    class="glider-container"
    draggable
    hasDots
    slidesToShow={slidesToShow}
    scrollLock
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
