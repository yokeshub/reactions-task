import React from "react";
import Reaction from "../reactify";
import img from "../../assets/rlfounder.png";
import {
  Card,
  CardWrapper,
  CardContentWrap,
  CardContent,
  CardImg,
  Sender,
  Message,
} from "./styles";

const ContentCard = ({ userId, content, reactionsData }) => {
  return (
    <CardWrapper>
      <CardContentWrap>
        <CardImg src={img} />
        <CardContent>
          <Sender>{content.name}</Sender>
          <Message>{content.message}</Message>
          <Reaction
            reactionsData={reactionsData}
            userId={userId}
            contentId={content.id}
          />
        </CardContent>
      </CardContentWrap>
    </CardWrapper>
  );
};

export default ContentCard;
