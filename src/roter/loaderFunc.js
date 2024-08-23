export function loaderDisplay(value){
    if(value){
        document.documentElement.style.setProperty("--loader-display","flex")
    }else{
        document.documentElement.style.setProperty("--loader-display","none")
    }
}