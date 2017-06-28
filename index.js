function renderColor(color) {
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    const header = document.querySelector('h1')
    header.style.borderColor = color
    const button = document.querySelector('button')
    button.style.backgroundColor = color;
    return colorDiv;
}

function renderListItem(item) {
    const attr = item.getAttribute("type");
    const val = item.value;
    if (attr == "text") {
        const nameItem = document.createElement('li')
        nameItem.textContent = `Name: ${val}`
        return nameItem;
    } else if (attr == "color") {
        const colorItem = document.createElement('li')
        colorItem.textContent = `I like this color too!`
        colorItem.appendChild(renderColor(val))
        return colorItem;
    } else if (attr == "number") {
        const ageItem = document.createElement('li')
        ageItem.textContent = `Age: ${val}`
        return ageItem;
    }
}

function renderList(name, age, color) {
    const info = document.createElement('ul')

    info.appendChild(renderListItem(name))

    info.appendChild(renderListItem(age))

    info.appendChild(renderListItem(color))

    stats.appendChild(info)
}

function handleSubmit(ev) {
    ev.preventDefault();
    const f = ev.target
    const name = f.personName
    const age = f.personAge
    const color = f.personColor

    renderList(name,age,color)

}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)
