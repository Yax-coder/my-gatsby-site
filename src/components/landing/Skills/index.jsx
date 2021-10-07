import React, { useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ThemeContext } from "providers/ThemeProvider";
import { Container, Button } from "components/common";
import dev from "assets/illustrations/skills.svg";
import { Wrapper, SkillsWrapper, Details, Thumbnail } from "./styles";
import { Links } from "components/theme/Footer/styles";
import social from "../../theme/Footer/social.json";

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m yax and I’m a frontend & Devops engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>
            Hello again!, my name is Yahya Ahmad. I'm a Frontend develover. I am
            originally from Nigeria. I have been a web developer for over 5
            years now. and i love coding and solving challenges. In my free
            time, I enjoy footballing, practicing cooking, and exploring the
            world by reading books..
          </p>
          <div
            style={{
              display: "flex",
              flex: "1",
            }}
          >
            <Button
              style={{
                marginRight: "1rem",
              }}
              as={AnchorLink}
              href="#contact"
            >
              Hire me
            </Button>
            <Links>
              {social.map(({ id, name, link, icon }) => (
                <a
                  key={id}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`follow me on ${name}`}
                >
                  <img width="24" src={icon} alt={name} />
                </a>
              ))}
            </Links>
          </div>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
