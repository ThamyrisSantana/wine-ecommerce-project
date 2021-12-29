import { wineApi } from "./api-settings";

interface Props {
  page: number;
  limit: number;
}

export const getWine = async (page: number, limit: number) => {
  const res = await wineApi.get("/products?", {
    params: {
      page: page,
      limit: limit,
    },
  });
  return res.data;
};
