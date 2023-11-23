type Comprinhas = {
  id: number;
  nomeCliente: string;
  status: "Em Processo" | "Pago" | "Transação Com Error";
  data: string;
};
const compra: Comprinhas[] = [
  {
    id: 1,
    nomeCliente: "João",
    status: "Transação Com Error",
    data: "12/01/2022",
  },
  {
    id: 2,
    nomeCliente: "Gustavo",
    status: "Transação Com Error",
    data: "03/09/2021",
  },
  {
    id: 3,
    nomeCliente: "Caua",
    status: "Transação Com Error",
    data: "10/10/2020",
  },
];

const coluns = ["Checkbox", "Cliente", "Status", "Data", "Opções"];

export const Table = () => {
  return (
    <table className="flex-col text-sm text-gray-500 dark:text-gray-400 mt-12 md:w-11/12  shadow-2xl">
      <thead className="border">
        <tr className="flex text-xs text-indigo-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-indigo-300 justify-between">
          {coluns.map((colun) => {
            return (
              <th key={colun} className="flex w-1/6 justify-center p-2">
                {colun}
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody className="border rounded-xl">
        {compra.map((compra) => {
          return (
            <tr
              key={compra.id}
              className="flex text-xs text-indigo-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-indigo-300 justify-between p-2"
            >
              <td className="flex w-1/6 justify-center p-2">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className=" text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-table-search-1" className=""></label>
              </td>
              <td
                scope="row"
                className=" text-gray-900 dark:text-white justify-center flex w-1/6 p-2 font-bold"
              >
                {compra.nomeCliente}
              </td>
              <td className="text-gray-900 dark:text-white justify-center flex w-1/6 p-2  rounded-full">
                {compra.status}
              </td>

              {/* <td className="flex justify-center w-1/6 p-2">
                                {Intl.NumberFormat("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                }).format(compra.valor)}
                            </td>
                            <td className="flex justify-center w-1/6 p-2">
                                {compra.valor}
                            </td>
                            <td className="flex w-1/6 justify-center p-2">
                                {compra.quantidade}
                            </td> */}
              <td className="flex w-1/6 justify-center p-2">{compra.data}</td>
              <td className="flex w-1/6 justify-center p-2">
                <a
                  href="#"
                  className="font-medium text-indigo-600 dark:text-indigo-500 hover:underline"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                >
                  Remove
                </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
