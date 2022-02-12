const charactersAPI = new APIHandler('http://localhost:8000');
// Consts to get character
const fetchAll = document.querySelector('.characters-container');
const characterId = document.querySelector('.character-id');
const charInfo = document.querySelector('.character-info');
// Consts to delete character
const characterIdDelete = document.querySelector('.character-id-delete');
const deleteBtn = document.querySelector('.delete-one');
// Consts to create character
const createBtn = document.getElementById('send-data');
const charName = document.getElementById('name');
const charOccupation = document.getElementById('occupation');
const charWeapon = document.getElementById('weapon');
const charCartoon = document.getElementById('cartoon');
// Consts to edit character
const editBtn = document.querySelector('#edit-character-form #send-data');
const charIdEd = document.getElementById('idEdit');
const charNameEd = document.getElementById('nameEdit');
const charOccupationEd = document.getElementById('occupationEdit');
const charWeaponEd = document.getElementById('weaponEdit');
const charCartoonEd = document.getElementById('cartoonEdit');

window.addEventListener('load', () => {
  //Get every character
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList().then((result) => {
      const element = result
        .data
        .map(character => `<div class="character-info">
            <div class="id">Id:<span>${character.id}</span></div>
            <div class="name">Name:<span>${character.name}</span></div>
            <div class="occupation">Occupation:<span>${character.occupation}</span></div>
            <div class="cartoon">Is a Cartoon?:<span>${character.cartoon}</span></div>
            <div class="weapon">Weapon:<span>${character.weapon}</span></div>
          </div>`)
        .reduce((prev, curr) => prev + curr);
      fetchAll.innerHTML = element;
    });
  });
  //Get one character by its id
  document.getElementById('fetch-one').addEventListener('click', function (event) {
    charactersAPI.getOneRegister(characterId.value).then(result => {
      charInfo.innerHTML = `<div class="id">Id:<span>${result.data.id}</span></div>
        <div class="name">Name:<span>${result.data.name}</span></div>
        <div class="occupation">Occupation:<span>${result.data.occupation}</span></div>
        <div class="cartoon">Is a Cartoon?:<span>${result.data.cartoon}</span></div>
        <div class="weapon">Weapon:<span>${result.data.weapon}</span></div>`;
    });
  });
  //Delete one character by its id
  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI.deleteOneRegister(characterIdDelete.value)
      .then(result => deleteBtn.style.backgroundColor = 'green')
      .catch(error => deleteBtn.style.backgroundColor = 'red');
  });
  //Update one character by its id
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let isCartoon;
      if (charCartoonEd.checked) {
        isCartoon = true;
      } else {
        isCartoon = false;
      };
    const charInfo = {
      name: charNameEd.value,
      occupation: charOccupationEd.value,
      weapon: charWeaponEd.value,
      cartoon: isCartoon,
    };
    charactersAPI.updateOneRegister(charIdEd.value, charInfo)
    .then(result => {
      editBtn.style.backgroundColor = 'green';
    })
    .catch(error => editBtn.style.backgroundColor = 'red');
  });
  //Create one character by its id
  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    if (charName.value !== "" || charOccupation.value !== "" || charWeapon.value !== ""){
      let isCartoon;
      if (charCartoon.checked) {
        isCartoon = true;
      } else {
        isCartoon = false;
      };
      const charInfo = {
        name: charName.value,
        occupation: charOccupation.value,
        weapon: charWeapon.value,
        cartoon: isCartoon,
      };
      charactersAPI.createOneRegister(charInfo)
        .then(result => {
          createBtn.style.backgroundColor = 'green';
        })
        .catch(error => createBtn.style.backgroundColor = 'red');
    } else {
      createBtn.style.backgroundColor = 'red'
    }
  });
});
