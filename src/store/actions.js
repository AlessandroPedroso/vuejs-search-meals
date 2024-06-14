import { searchByNameMeals } from "../utils/getData";

export function searchMeals({commit},keyWord){
    Promise.all([searchByNameMeals(keyWord)]).then((dataByName) => {
        // debugger;
        commit('setSearchMeals',dataByName[0].meals);
      });
}