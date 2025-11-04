import { createContext, useContext } from 'react';

export const TicketContext = createContext(null);

export const useTickets = () => useContext(TicketContext);