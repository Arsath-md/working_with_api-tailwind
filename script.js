let fact = document.getElementById("fact");
let btn = document.getElementById("btn")


async function showdata() {
    
    const res = await fetch("https://catfact.ninja/fact");
    const shows = await res.json();
    fact.innerText=shows.fact;
    console.log("welcome to the page")
    document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
});
}

btn.addEventListener("click",showdata);