import styled from "styled-components";

const Movie = ({ title, poster, rating, summary }) => {
  return (
    <>
      <Wrapper>
        <Header>
          <h4>{title}</h4>
          <b>{rating}</b>
        </Header>
        <Body>
          <Poster src={poster} />
          <Summary>{summary}</Summary>
        </Body>
      </Wrapper>
    </>
  );
};

export default Movie;

const Wrapper = styled.div`
  width: 380px;
  height: 330px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
`;

const Body = styled.div`
  display: flex;
  position: relative;
`;

const Poster = styled.img`
  top: 100px;
  left: -20px;
  width: 200px;
  height: 200px;
  position: absolute;
`;

const Summary = styled.div`
  margin-top: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.2em;
  height: 3.6em;
  overflow: hidden;
`;
