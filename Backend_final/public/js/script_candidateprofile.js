function viewmenu(){
    document.getElementById('hideshow').classList.toggle('hide');
    let val = hideandshow();
}

function hideandshow(){
    document.getElementById('showmenu').classList.toggle('active');
}