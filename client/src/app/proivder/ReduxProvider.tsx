import { ReactNode } from 'react';
import cls from './ReduxProvider.module.scss';
import { Provider } from 'react-redux';
import { store } from '../../shared/store/store';

interface ReduxProviderProps { children: ReactNode }

export const ReduxProvider = ({children}: ReduxProviderProps) => {

  

  return (
    <Provider store={store}>{children}</Provider>
  )
}