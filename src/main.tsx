import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { I18nextProvider } from "react-i18next"
import i18n from "./i18n"
import { Provider } from "react-redux"
import { persistor, store } from "./redux/store.ts"
import { RouterProvider } from "react-router-dom"
import router from "./router/index.tsx"
import { PersistGate } from "redux-persist/integration/react"
import { Toaster } from "sonner"
import { ThemeProvider } from "./components/theme/theme-provider.tsx"
import defaultBikes from "./data/defaultBikes.json"
import { getItem, setItem } from "./utils/localStorage"
import { TBike } from "./types/bikes.type"

if (!getItem<TBike[]>("bikes")) {
  setItem("bikes", defaultBikes)
}

ReactDOM.createRoot(document.getElementById("root")!).render(
        <React.StrictMode>
                <I18nextProvider i18n={i18n}>
                        <ThemeProvider>
                                <Provider store={store}>
                                        <PersistGate loading={null} persistor={persistor}>
                                                <RouterProvider router={router} />
                                        </PersistGate>
                                </Provider>
                                <Toaster richColors />
                        </ThemeProvider>
                </I18nextProvider>
        </React.StrictMode>
)
