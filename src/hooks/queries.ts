import { useQuery, UseQueryOptions } from "react-query";
import { getWineItems } from "../services/api-request";
import { Params, Response } from "../services/types";

export const useWineItems = (
  { filter, limit, name, page }: Params,
  queryConfig?: Omit<UseQueryOptions<Response>, "queryKey" | "queryFn">
) =>
  useQuery(
    ["wineItems", page, name, filter, limit],
    () => getWineItems({ filter, limit, name, page }),
    queryConfig
  );
