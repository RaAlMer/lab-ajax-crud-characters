const charactersAPI = new APIHandler('http://localhost:8000');

const fetchAll = document.querySelector('.characters-container');
const characterId = document.querySelector('.character-id');
const characterIdDelete = document.querySelector('.character-id-delete');

const nameCard = document.querySelector('.name');
const occupationCard = document.querySelector('.occupation');
const cartoonCard = document.querySelector('.cartoon');
const weaponCard = document.querySelector('.weapon');

const deleteBtn = document.querySelector('.delete-one');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList().then((result) => {
      console.log(result.data)
    });
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    charactersAPI.getOneRegister(characterId.value).then(result => {
      nameCard.innerHTML = result.data.name;
      occupationCard.innerHTML = result.data.occupation;
      cartoonCard.innerHTML = result.data.cartoon;
      weaponCard.innerHTML = result.data.weapon;
    });
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI.deleteOneRegister(characterIdDelete.value)
      .then(deleteBtn.style.backgroundColor = 'green')
      .catch(deleteBtn.style.backgroundColor = 'red')
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
