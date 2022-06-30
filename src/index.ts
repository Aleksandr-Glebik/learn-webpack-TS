import {formData} from './forms'

const form = document.querySelector('form')!

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const data = formData(form)
    console.log(data);
})

const person: any = {}
console.log(person.speak())