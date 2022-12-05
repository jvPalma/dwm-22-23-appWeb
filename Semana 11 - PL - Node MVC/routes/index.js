import Router from 'express';
import fs from 'fs';

const routes = Router();

const datajson = fs.readFileSync('data.json', 'utf-8'); // Read string-json from file
const users = JSON.parse(datajson); // Parse to JSON

// {host}/api/...

// GET all users
routes.get('/', (req, res) => {
  res.send(users);
});

// GET all users with age instead of birthYear
routes.get('/age', (req, res) => {
  const currentYear = new Date().getFullYear();
  users.forEach((user) => {
    const age = currentYear - user.birthYear;
    user.age = age;
    delete user.birthYear;
  });
  res.send(users);
});

// GET all diferent skills
routes.get('/skills', (req, res) => {
  const skillsFromUsers = users.map((user) => user.skills);
  const skills = skillsFromUsers.flat(1);
  const skillsSet = new Set(skills);

  res.send([...skillsSet]);
});

// GET all diferent degrees
routes.get('/degrees', (req, res) => {
  const degreesFromUsers = users.map((user) => user.degrees);
  const degrees = degreesFromUsers.flat(1);
  const degreeNames = degrees.map((degree) => degree.degree);
  const degreeNamesSet = new Set(degreeNames);

  res.send([...degreeNamesSet]);
});

// GET all users with grade greater then 14 (roudend)
routes.get('/grade/:grade', (req, res) => {
  const grade = req.params.grade;
  const gradeNum = Number(grade);
  const filteredUsers = users.filter((user) => {
    const degreesWithRequestedGrade = user.degrees.filter(
      (degree) => Math.round(degree.grade) >= gradeNum
    );
    return degreesWithRequestedGrade.length > 0;
  });

  res.send(filteredUsers);
});

// GET user by id
routes.get('/:id', (req, res) => {
  const id = req.params.id;
  const user = users.find((u) => u.id == id);
  res.send(user);
});

// POST get all users from one Institute
routes.post('/institute', (req, res) => {
  const institute = req.body.institute;

  const filteredUsers = users.filter((user) => {
    const degreesFromInstitute = user.degrees.filter(
      (degree) => degree.institute === institute
    );
    return degreesFromInstitute.length > 0;
  });

  res.send(filteredUsers);
});

// POST new user
routes.post('/', (req, res) => {
  const { name, birthYear, skills, degrees } = req.body;

  if (!name || !birthYear) {
    res.status(400).json('Name and Birth Year are required');
    return;
  }

  const newUser = {
    id: Math.floor(Math.random() * 1000),
    name,
    birthYear,
    skills: skills ?? [],
    degrees: degrees ?? [],
  };

  users.push(newUser);
  save(users);
  res.send(users);
});

// PUT user (anything)
// PUT user remove skill
// PUT user remove degree

// DELETE user
routes.delete('/:id', (req, res) => {
  const id = req.params.id;
  const userIdx = users.findIndex((user) => user.id == id);

  if (userIdx > -1) {
    users.splice(userIdx, 1);
  }

  save(users);
  res.send(users);
});

function save(json) {
  fs.writeFileSync('data.json', JSON.stringify(json));
}

export { routes };
