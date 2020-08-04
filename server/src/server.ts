import express from "express";
import cors from "cors";

import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(3333, () => {
  console.log(
    "\x1b[1m\x1b[35m%s\x1b[0m",
    `[running] server on http://localhost:3333`
  );
});
