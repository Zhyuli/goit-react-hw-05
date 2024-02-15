import toast from "react-hot-toast";
import css from "../SearchBar/SearchBar.module.css";

export const SearchBar = ({ value, onSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (evt.target.elements.query.value.trim() === "") {
      toast.error("EMPTY STRING!");
      return;
    }
    console.log(evt.target.elements.query.value);
    onSearch(evt.target.elements.query.value);
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
