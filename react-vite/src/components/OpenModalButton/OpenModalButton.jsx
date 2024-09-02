import { useModal } from "../../context/Modal";

function OpenModalButton({
  modalComponent, // component to render inside the modal
  buttonText, // text of the button that opens the modal
  onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
  onModalClose, // optional: callback function that will be called once the modal is closed
  className,
}) {
  const { setModalContent, openModal, setOnModalClose } = useModal();

  const onClick = () => {
    if (onModalClose) setOnModalClose(onModalClose);
    setModalContent(modalComponent);
    if (typeof onButtonClick === "function") onButtonClick();
  };

  const handleClick = () => {
    // Execute the onButtonClick function if provided
    if (typeof onButtonClick === "function") {
      onButtonClick();
    }
    // Set the modal content and open the modal
    setModalContent(modalComponent);
    openModal();

    // Optionally, set the onModalClose handler
    if (onModalClose) {
      setOnModalClose(onModalClose);
    }
  };

  return (
    <button className={className} onClick={handleClick}>
      {buttonText}
    </button>
  );
}

export default OpenModalButton;
