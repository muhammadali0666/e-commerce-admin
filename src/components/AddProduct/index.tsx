import { useState } from "react";
import Upload from "../../assets/images/upload-img.webp";
import { FaCloudUploadAlt } from "react-icons/fa";
import "./product.css";

const AddProduct: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [category, setCategory] = useState("men");
  const [name, setName] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [newPrice, setNewPrice] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedFile) {
      const formData = new FormData();
      formData.append("product", selectedFile);
      fetch("http://localhost:4001/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-product">
      <h1>Add product</h1>

      <div className="add-product-name-box">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="add-product-name-input"
          placeholder="title..."
        />
      </div>
      <div className="add-product-price-box">
        <input
          value={oldPrice}
          onChange={(e) => setOldPrice(e.target.value)}
          type="text"
          className="add-product-price-input"
          placeholder="old price..."
        />
        <input
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
          type="text"
          className="add-product-price-input"
          placeholder="new price..."
        />
      </div>
      <select
        defaultValue={category}
        onChange={(e) => setCategory(e.target.value)}
        className="add-product-select"
      >
        <option value="men" className="add-product-option">
          Men
        </option>
        <option value="women" className="add-product-option">
          Women
        </option>
        <option value="kid" className="add-product-option">
          Kid
        </option>
      </select>

      <label className="img-area" htmlFor="upload">
        <img
          src={selectedFile ? URL.createObjectURL(selectedFile) : Upload}
          alt="upload image"
          width={selectedFile ? 200 : 50}
          height={selectedFile ? 200 : 50}
          className="add-product-img"
        />
      </label>
      <input
        className="upload-input"
        type="file"
        onChange={handleFileChange}
        id="upload"
      />
      <button type="submit" className="add-product-btn">
        <FaCloudUploadAlt className="add-product-btn-icon"/> Upload
      </button>
    </form>
  );
};

export default AddProduct;
