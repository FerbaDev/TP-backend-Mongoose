import express from "express";
const app = express();
const PUERTO = 8080;
import exphbs from "express-handlebars";
import multer from "multer";
import imagenRouter from "./routes/imagen.router.js"
import "../src/database.js";

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("./src/public"));
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./src/public/img");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})
app.use(multer({storage}).single("image"));

//configuramos handlebars en 3 lineas
app.engine("handlebars", exphbs.engine()); //le digo a express que cuando encuentre un archivo con la ext handlebars lo tiene que renderizar con el motor de plantillas
app.set("view engine", "handlebars"); //aca le decimos que el motor es handlebars
app.set("views", "./src/views"); //aca le pasamos la ruta para que los encuentre

//Rutas
app.use("/", imagenRouter)


//listen
app.listen(PUERTO, () => {
    console.log(`Conectado a http://localhost:${PUERTO}`);
})