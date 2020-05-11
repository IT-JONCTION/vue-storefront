<template>
  <button
    type="button"
    :aria-label="$t('Open search panel')"
    class="bg-cl-capi-light brdr-none cl-white inline-flex"
    data-testid="openSearchPanel"
  >
    <i class="material-icons">search</i>
  </button>
</template>

<script>
import SearchIcon from '@vue-storefront/core/compatibility/components/blocks/Header/SearchIcon'

export default {
  mixins: [SearchIcon]
}
</script>
