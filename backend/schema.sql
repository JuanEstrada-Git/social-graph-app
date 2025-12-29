CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL UNIQUE
);

CREATE TABLE friendships (
  from_user INTEGER,
  to_user INTEGER,
  FOREIGN KEY(from_user) REFERENCES users(id),
  FOREIGN KEY(to_user) REFERENCES users(id)
);