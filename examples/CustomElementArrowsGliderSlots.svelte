<script context="module">
  const example = "CustomElementArrowsGliderSlots"
</script>

<script lang="ts">
  import Glider  from '..'
  import Details from './lib/Details.svelte'
</script>

<style>
  :global(button.glider-prev {left:  -51px;})
  :global(button.glider-next {right: -51px;})

  button.custom-arrow {width: 51px; padding: 0;}
</style>

<div class="container">
  <Glider
    class="glider-container"
    draggable
    hasArrows
    hasDots
    slidesToShow={1}
    scrollLock
  >

    <!-- custom left arrow -->
    <button
      slot="iconLeft"
      type="button"
      aria-label="Previous"
      class="custom-arrow prev"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.075 34.075">
        <path
          fill="#010002"
          d="M24.57 34.075a1.964 1.964 0 0 1-1.396-.577L8.11 18.432a1.972 1.972 0 0 1 0-2.79L23.174.578a1.973 1.973 0 1 1 2.791 2.79l-13.67 13.669 13.67 13.669a1.974 1.974 0 0 1-1.395 3.369z"
        />
      </svg>
    </button>

    <!-- custom right arrow -->
    <button
      slot="iconRight"
      type="button"
      aria-label="Next"
      class="custom-arrow next"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 185.343 185.343">
        <path
          fill="#010002"
          d="M51.707 185.343a10.692 10.692 0 0 1-7.593-3.149 10.724 10.724 0 0 1 0-15.175l74.352-74.347L44.114 18.32c-4.194-4.194-4.194-10.987 0-15.175 4.194-4.194 10.987-4.194 15.18 0l81.934 81.934c4.194 4.194 4.194 10.987 0 15.175l-81.934 81.939a10.678 10.678 0 0 1-7.587 3.15z"
        />
      </svg>
    </button>

    <!-- slides -->
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
