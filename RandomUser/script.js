let mainContainer = document.querySelector('.main-container');
let inputNumber = document.querySelector('#input-number');
let generateButton = document.querySelector('#btn1');

async function randomUser(number) {
    for (i = 0; i < number; i++) {
        let getApi = fetch("https://randomuser.me/api/");
        let response = await getApi;
        let data = await response.json();
        // console.log(data);
        // console.log(data.results[0].picture.medium);
        // console.log(data.results[0].name.first + data.results[0].name.last);
        // console.log(data.results[0].location.country);
        // console.log(data.results[0].gender);
        // console.log(data.results[0].email);
        // console.log(data.results[0].cell);

        let userContainer = document.createElement('div');
        userContainer.classList.add('user');

        mainContainer.append(userContainer);

        let imageContainer = document.createElement('img');
        imageContainer.src = data.results[0].picture.medium;
        userContainer.appendChild(imageContainer);

        let nameContainer = document.createElement('h2');
        nameContainer.textContent = "Name: " + data.results[0].name.first + data.results[0].name.last;
        userContainer.appendChild(nameContainer);

        let countryContainer = document.createElement('p');
        countryContainer.textContent = "Country: " + data.results[0].location.country;
        userContainer.appendChild(countryContainer);

        let genderContainer = document.createElement('p');
        genderContainer.textContent = "Gender: " + data.results[0].gender;
        userContainer.appendChild(genderContainer);

        let emailContainer = document.createElement('p');
        emailContainer.textContent = "Email: " + data.results[0].email;
        userContainer.appendChild(emailContainer);

        let numberContainer = document.createElement('p');
        numberContainer.textContent = "Number: " + data.results[0].cell;
        userContainer.appendChild(numberContainer);

    }
}
generateButton.addEventListener('click', () => {
    let userDivs = document.querySelectorAll('.user');
    userDivs.forEach(userDiv => userDiv.remove());
    randomUser(inputNumber.value);
})