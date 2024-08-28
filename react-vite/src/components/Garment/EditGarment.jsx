import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { IoCloudUploadOutline } from "react-icons/io5";
import Loading from "../Loading";
import { obtainUserGarments } from "../../redux/garment";
import { obtainGarmentSingle } from "../../redux/garment";
import { obtainGarmentImages } from "../../redux/garment";
import { editGarment } from "../../redux/garment";
import { editGarmentImages } from "../../redux/garment";
import Page401 from "../Errors/Page401";
import { obtainGarmentsAll } from "../../redux/garment";

const EditGarment = () => {
  const { garmentId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [garmentEdited, setGarmentEdited] = useState(false);
  const [garmentLoaded, setGarmentLoaded] = useState(false);
  const garment = useSelector((state) => state.garments?.currentGarment);
  const garmentImages = useSelector((state) => state.garments?.garmentImages);
  const userGarments = useSelector(
    (state) => state.garments?.userGarments?.garments
  );
  const garmentInUserGarments = userGarments?.find((garment) => {
    return +garmentId === garment?.id;
  });
  const allGarments = useSelector(
    (state) => state.garments?.allGarments?.garments
  );
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

  useEffect(() => {
    const fetchGarments = async () => {
      await dispatch(obtainUserGarments());
      await dispatch(obtainGarmentSingle(garmentId));
      await dispatch(obtainGarmentImages(garmentId));
      await dispatch(obtainGarmentsAll());
    };

    fetchGarments().then(() => {
      setGarmentLoaded(true);
    });

    if (garmentEdited) return navigate(`/garments/${garment.id}`);
  }, [garmentEdited]);

  useEffect(() => {
    if (garmentLoaded) {
      setTitle(garment?.title || "");
      setPrice(garment?.price || "");
      setDiscountedPrice(garment?.discounted_price || "");
      setDescription(garment?.description || "");
      setInventory(garment?.inventory || "");
      setCategory(garment?.category || "");
      setPreviewImage(
        garment?.preview_image_url
          ? { name: garment?.preview_image_url.substring(62) }
          : ""
      );
      setSubImage1(
        garmentImages[0] ? { name: garmentImages[0]?.url.substring(62) } : ""
      );
      setSubImage2(
        garmentImages[1] ? { name: garmentImages[1]?.url.substring(62) } : ""
      );
      setSubImage3(
        garmentImages[2] ? { name: garmentImages[2]?.url.substring(62) } : ""
      );
    }
  }, [garment, garmentLoaded]);

  useEffect(() => {
    const errors = {};
    const ALLOWED_EXTENSIONS = ["png", "jpg", "jpeg"];

    if (title?.length < 15 || title?.length > 50)
      errors.title =
        "Title is required and must be between 15 to 50 characters";

    if (isNaN(price) || price === "" || price < 1)
      errors.price = "Price is required and must be a positive number";

    if (isNaN(discountedPrice) || discountedPrice === "" || discountedPrice < 1)
      errors.discountedPrice =
        "Discounted price is required and must be a positive number";

    if (description?.length < 200)
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

    if (duplicateGarmentTitle && duplicateGarmentTitle?.id === +garmentId) {
    } else if (
      duplicateGarmentTitle &&
      duplicateGarmentTitle?.id !== +garmentId
    ) {
      errors.duplicateTitle = "A garment with that title already exists";
    }

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
      formData.append("garmentId", garmentId);
      formData.append("title", title);
      formData.append("price", price);
      formData.append("discounted_price", discountedPrice);
      formData.append("description", description);
      formData.append("inventory", inventory);
      formData.append("category", category);

      await dispatch(editGarment(formData)).then(async () => {
        const formImagesData = new FormData();
        formImagesData.append("garmentId", garmentId);
        formImagesData.append("image", previewImage);
        formImagesData.append("image", subImage1);
        formImagesData.append("image", subImage2);
        formImagesData.append("image", subImage3);
        await dispatch(editGarmentImages(formImagesData)).then(() =>
          setGarmentEdited(true)
        );
      });
    }
  };

  return (
    <>
      {garmentInUserGarments ? (
        <>
          {loading ? (
            <form
              className="create-garment-form-container"
              onSubmit={handleSubmit}
            >
              <h2>Edit Garment</h2>

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
                      <p className="login-sign-up-error">
                        {formErrors.inventory}
                      </p>
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
                    value={category}
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
                      <p className="login-sign-up-error">
                        {formErrors.category}
                      </p>
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
                        {previewImage
                          ? previewImage.name
                          : "Upload Preview Image"}
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
                      <p>
                        {subImage1 ? subImage1.name : "Upload First Sub Image"}
                      </p>
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
                      <p className="login-sign-up-error">
                        {formErrors.subImage1}
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
                      <p className="login-sign-up-error">
                        {formErrors.subImage2}
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
                    onClick={handleSubThreeFileUpload}
                  >
                    <div className="file-upload-text-container">
                      <p>
                        {subImage3 ? subImage3.name : "Upload Third Sub Image"}
                      </p>
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
                      <p className="login-sign-up-error">
                        {formErrors.subImage3}
                      </p>
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
                <button type="submit">Edit Garment</button>
              </div>
            </form>
          ) : (
            <Loading />
          )}{" "}
        </>
      ) : (
        <Page401 />
      )}
    </>
  );
};

export default EditGarment;
