import { makeAutoObservable } from "mobx";
import axios from "axios";

class ReposStore {
  repos = [];
  favourites = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  loadDataAction = async (value) => {
    if (value) {
      this.isLoading = true;
      const res = await axios.get(
        `https://api.github.com/search/repositories?q=${value}`,
        {
          params: {
            _limit: 20,
          },
        }
      );
      this.repos = res.data;
      this.isLoading = false;
    }
  };

  addToFavourites = (id) => {
    this.favourites.push(id);
  };

  deleteFromFavourites = (id) => {
    this.favourites.pop(id);
  };
}

const store = new ReposStore();
export default store;
