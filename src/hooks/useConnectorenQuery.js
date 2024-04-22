import { useToast } from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import {
  fetchConnectoren,
  fetchConnectorenForQuestions,
} from "../services/connectoren.js"

const useConnectorenQuery = (state) => {
  const toast = useToast()
  return useQuery({
    queryFn: () => fetchConnectoren(state),
    queryKey: ["connectoren", state],
    staleTime: 1000 * 5,
    options: {
      keepPreviousData: true,
      refetchOnWindowFocus: true,
    },
    onError: (err) => {
      if (err instanceof Error) {
        toast({
          status: "error",
          title: err.message,
          position: "top-right",
        })
      }
    },
  })
}

export { useConnectorenQuery }

const useConnectorenForQuestions = ([numberOfQuestions, state]) => {
  const toast = useToast()
  return useQuery({
    queryFn: () => fetchConnectorenForQuestions(numberOfQuestions, state),
    queryKey: ["ConnectorenForQuestions", numberOfQuestions],
    staleTime: 1000 * 5,
    options: {
      keepPreviousData: true,
      refetchOnWindowFocus: true,
    },
    onError: (err) => {
      if (err instanceof Error) {
        toast({
          status: "error",
          title: err.message,
          position: "top-right",
        })
      }
    },
  })
}

export { useConnectorenForQuestions }
