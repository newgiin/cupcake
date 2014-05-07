window.onload = main;

function main() {
    var bp = chrome.extension.getBackgroundPage();
    //document.getElementById("flashproxy-badge").appendChild("bp.fp.badge_elem");

    var overall_conns = localStorage.getItem(OVERALL_CONNS_KEY);
    var overall_data_transd = localStorage.getItem(OVERALL_DATA_TRANSMITTED_KEY);
    document.getElementById('overall_conns').innerHTML = overall_conns ? overall_conns : 0;
    document.getElementById('overall_data_transd').innerHTML = overall_data_transd ? overall_data_transd / 1000 : 0;
}
