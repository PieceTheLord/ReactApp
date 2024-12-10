import cls from './BaseInput.module.scss';

interface BaseInputProps { children: string }

export const BaseInput = ({children}: BaseInputProps) => {
  return <input className={cls.input} placeholder={children}></input>
  
}