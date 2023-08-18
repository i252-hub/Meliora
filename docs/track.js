const inputBox = document.getElementById('textbox');
const list_li = document.getElementById('list');


       function addTask(){
        if(inputBox.value===""){
         inputBox.innerHTML = ""        }
        else{
            let li = document.createElement('li');
            li.innerHTML = inputBox.value;
            list_li.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            span.style.color = "white";
            li.appendChild(span);

        }
        inputBox.value = "";
        saveData();
       }

       addTask();

       list_li.addEventListener("click", function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            

            
            saveData();
            move()

        }

        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData();

        }

     
       }, false);

       function saveData(){
        localStorage.setItem("data", list_li.innerHTML);
       }

    function showTask(){
                    list_li.innerHTML = localStorage.getItem("data"); 
    }

    showTask();

   
      
