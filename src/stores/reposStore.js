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
    if (!this.favourites.includes(id)) {
      this.favourites.push(id);
    }
  };

  deleteFromFavourites = (id) => {
    const objWithIdIndex = this.favourites.findIndex(
      (item) => item.id == id.id
    );
    if (objWithIdIndex > -1) {
      this.favourites.splice(objWithIdIndex, 1);
    }
    return this.favourites;
  };
}

const store = new ReposStore();
export default store;
