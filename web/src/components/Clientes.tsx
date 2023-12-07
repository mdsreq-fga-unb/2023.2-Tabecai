"use client";
import { ArrowRightCircle, Play } from "lucide-react";
import admIcon from "../assets/adm.svg";
import funcionarioIcon from "../assets/funcionario.svg";
import Image from "next/image";
import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { ModalUpdateFuncionario } from "./ModaUpdateFuncionario";

interface IFuncionario {
  id: string;
  email: string;
  funcao: string;
  name: string;
  cellphone: string;
  cpf: string;
}

export const Clientes = () => {
  const [funcionarios, setFuncionarios] = useState<IFuncionario[]>([]);
  const [openModal, setOpenModal] = useState(false);

  async function getFuncionarios() {
    const people = [];

    const administradoresResponse = await api.get("/admin/all");
    const administradores = administradoresResponse.data.map(
      (administrador: IFuncionario) => {
        return {
          ...administrador,
          funcao: "Administrador",
        };
      }
    );
    people.push(...administradores);

    const funcionariosResponse = await api.get("/funcionario/all");
    const funcionarios = funcionariosResponse.data.map(
      (funcionario: IFuncionario) => {
        return {
          ...funcionario,
          funcao: "Funcionário",
        };
      }
    );
    people.push(...funcionarios);

    console.log(people);

    setFuncionarios(people);
  }

  useEffect(() => {
    getFuncionarios();
  }, []);

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
    window.location.reload();
  }

  return (
    <div className="grid lg:grid-cols-3 gap-4 sm:grid-cols-2 grid-cols-1">
      {funcionarios.map((funcionario: IFuncionario) => {
        let coresBox;
        let iconBackground;
        let icon;

        if (funcionario.funcao === "Administrador") {
          coresBox = "bg-[#5C83E6] ";
          iconBackground = "bg-[#B175FF]";
          icon = admIcon;
        } else {
          coresBox = "bg-[#77DD77]";
          iconBackground = "bg-[#68D282]";
          icon = funcionarioIcon;
        }

        const coresIconBackground = [""];
        return (
          <button
            key={funcionario.id}
            onClick={() => handleOpenModal()}
            className={`flex items-center justify-between ${coresBox} gap-4 rounded-xl  p-4 w-11/12 h-26`}
          >
            <div className="flex flex-row items-center gap-4">
              <div className="py-1 text-left p-6">
                <p className="text-white font-semibold text-xs lg:text-md xl:text-lg text-ellipsis">
                  {funcionario.name}
                </p>
                <p className="text-white text-xs lg:text-md xl:text-lg text-ellipsis font-light">
                  {funcionario.email}
                </p>
                <p className="text-white text-xs lg:text-md xl:text-lg font-light">
                  {funcionario.cellphone}
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-white font-semi  bold text-lg">
                Compras a pagar : 2
              </p>
              <ArrowRightCircle
                size={30}
                color="#FFE145"
                className={`transition hover:-translate-y-1 hover:scale-110 cursor-pointer justify-center`}
              />
              <ModalUpdateFuncionario
                ModalType={openModal}
                onCloseModal={handleCloseModal}
                funcionario={funcionario}
              />
            </div>
          </button>
        );
      })}
    </div>
  );
};
