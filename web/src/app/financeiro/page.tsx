"use client";
import { Header } from "@/components/Header";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { AmountsCard } from "@/components/financeiro/Card";
import { useEffect, useState } from "react";
import { api } from "@/services/api";

interface ICompra {
  id: string;
  method: string;
  price: number;
  status: string;
  createdAt: string;
  Caixa: {
    id: string;
    createdAt: string;
    funcionario: {
      id: string;
      name: string;
      email: string;
      createdAt: string;
    };
  };
}

interface ICaixa {
  id: string;
  status: string;
  createdAt: string;
  compras: ICompra[];
}

interface ISummary {
  date: string;
  PENDENTE: number;
  CANCELADO: number;
  PAGO: number;
}

export default function Financeiro() {
  const [compras, setCompras] = useState<ICompra[]>([]);
  const [caixas, setCaixas] = useState<ICaixa[]>([]);
  const [summary, setSummary] = useState<ISummary[]>([]);
  const [clientsInDebt, setClientsInDebt] = useState(0);
  const [totalReceived, setTotalReceived] = useState(0);
  const [totalPending, setTotalPending] = useState(0);

  async function getCompras(caixas: ICaixa[]) {
    const compras: ICompra[] = [];

    caixas.forEach((caixa) => {
      caixa.compras.forEach((compra) => {
        compras.push(compra);
      });
    });

    setCompras(compras);
    return compras;
  }

  function summarizeByDateAndStatus(compras: ICompra[]) {
    const summary: any = {};

    compras.forEach((compra) => {
      const date = new Date(compra.createdAt).toLocaleDateString();

      if (!summary[date]) {
        summary[date] = { date, PENDENTE: 0, CANCELADO: 0, PAGO: 0 };
      }

      summary[date][compra.status] += compra.price;
    });

    const summaryArray: ISummary[] = Object.values(summary).sort(
      (a: any, b: any) =>
        new Date(a.date).getTime() - new Date(b.date).getTime()
    ) as ISummary[];
    setSummary(summaryArray);
  }

  function getAllInfo(compras: ICompra[]) {
    const allCompras: ICompra[] = [];

    compras.forEach((compra) => {
      if (compra.status === "PENDENTE") {
        allCompras.push(compra);
        setTotalPending((prev) => prev + compra.price);
      } else if (compra.status === "PAGO") {
        setTotalReceived((prev) => prev + compra.price);
      }
    });

    const uniqueClients = new Set();
    allCompras.forEach((compra) => {
      uniqueClients.add(compra.Caixa.funcionario.id);
    });

    setClientsInDebt(uniqueClients.size);
  }

  useEffect(() => {
    async function getCaixas() {
      const response = await api.get("/caixa/all");
      const caixas = await response.data;

      setCaixas(caixas);
      const compras = await getCompras(caixas);
      summarizeByDateAndStatus(compras);
      getAllInfo(compras);
    }

    getCaixas();
  }, []);

  return (
    <div>
      <Header />
      <main className="mx-5 my-10 flex h-full">
        <div className="w-3/4 flex flex-col">
          <div className="flex flex-row gap-4">
            <AmountsCard
              title="Total de clientes em débito"
              amount={clientsInDebt}
            />
            <AmountsCard title="Total recebido" amount={totalReceived} />
            <AmountsCard title="Total pendente" amount={totalPending} />
          </div>
          <div className="mt-4 p-4 bg-[#7366D6] rounded-2xl">
            <h1 className="text-white font-bold text-2xl">Analytics</h1>
            <ResponsiveContainer width="100%" height={500} className="mt-10">
              <BarChart
                width={500}
                height={300}
                data={summary}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" style={{ fill: "white" }} />
                <YAxis style={{ fill: "white" }} />
                <Tooltip cursor={{ fill: "rgba(0,0,0,0.1)" }} />
                <Legend />
                <Bar dataKey="PAGO" fill="#3ABB64" />
                <Bar dataKey="PENDENTE" fill="#FFE145" />
                <Bar dataKey="CANCELADO" fill="#FF4D4F" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="w-1/4 flex flex-col px-4 h-full">
          <div className="h-full bg-[#7366D6] rounded-2xl p-4">
            <h1 className="font-bold text-white text-xl mb-4">
              Compras registradas por funcionário
            </h1>
            {compras.map((compra: ICompra) => {
              const horas = new Date(compra.createdAt).getHours();
              const minutos = new Date(compra.createdAt).getMinutes();

              return (
                <div
                  className="flex w-full items-center justify-between p-4 border-b"
                  key={compra.id}
                >
                  <div>
                    <h2 className="font-bold text-white">
                      {compra.Caixa.funcionario.name}
                    </h2>
                    <h3 className="text-white">
                      {new Date(compra.createdAt).toLocaleDateString()} às{" "}
                      {horas}:{minutos}
                    </h3>
                  </div>
                  <h1 className="font-bold text-green-400">
                    R$
                    {compra.price}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
