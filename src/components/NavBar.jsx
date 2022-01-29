import styled from "@emotion/styled";

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 1px solid #e8e8ed;
  padding: 0 8px 32px;
  position: absolute;
  bottom: 1px;
`;

const IconWrap = styled.div`
  /* border: 1px solid blue; */
  :first-of-type {
    padding: 3px 15px 12px;
    p {
      position: absolute;
      bottom: -1.5px;
      left: 10px;
    }
  }
  :nth-of-type(2) {
    padding: 5px 18px 15px;
    p {
      position: absolute;
      bottom: -5px;
      left: 6px;
    }
  }
  :nth-of-type(3) {
    padding: 7px 20.77px 16.77px 19px;
    p {
      position: absolute;
      bottom: -6px;
      left: 6px;
    }
  }
  :nth-of-type(4) {
    padding: 3px 17px 15px;
    p {
      position: absolute;
      bottom: -5px;
      left: 4px;
    }
  }
  :last-child {
    padding: 6px 21px 20px;
    p {
      position: absolute;
      bottom: -10px;
      left: 3.5px;
    }
  }
`;

const Icon = styled.div`
  /* border: 1px solid black; */
  position: relative;
  font-size: 8.5px;
`;

export const NavBar = () => {
  return (
    <Nav>
      <IconWrap>
        <Icon>
          <img src={require("../images/topIcon.png")} alt="Top 아이콘 이미지" />
          <p>Top</p>
        </Icon>
      </IconWrap>
      <IconWrap>
        <Icon>
          <img src={require("../images/newIcon.png")} alt="Top 아이콘 이미지" />
          <p>New</p>
        </Icon>
      </IconWrap>
      <IconWrap>
        <Icon>
          <img src={require("../images/askIcon.png")} alt="Top 아이콘 이미지" />
          <p>Ask</p>
        </Icon>
      </IconWrap>
      <IconWrap>
        <Icon>
          <img
            src={require("../images/showIcon.png")}
            alt="Top 아이콘 이미지"
          />
          <p>Show</p>
        </Icon>
      </IconWrap>
      <IconWrap>
        <Icon>
          <img
            src={require("../images/jobsIcon.png")}
            alt="Top 아이콘 이미지"
          />
          <p>Jobs</p>
        </Icon>
      </IconWrap>
    </Nav>
  );
};
