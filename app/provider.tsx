"use client";

import { Provider as ReduxProvider } from "react-redux";
import store from "@/lib/store";
import { LanguageProvider } from "@/lib/language-context";

export default function ReduxStoreProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider store={store}>
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </ReduxProvider>
  );
}
