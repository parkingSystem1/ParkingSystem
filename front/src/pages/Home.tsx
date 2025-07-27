import {
  SearchContainer,
  SearchBox,
  SearchText,
  SearchIcon,
} from "../styles/Home.styles";
import searchIcon from "../assets/search.png";

const Home = () => {
  return (
    <>
      <SearchContainer>
        <SearchBox>
          <SearchText>어디로 예약해줄까요?</SearchText>
          <SearchIcon>
            <img src={searchIcon} alt="logo" />
          </SearchIcon>
        </SearchBox>
      </SearchContainer>
    </>
  );
};

export default Home;
