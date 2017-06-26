function updateHeading(ev) {
    ev.preventDefault();
    const f = ev.target
    const name = f.personName.value
    const age = f.personAge.value
    const color = f.personColor.value
    const heading = document.querySelector('h1')
    const colorheader = document.querySelector('#colorDisplay')
    heading.textContent = name
    const change = document.querySelector('#inputDisplay')
    change.innerHTML = "Name: " + name + " Age: " + age;
    colorDisplay.innerHTML = "I like " + color + " too!";
    colorDisplay.style.color = color;
    //heading.innerHTML = name
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', updateHeading)

//const btn = document.querySelector('button')
//btn.addEventListener('click', updateHeading)