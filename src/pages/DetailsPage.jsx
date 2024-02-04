import "../styles/DetailsPage.scss";
import { useParams } from "react-router-dom";
import store from "../stores/reposStore";
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
          <h2>
            Owner login: <span>{repoItem.owner.login}</span>
          </h2>
          <div className="box-content">
            <div>
              <img srcSet={repoItem.owner.avatar_url} alt="" />
            </div>
            <div>
              <p>
                ID number: <span>{repoItem.id}</span>
              </p>
              <p>
                Full name: <span>{repoItem.full_name}</span>
              </p>
              <p>
                Language: <span>{repoItem.language}</span>
              </p>
              <p>
                Number of forks: <span>{repoItem.forks}</span>
              </p>
              <p>
                Namber of stars: <span>{repoItem.stargazers_count}</span>
              </p>
              <p>
                Number of watchers: <span>{repoItem.watchers}</span>
              </p>
              <p>
                Description: <span>{repoItem.description}</span>
              </p>
              <p>
                URL:{" "}
                <a
                  className="details-link"
                  href={repoItem.html_url}
                  target="_blank"
                >
                  Click Repository Link
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
          </div>
        </div>
      )}
    </>
  );
};
