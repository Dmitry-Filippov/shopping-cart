import "./Form.css";

const Form = () => {
  return (
    <section className="form">
      <h1 className="form__title">Добавление товара</h1>

      <form className="form__form">
        <input
          className="form__input"
          type="number"
          required
          name="id"
          placeholder="идентификатор товара"
        />
        <input
          className="form__input"
          type="text"
          required
          name="name"
          placeholder="название  товара"
        />
        <input
          className="form__input"
          type="number"
          required
          name="price"
          placeholder="цена в рублях"
        />
        <button className="form__button" type="submit">
          Добавить
        </button>
      </form>
    </section>
  );
};

export default Form;
