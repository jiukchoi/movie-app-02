import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../components/Movies";
import styled from "styled-components";
import { showMoviesList } from "../utils/api/movies";

const MainPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMoives = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(showMoviesList);
    setMovies(movies);
    console.log(movies);
    setIsLoading(false);
  };

  const renderMovies = () => {
    return movies.map((movie) => (
      <Movie
        key={movie.id}
        title={movie.title}
        poster={movie.background_image}
        rating={movie.rating}
        summary={movie.summary}
      />
    ));
  };

  useEffect(() => {
    getMoives();
  }, []);

  return (
    <>
      <Title>Movie List</Title>
      {isLoading ? (
        <Loading>Loading...</Loading>
      ) : (
        <MoviesWrapper>{renderMovies()}</MoviesWrapper>
      )}
    </>
  );
};

export default MainPage;

const Title = styled.h1`
  margin-top: 50px;
  font-size: 66px;
  text-align: center;
`;

const MoviesWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 30px;
`;

const Loading = styled.div`
  font-size: 33px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
