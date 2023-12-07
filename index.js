
function alert() {
    
}
function myEach(collection, alert) {
    Object.keys(collection).forEach(book => alert(collection[book], book, collection))  
    return collection
}

function myMap(collection, alert) {
    const newCollection = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            newCollection.push(alert(collection[i], i, collection))
        }
    } else {
        for (let book in collection) {
            newCollection.push(alert(collection[book], book, collection))
        }
    }
    return newCollection
}

function myReduce(collection, alert, acc) {
    let i = 0;
    if (!acc) {
        acc = collection[i];
        i = 1;
    }
    for (; i < collection.length; i++) {
        acc = alert(acc, collection[i], collection)
    }
    return acc
}


function myFind(collection, predicate) {
   for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i])) {
        return collection[i]
    }
   }
}

function myFilter(collection, predicate) {
    const newerCollection = [];
    for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
            newerCollection.push(collection[i])
        }
    }
    return newerCollection
}

function mySize(collection) {
    let total = 0;
    if(Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            total += 1
        }
    } else {
        for (let book in collection) {
            total += 1
        }
    }
    return total
}

function myFirst(array, num) {
    if (!num) {
        return array[0]
    } else {
        const newArr = [];
        for (let i = 0; i < num; i++) {
            newArr.push(array[i])
        }
        return newArr
    }
}

function myLast(array, num) {
    if (!num) {
        return array[array.length - 1]
    } else {
        const newArr = [];
        let index = 1
        for (let i = 0; i < num; i++) {
            newArr.unshift(array[array.length - index])
            index += 1
        }
        return newArr
    }
}

function myKeys(object) {
    const newArr = [];
    for (const key in object) {
        newArr.push(key)
    }
    return newArr
}

function myValues(object) {
    const newArr = [];
    for (const key in object) {
        newArr.push(object[key])
    }
    return newArr
}
