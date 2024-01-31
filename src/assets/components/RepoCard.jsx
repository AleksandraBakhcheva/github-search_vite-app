import "../styles/Card.scss";
import { Link } from "react-router-dom";

export const RepoCard = (props) => {
  const {
    html_url,
    name,
    stargazers_count,
    forks,
    avatar_url,
    alt,
    onClick,
    cardId,
  } = props;

  return (
    <div className="card">
      <p>
        <a href={html_url} target="_blank">
          Click Repository Link
        </a>
        <span> - {name}</span>
      </p>
      <p>Number of stars: {stargazers_count}</p>
      <p>Number of forks: {forks}</p>
      <img srcSet={avatar_url} alt={alt} />
      <div className="card-buttons">
        <button onClick={onClick}>Add to Favourites</button>
        <Link to={`details/${cardId}`}>
          <button>More Details</button>
        </Link>
      </div>
    </div>
  );
};
