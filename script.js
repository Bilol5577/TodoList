const button = document.getElementById("send");
const btn = document.getElementById("daynight");
const input = document.getElementById("input");
const taskList = document.getElementById("taskList");
const body = document.querySelector("body")


btn.addEventListener("click", () => {
    if(document.body.classList.toggle("dark-mode")){
        btn.textContent = '☀️';
    }else{
        btn.textContent = '🌙';
    }
});

button.addEventListener("click", () => {
    const boxes = document.createElement("div");
    boxes.style.marginLeft = "115px";
    boxes.style.width = "520px";
    boxes.style.height = "40px";
    boxes.style.border = "1px solid #6C63FF";
    boxes.style.display = "flex";
    boxes.style.alignItems = "center";
    boxes.style.justifyContent = "space-between";
    boxes.style.marginTop = "30px";

    const li = document.createElement("li");
    li.style.marginLeft = "60px";
    li.textContent = input.value;
    li.className = "li-element";
    li.style.display = "flex";

    boxes.appendChild(li);

    const editBtn = document.createElement('button');
    editBtn.textContent = '🖊';
    editBtn.style.marginLeft = "370px";
    boxes.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🪣';
    boxes.appendChild(deleteBtn);

    taskList.appendChild(boxes);

    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(boxes);
    });

    editBtn.addEventListener("click", () => {
        const newText = prompt("Yangi matnni kiriting:", li.textContent);
        if (newText !== null) {
            li.textContent = newText;
        }
    });
});


