import express from "express";
import { graphqlHTTP } from "express-graphql";

import schema from "./schema";
import resolvers from "./resolvers";

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(8082, () => console.log("Running at 8082"));
