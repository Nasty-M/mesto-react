import PopupWithForm from "./PopupWithForm";

function PopupEditAvatar({isOpen, onClose, onSubmit}) {
  return(
    <PopupWithForm 
      name='avatar' 
      title='Обновить аватар' 
      buttonName='Сохранить' 
      isOpen={isOpen} 
      onClose={onClose}
      onSubmit={onSubmit}>
      <div className="popup__label">
        <input 
          className="popup__input popup__input_type_avatar-link" 
          type="url" 
          placeholder="Ссылка на фото" 
          name="avatar"
          required
          id="input-avatar" />
        <span className="popup__error-message input-avatar-error"></span>
      </div>
    </PopupWithForm>
  )
} 

export default PopupEditAvatar;