export function imgOpen(url){
    document.documentElement.style.setProperty("--img-display","flex")
    document.documentElement.style.setProperty("--img-url",`url(${url})`)
}
export function imgClose(){
    document.documentElement.style.setProperty("--img-display","none")
}