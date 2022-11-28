// Importar node packages
import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import fs from "fs";
import Router from "express";
import e from "express";

//--REST SERVER--//
const app = express();

// client can be postman | react website | react localhost link | etc
const clientURL = "http://localhost:5500";

// CORS options
const corsOptions = {
  origin: clientURL,
};
app.use(cors(corsOptions));

// output dados de pedido HTTP - logger
app.use(morgan("short"));

// parse dados dos pedidos no content-type - application/json
app.use(express.json());
//  							 |
// ADICIONAR ESTA LINHA DE BAIXO V
app.use(express.urlencoded({ extended: true }));

//--ROUTES--//
const router = Router();

const datajson = fs.readFileSync("data.json", "utf-8"); // Read string-json from file
const data = JSON.parse(datajson); // Parse to JSON

// GET all data method route
router.get("/", (req, res) => {
  res.send(data);
});

app.use(router);

// TODO: endpoint to get:
//		- person name
router.get("/name", (req, res) => {
  res.send(data.nome);
});

// calculate age from birthdate
function calculateAge(birthdate) {
  const birthdateDate = new Date(birthdate);
  const today = new Date();
  let age = today.getFullYear() - birthdateDate.getFullYear();
  const month = today.getMonth() - birthdateDate.getMonth();

  if (month < 0 || (month === 0 && today.getDate() < birthdateDate.getDate())) {
    age--;
  }
  return { age };
}

router.get("/age", (req, res) => {
  res.send(calculateAge(data.data_nascimento));
});

//	person current academic level

router.get("/academicLevel", (req, res) => {
  // é array ordenado
  // data_fim -> com ou sem valor
  // se tiver valor, é esse o nivel de exp
  // se NAO tiver valor, é o nivel anterior
  const habs = data.hab_academicas.filter((item) => item.data_fim);

  res.send(habs[habs.length - 1].tipo_curso);
});

//		 person professional experience list
router.get("/hab_profissionais", (req, res) => {
  res.send(data.hab_profissionais);
});
//		 person current job
router.get("/currentJob", (req, res) => {
  const currentJob = data.hab_profissionais.filter((item) => !item.data_fim);
  res.send(currentJob);
});

// -  	 												.
router.post("/post-example", (req, res) => {
  const requestBody = req.body;
  const fileData = JSON.stringify(requestBody);

  fs.writeFileSync("savedData.json", fileData, "utf-8");

  res.send({ message: "file saved", data: requestBody });
});
// -  	 												.

// correr server no url host:port definido em .env
app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
  console.log(
    "Server up and running at http://%s:%s",
    process.env.SERVER_HOST,
    process.env.SERVER_PORT
  );
});
