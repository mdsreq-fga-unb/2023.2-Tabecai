'use client';
import { ArrowRightCircle, Play } from 'lucide-react';
import { api } from '@/services/api';
import { useEffect, useState } from 'react';

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

interface IDevedor {
  devendo: number;
  cliente: ICliente;
}

export const Clientes = () => {
  const [devedores, setDevedores] = useState<IDevedor[]>([]);
  const [openModal, setOpenModal] = useState(false);

  async function getClientes() {
    try {
      const response = await api.get('/compra/clientes-devendo');
      const todosClientes = await api.get('/cliente/all');

      setDevedores([
        ...response.data.filter((cliente: IDevedor) => cliente.devendo !== 0),
        ...todosClientes.data
          .map((cliente: ICliente) => {
            return { devendo: 0, cliente };
          })
          .filter((cliente: IDevedor) => cliente.devendo === 0),
      ]);
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
      {devedores.map((devedor: IDevedor) => {
        return (
          <button
            key={devedor.cliente.id}
            onClick={() => handleOpenModal()}
            className={`flex items-center gap-6 rounded-xl px-6 py-4 h-26 bg-[#5C83E6] justify-between`}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="text-left">
                <p className="text-white font-bold text-lg lg:text-md xl:text-lg text-ellipsis">
                  {devedor.cliente.name}
                </p>
                <p className="text-white text-xs lg:text-md xl:text-lg font-light">
                  {devedor.cliente.cellphone}
                </p>
                <p className="text-white text-xs lg:text-md xl:text-lg font-light">
                  {devedor.cliente.cpf}
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-white font-semi  bold text-lg">
                Compras pendentes: {devedor.devendo}
              </p>
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
