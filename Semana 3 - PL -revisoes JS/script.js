const formulario = document.querySelector('form');
const inputNome = document.querySelector('#nome');
const inputIdade = document.querySelector('#idade');
const inputContacto = document.querySelector('#contacto');
const butao = document.querySelector('.butao');
const lista = document.querySelector('#alunos');

butao.addEventListener('click', criarAluno);

function criarAluno(e) {
  e.preventDefault();

  if (inputNome.value === '') {
    alert('O nome é obrigatorio!');
    inputNome.style.background = 'red';
    inputNome.style.color = 'white';
    return;
  } else {
    inputNome.style.background = 'white';
    inputNome.style.color = 'black';
  }

  if (inputContacto.value === '') {
    alert('O contacto é obrigatorio!');
    inputContacto.style.background = 'red';
    inputContacto.style.color = 'white';
    return;
  } else {
    inputContacto.style.background = 'white';
    inputContacto.style.color = 'black';
  }

  const aluno = document.createElement('li');

  if (inputIdade.value !== '') {
    aluno.innerHTML = `${inputNome.value} || ${inputContacto.value} || <strong>${inputIdade.value} anos</strong>`;
  } else {
    aluno.textContent = `${inputNome.value} || ${inputContacto.value}`;
  }

  lista.appendChild(aluno);

  inputNome.value = '';
  inputIdade.value = '';
  inputContacto.value = '';
}

async function getUsers() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    users.forEach((user) => {
      const userItem = document.createElement('li');
      userItem.innerText = `${user.name} || ${user.phone}`;
      userItem.classList.add('italic-grey');
      lista.appendChild(userItem);
    });
  } catch (err) {
    console.error(err);
    alert('Falha na chamada ao servidor');
  }
}

getUsers();
