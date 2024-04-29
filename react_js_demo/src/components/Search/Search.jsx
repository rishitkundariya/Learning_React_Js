import React from "react";

import { useParams } from "react-router-dom";

export default function Search() {
  const searchparam = useParams().searchparam;
  const secondParam = useParams().secondParam;
  return (
    <>
      <div>
        <h1>
          First Query Parameter : {searchparam} and Second Parameter is{" "}
          {secondParam}{" "}
        </h1>
      </div>
    </>
  );
}
