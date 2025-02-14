const select = document.getElementById("options")
const searchBox = document.getElementById("searchInput")
const search = document.getElementById("searchBtn")
const item1 = document.getElementById("item1")
const item2 = document.getElementById("item2")
const item3 = document.getElementById("item3")
const quotes = [
    { id: "1", author: "Albert Einstein", quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”" },
    { id: "2", author: "Bernard M. Baruch", quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”" },
    { id: "3", author: "Mahatma Gandhi", quote: "“Be the change that you wish to see in the world.”"}
];
function result (input){
    try {
        if(select.value=="id"){
            if(input==1 || input == "albert"){
                item1.style.display = "block"
                quote1.innerHTML = quotes[0].quote
                author1.innerHTML = quotes[0].author
                item2.style.display = "none"
                item3.style.display = "none"
            }else if(input == 2 ){
                item2.style.display = "block"
                quote2.innerHTML = quotes[1].quote
                author2.innerHTML = quotes[1].author
                item1.style.display = "none"
                item3.style.display = "none"
            }else if(input == 3 ){
                item3.style.display = "block"
                quote3.innerHTML = quotes[2].quote
                author3.innerHTML = quotes[2].author
                item1.style.display = "none"
                item2.style.display = "none"
            }else{
                alert("Invalid ID")
                item1.style.display = "none"
                item2.style.display = "none"
                item3.style.display = "none"
            }
        }else if(select.value == "author"){
            if(input == "albert"){
                item1.style.display = "block"
                quote1.innerHTML = quotes[0].quote
                author1.innerHTML = quotes[0].author
                item2.style.display = "none"
                item3.style.display = "none"
            }else if(input == "bernard"){
                item2.style.display = "block"
                quote2.innerHTML = quotes[1].quote
                author2.innerHTML = quotes[1].author
                item1.style.display = "none"
                item3.style.display = "none"
            }else if(input == "mahatma"){
                item3.style.display = "block"
                quote3.innerHTML = quotes[2].quote
                author3.innerHTML = quotes[2].author
                item1.style.display = "none"
                item2.style.display = "none"
            }else{
                alert("Not Found!!!!!")
                item1.style.display = "none"
                item2.style.display = "none"
                item3.style.display = "none"
            }
        }else if(select.value == "default"){
            throw(error);
        }
    } catch (error) {
        alert(error)
        item1.style.display = "none"
        item2.style.display = "none"
        item3.style.display = "none"
    }
    
}

select.addEventListener("change",()=>{
    console.log(select.value)
})
search.addEventListener("click", ()=>{
   result(searchBox.value)
})
