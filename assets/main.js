

// let width=window.screen.width

// console.log(width);

// console.log(window.location.href);

// window.location.href='https://colorhunt.co/palette/f9f5f6f8e8eefdcedff2bed1'


// let appName = window.navigator.appName
// let version = window.navigator.appVersion


// console.log(appName,version);


//  let body=document.querySelector('body')


// setTimeout(() => {
//     body.style.backgroundColor='#FDCEDF'

// }, 3000);



// let headings = document.querySelector('.h1-3')

// let prev=headings.previousElementSibling

// console.log(prev);


// let btn= document.getElementById('btn');
// btn.style.color="red";
// btn.style.width="70px";
// btn.style.height="50px";
// btn.style.backgroundColor="#F8E8EE";

// btn.onclick=()=>{
//     btn.classList.toggle('active')
// }

// --------------------------------------------


// 1
// let nameHeading= document.getElementById('name')

// console.log(nameHeading);


// 2

// let heading3= document.querySelector('.h1-3')

// console.log(heading3);


// 3
// const heading3= document.querySelector('.h1')


// heading3.onclick=()=>{
//     heading3.style.color='blue'
    
// }


// 4

// const heading3= document.querySelector('.h1')


// heading3.onclick=()=>{
//     heading3.classList.add('reng')
    
// }



// 5

// const heading3= document.querySelector('.h1')
// heading3.onclick=()=>{
//     heading3.classList.toggle('reng')
    
// }




// 6
// const heading3= document.querySelector('.h1')

// alert(heading3.innerHTML)




// 7

// const heading3= document.querySelectorAll('.btn')

// console.log(heading3);




//8
// const heading3= document.querySelectorAll('.btn')

// heading3.forEach(x=>{
//     x.innerHTML
// })

// console.log(heading3);


//9

// const divElementi=document.createElement('h3')
// divElementi.innerHTML='MEHRIBAN'
// divElementi.style.color='blue'

// document.body.append(divElementi)


// 10

const button=document.querySelector('.click')

button.onclick=()=>{
    const daxilEdin =prompt('adinizi daxil edin')

    const body=document.querySelector('body')

    const yeniElement=document.createElement('div')
    
    const cancel=document.createElement('div')
    cancel.innerHTML='X'
    yeniElement.append(cancel)

    yeniElement.classList.add('yeniElementClassi')

    yeniElement.innerHTML=daxilEdin

    yeniElement.onclick=()=> yeniElement.classList.toggle('xett')
    cancel.onclick=()=> yeniElement.remove()

    body.append(yeniElement)
    // body.append(cancel)
    yeniElement.append(cancel)

}


