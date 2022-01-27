import styled from "@emotion/styled";

const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Spinner = () => {
  return <Img src={require("../images/svelteLogo.png")} alt="로고 이미지" />;
};
