// const sixElement = document.getElementById('six')
// sixElement.textContent = 'Новое значение'

// const evenElements = document.getElementsByClassName('even')

// console.log(evenElements)
// // evenElements[2].textContent = 'четный элемент'
// for( let i=0; i<evenElements.length; i++ ){
//     evenElements[i].textContent = 'четный элемент'
// }

// const evenElements = document.getElementsByClassName('even')
// for (let i=0; i<evenElements.length; i++) {
//   evenElements[i].textContent = 'четный элемент'
// }

    // const liElements = document.getElementsByTagName('li')
    // for (let element of liElements) {
    //             element.textContent = 'some tyy
    // }
    // console.log(liElements)

    // const six = document.querySelector('#six')
// six.textContent = 'some text'

// const evenElements = document.querySelector('.even')
// for (let el of evenElements) {
//     el.textContent = 'some text'
// }
// console.log(evenElements)

// const link = document.querySelector('#youtube-link')
// link.textContent = 'Youtube'
// link.setAttribute('href', 'https://youtube.com')

// const input = document.getElementById('name-input')
// input.value = 'какой-то текст'

// const btn = document.querySelector('button')
// btn.textContent = 'Button'
// btn.disabled = true
// btn.className = 'primery'

// const checkbox = document.querySelector('#checkbox')
// checkbox.checked = true
// textContent || innerText
// innerHTML - danger!
// setAttribute() getAttribute()
// input.value
// .disabled, .checked

// const li1 = document.createElement('li')
// const ul = document.querySelector('ul')
// li1.textContent = 'Меню - 1'


// const li2 = document.createElement('li')
// li2.textContent = 'Меню - 2'
// ul.append(li1, li2)

// const ul = document.querySelector('ul')
// // используя цикл создать 10 li элементов в ul
// for (let i=1; i<=10; i++) {
//   // создать элемент
//   const li = document.createElement('li')
//   // записать в него текст
//   li.textContent = 'Меню - ' + i
//   // прикрепить к родителю (append)
//   ul.append(li)
// }


const img = document.createElement('img')
img.src= "https://w.forfun.com/fetch/9b/9bad5c6de3b90ba14e994850a25a6f3e.jpeg?h=600&r=0.5"
const container = document.querySelector('.container');
container.append(img)
