inputbutton = document.getElementById("addinput");
clearbutton = document.getElementById("outputclear");
activebutton = document.getElementById("active");
completebutton = document.getElementById("complete");
allbutton = document.getElementById("all");
let active = [], all=[],
  completed = [];

//working of input button

inputbutton.addEventListener("click", function (e) {
  let text = "";
  let input = document.getElementById("inputform");
  document.getElementById("inputs").innerHTML += 
  ` <div class="task">
    <span id="taskname">${input.value}</span>
    <button class="complete">
    <i class="fas fa-solid fa-check"></i>
    </button>
    <button class="delete">
    <i class="fas fa-trash-alt"></i>
    </button>
    </div>
    `;
    all.push(input.value);
    active.push(input.value);
   
    input.value = "";

    //delete particular item
  let deleteitems = document.querySelectorAll(".delete");
  for (let i = 0; i < deleteitems.length; i++) {
    deleteitems[i].onclick = function () {
      this.parentNode.remove();
    };
  }

    // mark completed
  let done = document.querySelectorAll(".complete");
  for (let i = 0; i < done.length; i++) {
    done[i].onclick = function () {
        console.log(done[i]);
      this.parentNode.style.textDecoration = "line-through";
      completed.push(done[i].parentNode.firstElementChild.innerText)
    let index=active.indexOf(done[i].parentNode.firstElementChild.innerText) 
   if(index>-1){
    active.splice(index,1)
   }
   
    };
  }
});

// working of all clear button
clearbutton.addEventListener("click", function (e) {
  document.getElementById("inputs").innerHTML = "";
      for (let j = 0; j < completed.length || active.length; j++) {
        completed ="";
        active ="";
        all = "";
    }

});

// working of completed button
completebutton.addEventListener("click", function (e) {
  let text = "";
  for (let j = 0; j < completed.length; j++) {
    text += completed[j] + "<br>";
  }
  document.getElementById("inputs").innerHTML = text;
});

// working of active button
activebutton.addEventListener("click", function(e){
    let text = "";
    for (let j = 0; j < active.length; j++) {
        text += active[j] + "<br>";
    }
    document.getElementById("inputs").innerHTML = text;
})

//working of all button
allbutton.addEventListener("click", function(){
    let text = "";
    for (let j = 0; j < all.length; j++) {
        text += all[j] + "<br>";
    }
    document.getElementById("inputs").innerHTML = text;
})