const methodDeals = document.querySelectorAll('.collect__methodinfor__item')
const methodContent = document.querySelector('.collect__methodinfor__item--content')
const methodForm = document.querySelector('.collect__methodinfor__item--form')

methodDeals.forEach(function(mD, index){
    mD.onclick = function(){

        mD.querySelector('.collect__methodinfor__item--icon').classList.toggle('rotate--item')

        if(index == 0)
        {
            methodContent.classList.toggle('active')
        }
        else{
            methodForm.classList.toggle('active')
        }
        
    }
})