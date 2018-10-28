function sumOfOther(array) {
    let result = [];
    array.forEach((element) => {
            result.push(array.reduce((current, sum) => {
                return current + sum
            }) - element)
        }
    );
    return result;
}
