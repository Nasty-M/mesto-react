import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import { useEffect, useState } from 'react';
import PopupEditProfile from './PopupEditProfile';
import PopupAddPlace from './PopupAddPlace';
import PopupEditAvatar from './PopupEditAvatar';

function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});
  
    function handleEditAvatarClick() {
      setIsEditAvatarPopupOpen(true);
    };
    function handleEditProfileClick() {
      setIsEditProfilePopupOpen(true);
    };
    function handleAddPlaceClick() {
      setIsAddPlacePopupOpen(true);
    };
    function closeAllPopups() {
      setIsEditAvatarPopupOpen(false);
      setIsEditProfilePopupOpen(false);
      setIsAddPlacePopupOpen(false);
      setSelectedCard({});
    };
    function handleCardClick(card) {
      setSelectedCard(card)
    };
  
  return (
    <div className="page">
      <main className="content">
        <Header />
        <Main 
          onEditAvatar={handleEditAvatarClick} 
          onEditProfile={handleEditProfileClick} 
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}/> 
        <Footer />   
      </main>
      <ImagePopup 
        name='image' 
        card={selectedCard} 
        onClose={closeAllPopups}/>
      <PopupEditProfile isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
      <PopupAddPlace isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
      <PopupEditAvatar isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
