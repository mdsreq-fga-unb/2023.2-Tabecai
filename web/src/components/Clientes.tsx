"use client";
import { ArrowRightCircle, Play } from "lucide-react";
import { api } from "@/services/api";
import { useEffect, useState } from "react";

interface ICompra {
  id: string;
  name: string;
  status: string;
  price: string;
  createdAt: string;
}

interface ICliente {
  id: string;
  name: string;
  cellphone: string;
  cpf: string;
  createdAt: string;
  compras: ICompra[];
}

export const Clientes = () => {
  const [clientes, setClientes] = useState<ICliente[]>([]);
  const [openModal, setOpenModal] = useState(false);

  async function getClientes() {
    try {
      const response = await api.get("/compra/all");
      const clientesAndComprasPendentes = await response.data.map(
        (compra: ICompra) => {}
      );
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getClientes();
  }, []);

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
    window.location.reload();
  }

  return (
    <div className="grid lg:grid-cols-3 gap-4 sm:grid-cols-2 grid-cols-1">
      {clientes.map((cliente: ICliente) => {
        return (
          <button
            key={cliente.id}
            onClick={() => handleOpenModal()}
            className={`flex items-center gap-6 rounded-xl px-6 py-4 h-26 bg-[#5C83E6] justify-between`}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="text-left">
                <p className="text-white font-bold text-lg lg:text-md xl:text-lg text-ellipsis">
                  {cliente.name}
                </p>
                <p className="text-white text-xs lg:text-md xl:text-lg font-light">
                  {cliente.cellphone}
                </p>
                <p className="text-white text-xs lg:text-md xl:text-lg font-light">
                  {cliente.cpf}
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-white font-semi  bold text-lg"></p>
              <ArrowRightCircle
                size={30}
                color="#FFE145"
                className={`transition hover:-translate-y-1 hover:scale-110 cursor-pointer justify-center`}
              />
              {/* <ModalUpdateFuncionario
                ModalType={openModal}
                onCloseModal={handleCloseModal}
                funcionario={funcionario}
              /> */}
            </div>
          </button>
        );
      })}
    </div>
  );
};
