import { searchByNameMeals,searchMealsByLetters,searchMealsByIngredient } from "../utils/getData";

export function searchMeals({commit},keyWord){
    Promise.all([searchByNameMeals(keyWord)]).then((dataByName) => {
        // debugger;
        commit('setSearchMeals',dataByName[0].meals);
      });
}

export function searchMealsByLetter({commit},letter){
  Promise.all([searchMealsByLetters(letter)]).then((dataByLetter) => {
      // debugger;
      commit('setMealsByLetter',dataByLetter[0]?.meals);
    });
}

export function searchMealsByIngredients({commit},ingredient){
  Promise.all([searchMealsByIngredient(ingredient)]).then((dataIngredients) => {
      // debugger;
      commit('setMealsByIngredients',dataIngredients[0]?.meals);
    });
}