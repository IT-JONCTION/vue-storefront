import EventBus from '@vue-storefront/core/compatibility/plugins/event-bus'
import { ActionTree } from 'vuex'
import { quickSearchByQuery } from '@vue-storefront/core/lib/search'
import RootState from '@vue-storefront/core/types/RootState'
import ReviewState from '../types/ReviewState'
import * as types from './mutation-types'
import i18n from '@vue-storefront/i18n'
import Review from '@vue-storefront/core/modules/review/types/Review'
import { createLoadReviewsQuery } from '@vue-storefront/core/modules/review/helpers'
import { ReviewsService } from '@vue-storefront/core/data-resolver'

const actions: ActionTree<ReviewState, RootState> = {
  async list (context, { productId, approved = true, start = 0, size = 50, entityType = 'review', sort = '', excludeFields = null, includeFields = null }) {
    const query = createLoadReviewsQuery({ productId, approved })

    const reviewResponse = await quickSearchByQuery({ query, start, size, entityType, sort, excludeFields, includeFields })
    context.commit(types.REVIEW_UPD_REVIEWS, reviewResponse)
  },
  async reviewCount (context, { productId, approved = true, start = 0, size = 50, entityType = 'review', sort = '', excludeFields = null, includeFields = null }) {
    const query            = createLoadReviewsQuery({ productId, approved })
    const reviewResponse   = await quickSearchByQuery({ query, start, size, entityType, sort, excludeFields, includeFields })
    var   reviewItemLength = reviewResponse.items.length;
    var   ratingStarCount  ="0";
    if( reviewItemLength > 0 ){
      var   tempRatingStarCount  = 0;
      for (let iLoop = 0; iLoop < reviewItemLength; iLoop++) {
        var tempsingleCount = ( reviewResponse.items[iLoop].ratings[0].value+reviewResponse.items[iLoop].ratings[1].value+reviewResponse.items[iLoop].ratings[2].value+reviewResponse.items[iLoop].ratings[3].value+reviewResponse.items[iLoop].ratings[4].value ) / 5 ;
        tempRatingStarCount = tempRatingStarCount + tempsingleCount
      }
      tempRatingStarCount   = tempRatingStarCount / reviewItemLength;
      ratingStarCount       = tempRatingStarCount.toFixed(2)
    }
    context.commit(types.REVIEW_UPD_PRODUCT_REVIEWS, (productId+":"+reviewResponse.items.length+":"+ratingStarCount)  );
   },
  async add (context, review: Review) {
    EventBus.$emit('notification-progress-start', i18n.t('Adding a review ...'))

    const isReviewCreated = await ReviewsService.createReview(review)
    EventBus.$emit('notification-progress-stop')

    if (isReviewCreated) {
      EventBus.$emit('clear-add-review-form')
    }

    return isReviewCreated
  }
}

export default actions
