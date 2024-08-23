function GarmentIndex({ garment }) {
  return (
    <div className="individual-garment-container">
      <img src={garment.preview_image_url} alt="mens garment" />
      <p>{garment.title}</p>
      <div className="price-container">
        <p className="price">${garment.price}</p>
        <p className="discounted-price">${garment.discounted_price}</p>
      </div>
    </div>
  );
}

export default GarmentIndex;
