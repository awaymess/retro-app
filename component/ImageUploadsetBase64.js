import React, { useState } from "react";

function ImageUpload() {
  const [base64Data, setBase64Data] = useState(null);

  const onChange = e => {
    console.log("file uploaded: ", e.target.files[0]);
    let file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = handleReaderLoaded;
      reader.readAsBinaryString(file);
    }
  };

  const handleReaderLoaded = e => {
    console.log("file uploaded 2: ", e);
    let binaryString = e.target.result;
    setBase64Data(btoa(binaryString));
  };

  return (
    <div>
      <input
        type="file"
        name="image"
        id="file"
        accept=".jpg, .jpeg, .png"
        onChange={onChange}
      />

      <p>base64 string: {base64Data}</p>
      <br />
      {base64Data != null && <img src={`data:image;base64,${base64Data}`} />}
    </div>
  );
}

export default ImageUpload;
