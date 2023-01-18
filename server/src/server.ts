import app from './app'
import env from "./util/validateEnv";

import mongoose from "mongoose";


const PORT = env.PORT;



mongoose.set("strictQuery", false);
mongoose
  .connect(env.MONGO_CONN_URI)
  .then(() => {
    console.log("DB connected..");
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT} `)
    );
  })
  .catch(() => {
    console.error;
  });
