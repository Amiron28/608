// let accordion__header = document.querySelector('.accordion__header')
// let accordion__body = document.querySelector('.accordion__body')
// let accordion__headerTwo = document.querySelector('.accordion__header-2')
// let accordion__bodyTwo = document.querySelector('.accordion__body-2')
// let img = document.querySelector('.img')
// let imgTwo = document.querySelector('.img-2')


// accordion__header.onclick = () => {
//     accordion__body.style.display = 'block'
//     img.style.transform = 'rotate(180deg)'
//     img.transition = '1s'
//     accordion__bodyTwo.style.display = 'none'
//     imgTwo.style.transform = 'rotate(0deg)'
//     imgTwo.transition = '1s'
// }

// accordion__headerTwo.onclick = () => {
//     accordion__bodyTwo.style.display = 'block'
//     imgTwo.style.transform = 'rotate(180deg)'
//     imgTwo.transition = '1s'
//     accordion__body.style.display = 'none'
//     img.style.transform = 'rotate(0deg)'
//     img.transition = '1s'
// }

document.querySelectorAll('.accardion').forEach(el => {
    el.addEventListener('click', () => {
        let content = el.nextSibling;

        if(content.style.maxheight){
            document.querySelectorAll('.content').forEach(el => el.style.maxheight = null)
        }else{
            document.querySelectorAll('.content').forEach(el => el.style.maxheight = null)
            content.style.maxheight = content.scrollheight + 'px'
        }
    })
})