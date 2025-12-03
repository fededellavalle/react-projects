import { useState } from "react";

export function TwitterFollowCard({ children, userName, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-follow-card-button is-following"
    : "tw-follow-card-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-follow-card">
      <header className="tw-follow-card-header">
        <img
          alt={`El avatar de ${userName}`}
          src={`https://unavatar.io/${userName}`}
          className="tw-follow-card-avatar"
        ></img>
        <div className="tw-follow-card-info">
          <strong>{children}</strong>
          <span className="tw-follow-card-username">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="twitter-follow-card-text">{text}</span>
          <span className="twitter-follow-card-stop-follow">
            Dejar de seguir
          </span>
        </button>
      </aside>
    </article>
  );
}
