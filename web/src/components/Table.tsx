import { api } from '@/services/api';
import { Pencil, Trash } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ICompra {
  id: string;
  price: number;
  method: string;
  status: string;
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
  const [compras, setCompras] = useState<ICompra[]>([]);

  async function getCompras() {
    const response = await api.get('/compra/all');
    setCompras(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    getCompras();
  }, []);

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
            return (
              <tr key={compra.id} className="text-center border">
                <td className="py-4">Cliente exemplo</td>
                <td className="py-4">{compra.status}</td>
                <td className="py-4">{compra.price}</td>
                <td className="py-4">{compra.method}</td>
                <td className="py-4">
                  {new Date(compra.createdAt).toLocaleDateString('pt-BR')}
                </td>
                <td className="py-4">
                  <Pencil size={24} color="#666" />
                </td>
                <td className="py-4">
                  <Trash size={24} color="#666" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
