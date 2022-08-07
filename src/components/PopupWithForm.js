function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_is-active'}`}>
      <div className="popup__content">
        <button className="popup__close" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
        <h3 className="popup__title">{props.title}</h3>
        <form className="popup__form" name={props.name} onSubmit={props.onSubmit}>
          {props.children}
          <button className="popup__button popup__button-save" type="submit">{props.buttonName}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;