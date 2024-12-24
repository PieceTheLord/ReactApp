import { ChangeEvent, useState } from "react";
import { Auth } from "../../features";
import { BaseButton } from "../../shared/ui/buttons/baseButton/BaseButton";
import { BaseInput } from "../../shared/ui/inputs/BaseInput/BaseInput";
import { BaseLabel } from "../../shared/ui/labels/baseLabels/BaseLabel";
import { BigLabel } from "../../shared/ui/labels/bigLabels/BigLabel";
import cls from "./AuthForm.module.scss";
import { User } from "../../entities/user/types/User";

interface AuthFormProps {}

export const AuthForm = ({}: AuthFormProps) => {
  const [user, setUser] = useState<User | null>(null);

  const userChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUser({
      ...user!,
      [id]: value,
    });
  };

  return (
    <form method="POST" className={cls.wrapper} onSubmit={() => Auth(user)}>
      <BigLabel>Auth/Login</BigLabel>
      <div className={cls.inputContainer}>
        <BaseInput
          id="name"
          onChange={(e: ChangeEvent<HTMLInputElement>) => userChange(e)}
        >
          name
        </BaseInput>
        <BaseInput
          id="email"
          onChange={(e: ChangeEvent<HTMLInputElement>) => userChange(e)}
        >
          email
        </BaseInput>
        <BaseInput
          id="password"
          onChange={(e: ChangeEvent<HTMLInputElement>) => userChange(e)}
        >
          password
        </BaseInput>
      </div>
      <BaseButton>Login</BaseButton>
      <BaseLabel>There's no other way</BaseLabel>
    </form>
  );
};
