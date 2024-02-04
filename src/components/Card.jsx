import "../styles/Card.scss";
import { Link } from "react-router-dom";

export const Card = (props) => {
  const {
    url,
    repo_name,
    stars_count,
    forks_num,
    avatar_url,
    alt,
    onClick,
    btn_name,
    card_id,
  } = props;

  return (
    <div className="card">
      <p>
        <a className="card-link" href={url} target="_blank">
          Click Repository Link
        </a>
        <span className="card-header"> - {repo_name}</span>
      </p>
      <p>
        Number of stars: <span>{stars_count}</span>
      </p>
      <p>
        Number of forks: <span>{forks_num}</span>
      </p>
      <img srcSet={avatar_url} alt={alt} />
      <div className="card-buttons">
        <button onClick={onClick}>{btn_name}</button>
        <Link to={`details/${card_id}`}>
          <button>More Details</button>
        </Link>
      </div>
    </div>
  );
};
