document.getElementById('all_checkbox').addEventListener('click', function() {
    if (this.checked) {
        document.getElementsByName('incidents[]').forEach((checkbox) => {
            checkbox.checked = true;            
        });
    } else {
        document.getElementsByName('incidents[]').forEach((checkbox) => {
            checkbox.checked = false;
        });
    }
});

for (var row of document.getElementsByClassName('incident_row')) {
    row.addEventListener('click', function(e) {
        window.location = "/incidents/" + this.dataset.id;
    });
}

document.getElementsByName('incidents[]').forEach((checkbox) => {
    checkbox.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});