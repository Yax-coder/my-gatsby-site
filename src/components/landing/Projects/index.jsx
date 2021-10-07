import React, { useContext } from "react";
import { useStaticQuery, graphql, navigate } from "gatsby";
import { ThemeContext } from "providers/ThemeProvider";
import { Container, Card, TitleWrap } from "components/common";
import Star from "components/common/Icons/Star";
import Fork from "components/common/Icons/Fork";
import {
  Wrapper,
  Grid,
  Item,
  Content,
  Stats,
  Languages,
  Circle,
} from "./styles";

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  // const {
  //   github: {
  //     viewer: {
  //       repositories: { edges },
  //     },
  //   },
  // } = useStaticQuery(
  //   graphql`
  //     {
  //       github {
  //         viewer {
  //           repositories(first: 8, orderBy: { field: STARGAZERS, direction: DESC }) {
  //             edges {
  //               node {
  //                 id
  //                 name
  //                 url
  //                 description
  //                 stargazers {
  //                   totalCount
  //                 }
  //                 forkCount
  //                 languages(first: 3) {
  //                   nodes {
  //                     id,
  //                     name
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `
  // );
  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        <Item
          onClick={() => navigate("https://github.com/Yax-coder/Css-Painter")}
          as="a"
          target="_blank"
          rel="noopener noreferrer"
          theme={theme}
        >
          <Card theme={theme}>
            <Content>
              <h4>Css-Painter</h4>
              <p>This is a HTML and CSS based Painter clone</p>
            </Content>
            <TitleWrap>
              <Stats theme={theme}>
                <div>
                  <Star color={theme === "light" ? "#000" : "#fff"} />
                  <span>{1}</span>
                </div>
                <div>
                  <Fork color={theme === "light" ? "#000" : "#fff"} />
                  {0}
                </div>
              </Stats>
              <Stats theme={theme}>
                <Languages>
                  <span>
                    {" "}
                    <Languages>
                      {" "}
                      <Circle yellow></Circle>Javascript
                    </Languages>
                  </span>
                </Languages>
              </Stats>
            </TitleWrap>
          </Card>
        </Item>
        <Item
          onClick={() => navigate("https://github.com/Yax-coder/atap-cms")}
          as="a"
          target="_blank"
          rel="noopener noreferrer"
          theme={theme}
        >
          <Card theme={theme}>
            <Content>
              <h4>atap-cms</h4>
              <p>
                A content management system build for managing college
                activities.
              </p>
            </Content>
            <TitleWrap>
              <Stats theme={theme}>
                <div>
                  <Star color={theme === "light" ? "#000" : "#fff"} />
                  <span>{1}</span>
                </div>
                <div>
                  <Fork color={theme === "light" ? "#000" : "#fff"} />
                  {0}
                </div>
              </Stats>
              <Stats theme={theme}>
                <Languages>
                  <span>
                    {" "}
                    <Languages>
                      <Circle red></Circle>Blade
                    </Languages>
                  </span>
                </Languages>
                <Languages>
                  <span>
                    {" "}
                    <Languages>
                      <Circle yellow></Circle>Javascript
                    </Languages>
                  </span>
                </Languages>
              </Stats>
            </TitleWrap>
          </Card>
        </Item>
        <Item
          as="a"
          target="_blank"
          rel="noopener noreferrer"
          theme={theme}
          onClick={() => navigate("https://github.com/Yax-coder/Drag-and-Drop")}
        >
          <Card theme={theme}>
            <Content>
              <h4>Drag-and-Drop</h4>
              <p>
                A kanban board like drag and drop Build with Html css and
                javascript
              </p>
            </Content>
            <TitleWrap>
              <Stats theme={theme}>
                <div>
                  <Star color={theme === "light" ? "#000" : "#fff"} />
                  <span>{1}</span>
                </div>
                <div>
                  <Fork color={theme === "light" ? "#000" : "#fff"} />
                  {0}
                </div>
              </Stats>
              <Stats theme={theme}>
                <Languages>
                  <span>
                    {" "}
                    <Languages>
                      {" "}
                      <Circle yellow></Circle>Javascript
                    </Languages>
                  </span>
                </Languages>
              </Stats>
            </TitleWrap>
          </Card>
        </Item>
        <Item
          onClick={() =>
            navigate("https://github.com/Yax-coder/awesome-video-player")
          }
          as="a"
          target="_blank"
          rel="noopener noreferrer"
          theme={theme}
        >
          <Card theme={theme}>
            <Content>
              <h4>awesome-video-player</h4>
              <p>a simple awesome video player build with javascript</p>
            </Content>
            <TitleWrap>
              <Stats theme={theme}>
                <div>
                  <Star color={theme === "light" ? "#000" : "#fff"} />
                  <span>{1}</span>
                </div>
                <div>
                  <Fork color={theme === "light" ? "#000" : "#fff"} />
                  {0}
                </div>
              </Stats>
              <Stats theme={theme}>
                <Languages>
                  <span>
                    {" "}
                    <Languages>
                      {" "}
                      <Circle yellow></Circle>Javascript
                    </Languages>
                  </span>
                </Languages>
              </Stats>
            </TitleWrap>
          </Card>
        </Item>
        <Item
          onClick={() => navigate("https://github.com/Yax-coder/breads-client")}
          as="a"
          target="_blank"
          rel="noopener noreferrer"
          theme={theme}
        >
          <Card theme={theme}>
            <Content>
              <h4>breads-client</h4>
              <p>
                Keep track of what you read online, and see what your friends
                are reading.
              </p>
            </Content>
            <TitleWrap>
              <Stats theme={theme}>
                <div>
                  <Star color={theme === "light" ? "#000" : "#fff"} />
                  <span>{0}</span>
                </div>
                <div>
                  <Fork color={theme === "light" ? "#000" : "#fff"} />
                  {52}
                </div>
              </Stats>
              <Stats theme={theme}>
                <Languages>
                  <span>
                    {" "}
                    <Languages>
                      <Circle
                        style={{
                          background: "skyblue ",
                        }}
                      ></Circle>
                      Typescript
                    </Languages>
                  </span>
                </Languages>
                <Languages>
                  <span>
                    {" "}
                    <Languages>
                      <Circle yellow></Circle>Javascript
                    </Languages>
                  </span>
                </Languages>
              </Stats>
            </TitleWrap>
          </Card>
        </Item>
        <Item
          as="a"
          target="_blank"
          rel="noopener noreferrer"
          theme={theme}
          onClick={() => navigate("https://github.com/Yax-coder/Calculator")}
        >
          <Card theme={theme}>
            <Content>
              <h4>Calculator</h4>
              <p>awesome calculator build with javascript</p>
            </Content>
            <TitleWrap>
              <Stats theme={theme}>
                <div>
                  <Star color={theme === "light" ? "#000" : "#fff"} />
                  <span>{1}</span>
                </div>
                <div>
                  <Fork color={theme === "light" ? "#000" : "#fff"} />
                  {0}
                </div>
              </Stats>
              <Stats theme={theme}>
                <Languages>
                  <span>
                    {" "}
                    <Languages>
                      {" "}
                      <Circle yellow></Circle>Javascript
                    </Languages>
                  </span>
                </Languages>
              </Stats>
            </TitleWrap>
          </Card>
        </Item>
      </Grid>
    </Wrapper>
  );
};
