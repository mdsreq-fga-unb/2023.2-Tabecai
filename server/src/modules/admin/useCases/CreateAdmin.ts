import { IAdminRepository } from "../repositories/IAdminRepository";
import { hash } from "bcrypt";

interface IRequest {
  email: string;
  password: string;
  name: string;
  cellphone: string;
}

interface IResponse {
  id: string;
  email: string;
  name: string;
  cellphone: string;
  createdAt: Date;
  updatedAt: Date;
}

export class CreateAdmin {
  constructor(private adminRepository: IAdminRepository) { }

  public async execute({ email, password, name, cellphone }: IRequest): Promise<IResponse> {
    const alreadyExists = await this.adminRepository.findByEmail(email)

    if (alreadyExists) {
      throw new Error('Admin already exists')
    }

    const hashedPassword = await hash(password, 12);

    const admin = await this.adminRepository.create({
      email,
      password: hashedPassword,
      name,
      cellphone
    })

    return admin
  }
}