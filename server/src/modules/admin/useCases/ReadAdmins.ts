import { IAdminRepository } from "../repositories/IAdminRepository";

interface IResponse {
  id: string;
  email: string;
  name: string;
  cellphone: string;
  createdAt: Date;
  updatedAt: Date;
}

export class ReadAdmins {
  constructor(private adminRepository: IAdminRepository) { }

  public async execute(): Promise<IResponse[]> {
    const admins = await this.adminRepository.listAll()

    return admins
  }
}