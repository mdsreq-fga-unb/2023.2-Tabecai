'use client';
import { DownloadCloud, Filter, MoreVertical, Search } from 'lucide-react';
import { ModalCreateFuncionario } from './ModalCreateFuncionario';
import { useState } from 'react';
import { ModalCreateProduto } from './ModalCreateProduto';
import { ModalCreateCliente } from './ModalCreateCliente';

type HeaderPageProps = {
  type:
    | 'Funcionarios'
    | 'Produto'
    | 'Clientes'
    | 'Produtos'
    | 'Painel Financeiro';
  title: string;
};

type ModalProps = {
  ModalType: boolean;
  onCloseModal: () => void;
};

type DropDonw = {
  DropDonwType: boolean;
  listaFiltros: string[];
  onCloseDropDonw: () => void;
};

type Func = [
  (data: ModalProps) => JSX.Element,
  // (data: DropDonw) => JSX.Element,
  string[]
];

const modals: Record<HeaderPageProps['type'], Func> = {
  Funcionarios: [ModalCreateFuncionario, ['Caixa', 'Gerente', 'Administrador']],
  Produto: [ModalCreateProduto, ['Caixa', 'Gerente', 'Administrador']],
  Clientes: [ModalCreateCliente, ['Caixa', 'Gerente', 'Administrador']],
  Produtos: [ModalCreateFuncionario, ['Caixa', 'Gerente', 'Administrador']],
  'Painel Financeiro': [
    ModalCreateFuncionario,
    ['Caixa', 'Gerente', 'Administrador'],
  ],
};

export const HeaderPage = ({ type, title }: HeaderPageProps) => {
  const [modalCreateIsOpen, setCreateIsOpen] = useState(false);
  const [DropFiltroIsOpen, setDropFiltroIsOpen] = useState(false);

  function onCloseCreateModal() {
    setCreateIsOpen(false);
    window.location.reload();
  }
  function onCloseDropFiltro() {
    setDropFiltroIsOpen(false);
  }

  const ModalComponent = modals[type][0];

  return (
    <div className="flex flex-col justify-between ">
      <div className="flex flex-row items-end justify-between ">
        <strong className="text-2xl m-10">{title}</strong>
        <button
          onClick={() => setCreateIsOpen(true)}
          className="flex flex-row space-x-2 items-center p-4 text-white bg-indigo-600 rounded-lg m-10"
        >
          <strong className="text-white">Adicionar</strong>
          <DownloadCloud size={24} />
        </button>
      </div>
      <div className="flex flex-row justify-between mx-10">
        <div className="flex flex-row space-x-4 items-end">
          <div className="flex flex-row items-center p-4 text-indigo-600 border-2 border-indigo-600  rounded-lg">
            <Search size={24} />
            <input type="text" className="hidden xl:block"></input>
          </div>
          <button className="flex flex-row space-x-2 p-4 text-indigo-600 border-2 border-indigo-600 bg-indigo-200 rounded-lg">
            <strong className="text-indigo-600">Filtro</strong>
            <Filter size={24} />
            <div
              id="dropdownHover"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownHoverButton"
              >
                {modals[type][1].map((filtro) => {
                  return (
                    <li key={filtro}>
                      <a
                        href="#"
                        key={filtro}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </button>
          <button className="flex flex-row space-x-2 p-4 text-indigo-600 border-2 border-zinc-300 bg-indigo-200 rounded-lg ">
            <MoreVertical size={24} />
          </button>
        </div>
      </div>

      {/* MODAL AQUI DE TESTE */}
      <ModalComponent
        ModalType={modalCreateIsOpen}
        onCloseModal={onCloseCreateModal}
      />
    </div>
  );
};
