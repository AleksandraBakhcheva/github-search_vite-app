import "../styles/Card.scss";

export const RepoCard = (props) => {
  const { html_url, name, stargazers_count, forks, avatar_url, alt, onClick } =
    props;

  return (
    <div className="card">
      <p>
        <a href={html_url} target="_blank">
          {html_url}
        </a>
        <span> - {name}</span>
      </p>
      <p>Namber of stars: {stargazers_count}</p>
      <p>Number of forks: {forks}</p>
      <img srcSet={avatar_url} alt={alt} />
      <div className="card-buttons">
        <button onClick={onClick}>Add to Favourites</button>
        <button>More Details</button>
      </div>
    </div>
  );
};
