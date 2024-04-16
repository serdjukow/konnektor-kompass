import { useToast } from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import {
  fetchPrepositionen,
  fetchNomenPrepositionen,
  fetchVerbenPrepositionen,
  fetchAdjektivePrepositionen,
} from "../services/preapositionen"

const usePräpositionenQuery = (state) => {
  const toast = useToast()
  return useQuery({
    queryFn: () => fetchPrepositionen(state),
    queryKey: ["preapositionen", state],
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

export { usePräpositionenQuery }

const useNomenPrepositionenQuery = (state) => {
  const toast = useToast()
  return useQuery({
    queryFn: () => fetchNomenPrepositionen(state),
    queryKey: ["nomenPrepositionen", state],
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

export { useNomenPrepositionenQuery }

const useVerbenPrepositionenQuery = (state) => {
  const toast = useToast()
  return useQuery({
    queryFn: () => fetchVerbenPrepositionen(state),
    queryKey: ["verbenPrepositionen", state],
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

export { useVerbenPrepositionenQuery }

const useAdjektivePrepositionenQuery = (state) => {
  const toast = useToast()
  return useQuery({
    queryFn: () => fetchAdjektivePrepositionen(state),
    queryKey: ["adjektivePrepositionen", state],
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

export { useAdjektivePrepositionenQuery }
