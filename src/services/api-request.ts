import { wineApi } from "./api-settings";
import { Params, Response } from "./types";

export const getWineItems = async ({
  page,
  filter,
  limit,
  name,
}: Params): Promise<Response> => {
  const res = await wineApi.get("/products?", {
    params: {
      page: page,
      limit: limit,
      filter: filter,
      name: name,
    },
  });
  return res.data;
};
