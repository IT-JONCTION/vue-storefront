<template>
  <div class="header">
    <header
      class="fixed w-100 brdr-bottom-1 brdr-cl-secondary"
      :class="{ 'is-visible': navVisible }"
    >
      <div class="p30 pb15 bg-cl-capi-blue">
        <div class="row between-xs middle-xs" v-if="!isCheckoutPage || isThankYouPage">
          <!-- <div class="col-md-4 col-xs-2 middle-xs">
            <div>
              <hamburger-icon class="p15 icon bg-cl-secondary pointer" />
            </div>
          </div> -->
          <div class="col-md-2 col-xs-4 pt5">
            <div>
              <logo width="auto" height="41px" />
            </div>
          </div>
          <div class="col-md-7 col-xs-2">
            <search-bar class="p15 hidden-xs pointer" />
          </div>
          <div class="col-md-3 col-xs-2 end-xs">
            <div class="inline-flex right-icons">
              <contact-icon class="p15 mx5 icon hidden-xs pointer" />
              <account-icon class="p15 mx5 icon hidden-xs pointer" />
              <microcart-icon class="p15 mx5 icon pointer" />
            </div>
          </div>
        </div>
        <!-- <div class="row between-xs middle-xs px15 py5" v-if="isCheckoutPage && !isThankYouPage">
          <div class="col-xs-5 col-md-3 middle-xs">
            <div>
              <router-link
                :to="localizedRoute('/')"
                class="cl-tertiary links"
              >
                {{ $t('Return to shopping') }}
              </router-link>
            </div>
          </div>
          <div class="col-xs-2 col-md-6 center-xs">
            <logo width="auto" height="41px" />
          </div>
          <div class="col-xs-5 col-md-3 end-xs">
            <div>
              <a
                v-if="!currentUser"
                href="#"
                @click.prevent="gotoAccount"
                class="cl-tertiary links"
              >{{ $t('Login to your account') }}</a>
              <span v-else>{{ $t('You are logged in as {firstname}', currentUser) }}</span>
            </div>
          </div>
        </div> -->
      </div>
      <div class="bg-cl-capi-medium inline-flex w-100">
        <div class="col-md-6 col-xs-2 middle-xs py10">
          <hamburger-icon class="p15 pointer px30" />
        </div>
        <div class="col-md-6 py10 px30 flex jc-end ai-center">
          <Feedbacks />
        </div>
      </div>
    </header>
    <div class="header-placeholder" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CurrentPage from 'theme/mixins/currentPage'
import AccountIcon from 'theme/components/core/blocks/Header/AccountIcon'
// import CompareIcon from 'theme/components/core/blocks/Header/CompareIcon'
import HamburgerIcon from 'theme/components/core/blocks/Header/HamburgerIcon'
import Logo from 'theme/components/core/Logo'
import MicrocartIcon from 'theme/components/core/blocks/Header/MicrocartIcon'
import ContactIcon from 'theme/components/core/blocks/Header/ContactIcon'
import Feedbacks from 'theme/components/core/blocks/Header/Feedbacks'
// import SearchIcon from 'theme/components/core/blocks/Header/SearchIcon'
import SearchBar from 'theme/components/core/blocks/Header/SearchBar'
// import WishlistIcon from 'theme/components/core/blocks/Header/WishlistIcon'

export default {
  name: 'Header',
  components: {
    AccountIcon,
    // CompareIcon,
    HamburgerIcon,
    Logo,
    MicrocartIcon,
    ContactIcon,
    Feedbacks,
    // SearchIcon,
    // WishlistIcon,
    SearchBar
  },
  mixins: [CurrentPage],
  data () {
    return {
      navVisible: true,
      isScrolling: false,
      scrollTop: 0,
      lastScrollTop: 0,
      navbarHeight: 54
    }
  },
  computed: {
    ...mapState({
      isOpenLogin: state => state.ui.signUp,
      currentUser: state => state.user.current
    }),
    isThankYouPage () {
      return this.$store.state.checkout.isThankYouPage
        ? this.$store.state.checkout.isThankYouPage
        : false
    }
  },
  beforeMount () {
    window.addEventListener(
      'scroll',
      () => {
        this.isScrolling = true
      },
      { passive: true }
    )

    setInterval(() => {
      if (this.isScrolling) {
        this.hasScrolled()
        this.isScrolling = false
      }
    }, 250)
  },
  methods: {
    gotoAccount () {
      this.$bus.$emit('modal-toggle', 'modal-signup')
    },
    hasScrolled () {
      this.scrollTop = window.scrollY
      if (
        this.scrollTop > this.lastScrollTop &&
        this.scrollTop > this.navbarHeight
      ) {
        this.navVisible = false
      } else {
        this.navVisible = true
      }
      this.lastScrollTop = this.scrollTop
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~theme/css/variables/colors';
@import '~theme/css/helpers/functions/color';
$color-icon-hover: color(primary, $colors-border);

header {
  height: 100px;
  top: -55px;
  z-index: 3;
  // padding: 30px 30px 15px 30px;
  transition: top 0.2s ease-in-out;
  &.is-visible {
    top: 0;
  }
}
.icon {
  &:hover {
    border: 1px solid $color-icon-hover;
    border-radius: 5px;
  }
  &:focus {
    background-color: $color-icon-hover;
    opacity: 1;
  }
}
.right-icons {
  //for edge
  float: right;
}
.header-placeholder {
  height: 54px;
}
.links {
  text-decoration: underline;
}
@media (max-width: 767px) {
  .row.middle-xs {
    margin: 0 -15px;

    &.py5 {
      margin: 0;
    }
  }
  .col-xs-2:first-of-type {
    padding-left: 0;
  }
  .col-xs-2:last-of-type {
    padding-right: 0;
  }
  a,
  span {
    font-size: 12px;
  }
}
</style>
