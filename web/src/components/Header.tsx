import { ChevronDown, Moon, MoonIcon, Search } from "lucide-react";
import Image from "next/image";
import Logo from "../assets/logo.svg";

const telas = [
    {
        nome: "Caixa",
        http: "",
    },
    {
        nome: "Clientes",
        http: "",
    },
    {
        nome: "Produto",
        http: "",
    },
    {
        nome: "Painel Financeiro",
        http: "",
    },
];

const filtros = ["Tudo", "Efetuado", "Em Processo", "Transação Com Erro"];

export const Header = () => {
    return (
        <header className="flex flex-row items-center p-6 justify-between border-b-2 border-gray-200 w-full">
            <div className="flex flex-row items-center justify-betweenspace-x-2">
                <strong className="text-2xl xl:text-4xl text-[#422F8A] justify-center font-bold mr-3">
                    Tabeçai
                </strong>
                <Image src={Logo} alt="Logo" width={22} height={22} />
                {/* <button
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="dropdown"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                >
                    Dropdown button{" "}
                    <svg
                        className="w-2.5 h-2.5 ms-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 4 4 4-4"
                        />
                    </svg>
                </button> */}

                <div className="flex ml-12">
                    {telas.map((tela) => {
                        return (
                            <a key={tela.nome}
                                className="px-4 py-2 hover:font-bold ml-4 cursor-pointer hover:bg-slate-100 rounded-xl"
                                href="/login"
                            >
                                {tela.nome}
                            </a>
                        );
                    })}
                </div>
                <div className="flex flex-row space-x-3">
                    <p className=" text-zinc-300">|</p>
                    {/* <input type="text" className='flex bg-green-700' /> */}
                </div>
            </div>

            {/* <div className="flex flex-row  items-center">
                <strong className="">UsuarioADM</strong>
                <div className="bg-green-500 h-12 w-12 flex items-center  justify-center pl-1 rounded-full ml-auto ">
                    {/* footo do  user */}
            {/* </div> */}
            {/* // <ChevronDown size={20} />
                // <MoonIcon size={20} />
            // </div> */}
        </header>
    );
};
