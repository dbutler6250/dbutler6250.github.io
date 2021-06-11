// JavaScript source code

function outputArray() {
    var iString;
    var photoString;
    var i;
    var photo = "";
    for (i = 0; i < 16; i++) {
        iString = i.toString();
        photoString = numberArray[i].toString();

        if (toggleNums == false) {
            photo = "colorPics/" + photoString + ".jpg";
        }
        else {
            photo = "colorNumberedPics/" + photoString + ".jpg";
        }

        document.getElementById(iString).src = photo;
        //alert(iString);
        //alert(photo);
        document.getElementById('score').innerHTML = score;
    }
}

