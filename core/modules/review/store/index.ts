import { Module } from 'vuex'
import actions from './actions'
import mutations from './mutations';
import RootState from '@vue-storefront/core/types/RootState';
import ReviewState from '../types/ReviewState';

export const reviewStore: Module<ReviewState, RootState> = {
  namespaced: true,
  state: {
    items: [],
    review_count_collection: [
      { product_Id: null, review_Count: null , rating_Count: null }
   ]
  },
  actions,
  mutations
}
