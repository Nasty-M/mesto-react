function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  } 
  return(
    <li className="gallery__element">
      <button type="button" className="gallery__delete" aria-label="Удалить"></button>
      <div className="gallery__container">
        <a href="#" className="gallery__link" onClick={handleClick}>
          <img className="gallery__picture" src={props.card.link} alt={props.card.name}/>
        </a>
      </div>
      <div className="gallery__card">
        <h2 className="gallery__title">{props.card.name}</h2>
        <div className="gallery__like-info">
          <button type="button" className="gallery__like" aria-label="Лайк"></button>
          <p className="gallery__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  ) 
}

export default Card;