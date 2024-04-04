import "./product.css";
import { RiDeleteBin5Fill } from "react-icons/ri";

export const ProductList = () => {
  return (
    <div className="list">
      <div className="list-box">
        <select className="list-select">
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
        <input type="text" className="list-search" placeholder="search..." />
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
          <tr>
            <td>0</td>
            <td>Kiyim</td>
            <td>men</td>
            <td>Narx</td>
            <td>Narx</td>
            <td>
              <img src="" alt="cloth img" className="list-image" />
            </td>
            <td>
              <RiDeleteBin5Fill className="list-icon" />
            </td>
          </tr>
          <tr>
            <td>0</td>
            <td>Kiyim</td>
            <td>men</td>
            <td>Narx</td>
            <td>Narx</td>
            <td>
              <img src="" alt="cloth img" className="list-image" />
            </td>
            <td>
              <RiDeleteBin5Fill className="list-icon" />
            </td>
          </tr>
          <tr>
            <td>0</td>
            <td>Kiyim</td>
            <td>men</td>
            <td>Narx</td>
            <td>Narx</td>
            <td>
              <img src="" alt="cloth img" className="list-image" />
            </td>
            <td>
              <RiDeleteBin5Fill className="list-icon" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
