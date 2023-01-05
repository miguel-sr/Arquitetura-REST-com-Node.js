import express from "express";
import indexRoutes from "./routes/index.routes";
import userRoutes from "./routes/user.routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", indexRoutes);
app.use("/api/v1", userRoutes);

const port = 8089;
app.listen(port, () => {
  console.log(`==> Running on port:.. ${port}`);
});
