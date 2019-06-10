const originalAgentLine = document.getElementById('originalAgentLine');
const originalMaterialLine = document.getElementById('originalMaterialLine');

document.addEventListener('click', function(e) {
    if (e.srcElement.className == 'addAgent' || e.srcElement.className == 'addMaterial') {
        var index = e.srcElement.parentElement.parentElement.rowIndex + 1;
        var row = e.srcElement.parentElement.parentElement.parentElement.insertRow(index);

        switch (e.srcElement.className) {
            case 'addAgent':
                row.innerHTML = originalAgentLine.innerHTML;
                break;
            case 'addMaterial':
                row.innerHTML = originalMaterialLine.innerHTML;
                break;
        }
    } else if (e.srcElement.className == 'remove') {
        if (e.srcElement.parentElement.parentElement.parentElement.children.length > 1) {
            e.srcElement.parentElement.parentElement.remove();
        }
    }
});