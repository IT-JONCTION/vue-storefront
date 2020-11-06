import { prepareQuery } from '@vue-storefront/core/modules/catalog/queries/common'

export const homepageStore = {
  namespaced: true,
  state: {
    new_collection: [],
    bestsellers: [],
    block_one_products: [],
    block_two_products: [],
    block_three_products: []
  },
  actions: {
    async blockOneProducts({ commit, dispatch }) {
      const response = await dispatch('product/findProducts', {
         query: prepareQuery({ filters: { 
           key: "category_ids",
            value: { 'in': [4374, 4395, 4396, 4397, 4412, 4401, 4402, 4404, 4405, 4406, 4407, 4411, 4408, 4409, 4410, 4413, 4414, 4415, 4416, 4417, 4418, 4419, 4420, 4421, 4436, 4651, 4665, 4666, 4660, 4661]
            } } }),
        size: 8,
        sort: 'created_at:desc'
      }, { root: true })

      commit('SET_BLOCKONEPRODUCTS', response.items)
    }
   /* async fetchNewCollection({ commit, dispatch }) {
      const newProductsQuery = prepareQuery({ queryConfig: 'newProducts' })

      const newProductsResult = await dispatch('product/list', {
        query: newProductsQuery,
        size: 8,
        sort: 'created_at:desc'
      }, { root: true })
      const configuredProducts = await dispatch(
        'category-next/configureProducts',
        {
          products: newProductsResult.items
        }, { root: true })
      commit('SET_NEW_COLLECTION', configuredProducts)
    },
    async loadBestsellers({ commit, dispatch }) {
      const response = await dispatch('product/list', {
        query: prepareQuery({ queryConfig: 'bestSellers' }),
        size: 8,
        sort: 'created_at:desc'
      }, { root: true })

      commit('SET_BESTSELLERS', response.items)
    },
    async blockTwoProducts({ commit, dispatch }) {
      const response = await dispatch('product/findProducts', {
        query: prepareQuery({ filters: { key: "manufacturer", value: { 'eq': "63" } } }),
        size: 8,
        sort: 'created_at:desc'
      }, { root: true })

      commit('SET_BLOCKTWOPRODUCTS', response.items)
    },
    async blockThreeProducts({ commit, dispatch }) {
      const response = await dispatch('product/findProducts', {
        query: prepareQuery({ filters: { key: "engine_make", value: { 'eq': "115" } } }),
        size: 8,
        sort: 'created_at:desc'
      }, { root: true })

      commit('SET_BLOCKTHREEPRODUCTS', response.items)
    }*/
  },
  mutations: {
    SET_BLOCKONEPRODUCTS(state, products) {
      state.block_one_products = products
    }
   /* SET_NEW_COLLECTION(state, products) {
      state.new_collection = products || []
    },
    SET_BESTSELLERS(state, bestsellers) {
      state.bestsellers = bestsellers
    }, 
    SET_BLOCKTWOPRODUCTS(state, products) {
      state.block_two_products = products
    },
    SET_BLOCKTHREEPRODUCTS(state, products) {
      state.block_three_products = products
    }*/
  },
  getters: {
    getBlockOneProducts(state) {
      return state.block_one_products
    }
   /* getEverythingNewCollection(state) {
      return state.new_collection
    },
    getBestsellers(state) {
      return state.bestsellers
    },
    getBlockTwoProducts(state) {
      return state.block_two_products
    },
    getBlockThreeProducts(state) {
      return state.block_three_products
    }*/
  }
}
