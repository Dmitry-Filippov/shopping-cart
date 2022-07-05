import { useState } from "react";
import "./Form.css";

const Form = ({ setItems, items }) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    setItems(items.concat({ id: id, name: name, price: price }));
    setId("");
    setName("");
    setPrice("");
  }

  function IdInput() {
    return (
      <input
        className="form__input"
        type="number"
        required
        name="id"
        placeholder="идентификатор товара"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
    );
  }

  function nameInput() {
    return (
      <input
        className="form__input"
        type="text"
        required
        name="name"
        placeholder="название  товара"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    );
  }

  function priceInput() {
    return (
      <input
        className="form__input"
        type="number"
        required
        name="price"
        placeholder="цена в рублях"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
    );
  }

  return (
    <div className="form">
      <h1 className="form__title">Добавление товара</h1>

      <form className="form__form" onSubmit={handleFormSubmit}>
        {IdInput()}
        {nameInput()}
        {priceInput()}
        <button className="form__button" type="submit">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default Form;
