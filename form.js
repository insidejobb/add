function localstorage(event){
    let name=event.target.fname.value
    let lastname=event.target.Lname.value
    event.preventDefault()
    localStorage.setItem('Name',name)
    localStorage.setItem('Lname',lastname)
    
}