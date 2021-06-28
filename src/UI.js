

import ToDo from "C:\\Users\\Channappa\\Downloads\\To-Do-List\\To-Do-List\\src\\todo.js";

// window.onload=()=>{

    // alert("Loading");
    const button1=document.getElementById("addProject");
    button1.addEventListener('click',createProject);

    
    function createProject(){
        const title=document.getElementById("title");
        title.innerHTML+=`
        <h3>Add Project</h3><br>
        `
        const div=document.getElementById("data");
        div.innerHTML+=
        `<form>
        <input type="text" id="projectTitle" name="projectTitle" placeholder="Title"><br><br>
        <button id="add"><span>Add</button> <button><span>Cancel</button>
        </form> 
        `
        
 
        }
        const add = document.getElementById("add");
        console.log(add);
        add.addEventListener('click',test);

        const test=()=>{
        const projectTitle=document.getElementById("projectTitle").value;
        console.log(projectTitle);
    
    }

// }