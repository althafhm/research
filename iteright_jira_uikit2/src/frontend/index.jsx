import React, { useEffect, useState } from "react";
import ForgeReconciler, { Badge, StatusLozenge, Text } from "@forge/react";
import { invoke, view, requestJira } from "@forge/bridge";
// import { fetch } from "@forge/api";

const App = () => {
  const [data, setData] = useState(null);
  const [context, setContext] = useState(undefined);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);

  // useEffect(() => {
  //   invoke("getText", { example: "my-invoke-variable" }).then(setData);
  // }, []);

  useEffect(() => {
    view.getContext().then(setContext);
  }, []);

  useEffect(() => {
    const issueId = context?.extension?.issue?.id;
    if (issueId) {
      invoke("getIssueComments").then((val) => {
        setComments(val.comments);
      });
    }
  }, [context]);

  useEffect(() => {
    // console.log(comments);
  }, [users, comments]);

  return (
    <>
      <Text>
        Users: <Badge appearance="primary" text="5436" />
        Comments: <Badge appearance="primary" text={comments.length} />
      </Text>
      {/* Total number of users: <Badge appearance="primary" text="5436" />
      Last week: <Badge appearance="important" text="4563" />
      Comments: <Badge appearance="added" text={comments.length} /> */}
    </>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
