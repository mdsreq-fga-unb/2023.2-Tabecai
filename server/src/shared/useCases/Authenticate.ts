import { compare } from "bcrypt";
import { ISharedRepository } from "../repositories/ISharedRepository";
import { Admin, Funcionario } from "@prisma/client";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  admin: Admin | null;
  funcionario: Funcionario | null;
  caixaId: string | null;
}

export class Authenticate {
  constructor(private sharedRepository: ISharedRepository) { }

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const admin = await this.sharedRepository.findAdminByEmail(email);

    if (admin) {
      const passwordMatch = await compare(password, admin.password);

      if (passwordMatch) {
        const caixaId = await this.sharedRepository.findCaixaByFuncionarioId(admin.id);

        return {
          admin,
          funcionario: null,
          caixaId,
        };
      }
    }

    const funcionario = await this.sharedRepository.findFuncionarioByEmail(email);

    if (funcionario) {
      const passwordMatch = await compare(password, funcionario.password);

      if (passwordMatch) {
        const caixaId = await this.sharedRepository.findCaixaByFuncionarioId(funcionario.id);

        return {
          admin: null,
          funcionario,
          caixaId,
        };
      }
    }

    return {
      admin: null,
      funcionario: null,
      caixaId: null,
    };
  }
}
