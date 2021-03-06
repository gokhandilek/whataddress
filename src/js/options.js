// Saves options to chrome.storage.sync.
function save_options() {
    var sites = document.getElementById('sites').value;

    chrome.storage.sync.set({
        sites: sites,
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    chrome.storage.sync.get({
        sites: 'https://bittrex.com'
    }, function(items) {
        document.getElementById('sites').value = items.sites;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);