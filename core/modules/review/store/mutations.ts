import { MutationTree } from 'vuex'
import * as types from './mutation-types'
import ReviewState from '../types/ReviewState'

const mutations: MutationTree<ReviewState> = {
  [types.REVIEW_UPD_REVIEWS] (state, items) {
    state.items = items
  },
  [types.REVIEW_UPD_PRODUCT_REVIEWS] (state, product_Id  ) {
    if( product_Id != null ) {
      const index = state.review_count_collection.findIndex(item => item.product_Id === product_Id.split(':')[0]);
      if (index !== -1) {
        state.review_count_collection[index].review_Count = product_Id.split(':')[1];  
        state.review_count_collection[index].rating_Count = product_Id.split(':')[2];        
      }
      else{
        state.review_count_collection.push( { product_Id: product_Id.split(':')[0], review_Count: product_Id.split(':')[1] , rating_Count:product_Id.split(':')[2] } )
      } 
    }
  }, 
}

export default mutations
