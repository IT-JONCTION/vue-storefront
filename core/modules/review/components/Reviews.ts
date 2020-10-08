import Review from '../types/Review'

export const Reviews = {
  name: 'Reviews',
  computed: {
    reviews (): Review[] {
      return this.$store.state.review.items.items
    },
    reviewCountCollection (): Review[] {
      return this.$store.state.review.review_count_collection
    }
  }
}
