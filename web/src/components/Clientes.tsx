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
  devendoAmount?: number;
  cliente: ICliente;
}

export const Clientes = () => {
  const [devedores, setDevedores] = useState<IDevedor[]>([]);
  const [openModal, setOpenModal] = useState(false);

  async function getClientes() {
    try {
      const response = await api.get('/compra/clientes-devendo');
      const todosClientes = await api.get('/cliente/all');

      const clientesMap = new Map();

      response.data.forEach((cliente: IDevedor) => {
        if (cliente.devendo !== 0) {
          clientesMap.set(cliente.cliente.id, cliente);
        }
      });

      todosClientes.data.forEach((cliente: ICliente) => {
        if (!clientesMap.has(cliente.id)) {
          clientesMap.set(cliente.id, {
            devendo: 0,
            devendoAmount: 0,
            cliente,
          });
        }
      });

      const clientesUnicos = Array.from(clientesMap.values());
      setDevedores(clientesUnicos);
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
          <div
            key={devedor.cliente.id}
            className={`flex items-center gap-6 rounded-xl px-6 py-4 h-26 bg-indigo-600 justify-between`}
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

            <div className="flex flex-col gap-4 text-right">
              {devedor.devendo > 0 ? (
                <p className="text-white font-semi font-bold text-lg">
                  Compras pendentes: {devedor.devendo}
                </p>
              ) : (
                <></>
              )}
              {devedor.devendoAmount && devedor.devendoAmount > 0 ? (
                <p className="text-white font-semi font-semibold text-lg">
                  Total: R$ {devedor.devendoAmount.toFixed(2)}
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
