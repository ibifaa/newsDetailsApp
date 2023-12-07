let links = []
if(localStorage.getItem('links') == null){
    localStorage.setItem('links' , JSON.stringify([]))
}

let option = Number(prompt("Choose an option:\n1: Show Link \n2: Add Link\n3: Remove Link \n 0:Quit"));

switch(option){
    case 1:
        showLink();
        break;
        
    case 2:
        addLink();
        break;
        
    case 3:
        removeLink()
        break;
    case 0:
        break;

    default:
        break;
}

function addLink(){
    let name = prompt("enter name");
    let url = prompt("enter link");
    let author = prompt("enter author")



    if(!url.startsWith("http://") && !url.startsWith("https://")){
        url = "https://" + url;
    }

    let newLinks = `${name}, ${url}, ${author}`;

// push the new data to the old data
    let prevLinks = JSON.parse(localStorage.getItem('links'))
    console.log(prevLinks)
        prevLinks.push(newLinks)

    localStorage.setItem('links', JSON.stringify(prevLinks));
    
}

function showLink(){
    if(localStorage.getItem('links') != null){
   console.log( JSON.parse(localStorage.getItem('links')))
}
}

function removeLink(){
    let prevLinks = JSON.parse(localStorage.getItem('links'))
    let indexNumber = prompt(`Enter index from 1 to ${links.length} to remove link`);
    if(prevLinks.length >= 1 && indexNumber <= prevLinks.length){
       prevLinks.splice(indexNumber-1, 1);
       localStorage.setItem('links', JSON.stringify(prevLinks));
        alert("item removed successfully")

    }else{
        alert("Invalid index")
    }
    
}





