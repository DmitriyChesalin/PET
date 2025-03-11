import React, { useState } from "react";
import MySlider from "./Slider/MySlider";
import "./order.css"
import Modal from "./Modal";

function App() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <h2>Тайский рай</h2>
      <h2 className="adress">Адрес: г. Москва, ул. имени Том-Ям Тайского, д. 1</h2>
      <MySlider />
      <div className="orderBox">
        <button onClick={handleOpen} className="orderButton">
          забронировать столик
        </button>
        <Modal isOpen={open} onClose={handleClose}>
          <h3>чтобы забронировать стол, позвоните по номеру +7 499 999 999</h3>
        </Modal>
      </div>
    </div>

  )
}
export default App;
