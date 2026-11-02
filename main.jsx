*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Times New Roman', Times, serif;
  color: #000;
  background: #fff;
}

.gallery {
  padding: 0 24px 40px;
}

.gallery__title {
  margin: 32px 0 30px;
  font-size: 32px;
  text-align: center;
}

.photo-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.photo-card {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.photo-card__image {
  display: block;
  width: 200px;
  height: auto;
  background: #eee; /* placeholder while the image loads */
}

.photo-card__author {
  font-size: 14px;
}

.like-button {
  padding: 0;
  border: none;
  background: none;
  font-size: 22px;
  color: #1877f2;
  cursor: pointer;
  transition: transform 0.1s ease;
}

.like-button:hover {
  color: #0f5fc7;
}

.like-button:active {
  transform: scale(1.2);
}

.like-button:focus-visible {
  outline: 2px solid #1877f2;
  outline-offset: 2px;
}

.like-count {
  font-size: 14px;
  min-width: 1ch;
}

.status {
  font-size: 14px;
  color: #555;
}

.status--error {
  color: #c0392b;
}

.retry-button {
  margin-left: 6px;
  font: inherit;
  cursor: pointer;
}
