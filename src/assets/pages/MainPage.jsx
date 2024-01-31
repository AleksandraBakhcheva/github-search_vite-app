import "../styles/MainPage.scss";
import { observer } from "mobx-react";
import { useState, useEffect } from "react";
import { makeDebounceHook } from "../hooks/use-debounce";
import { throttle } from "lodash-es";
import store from "../stores/repos-store";
import { RepoCard } from "../components/RepoCard";
import { FavCard } from "../components/FavCard";

export const MainPage = observer(() => {
  const [userInput, setUserInput] = useState("");
  const useThrottle = makeDebounceHook(throttle);

  const makeRequest = useThrottle(() => {
    console.log("user request: ", userInput);
  }, 5000);

  const handleChange = (event) => {
    const { value } = event.target;
    makeRequest(value);
    setUserInput(value);
  };

  useEffect(() => {
    store.loadDataAction(userInput);
  }, [userInput]);

  return (
    <div className="container">
      <div className="container-search">
        <h1>Search in GitHub:</h1>
        <label htmlFor="user-search"></label>
        <input
          id="user-search"
          type="text"
          onChange={(event) => handleChange(event)}
          value={userInput}
          placeholder="Search..."
        />
      </div>
      <div className="container-repos">
        <div>
          {store.repos.items && <h4>List of repositories:</h4>}
          {store.repos.items &&
            store.repos.items.map((item) => (
              <div key={item.id}>
                <RepoCard
                  html_url={item.html_url}
                  name={item.full_name}
                  stargazers_count={item.stargazers_count}
                  forks={item.forks}
                  avatar_url={item.owner.avatar_url}
                  alt={item.id}
                  onClick={() => store.addToFavourites(item)}
                  cardId={item.id}
                />
              </div>
            ))}
        </div>
        <div>
          {store.favourites.length > 0 && <h4>List of favourites:</h4>}
          {store.favourites &&
            store.favourites.map((item) => (
              <div key={item.id}>
                <FavCard
                  html_url={item.html_url}
                  name={item.full_name}
                  stargazers_count={item.stargazers_count}
                  forks={item.forks}
                  avatar_url={item.owner.avatar_url}
                  alt={item.id}
                  onClick={() => store.deleteFromFavourites(item)}
                  cardId={item.id}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
});
