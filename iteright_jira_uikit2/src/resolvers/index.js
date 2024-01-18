import Resolver from "@forge/resolver";
// import axios from "axios";
import api, { requestJira, route, fetch } from "@forge/api";

// export const BASE_URL = `https://randomuser.me/`;
// const API = axios.create({ baseURL: BASE_URL });

const resolver = new Resolver();

resolver.define("getText", (req) => {
  console.log(req, "----------");
  return "Hello, world!";
});

resolver.define("getIssueComments", async ({ payload, context }) => {
  try {
    const issueId = context?.extension?.issue?.id;
    if (issueId) {
    }
    const res = await api
      .asApp()
      .requestJira(route`/rest/api/3/issue/${issueId}/comment`, {
        headers: {
          Accept: "application/json",
        },
      });
    const comments = res.json();
    return comments;
  } catch (err) {
    throw err;
  }
});

resolver.define("getSurvey", async ({ payload, context }) => {
  try {
    const surveyId = payload.surveyId;
    const result = await fetch(
      `https://dev.iteright.com/api/publicSurveys/getSurvey/${surveyId}`
    );
    return result;
  } catch (error) {
    throw error;
  }
});

// resolver.define("getSampleUsers", async (req) => {
//   try {
//     const res = await API.get(`/api/`);
//     return res;
//   } catch (err) {
//     throw err;
//   }
// });

export const handler = resolver.getDefinitions();
