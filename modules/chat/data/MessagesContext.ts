import * as React from 'react';

import { Messages } from './messagesLoader';

interface MessagesContext {
    Provider: React.ComponentClass<{ value: Messages[] }>;
    Consumer: React.ComponentClass<{ children: (messages: Messages[]) => React.ReactNode }>;
}

export const MessagesContext: MessagesContext = (React as any).createContext('messages');
