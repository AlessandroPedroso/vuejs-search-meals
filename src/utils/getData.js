import api from "../service/api";

export async function getMeals() {
  const { data } = await api.get("list.php?i=list");
  return data;
}

export async function searchByNameMeals(byNameMeals) {
  const { data } = await api.get(`search.php?s=${byNameMeals}`);

  return data;
}

export async function getMealDetailsById(id) {
  const { data } = await api.get(`lookup.php?i=${id}`);

  return data;
}
