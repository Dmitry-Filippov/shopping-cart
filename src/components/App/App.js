import Discount from "../Discount/Discount";
import Form from "../Form/Form";
import ItemsList from "../ItemsList/ItemsList";
import Statistics from "../Statistics/Statistics";
import "./App.css";

function App() {
  return (
    <main className="app">
      <Form />
      <ItemsList />
      <Statistics />
      <Discount />
    </main>
  );
}

export default App;
