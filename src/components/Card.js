function Card({onCardClick, card}) {
  function handleClick() {
    onCardClick(card);
  } 
  return(
    <li className="gallery__element">
      <button type="button" className="gallery__delete" aria-label="Удалить"></button>
      <div className="gallery__container">
        <a href="#" className="gallery__link" onClick={handleClick}>
          <img className="gallery__picture" src={card.link} alt={card.name}/>
        </a>
      </div>
      <div className="gallery__card">
        <h2 className="gallery__title">{card.name}</h2>
        <div className="gallery__like-info">
          <button type="button" className="gallery__like" aria-label="Лайк"></button>
          <p className="gallery__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  ) 
}

export default Card;