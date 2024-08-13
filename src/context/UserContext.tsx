import { createContext } from 'react';

type ObjectContext = object;
export const UserContext = createContext<ObjectContext>({});
