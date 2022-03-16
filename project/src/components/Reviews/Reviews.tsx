import React from 'react';
import ReviewsForm from './ReviewsForm/ReviewsForm';
import ReviewsList from './ReviewsList/ReviewsList';
import {MainPropsType} from '../../types/MainPropsType';
import { ReviewsListType } from '../../types/ReviewsType';

function Reviews({isLogin, reviews}: MainPropsType & ReviewsListType) {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewsList reviews={reviews}/>
      {isLogin && <ReviewsForm />}
    </section>
  );
}

export default Reviews;
