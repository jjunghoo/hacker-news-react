import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { mapTime } from "../mappers/mapTimes";
import { getUserInfo } from "../service/hackerNewsAPI";

const UserDiv = styled.div`
  /* border: 1px solid black; */
  padding: 25px;
  color: #333;
  line-height: 1.5;
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

  useEffect(() => {
    getUserInfo(params.name).then((data) => setUserInfo(data));
  }, [params.name]);

  console.log(userInfo);

  return (
    <UserDiv>
      <span>{userInfo.id}</span>
      <p>
        ...joined <strong>{mapTime(userInfo.created)} ago</strong>, has{" "}
        <strong>{userInfo.karma}</strong> karma
      </p>
      <Link to="/">submissions </Link>
      <br />
      {userInfo.about}
    </UserDiv>
  );
};
