# NODE.js Aula 01 Guide

Criar e instanciar um projeto node

```bash
npm init

name: node-api-fundamentals
version: (1.0.0)
description: Node.js Rest API c/ Express.
entry point: server.js
test command:
git repository:
keywords:
author: nome-aluno
license: (ISC)
Is this ok? (yes) yes
```

Instalar packages

`npm install express nodemon cors dotenv morgan --save`

Adicionar a configuração no `package.json` de:
`"type": "module"`

Adicionar um novo script, de start em`package.json` -> `"scripts"`

`"start": "nodemon server.js"`

Criar o ficheiro `.env` com os seguintes dados:

```bash
SERVER_HOST=localhost
SERVER_PORT=4242
```

Criar o ficheiro `server.js`

```js
// Importar node packages
import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";

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

//TODO: ROUTES VÃO SER COLOCADOS AQUI!

// correr server no url host:port definido em .env
app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
  console.log(
    "Server up and running at http://%s:%s",
    process.env.SERVER_HOST,
    process.env.SERVER_PORT
  );
});
```

Criar `data.json`

```json
{
  "nome": "João Palma",
  "data_nascimento": "01/08/1995",
  "localidade": "Viana do Castelo",
  "hab_academicas": [
    {
      "grau": "Ensino Superior",
      "instituicao": "IPVC - ESTG",
      "tipo_curso": "Licenciatura",
      "nome_curso": "EI",
      "data_inicio": "2015-09-01",
      "data_fim": "2018-07-01"
    },
    {
      "grau": "Ensino Superior",
      "instituicao": "IPVC - ESTG",
      "tipo_curso": "Mestrado",
      "nome_curso": "EI",
      "data_inicio": "2020-09-01",
      "data_fim": null
    }
  ],
  "hab_profissionais": [
    {
      "data_inicio": "2018-06-01",
      "data_fim": "2022-06-01",
      "posicao": "Web Developer",
      "empresa": "Xpand-it"
    },
    {
      "data_inicio": "2022-06-01",
      "data_fim": "2022-06-15",
      "posicao": "Senior FullStack Developer",
      "empresa": "NearSea Tecnologies"
    },
    {
      "data_inicio": "2022-06-16",
      "data_fim": null,
      "posicao": "Head of Software Development Team",
      "empresa": "NearSea Tecnologies"
    }
  ],
  "projetos": []
}
```

Adicionar a funcionalidade de `Router` no servidor (ficheiro `server.js`)

```js
// actualizar os imports
import fs from "fs";
import Router from "express";
```

```js
//TODO: ROUTES VÃO SER COLOCADOS AQUI!
//--ROUTES--//
const router = Router();

const datajson = fs.readFileSync("data.json", "utf-8"); // Read string-json from file
const data = JSON.parse(datajson); // Parse to JSON

// GET all data method route
router.get("/", (req, res) => {
  console.log(data.nome);
  res.send(data);
});

app.use(router);

// TODO: endpoint to get:
//		- person name
//		- person professional experience list
//		- person current age
//		- person current academic level
//		- person current job
```
