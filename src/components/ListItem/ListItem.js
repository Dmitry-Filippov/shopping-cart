import "./ListItem.css"

const ListItem = () => {
  return (
    <li className="list-item">
      <p className="list-item__id">13.</p>
      <h3 className="list-item__name">товар для дома</h3>
      <p className="list-item__price">100р.</p>
      <button className="list-item__del-button">Удалить товар</button>
    </li>
  );
};

export default ListItem;
