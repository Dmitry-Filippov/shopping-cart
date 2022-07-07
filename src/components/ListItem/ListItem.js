import "./ListItem.css";

const ListItem = ({
  id,
  name,
  price,
  items,
  setItems,
  isDiscount,
  discount,
}) => {
  function deleteItem() {
    const newArr = items.slice();
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i].id === id) {
        newArr.splice(i, 1);
      }
    }
    setItems(newArr);
  }

  return (
    <li className="list-item">
      <p className="list-item__id">{id}.</p>
      <h3 className="list-item__name">{name}</h3>
      <p className="list-item__price">
        <span className={`${isDiscount ? "list-item__span" : ""}`}>
          {price}
        </span>
        {isDiscount ? ` ${price - (price / 100) * discount}` : ""}
        р.
      </p>
      <button className="list-item__del-button" onClick={deleteItem}>
        Удалить товар
      </button>
    </li>
  );
};

export default ListItem;
