import { Link } from "react-router-dom";

function GarmentIndex({ garment }) {
  return (
    <Link to={`/garments/${garment.id}`}>
      <div className="individual-garment-container">
        <img src={garment.preview_image_url} alt="mens garment" />
        <p>{garment.title}</p>
        <div className="price-container">
          <p className="discounted-price">${garment.discounted_price}</p>
          <p className="price">${garment.price}</p>
        </div>
      </div>
    </Link>
  );
}

export default GarmentIndex;
