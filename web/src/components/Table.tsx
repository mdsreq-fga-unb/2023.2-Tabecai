import { api } from '@/services/api';
import { Pencil, Trash } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ModalUpdateCompras } from './ModalUpdateCompra';

export interface ICompra {
  id: string;
  price: number;
  method: string;
  status: string;
  cliente: {
    id: string;
    name: string;
    cellphone: string;
    cpf: string;
    createdAt: string;
  };
  createdAt: string;
  updatedAt: string;
}

const columns = [
  'Cliente',
  'Status',
  'Valor',
  'Método de Pagamento',
  'Data',
  'Editar',
  'Apagar',
];

export const Table = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [compras, setCompras] = useState<ICompra[]>([]);
  const [selectedCompra, setSelectedCompra] = useState<ICompra>({} as ICompra);

  function onCloseModal() {
    setIsOpen(false);
    window.location.reload();
  }

  async function getCompras() {
    try {
      const id = localStorage.getItem('caixaId');

      const response = await api.get(`/compra/${id}`);
      setCompras([...response.data].reverse());
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCompras();
  }, []);

  function deleteCompra(id: string) {
    api.delete(`/compra/${id}`).then(() => {
      getCompras();
    });
  }

  return (
    <div className="w-4/5 mt-10">
      <table className="w-full shadow-lg table-auto">
        <thead className="rounded-lg">
          <tr className="border border-stone-300">
            {columns.map((column) => {
              return (
                <th scope="row" className="py-4" key={column}>
                  {column}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody className="w-full">
          {compras.map((compra) => {
            let statusText;

            switch (compra.status) {
              case 'PENDENTE':
                statusText = 'Pendente';
                break;
              case 'PAGO':
                statusText = 'Pago';
                break;
              case 'CANCELADO':
                statusText = 'Cancelado';
                break;
              default:
                statusText = 'Pendente';
                break;
            }

            return (
              <tr key={compra.id} className="text-center border">
                <td className="py-4">
                  {compra.cliente ? compra.cliente.name : ''}
                </td>
                <td className="py-4">
                  <div className="flex items-center justify-center">
                    <span
                      className={`${
                        compra.status === 'PENDENTE'
                          ? 'bg-yellow-500'
                          : compra.status === 'PAGO'
                          ? 'bg-green-500'
                          : 'bg-red-500'
                      } text-white font-bold py-1 px-3 rounded-full text-sm`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          compra.status === 'PENDENTE'
                            ? 'bg-yellow-600'
                            : compra.status === 'PAGO'
                            ? 'bg-green-600'
                            : 'bg-red-600'
                        } inline-block mr-2
                    `}
                      />
                      {statusText}
                    </span>
                  </div>
                </td>
                <td className="py-4">R$ {compra.price}</td>
                <td className="py-4">{compra.method}</td>
                <td className="py-4">
                  {new Date(compra.createdAt).toLocaleDateString('pt-BR')}
                </td>
                <td>
                  <button
                    onClick={() => {
                      setSelectedCompra(compra);
                      setIsOpen(true);
                    }}
                    className="p-3 hover:bg-slate-200 rounded-full transition ease-in"
                  >
                    <Pencil size={24} color="#666" />
                  </button>
                </td>
                <td>
                  <button onClick={() => deleteCompra(compra.id)}>
                    <div className="p-3 flex items-center justify-center hover:bg-slate-200 rounded-full transition ease-in ">
                      <Trash size={24} color="#666" />
                    </div>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {selectedCompra.id && (
        <ModalUpdateCompras
          onCloseModal={onCloseModal}
          compra={selectedCompra}
          ModalType={modalIsOpen}
        />
      )}
    </div>
  );
};
