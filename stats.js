var stats = (function(){

    var people = 0;
    
    //cacheDOM
    var statsModule = document.getElementById('statsModule');
    var peopleCount = document.getElementById('peopleCount');
    
    _render();

    function _render() {
        peopleCount.innerHTML = "";
        peopleCount.appendChild(document.createTextNode(people));
    }

    function setPeople(newPeople) {
        people = newPeople;
        _render();
    }

    return {
        setPeople: setPeople
    };

})()