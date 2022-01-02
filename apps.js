const firstImg = 'url("./img/Pricing-Page-Template-For-Sketch.jpg")';
const secongImg =  'url("./img/Screenshot\ at\ 2021-07-26\ 22-54-13.png")';
const thirdImg = 'url("./img/Screenshot\ at\ 2021-08-01\ 22-09-38.png")';
const fourthImg = 'url("./img/Screenshot\ at\ 2021-08-10\ 14-42-07.png")';
const bgImagesArray = [firstImg, secongImg, thirdImg, fourthImg]

// GET ALL THE HTML DOCUMENT
const container = document.querySelector('.container')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')

// GET 
nextBtn.addEventListener('click', bringNextImg);
prevBtn.addEventListener('click', bringPrevImg)

let i =0

function bringNextImg(e){
    
    bgImagesArray[i++];
    if(i == bgImagesArray.length){
        i = -1
        i = i+1
        // container.style.backgroundImage = bgImagesArray[i]
        // console.log
    }
    container.style.backgroundImage = bgImagesArray[i]
    container.animate([{opacity:'0', transform:'translateX(0%)'},{opacity:'1', transform:'translateX(100%)'}], {duration:400})
}

function bringPrevImg(e){
    bgImagesArray[i -=1]
    if(i < 0){
        i = 4
        i = i - 1
    }
    container.style.backgroundImage = bgImagesArray[i]
    container.animate([{opacity:'0'},{opacity:'1'}], {duration:400})
    // else if(i === 0){
    //     console.log('hwdh')
    //     i = 3;
    //     console.log(i)
    //     bgImagesArray.style.backgroundImage = bgImagesArray[i]
    // }
}