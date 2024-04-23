// const box = document.querySelector('.box')

// при нажатии на box у него будет меняться цвет 
// на синий
// box.addEventListener('click', () => {
//     //box.style.backgroundColor = 'red'
//     box.style.cssText = 'border: 10px solid black'
//   })

// const changeTimeBtn = document.querySelector('#changeTime')
// const sky = document.querySelector('.sky')
// const planet = document.querySelector('.planet')

// changeTimeBtn.addEventListener('click', () => {
//     sky.style.backgroundColor = '#113878'
//     planet.style.cssText = 'background-color: #ffff'
// })
// changeTimeBtn.addEventListener('click', () => {
//     if (sky.classList.contains('night') === true) {
//         sky.classList.remove('night')
//       } else {
//         sky.classList.add('night')
//       }
//     })
    
// sky.classList.add('night')

// planet.classList.remove('test')
// console.log(sky.classList.contains('night'))


// sky.classList.toggle('night')
// sky.classList.toggle('night')
// changeTimeBtn.addEventListener('click', () => {
//     sky.classList.add('night') 
// })


// const body = document.querySelector('body')
// const red_Btn = document.querySelector('#red')
// const yellow_Btn = document.querySelector('#yellow')
// const green_Btn = document.querySelector('#green')


// red_Btn.addEventListener('click', () => {
//     body.style.cssText = 'background-color: red'
// } )
// yellow_Btn.addEventListener('click', () => {
//     body.style.cssText = 'background-color: yellow'
// } )
// green_Btn.addEventListener('click', () => {
//     body.style.cssText = 'background-color: green'
// } )
//  создаем кнопки и меяем им цвет в бади при нажатии на каждую кнопку она горит своим цветом

// const buttons = document.querySelectorAll('button')

// for (let btn of buttons) {
//   btn.addEventListener('click', () => {
//     if (btn.textContent === 'Красный') {
//         document.body.style.backgroundColor = 'red'
//       } else if (btn.textContent === 'Желтый') {
//         document.body.style.backgroundColor = 'yellow'
//       } else if (btn.textContent === 'Зеленый') {
//         document.body.style.backgroundColor = 'green'
//       } else {
//         document.body.style.backgroundColor = 'white'
//       }
//     })
// }
// text-decoration: line-through;
const elements = document.querySelectorAll('li')

for (let li of elements) {
  li.addEventListener('click', () => {
    li.style.textDecoration = 'line-through'
  })
}


