import React from "react";

import axios from "axios";
import { queryGenerator } from "@/app/helpers/helper";
import Quiz from "../components/organisms/Quiz";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) => {
  const queryStringValues = await searchParams;
  const queryString = queryGenerator(queryStringValues);
  let res = null;
  try {
    res = await axios.get(
      "https://the-trivia-api.com/v2/questions" + queryString
    );
  } catch (error) {
    console.log(error);
  }
  return <Quiz questions={res?.data} />;
};

export default Page;
