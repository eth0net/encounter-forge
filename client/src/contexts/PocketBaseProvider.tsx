import PocketBase from 'pocketbase';
import { PocketBaseContext } from './PocketBaseContext';

export const PocketBaseProvider = ({
  children, client
}: PocketBaseProviderProps) => {
  return (
    <PocketBaseContext.Provider value={client}>
      {children}
    </PocketBaseContext.Provider>
  );
};

export interface PocketBaseProviderProps {
  client: PocketBase;
  children?: React.ReactNode;
};
