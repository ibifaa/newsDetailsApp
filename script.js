
let links = JSON.parse(localStorage.getItem('links')) || [];
localStorage.setItem(links, JSON.stringify(links));

while(true) {
   

let storedLinks = JSON.parse(localStorage.getItem('links'));

switch(option){
    case 1:
        showLink();
        break;
        
    case 2:
        let name = prompt("Enter name");
        let link = prompt("Enter link");
        let author = prompt("Enter author");
        addLink(name, link, author);
        break;
        
    case 3:
        removeLink(links)
        break;
    case 0:
        alert("Quiting the program");
        localStorage.setItem('links', JSON.stringify(links));
        break;

    default:
        alert("Invalid input")
        break;
}


function addLink(name, url, author, links){   
      if(!url.startsWith("https://") && !url.startsWith("http://")){
        url = "https://" + url;
    }

   const linkString = `${name} ${url}, ${author}`
  links.push(linkString);
  localStorage.setItem('links', JSON.stringify(links));
    
}

function showLink(){
    console.log(links);
}

function removeLink(links){
    let indexNumber = prompt(`Enter index from 1 to ${links.length} to remove link`);
    if(links.length >= 1 && indexNumber <= links.length){
       links.splice(indexNumber- 1, 1);
       localStorage.setItem('links', JSON.stringify(links));
        alert("item removed successfully")

    }else{
        alert("Invalid index")
    }
    
}
}


