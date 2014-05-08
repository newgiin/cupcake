window.onload = main;

function main() {
    var bp = chrome.extension.getBackgroundPage();
    //document.getElementById("flashproxy-badge").appendChild("bp.fp.badge_elem");

    var overall_conns = localStorage.getItem(bp.OVERALL_CONNS_KEY);
    var overall_data_transd = localStorage.getItem(bp.OVERALL_DATA_TRANSD_KEY);
    document.getElementById('overall_conns').innerHTML = overall_conns ? overall_conns : 0;
    document.getElementById('overall_data_transd').innerHTML = overall_data_transd ? overall_data_transd / 1000 : 0;

    var conns_list = bp.deserialize_stats(localStorage.getItem(bp.HOURLY_CONNS_KEY));
    var data_transd_list = bp.deserialize_stats(localStorage.getItem(bp.HOURLY_DATA_TRANSD_KEY));

    var curr_time = (new Date()).getTime();

    var day_conns = day_data_transd = 0;
    for (var i = 0; i < conns_list.length; i++) {
        if (conns_list[i].timestamp >= curr_time - 1000*60*60*24) {
            day_conns += conns_list[i].count;
        }
    }

    for (var i = 0; i < data_transd_list.length; i++) {
        if (data_transd_list[i].timestamp >= curr_time - 1000*60*60*24) {
            day_data_transd += data_transd_list[i].count;
        }
    }
    document.getElementById('day_conns').innerHTML = day_conns;
    document.getElementById('day_data_transd').innerHTML = day_data_transd / 1000;
}
