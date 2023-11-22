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
}

export class Authenticate {
  constructor(private sharedRepository: ISharedRepository) { }

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const employee = await this.sharedRepository.findByEmail(email);
    if (!employee) {
      throw new Error("Employee not found");
    }

    const passwordMatches = await compare(password, employee.password);
    if (!passwordMatches) {
      throw new Error("Employee not found");
    }

    const admin = employee as Admin;
    const funcionario = employee as Funcionario;

    return { admin, funcionario };
  }
}
