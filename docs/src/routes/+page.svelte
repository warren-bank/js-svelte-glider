<svelte:head>
  <title>svelte-glider - Svelte wrapper for Glider.js - A fast, lightweight carousel alternative.</title>
</svelte:head>

<script lang="ts">
  import Examples from '$lib/Examples.svelte'

  import '$lib/assets/css/style.css'
  import '$lib/assets/css/glider.css'
  import '$lib/assets/css/theme.css'
  import '$lib/assets/css/perspective.css'

  import npm_logo from '$lib/assets/img/npm.png'
  import  gh_logo from '$lib/assets/img/github.png'
</script>

<div class="hero">
  <h1>Svelte Glider</h1>
  <p>
    A
    <a
      href="https://svelte.dev/"
      target="_blank"
      rel="noreferrer noopener"
    >
      Svelte</a
    >
    wrapper for
    <a
      href="https://github.com/NickPiscitelli/Glider.js/"
      target="_blank"
      rel="noreferrer noopener"
    >
      Glider.js
    </a>
  </p>
  <p class="buttons">
    <a
      href="https://www.npmjs.com/package/@warren-bank/svelte-glider"
      class="button npm"
    >
      <img
        width="82"
        height="32"
        src={npm_logo}
        style="vertical-align: text-top"
        alt="npm logo"
      />
    </a>
    <a
      href="https://github.com/warren-bank/js-svelte-glider"
      class="button github"
    >
      <img
        width="78"
        height="32"
        src={gh_logo}
        style="vertical-align: text-top"
        alt="GitHub logo"
      />
    </a>
  </p>
</div>
<div class="content">
  <div class="container">
    <h2>Usage</h2>
    <pre><code>
&lt;script lang="ts"&gt;
  import Glider from '@warren-bank/svelte-glider'
  import 'glider-js/glider.min.css'
&lt;/script&gt;

&lt;Glider
  draggable
  hasArrows
  hasDots
  slidesToShow=&lbrace;2&rbrace;
  slidesToScroll=&lbrace;1&rbrace;
&gt;
  &lt;Pane&gt;1&lt;/Pane&gt;
  &lt;Pane&gt;2&lt;/Pane&gt;
  &lt;Pane&gt;3&lt;/Pane&gt;
  &lt;Pane&gt;4&lt;/Pane&gt;
  &lt;Pane&gt;5&lt;/Pane&gt;
&lt;/Glider&gt;
</code></pre>
  </div>
</div>
<div id="app" class="app">
  <Examples />
</div>
<footer>
  <div>Released under the GPLv2 License</div>
  <div>
    Copyright © 2024
    <a href="https://github.com/warren-bank">Warren Bank</a>
  </div>
</footer>
