import { UserEntity, userProps } from "./user.entity";

describe("User entity", () => {
  it("Should able to create a user", () => {
    const userProps: userProps = {
      name: "Jonh Doe",
      email: "jonhDoe@email.com",
      password: "12345678",
    };

    const user = new UserEntity(userProps);
    expect(user).toEqual({
      ...user,
      shares: [],
    });
  });
});
