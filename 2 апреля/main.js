// const fetchData = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve([1,3,4,6])
//       }, 500)
//     })
//   }
  
//   function getData() {
//     fetchData()
//       .then((data) => {
//         data.forEach((num) => {
//           const li = document.createElement('li')
//           li.textContent = `Данные: ${num}`
//           document.querySelector('ul').append(li)
//         })
//       })
//   }
  
//   async function getDataAsync() {
//     const data = await fetchData()
//     data.forEach((num) => {
//       const li = document.createElement('li')
//       li.textContent = `Данные: ${num}`
//       document.querySelector('ul').append(li)
//     })
//   }
  
//   // getData()
//   getDataAsync()

// const API_URL = 'https://jsonplaceholder.typicode.com'

// const getComments = () => {
//   fetch(`${API_URL}/comments`)
//     .then((response) => {
//       return response.json()
//     })
//     .then((data) => {
//       console.log(data)
//     })
// }
// const getCommentsAsync = async () => {
//   const response = await fetch(`${API_URL}/comments`)
//   const data = await response.json()
//   console.log(data)
// }

// getComments()

// получить users (async/await) function

// const API_URL = 'https://jsonplaceholder.typicode.com'

// async function getUsers() {
//     const response = await fetch(`${API_URL}/users`)
//     const data = await response.json()
//     console.log(data)
//   }
//   getUsers()

const API_URL = 'https://660bbf59ccda4cbc75dd9b32.mockapi.io/api'


const createEl = ({ tag, className, text, ...attrs }) => {
    const element = document.createElement(tag)
    element.className = className
    element.textContent = text
    Object.keys(attrs).forEach((attr) => {
      element.setAttribute(attr, attrs[attr])
    })
    return element
  }
  
  async function deleteContact(id) {
    await fetch(`${API_URL}/contacts/${id}`, {
      method: 'DELETE'
    })
  }
  
  async function getContacts() {
    const response = await fetch(`${API_URL}/contacts`)
    const data = await response.json()
    
    data.forEach(contact => {
      const li = createEl({ tag: 'li', className: 'contact-item' })
      const name = createEl({
        tag: 'div',
        className: 'contact-name',
        text: `${contact.name} (${contact.city})`
      })
      const checkbox = createEl({ tag: 'input', type: 'checkbox', id: 'id' })
      const phone = createEl({ tag: 'div', text: contact.phone })
      const deleteBtn = createEl({ tag: 'button', text: 'Delete' })
      deleteBtn.addEventListener('click', () => {
        deleteContact(contact.id)
      })
  
      li.append(checkbox,name, phone,deleteBtn)
      document.querySelector('ul').append(li)
    })
  }
  
  async function createContact() {
    const response = await fetch(`${API_URL}/contacts`, {
      method: 'POST',
      body: JSON.stringify({
        name: 'Test User',
        phone: '+111111',
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log(data)
  }
  
  document.getElementById('create').addEventListener('click', () => {
    createContact()
  })
  
  getContacts()