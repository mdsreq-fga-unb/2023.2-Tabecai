import { api } from "@/services/api";
import { m } from "framer-motion";
import { useEffect, useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
  },
};

type ModalCreateCaixaProps = {
  ModalType: boolean;
  onCloseModal: () => void;
};

export const ModalCreateCaixa = ({
  ModalType,
  onCloseModal,
}: ModalCreateCaixaProps) => {
  const [clienteName, setClienteName] = useState("");
  const [date, setDate] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [value, setValue] = useState("");
  const [modalWidth, setModalWidth] = useState("50%");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 728) {
        setModalWidth("95%");
      } else {
        setModalWidth("40%");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleChangeCliente = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClienteName(e.target.value);
  };

  const handleChangeMethod = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="m-100">
      <Modal
        isOpen={ModalType}
        onRequestClose={onCloseModal}
        style={{
          ...customStyles,
          content: { ...customStyles.content, width: modalWidth },
        }}
        contentLabel="Example Modal"
      >
        <div className="bg-white rounded-lg  dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 ">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Adicionar Novo Funcionario
            </h3>
            <button
              onClick={onCloseModal}
              type="button"
              className="end-1.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="authentication-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="p-4 md:p-5">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nome do Cliente
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Nome"
                  onChange={handleChangeCliente}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Metodo de Pagamento
                </label>
                <input
                  type="text"
                  name="paymentMethod"
                  id="paymentMethod"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Metodo de Pagamento"
                  onChange={handleChangeMethod}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Valor da Compra
                </label>
                <input
                  type="number"
                  name="value"
                  id="value"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Valor da Compra"
                  onChange={handleChangeValue}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Data da Compra
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  onChange={handleDateChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-bold rounded-lg text-lg px-5 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
              >
                Criar
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};
