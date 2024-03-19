import express from "express";
const app = express();
const PUERTO = 8080;
import exphbs from "express-handlebars";
import multer from "multer";
import "../src/database.js";
//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("./src/public"));
//configuramos handlebars en 3 lineas
app.engine("handlebars", exphbs.engine()); //le digo a express que cuando encuentre un archivo con la ext handlebars lo tiene que renderizar con el motor de plantillas
app.set("view engine", "handlebars"); //aca le decimos que el motor es handlebars
app.set("views", "./src/views"); //aca le pasamos la ruta para que los encuentre
//Rutas
app.get("/", (req, res) => {
    res.render("home")
})
app.get("/upload", (req, res) => {
    res.render("upload")})
//listen
app.listen(PUERTO, () => {
    console.log(`Conectado a http://localhost:${PUERTO}`);
})