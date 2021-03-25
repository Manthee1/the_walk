_ = {

    id: function (id) {
        return document.getElementById(id);
    },
    class: function (className) {
        return document.getElementsByClassName(className);
    },
    tag: function (tagName) {
        return document.getElementsByTagName(tagName);
    },
    firstClassInstance: function (className) {
        return document.getElementsByClassName(className)[0];
    },
    lastClassInstance: function (className) {
        return document.getElementsByClassName(className)[document.getElementsByClassName(className).length - 1];
    },
    firstTagInstance: function (tagName) {
        return document.getElementsByTagName(tagName)[0];
    },
    lastTagInstance: function (tagName) {
        return document.getElementsByTagName(tagName)[document.getElementsByTagName(tagName).length - 1];
    },
    elementExists: function (e) {
        e = document.getElementById(e);
        if (typeof (e) == 'undefined' || e == null) {

            return false;
        } else {
            return true;
        }
    },
    capitalizeFirstCharacter: function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);

    },


    Math: Math.chance = function (percent) {
        if (0 <= percent <= 100) {
            if (Math.random() * 100 <= percent) {
                return true;
            } else {
                return false;
            }
        } else {
            console.error("You can't use a number greater than 100 or smaller than 0 in _.math.chance");
            return false;
        }
    },
    Math: Math.roundRandom = function (min, max) {

        return Math.round(Math.random() * (max - min) + min);
    },

    


    Arr:Arr = {
        remove: function (array, element) {
            array.splice(array.indexOf(element), 1)
        },
        shuffle: function (array) {
            array.sort(() => Math.random() - 0.5);
        }
    }
}