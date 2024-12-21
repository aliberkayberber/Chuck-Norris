
const joke = document.querySelector('#chuck');
const btn =document.querySelector('#newJoke');

btn.addEventListener('click', otherData );


function getData(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => joke.innerHTML = data.value)
    .catch(error => console.log(error))
    .finally(() => console.log('Data one fetched successfully!'));
}

// getData(); // Call the function


async function otherData() {

    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        joke.innerHTML = data.value;
    } catch (error) {
        console.log(error);
        
    }
    finally {
        console.log('Data two fetched successfully!');
    }

}

// otherData(); // Call the function