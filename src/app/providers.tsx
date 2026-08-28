import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { PropsWithChildren } from "react";
import { TemaProvider } from '../contexts/TemaContext';

const queryClient = new QueryClient ({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60,

            retry: 1
        }
    }
});

export function AppProviders ({ children}: Readonly<PropsWithChildren>){
    return(
        <QueryClientProvider client={queryClient}>
            <TemaProvider>
                {children}
                <ReactQueryDevtools initialIsOpen = {false}/>
            </TemaProvider>
        </QueryClientProvider>
    );
}