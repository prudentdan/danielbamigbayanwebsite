// contact form display

let contactForm = document.getElementById('contact-form');
let closeBtn = document.getElementById('close');
let workWithMe =document.getElementById('CTA');
let heroWkm = document.getElementById('WKM')
let inTouchSection = document.getElementById('In-Touch')
closeBtn.addEventListener("click", ()=> {
    contactForm.style.display = "none"
    document.body.style.overflow = "auto"
} )

workWithMe.addEventListener("click", ()=> {
    contactForm.style.display = "block";
    document.body.style.overflow = "hidden"
} )


heroWkm.addEventListener("click", (event)=> {
    event.preventDefault();
    inTouchSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
} )
