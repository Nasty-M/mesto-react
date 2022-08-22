import { useEffect, useState } from 'react';
import { api } from '../utils/Api'; 
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useContext } from "react";

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardDelete, cards, onCardLike}) {
  
  const currentUser = useContext(CurrentUserContext);

  return (
    <>
      <section className="profile">
        <div className="profile__info">
          <a className="profile__overlay" href="#" onClick={onEditAvatar}>
            <img className="profile__avatar" src={currentUser.avatar} alt="аватар пользователя" />
          </a>
          <div className="profile__user">
            <div className="profile__edited">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button className="profile__button-edit"  type="button" aria-label="Редактировать" onClick={onEditProfile}></button> 
            </div>
            <p className="profile__about">{currentUser.about}</p>
          </div>
        </div>
        <button className="profile__button-add" type="button" aria-label="кнопка добавить" onClick={onAddPlace}></button>
      </section>

      <section className="gallery">
        <ul className="gallery__elements">
          {cards.map((card) => (
            <Card 
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
    </>
  )
}

  

export default Main;
