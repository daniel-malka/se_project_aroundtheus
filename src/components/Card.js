import Recat from "react";

function Card({ card, oonCardClick }) {
  function handleClick() {
    oonCardClick(card);
  }

  return (
    <li className="gallery__item">
      <img
        src={card.link}
        alt={card.name}
        onClick={handleClick}
        className="gallery__img"
      />
      <span className="gallery__bin" />
      <div className="desc">
        <h2 className="desc__text">{card.name}</h2>
        <div className="like">
          <button
            type="button"
            aria-label="button"
            id="like__button"
            className="like__button"
          />
          <p className="like__counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}
export default Card;
