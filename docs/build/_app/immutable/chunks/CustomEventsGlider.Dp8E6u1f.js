const n=`<script context="module">
  const example = "CustomEventsGlider"
<\/script>

<script lang="ts">
  import Glider  from '..'
  import Details from './lib/Details.svelte'

  let message: string | null = null
  let timer:   number = 0

  const MSG_TIMEOUT: number = 5000

  const updateMessage = (subject: string, value: any) => {
    if (timer > 0) {
      clearTimeout(timer)
      timer = 0
    }
    message = subject + ((value || (value === 0)) ? \`: \${JSON.stringify(value, null, 2)}\` : '')
    timer   = setTimeout(() => {message = null}, MSG_TIMEOUT)
  }
<\/script>

<style>
  div.container > h5 {text-align: left; color: #f96743;}
</style>

<div class="container">
  {#if message}
    <h5>{message}</h5>
  {/if}
  <Glider
    class="glider-container"
    draggable
    hasDots
    slidesToShow={3}
    onLoad={        (e) => {updateMessage('Loaded',        [e.detail.target.tagName, ...e.detail.target.classList].join('.'))}}
    onSlideVisible={(e) => {updateMessage('Slide Visible', e.detail.slide)}}
    onSlideHidden={ (e) => {updateMessage('Slide Hidden',  e.detail.slide)}}
    onRefresh={     ( ) => {updateMessage('Refresh')}}
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
//# sourceMappingURL=CustomEventsGlider.Dp8E6u1f.js.map
