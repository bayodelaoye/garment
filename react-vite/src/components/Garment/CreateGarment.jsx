import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CreateGarment.css";
import { useNavigate } from "react-router-dom";

const CreateGarment = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");
  const [description, setDescription] = useState("");
  const [inventory, setInventory] = useState("");
  const [category, setCategory] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [subImage1, setSubImage1] = useState("");
  const [subImage2, setSubImage2] = useState("");
  const [subImage3, setSubImage3] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const errors = {};

    if (title.length < 15 || title.length > 50)
      errors.title =
        "Title is required and must be between 15 to 50 characters";

    if (isNaN(price) || price === "" || price < 1)
      errors.price = "Price is required and must be a positive number";

    if (isNaN(discountedPrice) || discountedPrice === "" || discountedPrice < 1)
      errors.discountedPrice =
        "Discounted price is required and must be a positive number";

    if (description.length < 200)
      errors.description =
        "Description is required and must be 200 characters or more";

    if (isNaN(inventory) || inventory === "" || inventory < 1)
      errors.inventory = "Inventory is required and must be a number";

    if (category === "") errors.category = "Must select a category";

    setFormErrors(errors);
  }, [title, price, discountedPrice, description, inventory, category]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      {isLoaded ? (
        <form className="create-garment-form-container" onSubmit={handleSubmit}>
          <h2>Create a new Garment</h2>

          <div className="create-garment-fields-container">
            <label className="create-garment-label">
              Title:
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              {isSubmitted ? (
                Object.keys(formErrors).length > 0 ? (
                  <p className="login-sign-up-error">{formErrors.title}</p>
                ) : (
                  <></>
                )
              ) : (
                <></>
              )}
            </label>

            <label className="create-garment-label">
              Price:
              <input
                type="text"
                name="price"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              {isSubmitted ? (
                Object.keys(formErrors).length > 0 ? (
                  <p className="login-sign-up-error">{formErrors.price}</p>
                ) : (
                  <></>
                )
              ) : (
                <></>
              )}
            </label>

            <label className="create-garment-label">
              Discounted Price:
              <input
                type="text"
                name="discounted price"
                placeholder="Discounted Price"
                value={discountedPrice}
                onChange={(e) => setDiscountedPrice(e.target.value)}
              />
              {isSubmitted ? (
                Object.keys(formErrors).length > 0 ? (
                  <p className="login-sign-up-error">
                    {formErrors.discountedPrice}
                  </p>
                ) : (
                  <></>
                )
              ) : (
                <></>
              )}
            </label>

            <label className="create-garment-label">
              Description:
              <textarea
                className="create-garment-description"
                name="description"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              {isSubmitted ? (
                Object.keys(formErrors).length > 0 ? (
                  <p className="login-sign-up-error">
                    {formErrors.description}
                  </p>
                ) : (
                  <></>
                )
              ) : (
                <></>
              )}
            </label>

            <label className="create-garment-label">
              Inventory:
              <input
                type="text"
                name="inventory"
                placeholder="Inventory"
                value={inventory}
                onChange={(e) => setInventory(e.target.value)}
              />
              {isSubmitted ? (
                Object.keys(formErrors).length > 0 ? (
                  <p className="login-sign-up-error">{formErrors.inventory}</p>
                ) : (
                  <></>
                )
              ) : (
                <></>
              )}
            </label>

            <label className="create-garment-label">
              Category:
              <select
                name="category"
                className="create-garment-select-category"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="" selected disabled hidden>
                  Select Category
                </option>
                <option value="MEN">MEN</option>
                <option value="WOMEN">WOMEN</option>
                <option value="KIDS">KIDS</option>
              </select>
              {isSubmitted ? (
                Object.keys(formErrors).length > 0 ? (
                  <p className="login-sign-up-error">{formErrors.category}</p>
                ) : (
                  <></>
                )
              ) : (
                <></>
              )}
            </label>

            <div className="create-garment-upload-image-container">
              <input type="file" name="fileup" accept="image/*" />
            </div>
          </div>

          <div className="create-garment-submit-btn-container">
            <button type="submit">Create Garment</button>
          </div>
        </form>
      ) : (
        <>Loading</>
      )}
    </>
  );
};

export default CreateGarment;
