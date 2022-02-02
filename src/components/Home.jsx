import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { MainBanner } from "./MainBanner";

export const Home = () => {
  const [bannerAttribute, setBannerAttribute] = useState([
    {
      category: "top",
      text: "Find out most hot issues",
      background: "rgba(253, 97, 6, 1)"
    },
    {
      category: "new",
      text: "Fast, Fresh, Fashionable",
      background: "rgba(123, 97, 255, 1)"
    },
    {
      category: "ask",
      text: "Ask and get fresh informations",
      background: "rgba(219, 0, 255, 1)"
    },
    {
      category: "show",
      text: "Share and grow together",
      background: "rgba(105, 160, 117, 1)"
    },
    {
      category: "jobs",
      text: "Your new possibility",
      background: "rgba(254, 187, 16, 1)"
    }
  ]);

  useEffect(() => {});

  console.log(bannerAttribute);
  return (
    <div style={{ padding: "10px 20px 0px" }}>
      {bannerAttribute.map((Attribute) => (
        <MainBanner key={Attribute.category} attribute={Attribute} />
      ))}
    </div>
  );
};
