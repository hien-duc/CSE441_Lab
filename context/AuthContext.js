import { createContext } from 'react';

export const AuthContext = createContext({
    signIn: async (token) => {},
    signOut: async () => {},
});
