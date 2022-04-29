let items = document.querySelectorAll('.item')

items.forEach(item => {
    item.onclick = () => {
         items.forEach(item => item.classList.remove('active'))

         item.classList.add('active')
    }
})