import ListItem from "../ListItem/ListItem";
import "./ItemsList.css";

const ItemsList = ({ items, setItems, isDiscount, discount }) => {
  if (items.length > 0) {
    return (
      <div className="items-list">
        <h2 className="items-list__title">Товары:</h2>
        <ul className="items-list__list">
          {items.map((item) => {
            return (
              <ListItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                items={items}
                setItems={setItems}
                isDiscount={isDiscount}
                discount={discount}
              />
            );
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="items-list">
        <h2 className="items-list__title">Cписок пуст</h2>
      </div>
    );
  }
};

export default ItemsList;
