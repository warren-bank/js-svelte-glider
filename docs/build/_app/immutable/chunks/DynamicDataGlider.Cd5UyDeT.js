const n=`<script context="module">
  const example = "DynamicDataGlider"
<\/script>

<script lang="ts">
  import Glider  from '..'
  import Details from './lib/Details.svelte'

  let randomValues: Array<number>

  const updateRandomValues = () => {
    const count = getRandomInt(1, 12)
    const array = (new Array(count)).fill()

    randomValues = array.map(() => getRandomInt(-100, 100))
  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive

  const getRandomInt = (min: number, max: number): number => {
    return Math.floor((Math.random() * (max - min + 1)) + min)
  }

  updateRandomValues()
<\/script>

<div class="container">
  <button type="button" on:click={updateRandomValues}>
    Randomize
  </button>
  <Glider
    class="glider-container"
    draggable
    hasDots
    slidesToShow={1}
    scrollLock
  >
    {#each randomValues as value (value)}
      <div class="slide">
        <span>{value}</span>
      </div>
    {/each}
  </Glider>
  <Details {example} />
</div>
`;export{n as default};
//# sourceMappingURL=DynamicDataGlider.Cd5UyDeT.js.map
