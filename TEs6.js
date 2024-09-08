
function arrow(num, bool) {
    let arrowString = '';

    if (bool) {
        // חץ ימני
        arrowString = '-'.repeat(num) + '>';
    } else {
        // חץ שמאלי
        arrowString = '<' + '-'.repeat(num);
    }

    return arrowString;
}

// דוגמאות לשימוש:
console.log(arrow(5, true));  // חץ ימני
console.log(arrow(5, false)); // חץ שמאלי
