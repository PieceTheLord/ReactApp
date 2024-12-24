import cls from './BigLabel.module.scss';
import { ReactNode } from 'react'

interface BigLabelProps { children: ReactNode }

export const BigLabel = ({children}: BigLabelProps) => {
  return (
    <div className={cls.label}>
      {children}
    </div>
  )
}