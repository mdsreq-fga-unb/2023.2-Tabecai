import { Funcionarios } from "@/components/Funcionarios";
import { Header } from "@/components/Header";
import { HeaderPage } from "@/components/HeaderPage";

export default function FuncionariosTela(){
    return(
        <div>
            <Header/>
            <HeaderPage type="Funcionarios"/>
            <main className="mx-5 my-10">
                <Funcionarios/>
            </main>

        </div>
    )
}