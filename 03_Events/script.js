// const clicks = document.getElementById("click");
// let count = document.getElementById("count");

// let counts = 0

// clicks.addEventListener('click',function(){
//     counts++;
//      return count.textContent = counts;
// })


// let king = document.getElementById("raje")
// let flute = document.getElementById("flute")

// king.addEventListener('click',function(e){
//     console.log("Jay ShivRai Jay ShambhuRaje")
//     e.stopPropagation()
// },false)

// flute.addEventListener('click' , function(e){
//     console.log("My Radha");
//     e.preventDefault();
    
// },false)

document.getElementById("images").addEventListener('click' , function(e){
    console.log(e.target.parentNode);
    if(e.target.tagName === 'IMG'){
        let remov = e.target.parentNode;
        remov.remove()  
    }
    
    
},false)

// false --> bubbling