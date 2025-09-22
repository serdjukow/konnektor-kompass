import React from "react"
import ReactDOM from "react-dom/client"
import AppPage from "./AppPage"
import { Analytics } from "@vercel/analytics/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ChakraProvider } from "@chakra-ui/react"
import "swiper/css"
// import "swiper/css/navigation" // Удалено, так как используем кастомную навигацию
// import "swiper/css/pagination" // Удалено, так как используем кастомную пагинацию

const client = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <>
        <QueryClientProvider client={client}>
            <ChakraProvider>
                <AppPage />
                <Analytics
                    beforeSend={(e) => {
                        if (e.url.includes("private")) return null
                        return e
                    }}
                />
                <ReactQueryDevtools initialIsOpen={false} />
            </ChakraProvider>
        </QueryClientProvider>
    </>
)
