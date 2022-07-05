import "./Discount.css";

const Discount = () => {
  return (
    <div className="discount">
      <form className="discount__form">
        <input
          className="discount__input"
          type="number"
          min="0"
          max="100"
          required
          placeholder="Скидка"
        />
        <button className="discount__sub-button" type="submit">
          Установить скидку
        </button>
      </form>
      <button className="discount__res-button" type="reset">Убрать скидки</button>
    </div>
  );
};

export default Discount;
