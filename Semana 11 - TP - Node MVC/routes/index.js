import Router from "express";
import { getAllUsers } from "../controllers/users.js";

const routes = Router();

// npm i --save sequelize mysql mysql2

// {host}/api/hello
routes.get("/hello", (req, res) => {
  res.send({ message: "Hello World!" });
});

routes.get("/users", getAllUsers);

export { routes };

/*

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
// -  	

*/
