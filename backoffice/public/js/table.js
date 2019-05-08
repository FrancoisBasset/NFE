if (document.getElementById('all_incidents')) {
    document.getElementById('all_incidents').addEventListener('click', all_checkbox => {
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
}

if (document.getElementById('all_interventions')) {
    document.getElementById('all_interventions').addEventListener('click', all_checkbox => {
        document.getElementsByName('interventions[]').forEach(checkbox => {
            checkbox.checked = all_checkbox.target.checked;            
        });
    });

    for (var row of document.getElementsByClassName('intervention_row')) {
        row.addEventListener('click', function(e) {
            window.location = "/interventions/" + this.dataset.id;
        });
    }
    
    document.getElementsByName('interventions[]').forEach(checkbox => {
        checkbox.addEventListener('click', e => {
            e.stopPropagation();
        });
    });
}