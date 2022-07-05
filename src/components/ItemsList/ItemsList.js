import ListItem from "../ListItem/ListItem";
import "./ItemsList.css"

const ItemsList = () => {
  return (
    <div className="items-list">
      <h2 className="items-list__title">Товары:</h2>
      <ul className="items-list__list">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
    </div>
  );
}

export default ItemsList;