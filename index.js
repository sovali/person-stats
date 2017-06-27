function renderColor(color) {
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color
    colorDiv.style.width = '6rem';
    colorDiv.style.height = '3rem';

    return colorDiv;
}
function handleSubmit(ev) {
    ev.preventDefault();
    const f = ev.target
    const name = f.personName.value
    const age = f.personAge.value
    const color = f.personColor.value
    //const change = document.querySelector('#inputDisplay')
    // change.innerHTML = `Name: ${name} and age: ${age}`;

    const info = document.createElement('ul')

    const nameItem = document.createElement('li')
    nameItem.textContent = `Name: ${name}`
    info.appendChild(nameItem)

    const ageItem = document.createElement('li')
    ageItem.textContent = `Age: ${age}`
    info.appendChild(ageItem)

    const colorItem = document.createElement('li')
    colorItem.textContent = `I like this color too!`
    colorItem.appendChild(renderColor(color))
    info.appendChild(colorItem)

    stats.appendChild(info)       
    
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)

//const btn = document.querySelector('-m button')
//btn.addEventListener('click', updateHeading)