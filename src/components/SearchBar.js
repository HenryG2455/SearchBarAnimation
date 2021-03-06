import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const upDown = keyframes`
  0%,30% {
    transform: translateY(0);
  }
  35%, 60% {
    transform: translateY(-45px);
  }
  65%, 95% {
    transform: translateY(-85px);
  }
  100% {
    transform: translateY(0);
  }
`;
const Back = styled.div`
  width: 700px;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  padding: 50px 30px;
  box-sizing: border-box;
  border-radius: 20px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  flex: 1;
`;
const H1 = styled.span`
  font-size: 175%;
  color: #ffffff;
  margin-left: 8px;
`;
const Search = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  width: 97%;
  height: 90%;
  border-radius: 7px;
  padding-left: 10px;
  border: none;
`;
const SearchEx = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

const Example = styled.span`
  font-size: 120%;
  padding-left: 5px;
  padding-top: 7px;
  vertical-align: middle;
  display: inline-block;
`;
const Window = styled.div`
  max-height: 48px;
  flex: 1;
  overflow: hidden;
`;

const Suggestions = styled.div`
  margin: 3px;
  animation: ${upDown} infinite 6s ease-in-out;
`;

const SearchButton = styled.div`
  flex: 1;
`;
const Li = styled.li`
  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;
  margin-top: 10px;
  margin-bottom: 15px;
`;
const ListBack = styled.div`
  display: flex;
  box-sizing: border-box;
`;

const ImgW = styled.div`
  box-sizing: border-box;
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const Img = styled.img`
  height: 25px;
  width: 25px;
`;
const SuggestionTextW = styled.div`
  flex: 20;
`;
const SuggestionText = styled.span`
  font-size: 120%;
  align-self: Right;
`;
const Button = styled.button`
  height: 95%;
  width: 25%;
  margin-left: 75%;
  border-radius: 7px;
  border: none;
  background-color: pink;
  font-size: 200%;
  color: #ffffff;
`;

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      opacityModel: 0
    };
  }
  render() {
    const Dropdown = [
      {
        icon: 'https://img.icons8.com/ios/50/000000/taxi-location.png',
        eName: '1069 Seawood Ln'
      },
      {
        icon: 'https://img.icons8.com/ios/50/000000/sydney-opera-house.png',
        eName: 'Sydney Opera House'
      },
      {
        icon:
          'https://img.icons8.com/pastel-glyph/64/000000/skyscrapers--v2.png',
        eName: 'Empire State Building'
      }
    ];
    return (
      <Back>
        <Wrapper>
          <Header>
            <H1>WhereTo</H1>
          </Header>
          <Search>
            <Input placeholder="Where are traveling to? Enter your exact meeting address, office, or location for the best results"></Input>
          </Search>
          <SearchEx>
            <Example>Example: </Example>
            <Window>
              <Suggestions>
                {Dropdown.map((model, index) => (
                  <div key={index}>
                    <Li>
                      <ListBack>
                        <ImgW>
                          <Img src={model.icon} />
                        </ImgW>
                        <SuggestionTextW>
                          <SuggestionText>{model.eName}</SuggestionText>
                        </SuggestionTextW>
                      </ListBack>
                    </Li>
                  </div>
                ))}
              </Suggestions>
            </Window>
          </SearchEx>
          <SearchButton>
            <Button>Search</Button>
          </SearchButton>
        </Wrapper>
      </Back>
    );
  }
}

export default SearchBar;
