export default function Login() {
  return (
    <div className="bg-[#F2F2F7] w-screen h-screen justify-center items-center flex">
      <div className="bg-[#FFF] w-5/12 h-3/5 rounded-3xl flex flex-col items-center shadow-xl justify-between">
        <div className="flex self-start mt-8 ml-8">
          <p className="font-semibold text-[#7839CD] text-2xl">Tabeçai</p>
          <img></img>
        </div>
        <h1 className="font-semibold text-3xl">Login</h1>
        <form className="flex flex-col gap-4 mb-40 items-center">
          <input type="text" className="bg-[#D9D9D9] border-2 rounded-lg text-[#000000]" placeholder="Usuário " />
          <input type="password" className="bg-[#D9D9D9] border-2 rounded-lg" placeholder="Senha"/>
          <button className="bg-[#7839CD] font-bold text-[#FFF] rounded-xl p-2 w-3/5 text mt-7">
            Entrar
          </button>
        </form>

      </div>
    </div>
  )
}
