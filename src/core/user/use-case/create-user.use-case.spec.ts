import { UserRepositoryInMemory } from "../../../infra/db/investments/test/user.repository-in-memory";
import { userProps } from "../entity/user.entity";
import { CreateUserUseCase } from "./create-user.use-case";

describe("Create user use-case", () => {
  it("Should able create a user and add to repository in memory", async () => {
    const userProps: userProps = {
      email: "jonh@doe.com",
      name: "Jonh Doe",
      password: "12345678",
    };

    const repository = new UserRepositoryInMemory();
    const useCase = new CreateUserUseCase(repository);
    const output = await useCase.handle(userProps);

    console.log(output);

    expect(output).toEqual({
      id: output?.id,
      email: "jonh@doe.com",
      name: "Jonh Doe",
      shares: [],
    });
  });
});
