type Comprinhas = {
    id: number
    nomeCliente: string
    status: "Em Processo" | "Pago" | "Transação Com Error"
    valor: number
    compra:"Cartão" | "Dinheiro" | "Pix" | "Boleto"
    quantidade: string
    data: string

}
const compra: Comprinhas[] = [
    {   id: 1,
        nomeCliente: "João",
        status: "Transação Com Error",
        valor: 563,
        compra: "Boleto",
        quantidade: "1",
        data: "12/01/2022"
    },
    {
        id: 2,
        nomeCliente: "Gustavo Henriqu ",
        status: "Pago",
        valor: 325,
        compra: "Pix",
        quantidade: "12",
        data: "03/09/2021"
    },
    { 
        id: 3,
        nomeCliente: "Caua", 
        status: "Transação Com Error", 
        valor: 890,
        compra: "Cartão", 
        quantidade: "45", 
        data: "10/10/2020" },
]

const coluns = [ "Cliente", "Status", "Valor", "Compra", "Quantidade", "Data", ""]


export const Table = () => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-indigo-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-indigo-300">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                            </div>
                        </th>
                        {coluns.map((colun) => {
                            return (
                                <th key={colun} scope="col" className="px-6 py-3">
                                    {colun}
                                </th>
                            )
                        })}

                    </tr>
                </thead>

                <tbody>
                    {compra.map((compra) => {
                        return (
                            <tr key= {compra.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {compra.nomeCliente}
                                </th>
                                <td className="flex flex-row items-center justify-center px-6 py-4">
                                    <div className="mx-8">
                                    <p className="bg-indigo-200 text-zinc-800 rounded-full text-xs p-2 px-2"> 
                                            {compra.status}
                                        </p>
                                    </div>
                                </td>

                                <td className="px-6 py-4">
                                        {compra.valor} 
                                </td>
                                <td className="px-6 py-4"> 
                                  R$ { Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(compra.valor)}
                                </td>
                                <td className="px-6 py-4">
                                    {compra.quantidade}
                                </td>
                                <td className="px-6 py-4">
                                    {compra.data}
                                </td>
                                <td className="flex items-center px-6 py-4">
                                    <a href="#" className="font-medium text-indigo-600 dark:text-indigo-500 hover:underline">Edit</a>
                                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    

)}