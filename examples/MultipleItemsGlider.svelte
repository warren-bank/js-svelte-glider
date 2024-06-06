<script context="module">
  const example = "MultipleItemsGlider"
</script>

<script lang="ts">
  import Glider  from '..'
  import Details from './lib/Details.svelte'
</script>

<div class="container">
  <Glider
    class="glider-container"
    draggable
    hasArrows
    hasDots
    slidesToShow={3}
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
