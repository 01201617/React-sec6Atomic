import sytled from "styled-components";

/** 渡されたものをカードのコンポーネントで囲ってあげる*/

export const Card = (props) => {
  const { children } = props;
  return <SCard>{children}</SCard>;
};

const SCard = sytled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  bordr-radius: 8px;
  padding: 16px;
`;
