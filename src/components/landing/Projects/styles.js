import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);
  cursor: pointer;

  h4 {
    color: ${({ theme }) => (theme === "light" ? "#212121" : "#fff")};
  }

  p {
    color: ${({ theme }) => (theme === "light" ? "#707070" : "#c7c7c7")};
  }
`;

export const Content = styled.div`
  padding: 1rem 0;
  min-height: 160px;
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    &:first-child {
      margin-right: 0.5rem;
    }

    img {
      margin: 0;
    }

    svg path {
      fill: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
    }

    span {
      color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
      margin-left: 0.5rem;
    }
  }
`;

export const Languages = styled.div`
  opacity: 0.5;
  font-size: 14px;
`;
export const Circle = styled.div`
  position: relative;
  top: 1px;
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 1px solid transparent;
  border-radius: 50%;
  background-color: ${(props) => (props.red ? "red" : "yellow")};
`;
