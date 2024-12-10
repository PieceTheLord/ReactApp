import cls from './BaseLabel.module.scss';
import { ReactNode } from 'react';

interface BaseLabelProps { children: ReactNode }

export const BaseLabel = ({children}: BaseLabelProps) => {

  

  return (
    <p className={cls.label}>
      {children}
    </p>
  )
}