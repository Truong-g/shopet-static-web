var slideIndex, slides, dots, captionText
function initGallery() {
    slideIndex = 0
    slides = document.getElementsByClassName('imageHolders')
    slides[slideIndex].style.opacity = 1

    captionText = document.querySelector('.captionHolder p')
    captionText.innerText = slides[slideIndex].querySelector('.captionText').innerText

    dots = []
    var dotsContainer = document.querySelector('.dotsContainer')
    for(var i = 0; i <slides.length; i++){
        var dot = document.createElement('span')
        dot.classList.add('dots')
        dot.setAttribute("onClick", "moveSlides("+i+")")
        dotsContainer.appendChild(dot)
        dots.push(dot)
    }

    dots[slideIndex].classList.add('active')
}
initGallery()

function plusSlides(n){
    moveSlides(slideIndex + n)
}

function moveSlides(n){
    var i, current, next;
    var moveSlideAnimClass = {
        forCurrent: '',
        forNext: ''
    }
    var slidesTextAnimClass
    if(n>slideIndex){
        if(n>slides.length - 1)
        {
            n = 0
        }
        moveSlideAnimClass.forCurrent = 'moveLeftCurrentSlides'
        moveSlideAnimClass.forNext = 'moveLeftNexttSlides'
        slidesTextAnimClass = 'slideTextFromBottom'
    }else if( n<slideIndex){
        if(n < 0)
        {
            n = slides.length - 1
        }
        moveSlideAnimClass.forCurrent = 'moveRightCurrentSlides'
        moveSlideAnimClass.forNext = 'moveRightNexttSlides'
        slidesTextAnimClass = 'slideTextFromBottom'
    }
    if(n != slideIndex){
        next = slides[n]
        current = slides[slideIndex]
        for( var i = 0; i < slides.length; i++){
            slides[i].className = 'imageHolders'
            slides[i].style.opacity = 0
            dots[i].classList.remove('active')
        }
        current.classList.add(moveSlideAnimClass.forCurrent)
        next.classList.add(moveSlideAnimClass.forNext)
        dots[n].classList.add('active')
        slideIndex = n
    }
    captionText.style.display = 'none'
    captionText.className = 'captionText ' + slidesTextAnimClass
    captionText.innerText = slides[slideIndex].querySelector('.captionText').innerText
    captionText.style.display = 'block'
}


var timer = null
function setTimeSlide(){
    timer = setInterval(() => {
        plusSlides(1)
    }, 6000);
}
setTimeSlide()
// -----------------------category-----------------

const categoryBox = document.querySelector('.hd__category__box')
const categoryList = document.querySelector('.category__content')
let isShowCat = false
categoryBox.onclick = function(){
   categoryList.classList.toggle('active', isShowCat)
   isShowCat = !isShowCat

   // false: open / true: close
}

function favoriteBtn() {
    const activeHeartBtn = document.querySelector('.hd__favoriteitem__content')
    const contentNumber = document.querySelector('.hd__favoriteitem__content--numbeer')
    contentNumber.textContent = 0
    let isHeart = true
    activeHeartBtn.onclick = function(){
    const emptyHeart = document.querySelector('.hd__favoriteitem__content .heart_icon1')
    const activeHeart = document.querySelector('.hd__favoriteitem__content .heart_icon2')

    if(isHeart){
        activeHeart.style.display = 'block'
        emptyHeart.style.display = 'none'
        contentNumber.textContent = 1
        isHeart = !isHeart
    }else{
        activeHeart.style.display = 'none'
        emptyHeart.style.display = 'block'
        contentNumber.textContent = 0
        isHeart = !isHeart
    }
}
}
favoriteBtn()


var blogIndex, blogs
function initBlogs(){
    blogIndex = 0
    blogs = document.querySelectorAll('.blogs_box .blogs__holders')
    blogs[blogIndex].style.opacity = 1
}
initBlogs()

function plusBlogs(n){
    moveBlogs(blogIndex + n)
}

function moveBlogs(n) {
    var i, current, next;
    var moveBlogsAnimClass = {
        forNext: '',
        forCurrent: ''
    }
    if(n > blogIndex){
        if(n > blogs.length - 1){
            n = 0
        }
        moveBlogsAnimClass.forNext =  'moveleftNextBlogs'
        moveBlogsAnimClass.forCurrent =  'moveleftCurrBlogs'
    }
    else if(n < blogIndex){
        if(n < 0){
            n = blogs.length - 1
        }
        moveBlogsAnimClass.forNext =  'moveRightNextBlogs'
        moveBlogsAnimClass.forCurrent =  'moveRightCurrBlogs'
    }
    if(n != blogIndex){
        next = blogs[n]
        current = blogs[blogIndex]
        for( var i = 0; i < blogs.length; i++){
            blogs[i].className = 'blogs__holders'
            blogs[i].style.opacity = 0
        }
        current.classList.add(moveBlogsAnimClass.forCurrent)
        next.classList.add(moveBlogsAnimClass.forNext)   
        blogIndex = n
    }
}
// ------------ handle deal -----------------

var imageDeal 
const boxImage = document.querySelector('.dor__deal__tab--picture')

const promotionDeal = document.querySelector('.dor__deal__tab--image--promotion span')
const moveRightDeal = document.querySelector('.dor__deal__tab--btn.btnright')
const moveLeftDeal = document.querySelector('.dor__deal__tab--btn.btnleft')
const nameDeal = document.querySelector('.dor__deal__tab--name h4')
const oldPrice = document.querySelector('.dor__deal__tab--oldprice')
const newPrice = document.querySelector('.dor__deal__tab--newprice')
const availProduct = document.querySelector('.dor__deal__tab--inforProcess .availbale strong')
const soldProduct = document.querySelector('.dor__deal__tab--inforProcess .sold strong')
const leftProduct = document.querySelector('.dor__deal__tab--process span')



const deal = {
    indexDeal: 0,

    photos: [
        {
            path:'url(../image/deal.png)',
            promotion: '-40%',
            name: 'Chuồng chó cảnh bằng gỗ - 2 ngăn, kích thước 90cm vuông',
            newPri: '208.000 đồng',
            oldPrice: '520.000 đồng',
            avail: 15,
            sold: 7,
            itemLeft: function(){
                return (this.sold * 100) / this.avail
            }
        },
        {
            path:'url(../image/deal2.png)',
            promotion: '-30%',
            name: 'Dây đai thắt lưng siêu bền làm bằng XYZ - dài 2 mét',
            newPri: '140.000 đồng',
            oldPrice: '230.000 đồng',
            avail: 30,
            sold: 10,
            itemLeft: function(){
                return (this.sold * 100) / this.avail
            }
        },
        {
            path:'url(../image/deal3.png)',
            promotion: '-20%',
            name: 'Cho thú cưng ăn chậm rãi bằng Tô inox bền không độc hại, không gỉ, màu xanh và hồng',
            newPri: '80.000 đồng',
            oldPrice: '120.000 đồng',
            avail: 45,
            sold: 5,
            itemLeft: function(){
                return (this.sold * 100) / this.avail
            }
        },
        {
            path:'url(../image/deal4.png)',
            promotion: '-15%',
            name: 'Giường cho thú cưng hình dạng cá mập, màu xám, chất liệu vải nỉ',
            newPri: '210.000 đồng',
            oldPrice: '280.000 đồng',
            avail: 13,
            sold: 9,
            itemLeft: function(){
                return (this.sold * 100) / this.avail
            }
        }
    ],

    currentImage: function(){
        this.photos.forEach(function(photo,index){
            const div = document.createElement('div')
            div.classList.add('dor__deal__tab--image')
            div.style.backgroundImage = photo.path
            div.innerHTML = `<div class="dor__deal__tab--image--promotion"><span>${photo.promotion}</span></div>`
            boxImage.appendChild(div)
            imageDeal = document.querySelectorAll('.dor__deal__tab--image')
        })    
        imageDeal[this.indexDeal].style.opacity = 1
    },

    plusDeal: function(n){
        this.moveImageDeal(deal.indexDeal + n)
    },

    handleContain: function(){
        nameDeal.textContent = this.photos[this.indexDeal].name
        oldPrice.textContent = this.photos[this.indexDeal].oldPrice
        newPrice.textContent = this.photos[this.indexDeal].newPri
        availProduct.textContent = this.photos[this.indexDeal].avail
        soldProduct.textContent = this.photos[this.indexDeal].sold
        leftProduct.style.width = `${this.photos[this.indexDeal].itemLeft()}%`
    },

    moveImageDeal: function(n){
        var nxtDeal, currDeal
        var dealSlideAnimClass = {
            forNext: "",
            forCurrent: ""
        }
        if(n > deal.indexDeal){
            n = n > imageDeal.length - 1 ? 0 : n
            dealSlideAnimClass.forNext = 'dealAnimLeftToCurr'
            dealSlideAnimClass.forCurrent = 'dealAnimCurrToLeft'
        }
        else if(n < deal.indexDeal) {
            n = n < 0 ? imageDeal.length - 1 : n
            dealSlideAnimClass.forNext = 'dealAnimRightToCurr'
            dealSlideAnimClass.forCurrent = 'dealAnimCurrToRight'
        }
        if(n != deal.indexDeal){
            nxtDeal = imageDeal[n]
            currDeal = imageDeal[deal.indexDeal]
            nxtDeal.className = 'dor__deal__tab--image ' + dealSlideAnimClass.forNext
            currDeal.className = 'dor__deal__tab--image ' + dealSlideAnimClass.forCurrent
            deal.indexDeal = n
        }
    },

    

    process: function(){
        const _this = this
        moveRightDeal.onclick = function(e){  
            _this.plusDeal(1)
            _this.handleContain()
        }
        moveLeftDeal.onclick = function(e){
            _this.plusDeal(-1)
            _this.handleContain()
        }
        
    },
    start: function(){
        this.currentImage()
        this.handleContain()
        this.process()
    }
}
deal.start()

const second = document.querySelector('.timecount--second .time__num span')
const minute = document.querySelector('.timecount--minute .time__num span')
const hour = document.querySelector('.timecount--hour .time__num span')
const day = document.querySelector('.timecount--day .time__num span')


const timeEnd = {
    secondValue: 60,
    minuteValue: 45,
    hourValue: 21,
    dayValue: 5,

    setTime: function(){
        second.textContent = this.secondValue
        minute.textContent = this.minuteValue
        hour.textContent = this.hourValue
        day.textContent = this.dayValue
    },
    runTime: function(){
        const _this = this
       setInterval(function(){
        _this.handleTime()
       _this.setTime()
       }, 1000)
    },
    handleTime: function(){
        this.secondValue--
        if(this.secondValue < 0)
        {
            this.secondValue = 59
            this.minuteValue--
        }

        if(this.minuteValue < 0)
        {
            this.minuteValue = 59
            this.hourValue--
        }

        if(this.hourValue < 0)
        {
            this.hourValue = 23
            this.day--
        }
        if(this.dayValue < 0)
        {
            this.dayValue = 'het khuyen mai'
        }
        
    },
    start: function(){
        this.setTime()
        this.runTime()
    }
}
timeEnd.start()


const tabItemProductDeals = document.querySelectorAll('.dor__product--tablist .tabitem')
const showProducts = document.querySelectorAll('.dor__product-details .dor__product--detailBox')
const lineTablistProductDeal = document.querySelector('.dor__product--tablist .line')
const tabItemActiveDeal = document.querySelector('.dor__product--tablist .tabitem.active')

lineTablistProductDeal.style.left = tabItemActiveDeal.offsetLeft + 'px'
lineTablistProductDeal.style.width = tabItemActiveDeal.offsetWidth + 'px'

tabItemProductDeals.forEach(function(tab, index){
    const show = showProducts[index]
    tab.onclick = function(){
        document.querySelector('.dor__product--tablist .tabitem.active').classList.remove('active')
        document.querySelector('.dor__product-details .dor__product--detailBox.active').classList.remove('active')

        lineTablistProductDeal.style.left = this.offsetLeft + 'px'
        lineTablistProductDeal.style.width = this.offsetWidth + 'px'

        this.classList.add('active')
        show.classList.add('active')
    }
})

const tabItemPetsDog = document.querySelectorAll('.show__tab--pets--tablist_dog .list .item')
const listPetDogPd = document.querySelectorAll('.dor__product--detailBox-dog')
const lineTabListPetsDog = document.querySelector('.show__tab--pets--tablist_dog .line')
const tabItemActivePetDog = document.querySelector('.show__tab--pets--tablist_dog .list .item.active')

lineTabListPetsDog.style.left = tabItemActivePetDog.offsetLeft + 'px'
lineTabListPetsDog.style.width = tabItemActivePetDog.offsetWidth + 'px'



tabItemPetsDog.forEach(function(tab, index){
    const listDog = listPetDogPd[index]
    tab.onclick = function(){
        document.querySelector('.show__tab--pets--tablist_dog .list .item.active').classList.remove('active')
        document.querySelector('.dor__product--detailBox-dog.active').classList.remove('active')

        lineTabListPetsDog.style.left = this.offsetLeft + 'px'
        lineTabListPetsDog.style.width = this.offsetWidth + 'px'

        this.classList.add('active')
        listDog.classList.add('active')
    }
})

const tabItemPetsCat = document.querySelectorAll('.show__tab--pets--tablist_cat .list .item')
const listPetCatPd = document.querySelectorAll('.dor__product--detailBox-cat')
const lineTabListPetsCat = document.querySelector('.show__tab--pets--tablist_cat .line')
const tabItemActivePetCat = document.querySelector('.show__tab--pets--tablist_cat .list .item.active')

lineTabListPetsCat.style.left = tabItemActivePetCat.offsetLeft + 'px'
lineTabListPetsCat.style.width = tabItemActivePetCat.offsetWidth + 'px'



tabItemPetsCat.forEach(function(tab, index){
    const listCat = listPetCatPd[index]
    tab.onclick = function(){
        document.querySelector('.show__tab--pets--tablist_cat .list .item.active').classList.remove('active')
        document.querySelector('.dor__product--detailBox-cat.active').classList.remove('active')

        lineTabListPetsCat.style.left = this.offsetLeft + 'px'
        lineTabListPetsCat.style.width = this.offsetWidth + 'px'

        this.classList.add('active')
        listCat.classList.add('active')
    }
})

const specialDogImg = document.querySelector('.dor__pets__product--special--image.dog')
const specialCatImg = document.querySelector('.dor__pets__product--special--image.cat')
const specialDogSelect =  document.querySelectorAll('.dor__pets__product--special--selectorders .dor__pets__product--special--select.dog')
const specialCatSelect =  document.querySelectorAll('.dor__pets__product--special--selectorders .dor__pets__product--special--select.cat')
function convertSrcDog(n){
    const convertSpecialDog = JSON.stringify(specialDogImg.style.backgroundImage = specialDogSelect[n].firstElementChild.src)
    const srcSpecialDog = convertSpecialDog.slice(convertSpecialDog.indexOf('image'), convertSpecialDog.length-1)

    
    specialDogImg.style.backgroundImage = `url("${srcSpecialDog}")`

}
convertSrcDog(0)

function convertSrcCat(n){
    const convertSpecialCat = JSON.stringify(specialCatImg.style.backgroundImage = specialCatSelect[n].firstElementChild.src)
    const srcSpecialCat = convertSpecialCat.slice(convertSpecialCat.indexOf('image'), convertSpecialCat.length-1)

    specialCatImg.style.backgroundImage = `url("${srcSpecialCat}")`

}
convertSrcCat(0)
specialDogSelect.forEach(function(select, index){

        select.onclick = function(){
            document.querySelector('.dor__pets__product--special--select.dog.active').classList.remove('active')
            this.classList.add('active')
            convertSrcDog(index)
        }
    })

specialCatSelect.forEach(function(select, index){

    select.onclick = function(){
        document.querySelector('.dor__pets__product--special--select.cat.active').classList.remove('active')
        this.classList.add('active')
        convertSrcCat(index)
    }
})

const tabItemProduct = document.querySelectorAll('.show__tab--product--tablist .list .item')
const listProduct = document.querySelectorAll('.show_tab--product--detailBox')
const lineTabListProduct = document.querySelector('.show__tab--product--tablist .line')
const tabItemActiveProduct = document.querySelector('.show__tab--product--tablist .list .item.active')

lineTabListProduct.style.left = tabItemActiveProduct.offsetLeft + 'px'
lineTabListProduct.style.width = tabItemActiveProduct.offsetWidth + 'px'

tabItemProduct.forEach(function(tab, index){
    const listPd = listProduct[index]
    tab.onclick = function(){
        document.querySelector('.show__tab--product--tablist .list .item.active').classList.remove('active')
        document.querySelector('.show_tab--product--detailBox.active').classList.remove('active')

        lineTabListProduct.style.left = this.offsetLeft + 'px'
        lineTabListProduct.style.width = this.offsetWidth + 'px'

        this.classList.add('active')
        listPd.classList.add('active')
    }
})

const tabItemHealthy = document.querySelectorAll('.show__tab--product--tablist.healthy .list .item')
const listHealthy = document.querySelectorAll('.show_tab--healthy--detailBox')
const lineTabListHealthy = document.querySelector('.show__tab--product--tablist.healthy .line')
const tabItemActiveHealthy = document.querySelector('.show__tab--product--tablist.healthy .list .item.active')

lineTabListHealthy.style.left = tabItemActiveHealthy.offsetLeft + 'px'
lineTabListHealthy.style.width = tabItemActiveHealthy.offsetWidth + 'px'

tabItemHealthy.forEach(function(tab, index){
    const listHp = listHealthy[index]
    tab.onclick = function(){
        document.querySelector('.show__tab--product--tablist.healthy .list .item.active').classList.remove('active')
        document.querySelector('.show_tab--healthy--detailBox.active').classList.remove('active')

        lineTabListHealthy.style.left = this.offsetLeft + 'px'
        lineTabListHealthy.style.width = this.offsetWidth + 'px'

        this.classList.add('active')
        listHp.classList.add('active')
    }
})


const loginBtns = document.querySelectorAll('.hd__icons__box--user .user__list .user__item')
const typeForms = document.querySelectorAll('.form__container')
const user = document.querySelector('.modal')
const cancelForm = document.querySelector('.modal__overlay')
const formLogin = document.querySelector('.form__login .form__others .register')
const formRegister = document.querySelector('.form__register .form__others .login')

loginBtns.forEach(function(loginBtn, index){
    const typeForm = typeForms[index]
    loginBtn.onclick = function(){
        document.querySelector('.form__container.active').classList.remove('active')
        typeForm.classList.add('active')

        user.classList.add('active')
        document.querySelector('body').style.width = 100 + '%'
        document.querySelector('body').style.overflow = 'hidden'

    }
})

formLogin.onclick = function(e){
    e.target.parentElement.parentElement.parentElement.classList.remove('active')
    e.target.parentElement.parentElement.parentElement.nextElementSibling.classList.add('active')
}
formRegister.onclick = function(e){
    e.target.parentElement.parentElement.parentElement.classList.remove('active')
    e.target.parentElement.parentElement.parentElement.previousElementSibling.classList.add('active')
}

cancelForm.onclick = function(){
    user.classList.remove('active')
    document.querySelector('body').style.width ='auto'
    document.querySelector('body').style.overflow = 'auto'
}





