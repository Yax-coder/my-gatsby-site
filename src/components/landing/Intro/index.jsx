import React, { useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ThemeContext } from "providers/ThemeProvider";
import { Header } from "components/theme";
import { Container, Button } from "components/common";
import dev from "assets/illustrations/dev.svg";
import { Wrapper, IntroWrapper, Details, Thumbnail, Title } from "./styles";
import { Links } from "components/theme/Footer/styles";
import social from "../../theme/Footer/social.json";

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi🖐️ There!</h1>
          <Title>
            My name is Yax, I’m a Frontend developer👨💻. <br /> I Like building
            things with javascript.
            <br />
            React, Node, Graphql, Next are my Buddies✊
            <br /> my love for css is by blood 👊.
            <br /> I love Cooking🧑‍🍳 and playing Football⚽.
            <br /> I love ❤️ meeting new people everyday.
            <br /> I often cry😬 and smile😁 at the same time when <br />
            writing tests.
            <br /> Typescript used to be my 🥱. but now we bros🤝!
            <br />I like learning📙 new things and teaching the little i know.
            <br /> Guess what i love❤️ You for being here 🙌 right now.
            <br /> i sometimes write here{" "}
            <a href="https://dev.to/yahaya0000">Dev.to</a>.
            <br />
            <br />
            <Button as={AnchorLink} href="#contact">
              Let's Talk
            </Button>
            <br />
            <br />
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
          </Title>
        </Details>
        <Thumbnail>
          <img src={dev} alt="I’m John and I’m a JAMStack engineer!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
