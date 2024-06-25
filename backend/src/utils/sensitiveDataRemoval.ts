import { User } from "../../prisma/generated/zod";

export const passwordlessUser = (user: User) => {
  function exclude<User, Key extends keyof User>(
    user: User,
    keys: Key[]
  ): Omit<User, Key> {
    return Object.fromEntries(
      Object.entries(user as { [ key: string ]: any }).filter(([ key ]) => !keys.includes(key as Key))
    ) as Omit<User, Key>;
  }
  return exclude(user, [ 'password' ]);
}
