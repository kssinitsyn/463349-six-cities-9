import React from 'react';
import ReviewsForm from './ReviewsForm/ReviewsForm';
import ReviewsList from './ReviewsList/ReviewsList';
import {MainPropsType} from '../../types/MainPropsType';

function Reviews({isLogin}: MainPropsType) {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ReviewsList />
      {isLogin && <ReviewsForm />}
    </section>
  );
}

export default Reviews;
