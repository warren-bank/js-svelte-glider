<script context="module">
  const example = "PerspectiveViewGlider"
</script>

<script lang="ts">
  import Glider  from '..'
  import Details from './lib/Details.svelte'
</script>

<div class="container">
  <Glider
    class="glider-perspective"
    draggable
    hasDots
    slidesToShow={5}
    slidesToScroll={1}
  >
    <div class="slide-outer">
      <span>1</span>
    </div>
    <div class="slide-outer">
      <span>2</span>
    </div>
    <div class="slide-outer">
      <span>3</span>
    </div>
    <div class="slide-outer">
      <span>4</span>
    </div>
    <div class="slide-outer">
      <span>5</span>
    </div>
    <div class="slide-outer">
      <span>6</span>
    </div>
    <div class="slide-outer">
      <span>7</span>
    </div>
    <div class="slide-outer">
      <span>8</span>
    </div>
    <div class="slide-outer">
      <span>9</span>
    </div>
    <div class="slide-outer">
      <span>10</span>
    </div>
    <div class="slide-outer">
      <span>11</span>
    </div>
    <div class="slide-outer">
      <span>12</span>
    </div>
  </Glider>
  <Details {example} />
</div>
