import { IAdminRepository } from "../repositories/IAdminRepository";

interface IRequest {
  id: string;
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

export class UpdateAdmin {
  constructor(private adminRepository: IAdminRepository) { }

  public async execute({ id, email, password, name, cellphone }: IRequest): Promise<IResponse> {
    const admin = await this.adminRepository.update(id, {
      email,
      password,
      name,
      cellphone
    })

    return admin
  }
}