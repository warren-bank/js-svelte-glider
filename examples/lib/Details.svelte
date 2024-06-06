<script lang="ts">
  export let example: string
  let code: string

  const init = async () => {
    code = (await import(`../${example}.svelte?raw`)).default

    code = code.replaceAll("from '..'", "from '@warren-bank/svelte-glider'")
  }

  init()
</script>

{#if code}
  <details>
    <summary>View Source Code</summary>
    <pre><code>{code}</code></pre>
  </details>
{/if}
