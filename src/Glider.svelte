<script lang="ts">
  import type {ComponentType} from 'svelte'
  import type {GliderProps, GliderMethods, MakeGliderProps} from './Glider.d.ts'
  import {onMount, afterUpdate, onDestroy as onUnmount} from 'svelte'
  import GliderJs from 'glider-js'
  import Container from './Container.svelte'

  export let id: string
  export let hasArrows: boolean
  export let hasDots: boolean
  export let scrollToSlide: number
  export let scrollToPage: number

  /**
   * The number of slides to show in container
   * If this value is set to auto, it will be
   * automatically calculated based upon the number
   * of items able to fit within the container viewport.
   * This requires setting the itemWidth option.
   *
   * @default 1
   */
  export let slidesToShow: number | "auto"
  /**
   * The number of slides to scroll when arrow navigation
   * is used. If this value is set to auto, it will match
   * the value of slidesToScroll.
   *
   * @default 1
   */
  export let slidesToScroll: number | "auto"
  /** This value is ignored unless slidesToShow is set to auto, in which it is then required. */
  export let itemWidth: number
  /**
   * This prevents resizing items to fit when slidesToShow is set to auto.
   * NOTE: This will yield fractional slides if your container is not sized appropriately
   */
  export let exactWidth: boolean
  /**
   * If true, Glider.js will lock to the nearest slide on resizing of the window
   */
  export let resizeLock: boolean
  /**
   * If true, Glider.js will scroll to the beginning/end when its respective endpoint is reached
   */
  export let rewind: boolean
  /**
   * An aggravator used to control animation speed. Higher is slower!
   *
   * @default 0.5
   */
  export let duration: number
  /** An string containing the dot container selector */
  export let dots: GliderJs.Selector | null
  /** An object containing the prev/next arrows selectors */
  export let arrows: {
    prev: GliderJs.Selector | null
    next: GliderJs.Selector | null
  }

  /**
   * If true, the list can be scrolled by click and dragging with the mouse
   *
   * @default false
   */
  export let draggable: boolean
  /**
   * How much to aggravate the velocity of the mouse dragging
   *
   * @default 3.3
   */
  export let dragVelocity: number

  /**
   * Whether or not to release the scroll events from the container
   *
   *  @default false
   */
  export let scrollPropagate: boolean

  /**
   * If true, Glider.js will scroll to the nearest slide after any scroll interactions.
   *
   * @default false
   */
  export let scrollLock: boolean

  /**
   * Whether or not Glider.js should skip wrapping its children with a "glider-track" <div>.
   * NOTE: If true, Glider.js will assume that the "glider-track" element has been added manually. All slides must be children of the track element.
   *
   * @default false
   */
  export let skipTrack: boolean
  /**
   * how long to wait after scroll event before locking,
   * if too low, it might interrupt normal scrolling
   *
   * @default 250
   */
  export let scrollLockDelay: number

  /**
   * An object containing custom settings per provided breakpoint.
   * Glider.js breakpoints are mobile-first
   * be conscious of your ordering,
   */
  export let responsive: BreakPoint[]

  /**
   * Replace container html element
   */
  export let containerComponent: ComponentType
  export let containerElement: string

  /** use any custom easing function, compatible with most easing plugins */
  export let easing: (x: number, t: number, b: number, c: number, d: number) => number

  /** Called after Glider.js is first initialized */
  export let onLoad: (event: CustomEvent) => void
  /** Called whenever a Glider.js paging animation is complete */
  export let onAnimated: (event: CustomEvent) => void
  /** Called whenever a Glider.js animation is complete */
  export let onRemove: (event: CustomEvent) => void
  /** Called whenever a slide a shown. Passed an object containing the slide index */
  export let onSlideVisible: (event: CustomEvent) => void
  /** Called whenever Glider.js refreshes it"s elements or settings */
  export let onRefresh: (event: CustomEvent) => void
  /** Called whenever an item is added to Glider.js */
  export let onAdd: (event: CustomEvent) => void
  /** Called whenever a Glider.js is destroyed */
  export let onDestroy: (event: CustomEvent) => void
  /** Called whenever a slide a hidden. Passed an object containing the slide index */
  export let onSlideHidden: (event: CustomEvent) => void

  const getGliderProps: () => GliderProps = () => {
    const gliderProps = {id, hasArrows, hasDots, scrollToSlide, scrollToPage, slidesToShow, slidesToScroll, itemWidth, exactWidth, resizeLock, rewind, duration, dots, arrows, draggable, dragVelocity, scrollPropagate, scrollLock, skipTrack, scrollLockDelay, responsive, containerComponent, containerElement, easing, onLoad, onAnimated, onRemove, onSlideVisible, onRefresh, onAdd, onDestroy, onSlideHidden}
    for (let key in gliderProps) {
      if (gliderProps[key] === undefined)
        delete gliderProps[key]
    }
    return gliderProps
  }

  const getRestProps: () => GliderProps = () => {
    const restProps = getGliderProps()
    for (let key of ['id', 'containerComponent', 'containerElement', 'hasArrows', 'arrows', 'hasDots', 'dots', 'scrollToSlide', 'scrollToPage', 'skipTrack', 'onLoad', 'onSlideVisible', 'onAnimated', 'onRemove', 'onRefresh', 'onAdd', 'onDestroy', 'onSlideHidden'])
      delete restProps[key]
    return restProps
  }

  const makeGliderOptions: (
    props: MakeGliderProps & {
      nextButtonEl: HTMLElement | null
      prevButtonEl: HTMLElement | null
      dotsEl: HTMLElement | null
    }
  ) => GliderJs.Options = ({
    arrows,
    hasArrows,
    dots,
    hasDots,
    nextButtonEl,
    prevButtonEl,
    dotsEl,
    ...restProps
  }) => ({
    ...restProps,
    skipTrack: true,
    arrows:
      (hasArrows && {
        next: (arrows && arrows.next) || nextButtonEl,
        prev: (arrows && arrows.prev) || prevButtonEl
      }) ||
      undefined,
    dots: (hasDots && dots) || dotsEl || undefined
  })

  let prevButtonRef: HTMLElement
  let nextButtonRef: HTMLElement
  let dotsRef:       HTMLElement
  let elementRef:    HTMLElement
  let gliderJs:      GliderMethods

  export const getGliderJs = () => gliderJs

  // bind event listeners
  const addEventListener = (
    event: string,
    fn: ((e: CustomEvent) => void) | undefined
  ): void => {
    if (elementRef && (typeof fn === "function")) {
      elementRef.addEventListener(event, fn)
    }
  }

  // unbind event listeners
  const removeEventListener = (
    event: string,
    fn: ((e: CustomEvent) => void) | undefined
  ) => {
    if (elementRef && (typeof fn === "function")) {
      elementRef.removeEventListener(event, fn)
    }
  }

  let previousEventListeners

  const addEventListeners = (removeOnly = false) => {
    if (previousEventListeners) {
      for (let event in previousEventListeners)
        removeEventListener(event, previousEventListeners[event])
    }

    if (removeOnly) {
      previousEventListeners = undefined
      return
    }

    previousEventListeners = {
      "glider-slide-visible": onSlideVisible?.bind(null),
      "glider-animated": onAnimated?.bind(null),
      "glider-remove": onRemove?.bind(null),
      "glider-refresh": onRefresh?.bind(null),
      "glider-add": onAdd?.bind(null),
      "glider-destroy": onDestroy?.bind(null),
      "glider-slide-hidden": onSlideHidden?.bind(null)
    }

    for (let event in previousEventListeners)
      addEventListener(event, previousEventListeners[event])
  }

  onMount(() => {
    if (elementRef && !gliderJs) {
      const restProps = getRestProps()

      gliderJs = new GliderJs(
        elementRef,
        makeGliderOptions({
          ...restProps,
          arrows,
          hasArrows,
          dots,
          hasDots,
          nextButtonEl: nextButtonRef,
          prevButtonEl: prevButtonRef,
          dotsEl: dotsRef,
        })
      ) as GliderMethods

      if (onLoad) {
        onLoad.call(
          gliderJs,
          new CustomEvent("glider-loaded", {
            detail: { target: elementRef }
          })
        )
      }

      if (scrollToSlide) {
        gliderJs.scrollItem(scrollToSlide - 1)
      } else if (scrollToPage) {
        gliderJs.scrollItem(scrollToPage - 1, true)
      }

      addEventListeners(false)
    }
  })

  const onPropsUpdate = () => {
    if (gliderJs) {
      const restProps = getRestProps()

      gliderJs.setOption(
        makeGliderOptions({
          ...restProps,
          arrows,
          hasArrows,
          dots,
          hasDots,
          nextButtonEl: nextButtonRef,
          prevButtonEl: prevButtonRef,
          dotsEl: dotsRef
        }),
        true
      )
      gliderJs.refresh(true)
    }
  }

  $: onPropsUpdate(hasArrows, hasDots, slidesToShow, slidesToScroll, itemWidth, exactWidth, resizeLock, rewind, duration, dots, arrows, draggable, dragVelocity, scrollPropagate, scrollLock, scrollLockDelay, responsive, easing)

  const onEventListenerUpdate = addEventListeners.bind(null, false)

  $: onEventListenerUpdate(onAdd, onAnimated, onDestroy, onRefresh, onRemove, onSlideHidden, onSlideVisible)

  afterUpdate(() => {
    gliderJs?.refresh(true)
  })

  onUnmount(() => {
    addEventListeners(true)

    gliderJs?.destroy()
  })
</script>

<Container {containerComponent} {containerElement}>
  {#if hasArrows && !arrows}
    <button
      type="button"
      class="glider-prev"
      aria-label="Previous"
      bind:this={prevButtonRef}
    >
      <slot name="iconLeft">«</slot>
    </button>
  {/if}

  <div id={id} bind:this={elementRef} class={$$props.class}>
    {#if skipTrack}
      <slot />
    {:else}
      <div><slot /></div>
    {/if}
  </div>

  {#if hasDots && !dots}
    <div bind:this={dotsRef} />
  {/if}

  {#if hasArrows && !arrows}
    <button
      type="button"
      class="glider-next"
      aria-label="Next"
      bind:this={nextButtonRef}
    >
      <slot name="iconRight">»</slot>
    </button>
  {/if}
</Container>
