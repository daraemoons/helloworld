var text = document.getElementById('changedText');
var html = document.getElementById('helloHtml');
var confirm = document.getElementById('confirm');
var deny = document.getElementById('deny');
var rmbID = document.getElementById('rmbID');
let CheckRmbID = false;
let savedID = [];
var loadID = document.getElementById('loadID');
var inputID = document.getElementById('inputID');

var btnAdd = document.getElementById('btnAdd');
var btnModify = document.getElementById('btnModify');
var btnSave = document.getElementById('btnSave');
var btnCancel = document.getElementById('btnCancel');
var btnDelete = document.getElementById('btnDelete');
var itemID = document.getElementById('itemID')
var itemText = document.getElementById('itemText')

itemID.disabled = true;
itemText.disabled = true;
btnSave.disabled = true;
btnCancel.disabled = true;

confirm.addEventListener('click', function() {
    document.getElementById('changedText').innerText = document.getElementById('input').value;}
);

deny.addEventListener('click', function() {
    document.getElementById('changedText').innerText = '';
});

rmbID.addEventListener('click', function() {
    CheckRmbID = !CheckRmbID;

    if(CheckRmbID)
    {
        let saved_ID = inputID.value;

        if(savedID) savedID = [];
        savedID.push(saved_ID);
        sessionStorage.setItem('IDsave', JSON.stringify(saved_ID));
        saved_ID = '';
    }
    else rmbID.checked = false;
});

loadID.addEventListener('click', function() {
    let load_ID = JSON.parse(sessionStorage.getItem('IDsave'));

    if (!load_ID)
    {
        alert('ID load failed');
        return;
    }

    inputID.value = load_ID;
    savedID = load_ID;
    console.log('saved ID is : ' + inputID.value);
    alert('ID load successed');
});

let state = [];

btnAdd.addEventListener('click', function() {
    state = 'add';
    buttonChange();
})

btnModify.addEventListener('click', function() {
    state = 'modify';
    buttonChange();
})

btnDelete.addEventListener('click', function() {
    alert('item has been deleted');
})

btnSave.addEventListener('click', function() {

    switch(state)
    {
        case 'add' :
            {
                const idItem = document.getElementById('itemID').value;
                
                if (idItem == '' || document.getElementById('itemText').value == '')
                {
                    alert('input any id & text!');
                    state = 'cancel';
                    clearInput();
                    return;
                }

                var li = document.createElement('li');
                li.setAttribute('id', idItem);
                var textNode = document.getElementById('itemText').value;
                li.append(textNode);
                document.getElementById('itemList').appendChild(li);
            }
    }
    state = 'save';

    alert('item has been saved');
    clearInput();
})

btnCancel.addEventListener('click', function() {
    state = 'cancel';
    clearInput();
})

function buttonChange ()
{
    switch(state)
    {
        case 'add':
        case 'modify':
        {
            itemID.disabled = false;
            itemText.disabled = false;
            btnAdd.disabled = true;
            btnModify.disabled = true;
            btnDelete.disabled = true;
            btnSave.disabled = false;
            btnCancel.disabled = false;
            break;
        }
        default :
        {
            itemID.disabled = true;
            itemText.disabled = true;
            btnAdd.disabled = false;
            btnModify.disabled = false;
            btnDelete.disabled = false;
            btnSave.disabled = true;
            btnCancel.disabled = true;
            break;
        }
    }
}

function clearInput()
{
    document.getElementById('itemID').value = '';
    document.getElementById('itemText').value = '';
    buttonChange();
}

function next ()
{
    location.href = 'file:///C:/Users/Sewon/work/javascript/helloworld/nextpage.html';
}