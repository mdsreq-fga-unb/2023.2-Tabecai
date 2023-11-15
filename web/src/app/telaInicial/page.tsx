import { ChevronDown, DownloadCloud, Filter, Moon, MoreHorizontal, MoreVertical, Search } from "lucide-react"
import Image from "next/image"
import Logo from "../../assets/logo.svg"

const telas = [{
    nome: "Caixa1",
    http: ""
},
{
    nome: "Caixa2",
    http: ""
},
{
    nome: "Caixa3",
    http: ""
},
{
    nome: "Caixa4",
    http: ""
}]

const filtros = ["Tudo", "Efetuado", "Em Processo", "Transação Com Erro"]

export default function Login() {
    return (
        <div className="h-screen flex flex-col">

            <header className="flex flex-row items-center p-6 justify-between border-b-2 border-gray-200">
                <div className="flex flex-row items-center justify-betweenspace-x-2">
                    <strong className="text-4xl text-[#422F8A] justify-center font-bold mr-3">Tabeçai</strong>
                    <Image src={Logo} alt="Logo" width={22} height={22} />

                    <div className="flex space-x-6 ml-6">
                        {telas.map((tela) => {
                            return (
                                <div className="" key={tela.nome} >
                                    <p className="text-xl text-zinc-500">{tela.nome}</p>
                                </div>
                            )
                        })}
                        <div className="flex  flex-row space-x-3">
                            <p className=" text-zinc-300">|</p>
                            <Search size={24} />
                            {/* <input type="text" className='flex bg-green-700' /> */}
                        </div>

                    </div>
                </div>

                <div className="flex flex-row space-x-6 items-center">
                    <strong className="">UsuarioADM</strong>
                    <div className='bg-green-500 h-12 w-12 flex items-center  justify-center pl-1 rounded-full ml-auto '>
                        {/* footo do  user */}
                    </div>
                    <ChevronDown size={20} />
                    <Moon size={20} />
                </div>
            </header>
            <main className="">
                <div className="flex flex-row items-end justify-between">
                    <strong className="text-2xl m-10">Caixa</strong>
                    <button className="flex flex-row space-x-2 items-center p-4 text-white bg-indigo-600 rounded-lg m-10">
                        <strong className="text-white">Adicionar</strong>
                        <DownloadCloud size={24} />
                    </button>
                </div>

                <div className="flex flex-row justify-between items-end">
                    <div className="flex flex-row ml-6 items-baseline">
                        {filtros.map((filtro) => {
                            return (
                                <div className="items-center justify-between px-4 pt-4 " key={filtro}>
                                    <p className="text-base text-zinc-500">{filtro}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="flex flex-row space-x-4 items-end pr-10">
                        <div className="flex flex-row space-x-2 items-center p-4 text-indigo-600 border-2 border-indigo-600  rounded-lg">
                            <Search size={24} />
                            <input type="text" />
                        </div>
                        <button className="flex flex-row space-x-2 p-4 text-indigo-600 border-2 border-indigo-600 bg-indigo-200 rounded-lg">
                            <strong className="text-indigo-600">Filtro</strong>
                            <Filter size={24} />
                        </button>
                        <button className="flex flex-row space-x-2 p-4 text-indigo-600 border-2 border-zinc-300 bg-indigo-200 rounded-lg ">
                            <MoreVertical size={24} />
                        </button>
                    </div>
                </div>


                <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-10">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <div className="flex items-center">
                                            Color
                                            <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                            </svg></a>
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <div className="flex items-center">
                                            Category
                                            <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                            </svg></a>
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <div className="flex items-center">
                                            Price
                                            <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                            </svg></a>
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Apple MacBook Pro 17
                                    </th>
                                    <td className="px-6 py-4">
                                        Silver
                                    </td>
                                    <td className="px-6 py-4">
                                        Laptop
                                    </td>
                                    <td className="px-6 py-4">
                                        $2999
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Microsoft Surface Pro
                                    </th>
                                    <td className="px-6 py-4">
                                        White
                                    </td>
                                    <td className="px-6 py-4">
                                        Laptop PC
                                    </td>
                                    <td className="px-6 py-4">
                                        $1999
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Magic Mouse 2
                                    </th>
                                    <td className="px-6 py-4">
                                        Black
                                    </td>
                                    <td className="px-6 py-4">
                                        Accessories
                                    </td>
                                    <td className="px-6 py-4">
                                        $99
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


            </main>
        </div>
    )
}