import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CreateGarment.css";
import { useNavigate } from "react-router-dom";
import { IoCloudUploadOutline } from "react-icons/io5";
import { addGarment } from "../../redux/garment";
import { addGarmentImage } from "../../redux/garment";
import Loading from "../Loading";
import { obtainGarmentsAll } from "../../redux/garment";

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
  const [loading, setLoading] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const newGarment = useSelector(
    (state) => state.garments?.newGarment?.garment
  );
  const allGarments = useSelector(
    (state) => state.garments?.allGarments?.garments
  );
  const [garmentCreated, setGarmentCreated] = useState(false);

  useEffect(() => {
    const getAllGarments = async () => {
      await dispatch(obtainGarmentsAll());
    };

    getAllGarments();
    if (garmentCreated) return navigate(`/garments/${newGarment.id}`);
  }, [garmentCreated]);

  useEffect(() => {
    const errors = {};
    const ALLOWED_EXTENSIONS = ["png", "jpg", "jpeg"];

    if (title?.length < 15 || title?.length > 35)
      errors.title =
        "Title is required and must be between 15 to 35 characters";

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

    if (
      previewImage === "" ||
      !ALLOWED_EXTENSIONS.includes(
        previewImage?.name?.split(".").pop().toLowerCase()
      )
    )
      errors.previewImage =
        "Please upload a valid preview image file: png, jpg, or jpeg";

    if (
      subImage1 === "" ||
      !ALLOWED_EXTENSIONS.includes(
        subImage1?.name?.split(".").pop().toLowerCase()
      )
    )
      errors.subImage1 =
        "Please upload a valid first sub image file: png, jpg, or jpeg";

    if (
      subImage2 === "" ||
      !ALLOWED_EXTENSIONS.includes(
        subImage2?.name?.split(".").pop().toLowerCase()
      )
    )
      errors.subImage2 =
        "Please upload a valid second sub image file: png, jpg, or jpeg";

    if (
      subImage3 === "" ||
      !ALLOWED_EXTENSIONS.includes(
        subImage3?.name?.split(".").pop().toLowerCase()
      )
    )
      errors.subImage3 =
        "Please upload a valid third sub image file: png, jpg, or jpeg";

    const duplicateGarmentTitle = allGarments?.find((garment) => {
      return garment?.title === title;
    });

    if (duplicateGarmentTitle)
      errors.duplicateTitle = "A garment with that title already exists";

    setFormErrors(errors);
  }, [
    title,
    price,
    discountedPrice,
    description,
    inventory,
    category,
    previewImage,
    subImage1,
    subImage2,
    subImage3,
  ]);

  const handlePreviewFileUpload = (e) => {
    e.preventDefault();

    document.querySelector("#preview-image-upload").click();
  };

  const handleSubOneFileUpload = (e) => {
    e.preventDefault();

    document.querySelector("#sub-image1-upload").click();
  };

  const handleSubTwoFileUpload = (e) => {
    e.preventDefault();

    document.querySelector("#sub-image2-upload").click();
  };

  const handleSubThreeFileUpload = (e) => {
    e.preventDefault();

    document.querySelector("#sub-image3-upload").click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const name = e.target.name;

    if (file) {
      if (name === "previewImage") {
        setPreviewImage(file);
      } else if (name === "subImage1") {
        setSubImage1(file);
      } else if (name === "subImage2") {
        setSubImage2(file);
      } else if (name === "subImage3") {
        setSubImage3(file);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (Object.keys(formErrors).length === 0) {
      setLoading(false);
      const formData = new FormData();
      formData.append("title", title);
      formData.append("price", price);
      formData.append("discounted_price", discountedPrice);
      formData.append("description", description);
      formData.append("inventory", inventory);
      formData.append("category", category);

      await dispatch(addGarment(formData)).then(async () => {
        const formImagesData = new FormData();
        formImagesData.append("title", title);
        formImagesData.append("image", previewImage);
        formImagesData.append("image", subImage1);
        formImagesData.append("image", subImage2);
        formImagesData.append("image", subImage3);

        await dispatch(addGarmentImage(formImagesData)).then(() =>
          setGarmentCreated(true)
        );
      });
    }
  };

  return (
    <>
      {loading ? (
        <form className="create-garment-form-container" onSubmit={handleSubmit}>
          <h2 className="create-garment-form-title">Create a new Garment</h2>

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
              <label
                htmlFor="file-upload"
                class="custom-file-upload"
                onClick={handlePreviewFileUpload}
              >
                <div className="file-upload-text-container">
                  <p>
                    {previewImage ? previewImage.name : "Upload Preview Image"}
                  </p>
                  <IoCloudUploadOutline className="upload-icon" />
                </div>
              </label>
              <input
                id="preview-image-upload"
                type="file"
                name="previewImage"
                accept="image/*"
                onChange={handleFileChange}
              />
              {isSubmitted ? (
                Object.keys(formErrors).length > 0 ? (
                  <p className="login-sign-up-error">
                    {formErrors.previewImage}
                  </p>
                ) : (
                  <></>
                )
              ) : (
                <></>
              )}
            </div>

            <div className="create-garment-upload-image-container">
              <label
                htmlFor="file-upload"
                class="custom-file-upload"
                onClick={handleSubOneFileUpload}
              >
                <div className="file-upload-text-container">
                  <p>{subImage1 ? subImage1.name : "Upload First Sub Image"}</p>
                  <IoCloudUploadOutline className="upload-icon" />
                </div>
              </label>
              <input
                id="sub-image1-upload"
                type="file"
                name="subImage1"
                accept="image/*"
                onChange={handleFileChange}
              />
              {isSubmitted ? (
                Object.keys(formErrors).length > 0 ? (
                  <p className="login-sign-up-error">{formErrors.subImage1}</p>
                ) : (
                  <></>
                )
              ) : (
                <></>
              )}
            </div>
            <div className="create-garment-upload-image-container">
              <label
                htmlFor="file-upload"
                class="custom-file-upload"
                onClick={handleSubTwoFileUpload}
              >
                <div className="file-upload-text-container">
                  <p>
                    {subImage2 ? subImage2.name : "Upload Second Sub Image"}
                  </p>
                  <IoCloudUploadOutline className="upload-icon" />
                </div>
              </label>
              <input
                id="sub-image2-upload"
                type="file"
                name="subImage2"
                accept="image/*"
                onChange={handleFileChange}
              />
              {isSubmitted ? (
                Object.keys(formErrors).length > 0 ? (
                  <p className="login-sign-up-error">{formErrors.subImage2}</p>
                ) : (
                  <></>
                )
              ) : (
                <></>
              )}
            </div>
            <div className="create-garment-upload-image-container">
              <label
                htmlFor="file-upload"
                class="custom-file-upload"
                onClick={handleSubThreeFileUpload}
              >
                <div className="file-upload-text-container">
                  <p>{subImage3 ? subImage3.name : "Upload Third Sub Image"}</p>
                  <IoCloudUploadOutline className="upload-icon" />
                </div>
              </label>
              <input
                id="sub-image3-upload"
                type="file"
                name="subImage3"
                accept="image/*"
                onChange={handleFileChange}
              />
              {isSubmitted ? (
                Object.keys(formErrors).length > 0 ? (
                  <p className="login-sign-up-error">{formErrors.subImage3}</p>
                ) : (
                  <></>
                )
              ) : (
                <></>
              )}
            </div>
            {isSubmitted ? (
              Object.keys(formErrors).length > 0 ? (
                <p className="login-sign-up-error">
                  {formErrors.duplicateTitle}
                </p>
              ) : (
                <></>
              )
            ) : (
              <></>
            )}
          </div>

          <div className="create-garment-submit-btn-container">
            <button type="submit">Create Garment</button>
          </div>
        </form>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default CreateGarment;
