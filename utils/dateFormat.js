function dateFormat(str) {
    return str.replace(/_/g, ' ').replace(/-/g, ' - ');

}

export default dateFormat