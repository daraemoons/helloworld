// var Add = document.getElementById('Add');
// var Modify = document.getElementById('Modify');
// var Delete = document.getElementById('Delete');
// var Save = document.getElementById('Save');
// var Cancel = document.getElementById('Cancel');
// var nameInput = document.getElementById('nameInput');
// var telInput = document.getElementById('telInput');
// var recInput = document.getElementById('recInput');
// var itemTable = document.getElementById('nextTable');




Add.disabled = false;
Modify.disabled = false;
Delete.disabled = false;
Save.disabled = true;
Cancel.disabled = true;
nameInput.disabled = true;
telInput.disabled = true;
recInput.disabled = true;

var state = [];

function buttonDisable()
{
    switch(state)
    {
        case 'add' : 
        {
            Add.disabled = true;
            Modify.disabled = true ;
            Delete.disabled = true;
            Save.disabled = false;
            Cancel.disabled = false;
            nameInput.disabled = false;
            telInput.disabled = false;
            recInput.disabled = false;
            break;
        }
        case 'modify' :
        {
            Add.disabled = true;
            Modify.disabled = true;
            Delete.disabled = true;
            Save.disabled = false;
            Cancel.disabled = false;
            nameInput.disabled = false;
            telInput.disabled = false;
            recInput.disabled = false;
            break;
        }
        case 'delete' :
        {
            Add.disabled = true;
            Modify.disabled = true;
            Delete.disabled = true;
            Save.disabled = true;
            Cancel.disabled = false;
        }
        default :
        {
            Add.disabled = false;
            Modify.disabled = false;
            Delete.disabled = false;
            Save.disabled = true;
            Cancel.disabled = true;
            nameInput.disabled = true;
            telInput.disabled = true;
            recInput.disabled = true;
            break;
        }
    }
}

function ClearInput ()
{
    nameInput.value = '';
    telInput.value = '';
    recInput.value = '';
}



Add.addEventListener('click', function () {
    state = 'add';
    buttonDisable();
})

Modify.addEventListener('click', function() {
    state = 'modify';
    alert('Select a item to modify');
    buttonDisable();

    nextTable.onclick = function()
    {
        if(state == 'cancel' || state == 'save') return;

        var list = document.querySelector('li');
        console.log('id : ' + list.id);
        console.log('name : ' + list.name);
        console.log('tel : ' + list.tel);
        console.log('rec : ' + list.rec);

    }
})

Delete.addEventListener('click', function() {
    state = 'delete';
    alert('Select a item to delete');
    buttonDisable();

    nextTable.onclick = function()
    {
        if(state == 'cancel' || state == 'save') return;

        var list = document.querySelector('li');

        console.log(list.id);
    }
})

Save.addEventListener('click', function() {

    switch(state)
    {
        case 'add' :
            {   
                var name = nameInput.value;
                var tel = telInput.value;
                var rec = recInput.value;

                if (name == '' || tel == '' || rec == '')
                {
                    alert('Please input items');
                    state = 'cancel';
                    ClearInput();
                    buttonDisable();
                    return;
                }

                var li = document.createElement('li');
                var tName = document.createElement('p');
                var tTel = document.createElement('p');
                var tRec = document.createElement('p');

                tName.append(name);
                tTel.append(tel);
                tRec.append('$ ' + rec);

                li.setAttribute('id', name);
                li.setAttribute('class', 'item');
                li.appendChild(tName);
                li.appendChild(tTel);
                li.appendChild(tRec);
                nextTable.appendChild(li);
                console.log('id : ' + li.id);

                break;
            }
    }
    state = 'save';
    alert('Item has been saved');
    ClearInput();
    buttonDisable();
})

Cancel.addEventListener('click', function() {
    state = 'cancel';
    ClearInput();
    buttonDisable();
})

