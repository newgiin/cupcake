window.onload = main;

function main() {
    var bp = chrome.extension.getBackgroundPage();
    //document.getElementById("flashproxy-badge").appendChild("bp.fp.badge_elem");

    var overall_conns = localStorage.getItem(bp.OVERALL_CONNS_KEY);
    var overall_data_transd = localStorage.getItem(bp.OVERALL_DATA_TRANSD_KEY);
    document.getElementById('overall_conns').innerHTML = overall_conns ? overall_conns : 0;
    document.getElementById('overall_data_transd').innerHTML = overall_data_transd ? overall_data_transd / 1000 : 0;

    var day_conns = localStorage.getItem(bp.DAY_CONNS_KEY);
    var day_data_transd = localStorage.getItem(bp.DAY_DATA_TRANSD_KEY);
    document.getElementById('day_conns').innerHTML = day_conns ? day_conns : 0;
    document.getElementById('day_data_transd').innerHTML = day_data_transd ? day_data_transd / 1000 : 0;
}
