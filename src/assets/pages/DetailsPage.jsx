import "../styles/DetailsPage.scss";
import { useParams } from "react-router-dom";
import store from "../stores/repos-store";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const DetailsPage = () => {
  const params = useParams();
  const current = params.id;
  let repoItem = {};

  if (store.repos.items) {
    repoItem = store.repos.items.find((item) => item.id == current);
  }

  return (
    <>
      {store.repos.items && (
        <div className="details-box">
          <h1>{`Details about "${repoItem.name}"`}</h1>
          <h2>Owner login: {repoItem.owner.login}</h2>
          <img srcSet={repoItem.owner.avatar_url} alt="" />
          <p>ID number: {repoItem.id}</p>
          <p>Full name: {repoItem.full_name}</p>
          <p>Language: {repoItem.language}</p>
          <p>Number of forks: {repoItem.forks}</p>
          <p>Namber of stars: {repoItem.stargazers_count}</p>
          <p>Number of watchers: {repoItem.watchers}</p>
          <p>Description: {repoItem.description}</p>
          <p>
            URL:{" "}
            <a
              className="details-link"
              href={repoItem.html_url}
              target="_blank"
            >
              {repoItem.html_url}
            </a>
          </p>
          <div>
            <Link to="/">
              <motion.button
                className="details-button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
              >
                HOMEPAGE
              </motion.button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
