import React, { useState } from "react";

const ImageSwitcher = () => {
  // Define image URLs
  const images = {
    image1: "https://tse4.mm.bing.net/th?id=OIP.VJGUqmBR4_tr_3KDRkbt5AHaEv&pid=Api&P=0&h=180",
    image2: "https://images6.alphacoders.com/549/thumb-1920-549198.jpg",
    image3: "https://wonderfulengineering.com/wp-content/uploads/2013/12/bike-wallpaper.jpg",
  };

  // State to store the current image
  const [currentImage, setCurrentImage] = useState(images.image1);

  // Function to handle image change
  const handleImageChange = (imageKey) => {
    setCurrentImage(images[imageKey]);
  };

  return (
    <div style={{ textAlign: "center" }}>
      {/* Display the current image */}
      <img src={currentImage} alt="Current Display" style={{ margin: "20px", height: "150px", width: "150px" }} />

      {/* Buttons to switch images */}
      <div>
        <button onClick={() => handleImageChange("image1")}>Image 1</button>
        <button onClick={() => handleImageChange("image2")}>Image 2</button>
        <button onClick={() => handleImageChange("image3")}>Image 3</button>
      </div>
    </div>
  );
};

export default ImageSwitcher;