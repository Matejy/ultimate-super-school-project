export default generateInput = () => {
    var ds = true;
    if(ds===true) {
        id = id + 11;
        ds=false;
    }
    var stringId = '' + id;
    var stringName = 'textarea' + id;
    var render = document.createElement('textarea');
    render.setAttribute('className', 'form-control');
    render.setAttribute('id', stringId);
    render.setAttribute('rows', '5');
    render.setAttribute('cols', '50');
    render.setAttribute('value', 'default');
    render.setAttribute('name', stringName);
    render.addEventListener('onclick', this.handleStatementInputChange());
    var curentDiv = document.getElementById("spb1");
    var parentDiv = document.getElementById("parent1");
    parentDiv.insertBefore(render, curentDiv);
}