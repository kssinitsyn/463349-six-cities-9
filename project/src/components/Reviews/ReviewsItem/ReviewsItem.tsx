import React from 'react';
import { ReviewsItemType } from '../../../types/ReviewsType';
import ruLocale from 'date-fns/locale/ru';
import { format } from 'date-fns';

type ReviewProps = {
  itemData: ReviewsItemType;
}

function ReviewsItem({itemData}: ReviewProps) {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={itemData.user.avatarUrl} width="54" height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          {itemData.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${(itemData.rating / 5) * 100  }%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {itemData.comment}
        </p>
        <time className="reviews__time" dateTime={itemData.date}>
          {format(new Date(itemData.date), 'MMMM yyyy', {
            locale: ruLocale,
          })}
        </time>
      </div>
    </li>
  );
}

export default ReviewsItem;
