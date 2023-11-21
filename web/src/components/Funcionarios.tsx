import { ArrowRightCircle, Play } from "lucide-react"

  const funci = [{
    "nome": "João",
    "email": "oie@unb.com.br",
    "telefone": "999999999",
    "funcao": "Caixa",
  }, 
  {
    "nome": "Maria",
    "email": "maria@gmail.com",
    "telefone": "999999999",
    "funcao": "Gerente",
  },
  {
    "nome": "João",
    "email": "oie@unb.com.br",
    "telefone": "999999999",
    "funcao": "Gerente",
  }, 
  {
    "nome": "Maria",
    "email": "maria@gmail.com",
    "telefone": "999999999",
    "funcao": "Caixa",
  },
]

export const Funcionarios = () => {
    return (
        <div className='grid grid-cols-3 gap-4 justify-items-center'>
          
            {funci.slice(0, 6).map((funcionario) => {
                  const coresBox = funcionario.funcao === "Caixa" ? "hover:bg-green-600 bg-green-700" : "hover:bg-violet-600 bg-violet-700";
                  const coresSet = funcionario.funcao === "Caixa" ? "text-green-200 hover:text-green-800" : "text-violet-200 hover:text-violet-800";

                  return (
                      <div  key={funcionario.nome} className={`flex group items-center justify-center ${coresBox} transition-colors gap-4 rounded overflow-hidden p-2  w-11/12`}>
                          <div className=" bg-sky-400 rounded-full focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500">
                            <p>i</p>
      
                          </div>
                          <div className="py-1">
                            <strong>{funcionario.nome}</strong>
                            <p className="text-white text-sm">{funcionario.email}</p>
                            <p className="text-white text-sm">{funcionario.telefone}</p>
                          </div>
                          
                          <p className="text-white">{funcionario.funcao}</p>
      
                          <div>
                            <ArrowRightCircle size={30} className={`transition hover:-translate-y-1 hover:scale-110 cursor-pointer justify-center ${coresSet}`} />
                          </div>
                          
                    </div>
                  )

                
            })}
        </div>

    )

}