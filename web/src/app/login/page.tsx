import Image from "next/image"
import Logo from "../../assets/logo.svg"

export default function Login() {
  return (
    <div className="flex bg-[#cae3cc] justify-center items-center h-screen">
      <div className="md:w-6/12 p-10 bg-white shadow-xl rounded-2xl">
        <div className="flex flex-row items-center"> 
          <p className="text-2xl text-[#422F8A] font-bold mr-2">Tabeçai</p>
          <Image src={Logo} alt="Logo" width={22} height={22}/>
        </div>
        <h1 className="text-3xl mt-20 mb-24 text-center font-bold">Login</h1>
        <form className="flex flex-col justify-center items-center gap-6" action="/login" method="post">
          <input type="text" className="w-10/12 md:w-8/12 px-4 py-2.5 mb-4 border-transparent bg-[#EEEEEE] rounded-lg shadow-lg placeholder-gray-500" placeholder="Usuário"></input>
          <input type="password" className="w-10/12 md:w-8/12 px-4 py-2.5 border-transparent bg-[#EEEEEE] rounded-lg shadow-lg placeholder-gray-500" placeholder="Senha"></input>
          <button className="w-1/2 h-12 mt-4 bg-[#7839CD] text-white rounded-lg font-bold shadow-xl" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  )
}
