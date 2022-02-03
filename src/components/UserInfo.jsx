import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { mapTime } from "../mappers/mapTimes";
import { getUserInfo } from "../service/hackerNewsAPI";

const UserDiv = styled.div`
  /* border: 1px solid black; */
  padding: 25px;
  color: #333;
  line-height: 1.5;
  .goBack {
    width: max-content;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  span {
    font-size: 28px;
  }
  p {
    margin: 14px 0;
    font-size: 14px;
  }
  strong {
    font-weight: bold;
  }
  a {
    text-decoration: none;
    color: #333;
    font-size: 14px;
  }
`;

export const UserInfo = () => {
  const [userInfo, setUserInfo] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getUserInfo(params.name).then((data) => setUserInfo(data));
  }, [params.name]);

  console.log(userInfo);

  return (
    <UserDiv>
      <div className="goBack" onClick={() => navigate(-1)}>
        back
      </div>
      <span>{userInfo.id}</span>
      <p>
        ...joined <strong>{mapTime(userInfo.created)} ago</strong>, has{" "}
        <strong>{userInfo.karma}</strong> karma
      </p>
      <Link to="/">submissions </Link>
      <br />
      <br />
      <div>{userInfo.about}</div>
    </UserDiv>
  );
};
