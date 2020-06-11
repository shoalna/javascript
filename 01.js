
function sampleDate(date, format) {
 
    format = format.replace(/yyyy/, date.getFullYear());
    format = format.replace(/MM/, ("0"+(date.getMonth() + 1)).slice(-2));
    format = format.replace(/DD/, date.getDate());
    format = format.replace(/hh/, ("0"+(date.getHours())).slice(-2));
    format = format.replace(/mm/, ("0"+(date.getMinutes())).slice(-2));
    format = format.replace(/ss/, ("0"+(date.getSeconds())).slice(-2));
    return format;
}

downloadCSV(){
    var filename = sampleDate(new Date(), "yyyyMMDDhhmmss")
    this.table.download("csv", "Reult_" + filename + ".csv");
};

