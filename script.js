// throttling - kono code er number of execution ta komay dea (gfg)

const throttleFunction = (func, delay) => {

    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        //console.log(now - prev, delay);
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}

const imgarr = [
    "images/img1.webp",
    "images/img2.webp",
    "images/img3.webp",
    "images/img4.webp",
    "images/img5.webp",
    "images/img6.webp",
    "images/img7.webp",
    "images/img8.webp",
    "images/img9.webp",
    "images/img10.webp",
    "images/img11.webp",
    "images/img12.webp",
    "images/img13.webp",
    "images/img14.webp",
    "images/img15.webp",
    "images/img16.webp",
    "images/img17.webp",
    "images/img18.webp",
    "images/img19.webp",
    "images/img20.webp",
    "images/img21.webp",
    "images/img22.webp",
]


document.querySelector("#center").addEventListener("mousemove",
    throttleFunction((dets) => {
        // Less Repetition Code
        var div = document.createElement("div")
        div.classList.add('imgDiv')

        div.style.left = dets.clientX + 'px'
        div.style.top = dets.clientY + 'px'

        document.body.appendChild(div)


        var img = document.createElement("img")
        // img.setAttribute("key": "value")
        img.setAttribute("src", imgarr[Math.floor(Math.random() * 22)])

        div.appendChild(img)

        // img coming with animation
        gsap.to(img, {
            y: "-20%",
            ease: Power1,
            duration: 0.7
        })

        // 
        gsap.to(img, {
            y: "100%",
            delay: 0.7,   
            ease: Power1,
            duration: 0.2
        })

        // for removing the img div
        setTimeout(function(){
            div.remove()
        }, 1000)

    }, 250));


// // Less Repetition Code

// Make div:





// document.querySelector("#center").addEventListener("mousemove", function(dets){
//     console.log(dets.clientX, dets.clientY)
// })


