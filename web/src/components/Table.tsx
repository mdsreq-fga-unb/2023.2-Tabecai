import { api } from "@/services/api";
import { Pencil, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { ModalUpdateCompras } from "./ModalUpdateCompra";

interface ICompra {
  id: string;
  price: number;
  method: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

const columns = [
  "Cliente",
  "Status",
  "Valor",
  "Método de Pagamento",
  "Data",
  "Editar",
  "Apagar",
];

export const Table = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [compras, setCompras] = useState<ICompra[]>([]);

  function onCloseModal() {
    setIsOpen(false);
    window.location.reload();
  }

  async function getCompras() {
    const response = await api.get("/compra/all");
    setCompras(response.data);
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
              case "PENDENTE":
                statusText = "Pendente";
                break;
              case "PAGO":
                statusText = "Pago";
                break;
              case "CANCELADO":
                statusText = "Cancelado";
                break;
              default:
                statusText = "Pendente";
                break;
            }

            return (
              <tr key={compra.id} className="text-center border">
                <td className="py-4">Cliente exemplo</td>
                <td className="py-4">
                  <div className="flex items-center justify-center">
                    <span
                      className={`${
                        compra.status === "PENDENTE"
                          ? "bg-yellow-500"
                          : compra.status === "PAGO"
                          ? "bg-green-500"
                          : "bg-red-500"
                      } text-white font-bold py-1 px-3 rounded-full text-sm`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          compra.status === "PENDENTE"
                            ? "bg-yellow-600"
                            : compra.status === "PAGO"
                            ? "bg-green-600"
                            : "bg-red-600"
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
                  {new Date(compra.createdAt).toLocaleDateString("pt-BR")}
                </td>
                <td>
                  <button
                    onClick={() => setIsOpen(true)}
                    className="p-3 hover:bg-slate-200 rounded-full transition ease-in"
                  >
                    <Pencil size={24} color="#666" />
                    <ModalUpdateCompras
                      onCloseModal={onCloseModal}
                      compra={compra}
                      ModalType={modalIsOpen}
                    />
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
    </div>
  );
};
