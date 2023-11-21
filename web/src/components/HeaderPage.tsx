import { DownloadCloud, Filter, MoreVertical, Search } from "lucide-react"

const filtros = ["Filtro1", "Filtro2", "Filtro3", "Filtro4"];


export const HeaderPage = () => {
    return (
    <div className="flex flex-col justify-between ">
        <div className="flex flex-row items-end justify-between ">
            <strong className="text-2xl m-10">Caixa</strong>
            <button className="flex flex-row space-x-2 items-center p-4 text-white bg-indigo-600 rounded-lg m-10">
                <strong className="text-white">Adicionar</strong>
                <DownloadCloud size={24} />
            </button>
        </div>
        <div className="flex flex-row justify-between mx-10">
            <div className="flex flex-row  items-end">
                    {filtros.map((filtro) => {
                        return (
                            <div
                                className="items-center justify-between mr-3" key={filtro}>
                                <p className="text-base text-zinc-500"> {filtro} </p>
                            </div>
                        );
                    })}
            </div> 
            <div className="flex flex-row space-x-4 items-end">
                <div className="flex flex-row items-center p-4 text-indigo-600 border-2 border-indigo-600  rounded-lg">
                    <Search size={24} />
                    <input type="text" className="hidden xl:block"></input>
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

    </div>

    

                
        
    )
    
}