(function() {

    var app = {
        
        people: [],
        
        init: function(){
            this.cacheDom();
            this.bindEvents();
            this.render();
        },
        
        cacheDom: function(){
            this.peopleModule = document.getElementById('peopleModule');
            this.peopleList = document.getElementById('peopleList');
            this.myInput = document.getElementById('myInput');
            this.addButton = document.getElementById('addButton');
        },

        bindEvents: function() {
            this.addButton.addEventListener("click", this.addPerson.bind(this));
            this.peopleList.addEventListener("click", this.deletePerson.bind(this));
        },

        addPerson: function() {
            if (this.myInput.value !== "") {
                this.people.push(this.myInput.value);
                this.render();
                this.myInput.value = "";
                console.log("button clicked");
            } else {
                return;
            }
           
        },

        deletePerson: function(e) {
            if (e.target.className !== "delete") {
                return;
            } else {
                var deleteTarget = e.target.parentNode;
                var deleteIndex = Array.prototype.indexOf.call(this.peopleList.children, deleteTarget);
                this.people.splice(deleteIndex, 1);
                this.render();
                console.log("name removed");
            }
        },

        render: function(){
            var data = this.people;
            this.peopleList.innerHTML = "";

            for (var k in data){
                var newPerson = document.createElement('li');
                var newPersonName = document.createElement('span');
                var deleteBtn = document.createElement('span');
                var deleteUI = deleteBtn.appendChild(document.createTextNode('x'));

                this.peopleList.appendChild(newPerson);
                newPerson.appendChild(newPersonName);
                newPersonName.appendChild(document.createTextNode(data[k]));
                newPerson.appendChild(deleteBtn);
                deleteBtn.className = "delete";
   
            }       
        }

    };

    app.init();

})()
  
  