import { useQuery } from "@tanstack/react-query"
import FetchCntr from "../api/reg.fetch"

const useFetchCntr = () => {
    const result = useQuery({
        queryKey: ["cntr"],
        queryFn: FetchCntr
    })
  return result
}

export default useFetchCntr