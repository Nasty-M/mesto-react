import PopupWithForm from "./PopupWithForm";

function PopupAddPlace(props) {
  return(
    <PopupWithForm 
      name='add' 
      title='Новое место' 
      buttonName='Создать' 
      isOpen={props.isOpen} 
      onClose={props.onClose}
      onSubmit={props.onSubmit}>
      <div className="popup__label">
        <input 
          className="popup__input popup__input_type_place-title" 
          id="input-title" 
          type="text" 
          placeholder="Название" 
          name="name" 
          minLength="2" 
          maxLength="30" 
          required />
        <span className="popup__error-message input-title-error"></span>
      </div>
      <div className="popup__label">
        <input 
          className="popup__input popup__input_type_place-link" 
          type="url" 
          placeholder="Ссылка на картинку" 
          name="link"
          required
          id="input-link" />
        <span className="popup__error-message input-link-error"></span>
      </div>
    </PopupWithForm>
  )
} 

export default PopupAddPlace;