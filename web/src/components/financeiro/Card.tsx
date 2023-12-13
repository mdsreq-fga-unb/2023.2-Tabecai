'use client';
import {
  AreaChart,
  LineChart,
  TrendingDownIcon,
  TrendingUpIcon,
  UserCircle,
} from 'lucide-react';
import { useEffect, useState } from 'react';

interface AmountsCardsProps {
  title: string;
  amount: number;
}

export function AmountsCard({ title, amount }: AmountsCardsProps) {
  const [icon, setIcon] = useState<React.ReactNode>();

  useEffect(() => {
    switch (title) {
      case 'Total de clientes em débito':
        setIcon(<UserCircle className="w-12 h-12" />);
        break;

      case 'Total recebido':
        setIcon(<TrendingUpIcon className="w-12 h-12" />);
        break;

      case 'Total pendente':
        setIcon(<TrendingDownIcon className="w-12 h-12" />);
        break;

      default:
        break;
    }
  }, []);

  return (
    <div className="h-24 rounded-2xl bg-[#7366D6] text-white flex p-10 items-center">
      <div className="mr-8">{icon}</div>
      <div className="flex flex-col">
        <h1 className="font-bold">{title}</h1>
        <p className="text-xl">
          {title !== 'Total de clientes em débito'
            ? `R$${amount.toFixed(2)}`
            : `${amount}`}
        </p>
      </div>
    </div>
  );
}
