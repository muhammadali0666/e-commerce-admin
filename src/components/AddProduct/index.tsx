import { useState } from "react";
import Upload from "../../assets/images/upload-img.webp";
import { FaCloudUploadAlt } from "react-icons/fa";
import "./product.css";

const AddProduct: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

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

    

      <label className="img-area" htmlFor="upload">
        <img
          src={selectedFile ? URL.createObjectURL(selectedFile) : Upload}
          alt="upload image"
          width={selectedFile ? 200 : 50}
          height={selectedFile ? 200 : 50}
        />
      </label>
      <input
        className="upload-input"
        type="file"
        onChange={handleFileChange}
        id="upload"
      />
      <button type="submit">
        <FaCloudUploadAlt /> Upload
      </button>
    </form>
  );
};

export default AddProduct;
