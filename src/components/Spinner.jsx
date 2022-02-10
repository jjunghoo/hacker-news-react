import styled from "@emotion/styled";

const Div = styled.div`
  width: 375px;
  /* height: 812px; */
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
      <Img
        src="https://rawcdn.githack.com/jjunghoo/hacker-news-react/7733082f606483f0751f021fadd3a0350db6c7fb/src/images/loadingImg.png"
        alt="로고 이미지"
      />
    </Div>
  );
};
