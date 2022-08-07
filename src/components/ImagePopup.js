function ImagePopup(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.card.name && 'popup_is-active'}`}>
      <div className="popup__card-image">
        <button className="popup__close" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
        <img src={props.card.link} alt={props.card.name} className="popup__image" />
        <p className="popup__image-title">{props.card.name}</p>
      </div>
    </div>
  )
}

export default ImagePopup;