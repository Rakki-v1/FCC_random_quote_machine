const qText = document.getElementById("text");
const qAuthor = document.getElementById("author");
const button = document.getElementById("new-quote")


let apiQuote=[]

function newQuote(){
    let quote = apiQuote[Math.floor(Math.random()*apiQuote.length)]
    qText.textContent = quote.text;
    qAuthor.textContent = quote.author;
}


async function getQuote(){
    const apiUrl = "https://type.fit/api/quotes";
    try{
        const response = await fetch(apiUrl);
        apiQuote = await response.json();
        newQuote();
    } catch (error){

    }
}

getQuote()
button.addEventListener("click",getQuote)


