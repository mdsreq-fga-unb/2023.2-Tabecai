import { api } from "@/services/api";
import { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

type ModalUpdateFuncionarioProps = {
  ModalType: boolean;
  onCloseModal: () => void;
};

export const ModalUpdateFuncionario = ({
  ModalType,
  onCloseModal,
}: ModalUpdateFuncionarioProps) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cellphone, setCellphone] = useState("");

  const cpfMask = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  const cellphoneMask = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1");
  };

  const handleCheckboxChange = () => {
    setIsAdmin(!isAdmin);
  };

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(cpfMask(e.target.value));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleCellphoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCellphone(cellphoneMask(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let data = {
      name: firstName + " " + lastName,
      email,
      password,
      cellphone,
    };

    if (isAdmin) {
      try {
        await api.post("/admin", data);

        alert("Administrador cadastrado com sucesso!");
        onCloseModal();
      } catch (error) {
        alert("Erro ao cadastrar administrador!");
      }
    } else {
      try {
        await api.post("/funcionario", {
          ...data,
          cpf,
        });

        alert("Funcionario cadastrado com sucesso!");
        onCloseModal();
      } catch (error) {
        alert("Erro ao cadastrar funcionario!");
      }
    }
  };

  return (
    <div className="m-100">
      <Modal
        isOpen={ModalType}
        onRequestClose={onCloseModal}
        style={customStyles}
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
              <div className="w-full flex justify-between gap-4">
                <div>
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Primeiro Nome
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Nome"
                    onChange={handleFirstNameChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Sobrenome
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Sobrenome"
                    onChange={handleLastNameChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  onChange={handleEmailChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Senha
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  onChange={handlePasswordChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="tel"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="(00) 00000-0000"
                  value={cellphone}
                  onChange={handleCellphoneChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>

              {isAdmin ? null : (
                <div>
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    CPF
                  </label>
                  <input
                    type="text"
                    name="cpf"
                    id="cpf"
                    placeholder="000.000.000-00"
                    onChange={handleCpfChange}
                    value={cpf}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
              )}

              {/* <div>
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Data de Nascimento
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  onChange={handleDateChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div> */}

              <div className="flex justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="isAdmin"
                      checked={isAdmin}
                      onChange={handleCheckboxChange}
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-violet-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-violet-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <label
                    htmlFor="remember"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Administrador
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full h-12 text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
              >
                Deletar
              </button>
              <button
                type="submit"
                className="w-full h-12 text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
              >
                Salvar
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};
