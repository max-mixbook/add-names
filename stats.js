var stats = (function(){

    var people = 0;
    
    //cacheDOM
    var statsModule = document.getElementById('statsModule');
    var peopleCount = document.getElementById('peopleCount');
    
    events.on("peopleChanged", setPeople);
    render();

    function render() {
        peopleCount.innerHTML = "";
        peopleCount.appendChild(document.createTextNode(people));
    }

    function setPeople(newPeople) {
        people = newPeople;
        render();
    }

})()