import { useEffect, useState } from "react";
import Discount from "../Discount/Discount";
import Form from "../Form/Form";
import ItemsList from "../ItemsList/ItemsList";
import Statistics from "../Statistics/Statistics";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [sum, setSum] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [isDiscount, setIsDiscount] = useState(false);

  useEffect(() => {
    let newSum = 0;
    items.forEach((item) => {
      newSum += +item.price;
    });
    setSum(newSum);
  }, [items, discount, isDiscount]);

  useEffect(() => {
    if (sum === 0) {
      setIsDiscount(false);
      setDiscount(0);
    }
  }, [sum]);

  return (
    <main className="app">
      <Form setItems={setItems} items={items} />
      <ItemsList items={items} setItems={setItems} isDiscount={isDiscount} discount={discount} />
      <Statistics
        length={items.length}
        sum={sum}
        discount={discount}
        isDiscount={isDiscount}
      />
      <Discount setDiscount={setDiscount} setIsDiscount={setIsDiscount} />
    </main>
  );
}

export default App;
