// App.jsx
import { useState } from 'react';
import ListingPost from "./components/ListingPost";
import Header from "./components/MainHeader";
function App() {
  const [showModal, setShowModal] = useState(false); // hide at first
  const onHideModal = () => {
    setShowModal(false);
};
  const onShowModal = () => {
    setShowModal(true);
}
  return (
    <>
    <Header onShowProp={onShowModal}/>
  <main>
  <ListingPost showModal={showModal} onHideProp={onHideModal}/>
  </main>
  </>);
}

export default App;
