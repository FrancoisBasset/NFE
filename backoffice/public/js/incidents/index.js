document.getElementById('all_checkbox').addEventListener('click', all_checkbox => {
    document.getElementsByName('incidents[]').forEach(checkbox => {
        checkbox.checked = all_checkbox.target.checked;            
    });
});

for (var row of document.getElementsByClassName('incident_row')) {
    row.addEventListener('click', function(e) {
        window.location = "/incidents/" + this.dataset.id;
    });
}

document.getElementsByName('incidents[]').forEach(checkbox => {
    checkbox.addEventListener('click', e => {
        e.stopPropagation();
    });
});