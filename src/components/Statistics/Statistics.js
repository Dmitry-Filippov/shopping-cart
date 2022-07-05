import "./Statistics.css";

const Statistics = ({ length, sum, discount, isDiscount }) => {
  return (
    <div className="statistics">
      <h2 className="statistics__title">
        Сейчас в корзине {length} товаров на общую сумму{" "}
        <span className={`${isDiscount ? "statistics__span" : ""}`}>{sum}</span>{" "}
        {isDiscount ? sum - discount : ""} руб.
      </h2>
    </div>
  );
};

export default Statistics;
