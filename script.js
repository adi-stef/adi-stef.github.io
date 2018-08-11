$("#getalldata" ).click(function() {
    $.get( "http://192.168.0.107:3003", function( data ) {
        if (data) {
            parseData(data);
        }
      });
});

function parseData(data) {
    for (var i=0;i<data.length;i++) {
        var each = data[i];
        var date = each.date;
        var temp = each.temp;
        var hum  = each.hum;
        var volt = each.volt;
        dataInsert(date,temp,hum,volt);
    }
}

function dataInsert(date,temp,hum,volt) {

    var placeToInsertData = document.getElementById("here");
    var data = document.createElement("div");
    var hr = document.createElement("hr");

    data.innerHTML = `DATE: ${date} | TEMPERATURE: ${temp} | HUMIDITY: ${hum} | VOLTAGE: ${volt}`;
    placeToInsertData.appendChild(data);
    placeToInsertData.appendChild(hr);

}