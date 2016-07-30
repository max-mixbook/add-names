var app = (function() {

    var people = [];

    //cacheDOM 
    var peopleModule = document.getElementById('peopleModule');
    var peopleList = document.getElementById('peopleList');
    var myInput = document.getElementById('myInput');
    var addButton = document.getElementById('addButton');
    
    //bind events
    addButton.addEventListener("click", addPerson.bind(this));
    myInput.addEventListener("keydown", _handleEnter.bind(this));
    peopleList.addEventListener("click", deletePerson.bind(this));

    _render();

    function _render(){
        var data = people;
        peopleList.innerHTML = "";

        for (var k in data){
            var newPerson = document.createElement('li');
            var newPersonName = document.createElement('span');
            var deleteBtn = document.createElement('span');
            var deleteUI = deleteBtn.appendChild(document.createTextNode('x'));

            peopleList.appendChild(newPerson);
            newPerson.appendChild(newPersonName);
            newPersonName.appendChild(document.createTextNode(data[k]));
            newPerson.appendChild(deleteBtn);
            deleteBtn.className = "delete";

            }       
    }
        
    function _handleEnter(e) {
        var key = e.which || e.keyCode;
        if (key === 13) {
            addPerson();
        }
    }
    
    function addPerson(passedName) {
        if (myInput.value !== "" || passedName !== "") {
            var personName = (typeof passedName === "string") ? passedName : myInput.value;
            people.push(personName);
            _render();
            myInput.value = "";
            console.log("button clicked");
        } else {
            return;
        }  
    }

    function deletePerson(e) {
        if (e.target.className !== "delete") {
            return;
        } else {
            var deleteTarget = e.target.parentNode;
            var deleteIndex = Array.prototype.indexOf.call(this.peopleList.children, deleteTarget);
            people.splice(deleteIndex, 1);
            _render();
            console.log("name removed");
        }
    }

    return {
        addPerson: addPerson,
        deletePerson: deletePerson
    };
})()
  
  