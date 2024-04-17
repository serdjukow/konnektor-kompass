import { useToast } from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import { fetchWords } from "../services/words.js"

const useWordsQuery = (state) => {
  
  const toast = useToast()
  return useQuery({
    queryFn: () => fetchWords(state),
    queryKey: ["wordsC1", state],
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

export { useWordsQuery }
