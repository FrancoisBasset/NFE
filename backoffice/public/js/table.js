function handleFor(type) {
    document.getElementById('all_elements').addEventListener('click', all_checkbox => {
        document.getElementsByName('elements[]').forEach(checkbox => {
            checkbox.checked = all_checkbox.target.checked;            
        });
    });

    for (var row of document.getElementsByClassName('row')) {
        row.addEventListener('click', function(e) {
            window.location = '/' + type + 's/' + this.dataset.id;
        });
    }

    document.getElementsByName('elements[]').forEach(checkbox => {
        checkbox.addEventListener('click', e => {
            e.stopPropagation();
        });
    });
}