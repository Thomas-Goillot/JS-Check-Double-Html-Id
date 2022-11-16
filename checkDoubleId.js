function checkDoubleId(filename){


    var file = new XMLHttpRequest();
    file.open("GET", filename, true);
    file.send(null);
    var fileContents = file.responseText;

    console.clear();
    console.info("fileContents: ");
    console.info(fileContents);


    var line = 0;
    var lines = fileContents.split("\n");
    var idList = [];
    var idLine = [];
    for (var i = 0; i < lines.length; i++) {
        if (lines[i].indexOf("id=") != -1) {
            var id = lines[i].split("id=")[1];
            if (id.indexOf('"') != -1) {
                id = id.split('"')[1];
            } else {
                id = id.split("'")[1];
            }

            if (idList.indexOf(id) != -1) {
                console.warn("Double ID: " + id);
                console.warn("Line: " + i);
                idLine.push(i);

            } else {
                idList.push(id);
            }

        }
    }

    if (idLine.length > 0) {
        return "<p style='color:red;'>There are double id in " + filename + " <small style='color:black;'>(Check console for more information)</small></p>";
    } else {
        return "<p style='color:green;'>There are no double id in " + filename + "</p>";
    }

}