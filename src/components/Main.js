import { useEffect, useState } from 'react';
import { api } from '../utils/Api'; 
import Card from './Card';

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
  
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);


  useEffect(() => {
    api.getUserInfo()
    .then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    })
    .catch((err) => {
      console.log(`Ошибка ${err}. Запрос не выполнен`);
    })
  }, [])

  useEffect(() => {
    api.getInitialCards()
    .then((data) => {
      setCards(data);
    })
    .catch((err) => {
      console.log(`Ошибка ${err}. Запрос не выполнен`);
    })
  }, [])

  return (
    <>
      <section className="profile">
        <div className="profile__info">
          <a className="profile__overlay" href="#" onClick={onEditAvatar}>
            <img className="profile__avatar" src={userAvatar} alt="аватар пользователя" />
          </a>
          <div className="profile__user">
            <div className="profile__edited">
              <h1 className="profile__name">{userName}</h1>
              <button className="profile__button-edit"  type="button" aria-label="Редактировать" onClick={onEditProfile}></button> 
            </div>
            <p className="profile__about">{userDescription}</p>
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
                />
          ))}
        </ul>
      </section>
    </>
  )
}

export default Main;
