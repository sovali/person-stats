function updateHeading(ev) {
    ev.preventDefault();
    const f = ev.target
    const name = f.personName.value
    const age = f.personAge.value
    const color = f.personColor.value
    const colorheader = document.querySelector('#colorDisplay')
    //const change = document.querySelector('#inputDisplay')
    // change.innerHTML = `Name: ${name} and age: ${age}`;

    const info = document.createElement('p')
    info.textContent = `Hi ${name}, age ${age}`
    stats.appendChild(info)

    const colorinfo = document.createElement('h2')
    colorinfo.textContent = `I like this color too!`
    colorinfo.style.color = color
    stats.appendChild(colorinfo)
    
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', updateHeading)

//const btn = document.querySelector('button')
//btn.addEventListener('click', updateHeading)