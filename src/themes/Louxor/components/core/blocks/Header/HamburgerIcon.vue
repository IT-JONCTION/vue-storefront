<template>
  <button
    type="button"
    class="bg-cl-capi-light cl-white brdr-none flex brdr-input uppercase bold"
    @click="openSidebarMenu"
    :aria-label="$t('Open menu')"
    data-testid="menuButton"
  >
    <div class="weight-700 lh25">
      Catégories
    </div>
    <i class="material-icons">dehaze</i>
  </button>
</template>

<script>
import HamburgerIcon from '@vue-storefront/core/compatibility/components/blocks/Header/HamburgerIcon'

export default {
  mixins: [HamburgerIcon]
}
</script>
