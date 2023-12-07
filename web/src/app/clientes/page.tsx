import { Clientes } from "@/components/Clientes";
import { Header } from "@/components/Header";
import { HeaderPage } from "@/components/HeaderPage";

export default function FuncionariosTela() {
  return (
    <div>
      <Header />
      <HeaderPage type="Funcionarios" title="Funcionários" />
      <main className="mx-5 my-10">
        <Clientes />
      </main>
    </div>
  );
}
