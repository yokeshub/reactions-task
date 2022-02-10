import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/loader/Loader";
import ContentCard from "../components/contentCard";
import { Card, Title } from "../components/contentCard/styles";
import { getReactionsData } from "../redux/reaction/reaction.actions";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const dispatch = useDispatch();
  const { reactionsData } = useSelector((state) => state.reactions);
  const { userId } = useSelector((state) => state.auth);
  const [contents, setContents] = useState({
    isLoading: true,
    data: [
      {
        id: 1,
        name: "Sri krishnan",
        message: "Welcome to Rocketlane!🚀",
      },
      {
        id: 2,
        name: "Shajahan",
        message:
          "Rocketlane is a purpose-built customer onboarding platform that helps businesses accelerate their time-to-value, boost customer satisfaction, and thereby reduce churn. The platform replaces generic project management and document collaboration tools with a unique, unified workspace that improves communication, collaboration, and project visibility for businesses and their customers. It equips teams with trends and benchmarks across projects, which in turn helps them develop and optimize playbooks and best practices.",
      },
    ],
  });
  useEffect(() => {
    dispatch(getReactionsData());
    setContents((prev) => {
      return { ...prev, isLoading: false };
    });
  }, []);

  if (userId === undefined || userId === null || userId === "") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
          background: "#6c7dfe",
        }}
      >
        <p
          style={{
            color: "#fff",
            fontSize: "20px",
          }}
        >
          Please Login to enter Chatbox !!
        </p>
        <Link
          style={{
            color: "#fff",
            fontSize: "20px",
          }}
          to="/"
        >
          Login
        </Link>
      </div>
    );
  }

  if (reactionsData.isLoading || contents.isLoading) {
    return <Loader />;
  }
  if (reactionsData.status === "failed" || reactionsData.status === "error") {
    return <h3>Something went Wrong!!</h3>;
  }
  return (
    <Fragment>
      <Navbar />
      <Title>
        <h3>Rocketlane Chatbox</h3>
      </Title>
      <Card>
        {contents.data !== undefined &&
          contents.data.length > 0 &&
          contents.data.map((con) => {
            return (
              <ContentCard
                userId={userId}
                content={con}
                reactionsData={reactionsData}
              />
            );
          })}
      </Card>
    </Fragment>
  );
};
export default Posts;
