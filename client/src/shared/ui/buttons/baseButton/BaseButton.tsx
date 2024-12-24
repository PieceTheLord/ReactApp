import cls from './BaseButton.module.scss';

interface BaseButtonProps { children: string, disabled?: boolean }

export const BaseButton = ({ children, disabled }: BaseButtonProps) => {
  return <button className={cls.button} disabled={disabled}>{children}</button>
}