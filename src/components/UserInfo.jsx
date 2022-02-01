import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { mapTime } from "../mappers/mapTimes";
import { getUserInfo } from "../service/hackerNewsAPI";

export const UserInfo = () => {
  const [userInfo, setUserInfo] = useState([]);
  const params = useParams();

  useEffect(() => {
    getUserInfo(params.name).then((data) => setUserInfo(data));
  }, [params.name]);

  console.log(userInfo);

  return (
    <>
      <h1>{userInfo.id}</h1>
      <p>
        ...joined <strong>{mapTime(userInfo.created)} ago</strong>, has{" "}
        <strong>{userInfo.karma}</strong> karma
      </p>
      <Link to="/">submissions </Link>
      <br />
      {userInfo.about}
    </>
  );
};
