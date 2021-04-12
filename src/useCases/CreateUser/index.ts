import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapMailProvider = new MailtrapMailProvider()
const postgressUsersRepository = new PostgresUsersRepository()
const createUserUseCase = new CreateUserUseCase(
  postgressUsersRepository,
  mailtrapMailProvider
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export {createUserUseCase,createUserController}