<template>
  <div>
    <div class="search-input-group">
      <input
        ref="search"
        id="search"
        v-model="search"
        @input="makeSearch"
        @blur="$v.search.$touch()"
        class="search-panel-input"
        :placeholder="$t('Type what you are looking for...')"
        type="search"
        autofocus="true"
      >
      <div class="divtest bg-cl-capi-light">
        <i class="material-icons search-icon cl-white">search</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar'
}
</script>

<style scoped lang="scss">
.search-panel-input {
    width: 95%;
    border-radius: 10px 0 0 10px;
}
.divtest {
    display: inline-block;
    border-radius: 0 10px 10px 0;
    height: 44px;
    line-height: 44px;
    width: 44px;
}
</style>
