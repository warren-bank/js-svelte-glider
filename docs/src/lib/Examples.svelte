<script lang="ts">
  import MultipleItemsGlider                   from "../../../examples/MultipleItemsGlider.svelte"
  import SingleItemGlider                      from "../../../examples/SingleItemGlider.svelte"
  import ResponsiveGlider                      from "../../../examples/ResponsiveGlider.svelte"
  import AutoplayGlider                        from "../../../examples/AutoplayGlider.svelte"
  import UpdatingPropsGlider                   from "../../../examples/UpdatingPropsGlider.svelte"
  import GliderJsMethods                       from "../../../examples/GliderJsMethods.svelte"
  import PerspectiveViewGlider                 from "../../../examples/PerspectiveViewGlider.svelte"
  import ScrollToGlider                        from "../../../examples/ScrollToGlider.svelte"
  import FractionalSlidesGlider                from "../../../examples/FractionalSlidesGlider.svelte"
  import CustomEventsGlider                    from "../../../examples/CustomEventsGlider.svelte"
  import CustomElementArrowsGliderSlots        from "../../../examples/CustomElementArrowsGliderSlots.svelte"
  import CustomElementArrowsGliderDomSelector  from "../../../examples/CustomElementArrowsGliderDomSelector.svelte"
  import RemountingGlider                      from "../../../examples/RemountingGlider.svelte"
  import SkipTrackGlider                       from "../../../examples/SkipTrackGlider.svelte"
  import DynamicDataGlider                     from "../../../examples/DynamicDataGlider.svelte"
</script>

<div class="demos">
  <h2>Demos</h2>
  <div class="item">
    <h3>
      <a id="multiple_items" href="#multiple_items" class="anchor">
        Multiple Items
      </a>
    </h3>
    <MultipleItemsGlider />
  </div>
  <div class="item">
    <h3>
      <a
        id="single_item_with_scroll_lock"
        href="#single_item_with_scroll_lock"
        class="anchor"
      >
        Single Item with Scroll Lock
      </a>
    </h3>
    <SingleItemGlider />
  </div>
  <div class="item">
    <h3>
      <a
        id="responsive_glider"
        href="#responsive_glider"
        class="anchor"
      >
        Responsive Glider
      </a>
    </h3>
    <ResponsiveGlider />
  </div>
  <div class="item">
    <h3>
      <a id="autoplay_glider" href="#autoplay_glider" class="anchor">
        Autoplay Glider
      </a>
    </h3>
    <AutoplayGlider />
  </div>
  <div class="item">
    <h3>
      <a id="updating_props" href="#updating_props" class="anchor">
        Updating Props
      </a>
    </h3>
    <UpdatingPropsGlider />
  </div>
  <div class="item">
    <h3>
      <a
        id="ref_exposes_glider"
        href="#ref_exposes_glider"
        class="anchor"
      >
        <code>Glider.js</code> instance methods
      </a>
    </h3>
    <GliderJsMethods />
  </div>
  <div class="item">
    <h3>
      <a id="perspective_view" href="#perspective_view" class="anchor">
        Perspective View
      </a>
    </h3>
    <PerspectiveViewGlider />
  </div>
  <div class="item">
    <h3>
      <a id="scroll_to_slide" href="#scroll_to_slide" class="anchor">
        Scroll to slide #5
      </a>
    </h3>
    <ScrollToGlider />
  </div>
  <div class="item">
    <h3>
      <a
        id="fractional_slides"
        href="#fractional_slides"
        class="anchor"
      >
        Fractional Slides
      </a>
    </h3>
    <FractionalSlidesGlider />
  </div>
  <div class="item">
    <h3>
      <a id="custom_events" href="#custom_events" class="anchor">
        Custom Events
      </a>
    </h3>
    <CustomEventsGlider />
  </div>
  <div class="item">
    <h3>
      <a
        id="custom_element_arrow"
        href="#custom_element_arrow"
        class="anchor"
      >
        Custom Element Arrows (w/ named slots)
      </a>
    </h3>
    <CustomElementArrowsGliderSlots />
  </div>
  <div class="item">
    <h3>
      <a
        id="custom_element_arrow"
        href="#custom_element_arrow"
        class="anchor"
      >
        Custom Element Arrows (w/ DOM query selector)
      </a>
    </h3>
    <CustomElementArrowsGliderDomSelector />
  </div>
  <div class="item">
    <h3>
      <a
        id="unmounting_remounting"
        href="#unmounting_remounting"
        class="anchor"
      >
        Unmounting / Remounting
      </a>
    </h3>
    <RemountingGlider />
  </div>
  <div class="item">
    <h3>
      <a id="skip_track" href="#skip_track" class="anchor">
        Skip Track
      </a>
    </h3>
    <SkipTrackGlider />
  </div>
  <div class="item">
    <h3>
      <a id="dynamic_data" href="#dynamic_data" class="anchor">
        Dynamic Data
      </a>
    </h3>
    <DynamicDataGlider />
  </div>
</div>
