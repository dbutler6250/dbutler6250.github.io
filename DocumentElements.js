// JavaScript source code

function outputArray() {
    var iString;
    var photoString;
    var i;
    var photo = "";
    for (i = 0; i < 16; i++) {
        iString = i.toString();
        photoString = numberArray[i].toString();

        if (toggleNums == true) {
            photo = "regularPics/" + photoString + ".jpg";
        }
        else {
            photo = "numberedPics/" + photoString + ".jpg";
        }

        document.getElementById(iString).src = photo;
        document.getElementById('score').innerHTML = score;
    }
}

function enlargePhotos() {

    width += 15;
    height += 15;

    for (var i = 0; i < 16; i++) {
        document.getElementById(i.toString()).width = width;
        document.getElementById(i.toString()).height = height;
    }
}

function shrinkPhotos() {

    width -= 15;
    height -= 15;

    for (var i = 0; i < 16; i++) {
        document.getElementById(i.toString()).width = width;
        document.getElementById(i.toString()).height = height;
    }
}

