const d = document
const $socialIcons = document.querySelector(".card__content__social--icon")
const $btnInfo = document.querySelector("card__info__button")

d.addEventListener("click", (e) => {
    if(e.target.matches(".card__info__button") || e.target.matches("path")){
        $socialIcons.classList.toggle("active")
    } else {
        if(!e.target.matches(".card__info__button") || !e.target.matches("path")){
            $socialIcons.classList.remove("active")
    }
}})

