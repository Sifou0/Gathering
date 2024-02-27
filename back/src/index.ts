import Express from "express";
import * as dotenv from "dotenv";
import router from "./routes/index";
dotenv.config();

const PORT = process.env.PORT;
const app = Express();
app.use(Express.json());
app.use("/api", router);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
