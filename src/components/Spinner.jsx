import styled from "@emotion/styled";
import lodingImg from "../images/loadingImg.png";

const Div = styled.div`
  /* border: 1px solid black; */
  width: 375px;
  height: 812px;
`;

const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Spinner = () => {
  return (
    <Div>
      <Img src={lodingImg} alt="로고 이미지" />
    </Div>
  );
};
