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
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg",
    "images/img6.jpg",
    "images/img7.jpg",
    "images/img8.jpg",
    "images/img9.jpg",
    "images/img10.jpg",
    "images/img11.jpg",
    "images/img12.jpg",
    "images/img13.jpg",
    "images/img14.jpg",
    "images/img15.jpg",
    "images/img16.jpg",
    "images/img17.jpg",
    "images/img18.jpg",
    "images/img19.jpg",
    "images/img20.jpg",
    "images/img21.jpg",
    "images/img22.jpg",
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
            y: "0",
            ease: Power1,
            duration: 0.6
        })

        // 
        gsap.to(img, {
            y: "100%",
            delay: 0.6,   
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


