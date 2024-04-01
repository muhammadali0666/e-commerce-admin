import { useState } from "react";

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
      formData.append('file', selectedFile);

      console.log(formData);
      
      fetch('/api/upload', {
        method: 'POST',
        body: formData
      }).then(response => response.json())
      .catch(error => {
        console.log(error);
        
      });
    }
  };

  // Rendering the form component
  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default AddProduct;