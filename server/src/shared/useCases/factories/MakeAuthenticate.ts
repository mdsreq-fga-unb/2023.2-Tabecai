import { SharedPrismaRepository } from "../../infra/repositories/SharedPrismaRepository";
import { Authenticate } from "../Authenticate";

export function MakeAuthenticate() {
  const sharedRepository = new SharedPrismaRepository();
  return new Authenticate(sharedRepository);
}
