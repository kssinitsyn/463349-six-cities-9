import { ReviewsListType } from '../../../types/ReviewsType';
import ReviewsItem from '../ReviewsItem/ReviewsItem';

function ReviewsList({reviews}: ReviewsListType) {
  return (
    <ul className="reviews__list">
      {reviews.map((item) => <ReviewsItem key={item.id} itemData={item}/>)}
    </ul>
  );
}

export default ReviewsList;
