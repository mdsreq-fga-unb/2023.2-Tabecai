import { ChevronDown, Moon, MoonIcon, Search } from "lucide-react"
import Image from "next/image"
import Logo from "../assets/logo.svg"



const telas = [{
    nome: "Caixa",
    http: ""
},
{
    nome: "Clientes",
    http: ""
},
{
    nome: "Produto",
    http: ""
},
{
    nome: "Painel Financeiro",
    http: ""
}]

const filtros = ["Tudo", "Efetuado", "Em Processo", "Transação Com Erro"]

export const Header = () => {
    return (<header className="flex flex-row items-center p-6 justify-between border-b-2 border-gray-200 w-screen">
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
        <MoonIcon size={20} />
    </div>
</header>)
}