const select = document.getElementById("options")
const searchBox = document.getElementById("searchInput")
const search = document.getElementById("searchBtn")
const item1 = document.getElementById("item1")
const item2 = document.getElementById("item2")
const item3 = document.getElementById("item3")
const quotes = [
    { id: "1", title: "Know what it will look like at the TOP", quote: "It's okay if you don't know what it will look like at the TOP. Take it ONE STEP at a time." },
    { id: "2", title: "Take it one STEP at a time", quote: "It's okay if you don't know what it will look like at the TOP. Take it ONE STEP at a time." },
    // ... more quotes
];
function result (input){
    try {
        if(select.value=="id"){
            if(input==1){
                
                item1.style.display = "block"
                item2.style.display = "none"
                item3.style.display = "none"
            }else if(input == 2){
                item1.style.display = "none"
                item2.style.display = "block"
                item3.style.display = "none"
            }else if(input == 3){
                item1.style.display = "none"
                item2.style.display = "none"
                item3.style.display = "block"
            }
        }else if(select.value == "title"){
            
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
