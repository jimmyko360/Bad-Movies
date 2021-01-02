-- SET UP SCHEMA HERE

CREATE DATABASE movies;

USE movies;

CREATE TABLE favorites(
  movie_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  poster_path VARCHAR(255),
  original_title VARCHAR(255),
  release_date VARCHAR(255),
  vote_average VARCHAR(255),
  genre_ids VARCHAR(255),
  id INT
);