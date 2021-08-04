import styles from "./DiaryAddProductForm.module.css";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isAuthenticated } from "../../redux/auth/auth.selectors";
import { addProduct } from "../../redux/products/products.operations";
import { getSelectedDate } from "../../redux/products/products.selectors";
import { getCurrentUser } from "../../redux/auth/auth.operations";
import useMedia from "use-media";

const DiaryAddProductForm = ({ closeModal }) => {
  const token = useSelector(isAuthenticated);
  const selectedDate = useSelector(getSelectedDate);

  const [fields, setFields] = useState({ searchWord: "", weight: "" });
  const [selected, setSelected] = useState(null);
  const [foundProducts, setFoundProducts] = useState([]);

  const dispatch = useDispatch();

  const isWide = useMedia({ minWidth: "768px" });

  const handleChange = (event) =>
    setFields((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));

  const searchProducts = (event) => {
    handleChange(event);
    if (event.target.value.length > 0) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      axios
        .get(
          `https://slimmom-backend.goit.global/product?search=${event.target.value}`
        )
        .then(({ data }) => {
          setFoundProducts(() => {
            return event.target.value.length > 0 ? data : [];
          });
        })
        .catch((error) => {
          setFoundProducts([]);
          setSelected(null);
        });
    } else {
      setFoundProducts([]);
      setSelected(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.defaults.headers.common.Authorization = `Bearer ${token}`;

    const date = selectedDate;

    dispatch(addProduct(...date, selected?._id, fields?.weight));

    dispatch(getCurrentUser());

    if (!isWide) {
      closeModal();
    }
    setFields({ searchWord: "", weight: "" });
    setFoundProducts([]);
    setSelected(null);
  };

  return (
    <div>
      <form className={styles.productForm} onSubmit={handleSubmit}>
        <input
          placeholder="Product name"
          type="text"
          name="searchWord"
          className={styles.productInput}
          autoComplete="off"
          autoFocus
          value={fields.searchWord}
          onChange={searchProducts}
        />

        <ul className={styles.productResultList} id="products">
          {!!foundProducts.length &&
            !selected &&
            foundProducts.map((item) => (
              <li
                className={styles.productResultListItem}
                id={item._id}
                key={item._id}
                onClick={() => {
                  setSelected(item);
                  setFields({
                    searchWord: item.title.ru,
                    weight: item.weight,
                  });
                }}
              >
                {item.title.ru}
              </li>
            ))}
        </ul>

        <label className={styles.productLabel}>
          <input
            className={styles.weightInput}
            placeholder="Grams"
            type="number"
            name={"weight"}
            value={fields.weight}
            onChange={handleChange}
          />
        </label>
        <br className={styles.break} />
        {isWide ? (
          <button type="submit" className={styles.formButton}>
            +
          </button>
        ) : (
          <button type="submit" className={styles.formAddButton}>
            Add
          </button>
        )}
      </form>
    </div>
  );
};

export default DiaryAddProductForm;
