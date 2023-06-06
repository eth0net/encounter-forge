import PocketBase from 'pocketbase';
import { createContext } from 'react';

export const PocketBaseContext = createContext<PocketBase | undefined>(
  undefined
);

export default PocketBaseContext;
