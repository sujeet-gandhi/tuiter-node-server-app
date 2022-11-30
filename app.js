import  express from 'express'
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/user-controller.js";
import TuitsControllerA8 from "./controllers/tuits/tuits-controller-a8.js";
import TuitsControllerA9 from "./controllers/tuits/tuits-controller-a9.js";
import cors from 'cors'
import mongoose from "mongoose";

const app = express();

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/tuiter';
mongoose.connect(CONNECTION_STRING);

app.use(cors());
app.use(express.json());
TuitsControllerA8(app);
TuitsControllerA9(app);
HelloController(app);
UserController(app);
app.listen(process.env.PORT || 4000);
