import Modal from "react-modal";

interface AlertProps {
  message: string;
}
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderColor: "#000",
    borderRadius: "10px",
  },
};
export const Alert = (props: AlertProps) => {
  return (
    <Modal isOpen style={customStyles}>
    <div className="bg-[#ffffff] px-8 py-8 rounded-lg">
      <h1 className="text-xl text-center font-semibold text-gray-900 dark:text-white">{props.message}</h1>
      <button className=" mt-12 w-full text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-bold rounded-lg text-md px-5 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">OK</button>
    </div>
    </Modal>
  );
};
