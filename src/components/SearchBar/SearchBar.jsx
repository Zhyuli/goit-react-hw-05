import toast from "react-hot-toast";
import css from "../SearchBar/SearchBar.module.css";

export const SearchBar = ({ value, onSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const query = evt.target.elements.query.value;

    if (evt.target.elements.query.value.trim() === "") {
      toast.error("EMPTY STRING!");
      return;
    }

    onSearch(query);
    evt.target.reset();
  };

  return (
    <div className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="query"
          placeholder="Search movies"
          autoComplete="off"
          defaultValue={value}
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
