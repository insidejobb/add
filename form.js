function saveToLocalStorage(event){
    event.preventDefault();
    const name=event.target.username.value;
    const email=event.target.emailid.value;
    const phNum=event.target.phoneNum.value;
    //localStorage.setItem('Name',name)
    //localStorage.setItem('Email',lastname)
    //localStorage.setItem('phoneNum',phNum)
    const obj={
        name,
        email,
        phNum
    }
    localStorage.setItem(obj.email,JSON.stringify(obj))
    showUserOnScreen(obj)
}


    function showUserOnScreen(obj){
        const parentElem=document.getElementById('listOfitems')
        //parentElem.innerHTML=`<li>${obj.name} - ${obj.email} - ${obj.phNum} </li>`
        const childElem=document.createElement('li')
        childElem.textContent=obj.name+obj.email+obj.phNum
        parentElem.appendChild(childElem)
    
        var deleteBtn = document.createElement('button');
        deleteBtn.textContent='delete';
        deleteBtn.className = 'btn-btn';
        childElem.appendChild(deleteBtn);
        deleteBtn.addEventListener('click', function removeItem(event){
            if(event.target.classList.contains('btn-btn')){
              if(confirm('Are You Sure?')){
                
                parentElem.removeChild(childElem);
                localStorage.removeItem(obj.email);
                
              }
            }
          });
        const editBtn=document.createElement('input')
        editBtn.type="button"
        editBtn.value='Edit'
        editBtn.onclick = () => { 
        localStorage.removeItem(obj.email);
        parentElem.removeChild(childElem);
        document.getElementById('username').value=obj.name;
        document.getElementById('emailid').value=obj.email;
        document.getElementById('phoneNum').value=obj.phNum;
    };
    
  
  
    childElem.appendChild(deleteBtn);
    childElem.appendChild(editBtn);
    parentElem.appendChild(childElem);
    }
        
    


   