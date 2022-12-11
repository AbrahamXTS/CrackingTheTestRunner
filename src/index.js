import csrf from "csurf";
import express from "express";
import cookieParser from "cookie-parser";
import { protectRoute } from "./middlewares/index.js";
import { authRouter, dashboardRouter } from "./routes/index.js";

const app = express();

app.set("view engine", "pug");

app.set("views", "./views");

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));

app.use(cookieParser());

app.use(csrf({cookie: true}));

app.use("/auth", authRouter);
app.use(protectRoute, dashboardRouter);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor corriendo en http://localhost:${process.env.PORT || 3000}`)
});