const button = document.querySelector('.but1')
button.onclick = (event) => {
    const list = document.getElementsByTagName('ul')[0]
    const el = document.createElement('li')
    list.appendChild(el)
    el.textContent = 'Новый элемент списка'
}

const button2 = document.querySelector('.but2')
button2.onclick = (event) => {
    if (document.querySelector('li'))
    document.querySelector('li').remove()
}

const button3 = document.querySelector('.but3')
button3.onclick = (event) => {
    document.querySelector('.but3').classList.toggle('click') 
}