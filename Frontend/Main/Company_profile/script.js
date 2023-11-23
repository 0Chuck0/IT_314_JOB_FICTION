function viewmenu(){
    // document.body.getElementsByClassName('main').classList.toggle('hide');
    document.getElementById('hideshow').classList.toggle('hide');
    let val = hideandshow();
}

function hideandshow(){
    document.getElementById('showmenu').classList.toggle('active');
}