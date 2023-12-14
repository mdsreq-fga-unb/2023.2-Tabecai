'use client';
import { ChevronDown, Moon, MoonIcon, Search } from 'lucide-react';
import Image from 'next/image';
import Logo from '../assets/logo.svg';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useRouter } from 'next/navigation';

const telas = [
  {
    nome: 'Caixa',
    http: '/',
  },
  {
    nome: 'Clientes',
    http: '/clientes',
  },
  {
    nome: 'Painel Financeiro',
    http: '/financeiro',
  },
  {
    nome: 'Funcionario',
    http: '/funcionarios',
  },
];

const filtros = ['Tudo', 'Efetuado', 'Em Processo', 'Transação Com Erro'];

export const Header = () => {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const isMobile = useMediaQuery({ minWidth: 1280 });

  function LogoutButton() {
    localStorage.removeItem('id');
    localStorage.removeItem('user');
    localStorage.removeItem('caixaId');
    router.push('/login');
  }

  return (
    <header className="flex flex-row items-center p-6 border-b-2 border-gray-200 w-full justify-between">
      <div className="flex flex-row items-center">
        <strong className="text-xl xl:text-4xl text-[#422F8A] justify-center font-bold mr-3">
          Tabeçai
        </strong>
        <Image src={Logo} alt="Logo" width={22} height={22} />
        {telas.map((tela) => {
          return (
            <a
              key={tela.nome}
              className="hover:font-bold cursor-pointer hover:bg-slate-100 rounded-xl text-sm md:text-lg p-2 sm:p-4 md:ml-4"
              href={tela.http}
            >
              {tela.nome}
            </a>
          );
        })}
      </div>
      <button
        className="p-4 text-red-600 rounded-lg font-bold shadow-sm"
        onClick={() => LogoutButton()}
      >
        <p>Logout</p>
      </button>
    </header>
  );
};
