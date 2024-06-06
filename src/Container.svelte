<script lang="ts">
  import type {ComponentType} from 'svelte'

  export let containerComponent: ComponentType
  export let containerElement: string
</script>

{#if containerComponent}
  <svelte:component this={containerComponent} class="glider-contain">
    <slot />
  </svelte:component>
{:else}
  <svelte:element this={containerElement || 'div'} class="glider-contain">
    <slot />
  </svelte:element>
{/if}
