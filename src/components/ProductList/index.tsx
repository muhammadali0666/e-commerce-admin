import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./product.css";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useEffect, useState } from "react";

type Item = {
  name?: string;
  category?: string;
  old_price?: number;
  new_price?: number;
  image?: string;
};

export const ProductList = () => {
  const [search, setSearch] = useState("");
  const [info, setInfo] = useState<Item[]>([]);

  const getProduct = async () => {
    try {
      const response = await fetch("http://localhost:4001/all_product");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setInfo(data);
    } catch (error) {
      console.error("Fetch error: ", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(
        `http://localhost:4001/delete_product/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Fetch error: ", error);
    }
    getProduct();
  };

  return (
    <div className="list">
      <div className="list-box">
        <select
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="list-select"
        >
          <option value="men" className="list-option">
            Men
          </option>
          <option value="women" className="list-option">
            Women
          </option>
          <option value="kid" className="list-option">
            Kids
          </option>
        </select>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="list-search"
          placeholder="search by name..."
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Category</th>
            <th>Old price</th>
            <th>New price</th>
            <th>Image</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {info.length ? (
            info
              .filter((product) => {
                return search.toLowerCase() === ""
                  ? product
                  : product.name?.includes(search) ||
                      product.category?.includes(search);
              })
              .map((item, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item?.name}</td>
                  <td>{item?.category}</td>
                  <td>{item?.old_price}</td>
                  <td>{item?.new_price}</td>
                  <td>
                    <img
                      src={item?.image}
                      alt="cloth img"
                      className="list-image"
                    />
                  </td>
                  <td>
                    <RiDeleteBin5Fill
                      className="list-icon"
                      onClick={() => handleDelete(item?.id)}
                    />
                  </td>
                </tr>
              ))
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "100px",
              }}
            >
              <CircularProgress />
            </Box>
          )}
        </tbody>
      </table>
    </div>
  );
};
