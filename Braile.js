var endOfLine = '\r\n';
Braile = {};
Braile.en = {};
Braile.en.alphabet = {
    "a"   : "o- -- --",
    "b"   : "o- o- --",
    "c"   : "oo -- --",
    "d"   : "oo -o --",
    "e"   : "o- -o --",
    "f"   : "oo o- --",
    "g"   : "oo oo --",
    "h"   : "o- oo --",
    "i"   : "-o o- --",
    "j"   : "-o oo --",
    "k"   : "o- -- o-",
    "l"   : "o- o- o-",
    "m"   : "oo -- o-",
    "n"   : "oo -o o-",
    "o"   : "o- -o o-",
    "p"   : "oo o- o-",
    "q"   : "oo oo o-",
    "r"   : "o- oo o-",
    "s"   : "-o o- o-",
    "t"   : "-o oo o-",
    "u"   : "o- -- oo",
    "v"   : "o- o- oo",
    "w"   : "-- -o oo",
    "x"   : "oo -- oo",
    "y"   : "oo -o oo",
    "z"   : "o- -o oo",
    "and" : "oo o- oo",
    "for" : "oo oo oo",
    "of"  : "o- oo oo",
    "with": "-o oo oo",
    "ch"  : "o- -- -o",
    "gh"  : "o- o- -o",
    "sh"  : "oo -- -o",
    "th"  : "oo -o -o",
    "the" : "-o o- oo",
    "wh"  : "o- -o -o",
    "ed"  : "oo o- -o",
    "er"  : "oo oo -o",
    "ou"  : "o- oo -o",
    "ow"  : "-o o- -o",
    "ea"  : "-- o- --",
    "bb"  : "-- o- o-",
    "cc"  : "-- oo --",
    "dd"  : "-- oo -o",
    "en"  : "-- o- -o",
    "ff"  : "-- oo o-",
    "gg"  : "-- oo oo",
    "in"  : "-- -o o-"
}

Braile.convertToBraile = function(str, lng){
    var line   = [];
    line[0]    = "";
    line[1]    = "";
    line[2]    = "";

    var braile = Braile[lng ? lng : "en"].alphabet;
    for (var i = str.length - 1; i >= 0; i--) {
        var character = str[i];
        if(character){
            var characterParts = braile[character].split(' ');
            line[0] = line[0].concat(characterParts[0]);
            line[1] = line[1].concat(characterParts[1]);
            line[2] = line[2].concat(characterParts[2]);
        }
    };
    var returnStr =
        (line[0] + endOfLine +
        line[1] + endOfLine +
        line[2]);

    return returnStr;
}

Braile.convertFromBraile = function(str, lng){
    var returnStr = '';
    var newstr = str.split(str, endOfLine);
    var braile = Braile[lng ? lng : "en"].alphabet;
    for (var i = 1; i < newstr[0].length; i += 2) {
        for (var _iBraile in braile) {
            if( (newstr[0][i] + ' '  + newstr[1][i] + ' ' + newstr[2][i])
                == braile[_iBraile]){

                returnStr = returnStr.concat(braile);
            }

        };

    };
    return returnStr;
}

module.export = Braile;