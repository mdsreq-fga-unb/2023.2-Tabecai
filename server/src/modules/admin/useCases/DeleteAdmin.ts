import { IAdminRepository } from "../repositories/IAdminRepository";

interface IRequest {
  id: string
}

interface IResponse {
  id: string;
  email: string;
  name: string;
  cellphone: string;
  createdAt: Date;
  updatedAt: Date;
}

export class DeleteAdmin {
  constructor(private adminRepository: IAdminRepository) { }

  public async execute({ id }: IRequest): Promise<IResponse> {
    const admin = await this.adminRepository.delete(id)

    return admin
  }
}