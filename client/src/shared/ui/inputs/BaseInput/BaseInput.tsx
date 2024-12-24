import { ChangeEvent } from 'react';
import cls from './BaseInput.module.scss';

interface BaseInputProps {children: string, id: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void}

export const BaseInput = ({id, onChange, children}: BaseInputProps) => {
  return <input className={cls.input} id={id} onChange={(e: any) => onChange(e)} placeholder={children}/>
}