import React, { useState, useEffect } from "react";
import StarWarsCard from "./StarWarsCard";
import { Container, Grid } from "semantic-ui-react";
import CharacterImage from "./CharacterImage";
import axios from "axios";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [images, setImages] = useState([
    "https://lumiere-a.akamaihd.net/v1/images/screen_shot_2015-07-24_at_1_84da9ffb.jpeg?region=0%2C0%2C1280%2C915",
    "https://lumiere-a.akamaihd.net/v1/images/open-uri20150608-27674-n1cwfu_f393e4d7.jpeg?region=0%2C0%2C1280%2C720",
    "https://lumiere-a.akamaihd.net/v1/images/r2-d2_41dacaa9_68566da1.jpeg?region=0%2C0%2C1536%2C864&width=768",
    "https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C23%2C1400%2C785&width=768",
    "https://lumiere-a.akamaihd.net/v1/images/open-uri20150608-27674-yyyjud_fa69f3b7.jpeg?region=0%2C0%2C1280%2C720",
    "https://lumiere-a.akamaihd.net/v1/images/owen-lars-bio-5_dd84f781.jpeg?region=0%2C0%2C1280%2C720",
    "https://lumiere-a.akamaihd.net/v1/images/databank_berulars_01_169_68101518.jpeg?region=0%2C0%2C1560%2C878&width=768",
    "https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666&width=768",
    "https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864&width=768"
  ]);

  useEffect(() => {
    axios.get("https://swapi.co/api/people/").then(res => {
      console.log(res.data.results);
      const people = res.data.results;
      setCharacters(people);
    });
  }, []);

  return (
    <Container>
      <Grid relaxed columns={3} divided="vertically">
        <Grid.Row padded="vertically" columns={3}>
          {characters.map(character => {
            return (
              <>
                <CharacterImage imgUrl={images[0]} />
                <StarWarsCard
                  key={character}
                  name={character.name}
                  home={character.homeworld}
                  gender={character.gender}
                  films={character.films}
                />
              </>
            );
          })}
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default CharacterList;
