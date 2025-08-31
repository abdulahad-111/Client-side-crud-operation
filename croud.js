let form = document.getElementById("form");
let text = document.getElementById("text");
let div = document.getElementById("list");
let btn = document.getElementById("btn");
let users = [];


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let value = text.value.trim();
    if (value === "") return;
    let newUser = { id: users.length, name: value };
    users.push(newUser);

    let mainText = document.createElement("div");
    mainText.setAttribute("class", "inerText");

    let span = document.createElement("span");
    span.textContent = newUser.name;
    span.setAttribute("class", "innerName");
    mainText.appendChild(span);


    let buttonBox = document.createElement("div");
    buttonBox.setAttribute("class", "buttonBox");

    let edit = document.createElement("button");
    edit.textContent = "Edit";


    let Delete = document.createElement("button");
    Delete.style.marginLeft = '0.3rem';
    Delete.style.background = 'red';
    Delete.textContent = "Delete";



    mainText.setAttribute("id", newUser.id);

    buttonBox.appendChild(edit);
    buttonBox.appendChild(Delete);
    mainText.append(buttonBox);
    div.appendChild(mainText);



    Delete.addEventListener("click", () => {
        let mainId = newUser.id;

        users = users.filter(item => item.id !== mainId);
        mainText.remove();
        text.value = "";
    });

    edit.addEventListener("click", () => {
        
        let input = document.createElement("input");
        let Ok = document.createElement("button");
        
        Ok.textContent = "Ok";
        Ok.style.order = '-1';
        
        input.value = span.textContent;
        input.setAttribute("class", "form-control updateInput");
        span.remove();
        mainText.style.width = "400px";
        mainText.append(input);
        edit.remove();
        buttonBox.appendChild(Ok);
        Ok.addEventListener("click", () => {
            newUser.name = input.value;
            mainText.append(span);
            span.textContent = input.value;
            input.remove();
            Ok.remove();
            buttonBox.appendChild(edit);
            mainText.style.width = "300px";
            span.style.order = '-1';
            edit.style.order = '-1';
        })
        
    })
    
    text.value = "";
})

