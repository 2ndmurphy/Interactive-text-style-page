function Merah() {
    var listItems = document.getElementById('list').getElementsByTagName('li');
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove('biru', 'kuning');
        listItems[i].classList.add('merah');
    }
}
function Biru() {
    var listItems = document.getElementById('list').getElementsByTagName('li');
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove('merah', 'kuning');
        listItems[i].classList.add('biru');
    }
}
function Kuning() {
    var listItems = document.getElementById('list').getElementsByTagName('li');
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove('merah', 'biru');
        listItems[i].classList.add('kuning');
    }
}
function Hijau() {
    var listItems = document.getElementById('list').getElementsByTagName('li');
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove('hover-abu', 'hover-cyan');
        listItems[i].classList.add('hover-green');
    }
}
function Abu() {
    var listItems = document.getElementById('list').getElementsByTagName('li');
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove('hover-green', 'hover-cyan');
        listItems[i].classList.add('hover-abu');
    }
}
function Cyan() {
    var listItems = document.getElementById('list').getElementsByTagName('li');
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove('hover-green', 'hover-abu');
        listItems[i].classList.add('hover-cyan');
    }
}
function defColor() {
    var listItems = document.getElementById('list').getElementsByTagName('li');
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove('merah')
        listItems[i].classList.remove('biru')
        listItems[i].classList.remove('kuning')
    }
}
function defHover() {
    var listItems = document.getElementById('list').getElementsByTagName('li');
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove('hover-green')
        listItems[i].classList.remove('hover-abu')
        listItems[i].classList.remove('hover-cyan')
    }
}