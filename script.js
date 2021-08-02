let count = 0;
let newToDoList = {};

const projectCreator = (title) => {
    return {
        title,
    }
}

const toDoListItem = (title, description, dueDate,  priority) => {
    return {
        title,
        description,
        dueDate,
        priority,
    }
}

function newProject(projectName) {
    count++;
   // console.log(count);
    newToDoList.count = []; 
    //projectName = document.getElementById('project-name').value;
    projectName = prompt("Project name?");
    const projectDisplay = document.getElementById('lower-nav');
    const container = document.getElementById('container');
    const createProject = document.createElement('li');
    createProject.classList.add(count);
    const a = document.createElement('a');
    a.textContent = projectName;
    a.setAttribute('href', "#");
    a.onclick = function display() {
        container.innerHTML = "";
        const title = document.createElement('h1');
        title.classList.add('container-text');
        title.textContent = a.textContent;
        const addButton = document.createElement('button');
        addButton.innerText = "Add to project..."
        const deleteProject = document.createElement('button');
        deleteProject.innerText = "Delete project"
        addButton.addEventListener("click", function(title, description, dueDate,  priority)  {
            {
                title = prompt("Title?");
                description = prompt("description");
                dueDate = prompt("due?");
                priority = parseInt(prompt("priority?"));
                const newItem = toDoListItem(title, description, dueDate, priority);
                newToDoList.count.push(newItem);
                console.table(newToDoList.count);
                console.table(newToDoList);
    
        const list = document.createElement('li');
        list.id = ('list-' + [count] + '-items');
        console.log(list.id);
        list.innerHTML = "";
        
        for (let i = 0; i < newToDoList.count.length; i++) {
            const item = document.createElement('ul');
            list.innerHTML = "";
            const button = document.createElement('a');
            button.setAttribute("href", '#');
            button.addEventListener("click", function display2() {
                container.innerHTML = "";
                const title = document.createElement('h2');
                title.textContent = newToDoList.count[i].title;
                title.classList.add('container-text');
                const description = document.createElement('p');
                description.textContent = newToDoList.count[i].description;
                description.classList.add('container-text');
                const dueDate = document.createElement('div');
                dueDate.textContent = newToDoList.count[i].dueDate;
                dueDate.classList.add('container-text');
                const priority = document.createElement('p');
                priority.textContent = newToDoList.count[i].priority;
                priority.classList.add('container-text');
                const deleteButton = document.createElement('button');
                deleteButton.innerText = "Remove from list";
                deleteButton.addEventListener("click", function() { // DOES NOT UPDATE THE LIST, DOES REMOVE FROM ARRAY
                    newToDoList.count.splice(i, 1);
                    list.removeChild(item);
                    console.table(newToDoList.count);
                    console.table(newToDoList);
                    display();
                });
                const doneButton = document.createElement('button');
                doneButton.innerText = "Finished?";
                doneButton.addEventListener("click", function() {
                    if (button.classList != 'done') {
                        button.classList.add('done');
                        title.classList.add('done');
                    }
                    else {
                        button.classList.remove('done');
                        title.classList.remove('done');
                    }
                })
                container.appendChild(title);
                container.appendChild(description);
                container.appendChild(dueDate);
                container.appendChild(priority);
                container.appendChild(deleteButton);
                container.appendChild(doneButton);
            });
            button.textContent = newToDoList.count[i].title;
            item.appendChild(button);
            item.classList = newToDoList.count[i].title;
            //console.log(item.classList.value);
            list.appendChild(item);
            createProject.appendChild(list);
        };
        }
        })
        container.appendChild(addButton);
        deleteProject.addEventListener("click", function() {
            projectDisplay.removeChild(createProject);
            container.innerHTML = "";
        })
        container.appendChild(deleteProject);
        container.appendChild(title);
    }
    createProject.appendChild(a);
    projectDisplay.appendChild(createProject); 
}

const button = document.getElementById('cool');
button.addEventListener("click", newProject);

/*
const buttonn = document.getElementById('set-name');
buttonn.addEventListener("click", newProject);


const closeButton = document.getElementById('cancel-button');
closeButton.addEventListener("click", closeForm)

function showForm() {
    document.querySelector('.form-popup').style.display = 'block';
}

function closeForm() {
    document.querySelector('.form-popup').style.display = 'none';
}

function showProject() {
    document.querySelector('.project-name').style.display = 'block';
}

function hideProject() {
    document.querySelector('.project-name').style.display = 'none';
}

//const submitButton = document.getElementById('submit');
//submitButton.addEventListener("click", newProject);
// Next steps
// Work on the layout of the form, watch that video.
// Try to embed a form instead of prompts, start to try layering out the functions (try to understand scope)

// TAKE ANOTHER BREAK, SOMETHING WENT WRONG. BUT WE CAN FIX IT. */