const MAX_LENGTH = 10 // should be larger than 3

const truncate = (inputString) => {
    return (inputString.length >= MAX_LENGTH) ? inputString.substring(0, MAX_LENGTH - 3) + "..." : inputString;
}

export default truncate;