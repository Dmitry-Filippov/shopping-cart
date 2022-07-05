import { useState } from "react";
import "./Discount.css";

const Discount = ({ setIsDiscount, setDiscount }) => {
  const [discountValue, setDiscountValue] = useState("");

  function discountInput() {
    return (
      <input
        className="discount__input"
        type="number"
        min="0"
        max="100"
        required
        placeholder="Скидка"
        value={discountValue}
        onChange={(e) => setDiscountValue(e.target.value)}
      />
    );
  }

  return (
    <div className="discount">
      <form
        className="discount__form"
        onSubmit={(e) => {
          e.preventDefault();
          setDiscount(discountValue);
          setIsDiscount(+discountValue === 0 ? false : true);
          setDiscountValue("");
        }}
      >
        {discountInput()}
        <button className="discount__sub-button" type="submit">
          Установить скидку
        </button>
      </form>
      <button className="discount__res-button" type="reset" onClick={() => {
        setIsDiscount(false);
        setDiscount(0)
      }}>
        Убрать скидки
      </button>
    </div>
  );
};

export default Discount;
