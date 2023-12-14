'use client';
import { DownloadCloud, Filter, MoreVertical, Search } from 'lucide-react';
import Image from 'next/image';
import Logo from '../../assets/logo.svg';
import { Header } from '@/components/Header';
import { Table } from '@/components/Table';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ModalCreateCompra } from '@/components/ModalCreateCompra';
import { api } from '@/services/api';

const filtros = ['Tudo', 'Efetuado', 'Em Processo', 'Transação Com Erro'];

export default function Home() {
  const router = useRouter();
  const [modalCreateIsOpen, setCreateIsOpen] = useState(false);
  const [clientes, setClientes] = useState([]);
  const [filterInput, setFilterInput] = useState('');

  function onCloseCreateModal() {
    setCreateIsOpen(false);
    window.location.reload();
  }

  useEffect(() => {
    function userIsLogged() {
      const token = localStorage.getItem('user');

      if (!token) {
        router.push('/login');
      }
    }

    async function getClientes() {
      try {
        const response = await api.get('/cliente/all');
        setClientes(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    userIsLogged();
    getClientes();
  }, []);

  return (
    <div className="flex flex-col w-full h-screen items-center">
      <Header />

      <ModalCreateCompra
        ModalType={modalCreateIsOpen}
        onCloseModal={onCloseCreateModal}
        clientes={clientes}
      />

      <div className="flex flex-row items-end justify-between w-11/12">
        <strong className="text-2xl m-10">Caixa</strong>
        <button
          className="flex flex-row space-x-2 items-center p-4 text-white bg-indigo-600 rounded-lg m-10"
          onClick={() => setCreateIsOpen(true)}
        >
          <strong className="text-white">Adicionar</strong>
          <DownloadCloud size={24} />
        </button>
      </div>

      <div className="flex flex-row w-11/12 justify-between">
        {/* <div className="flex flex-row items-baseline">
                    {filtros.map((filtro) => {
                        return (
                            <div
                                className="items-center justify-between"
                                key={filtro}
                            >
                                <p className="text-base text-zinc-500">
                                    {filtro}
                                </p>
                            </div>
                        );
                    })}
                </div> */}
        <div className="flex flex-row space-x-4 items-end">
          {/* <div className="flex flex-row space-x-2 items-center p-4 text-indigo-600 border-2 border-indigo-600  rounded-lg">
            <Search size={24} />
            <input
              type="text"
              className="hidden xl:block"
              onChange={(e) => setFilterInput(e.target.value)}
              value={filterInput}
            ></input>
          </div> */}
          {/* <button className="flex flex-row space-x-2 p-4 text-indigo-600 border-2 border-indigo-600 bg-indigo-100 rounded-lg">
            <strong className="text-indigo-600">Filtro</strong>
            <Filter size={24} />
          </button>
          <button className="flex flex-row space-x-2 p-4 text-indigo-600 border-2 border-zinc-300 bg-indigo-100 rounded-lg ">
            <MoreVertical size={24} />
          </button> */}
        </div>
      </div>
      <Table filterInput={filterInput} setFilterInput={setFilterInput} />
    </div>
  );
}
