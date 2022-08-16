import PopupWithForm from "./PopupWithForm";

function PopupEditProfile({isOpen, onClose, onSubmit}) {
  return(
    <PopupWithForm 
      name='edit' 
      title='Редактировать профиль' 
      buttonName='Сохранить' 
      isOpen={isOpen} 
      onClose={onClose}
      onSubmit={onSubmit}>
      <div className="popup__label">
        <input 
          className="popup__input popup__input_type_name" 
          type="text" 
          placeholder="Имя" 
          name="name" 
          minLength="2" 
          maxLength="40" 
          required
          id="input-name" />
        <span className="popup__error-message input-name-error"></span>
      </div>
      <div className="popup__label">
        <input 
          className="popup__input popup__input_type_about" 
          type="text" 
          placeholder="О себе" 
          name="about" 
          minLength="2" 
          maxLength="200" 
          required
          id="input-about" />
        <span className="popup__error-message input-about-error"></span>
      </div>
    </PopupWithForm>
  )
} 

export default PopupEditProfile;