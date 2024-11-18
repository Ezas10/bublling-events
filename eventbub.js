grandParent = document.getElementById("grandParent")
parent = document.getElementById("parent")
child = document.getElementById("child")

grandParent.addEventListener("click", (e)=>{
    
    e.stopPropagation();  
    setTimeout(()=>{
         grandParent.style.backgroundColor="red"
         console.log("grandParent is clicked")
    },2000)
   
})

parent.addEventListener("click", (e)=>{
    e.stopPropagation();  
    setTimeout(()=>{
         parent.style.backgroundColor="cyan"
         console.log("parent is clicked")
    },3000)
})

child.addEventListener("click", (e)=>{
    e.stopPropagation();  
    setTimeout(()=>{
         child.style.backgroundColor="lightgreen"
         console.log("child is clicked")
    },5000)
})


grandParent.addEventListener("click", (e)=>{
    
    e.stopPropagation();  
    
         grandParent.style.backgroundColor="green"
         console.log("grandParent is clicked")
       
},true)

parent.addEventListener("click", (e)=>{
    e.stopPropagation();
         parent.style.backgroundColor="cyan"
         console.log("parent is clicked")

},true)

child.addEventListener("click", (e)=>{
    e.stopImmediatePropagation();   
         child.style.backgroundColor="lightgreen"
         console.log("child is clicked")

},true)