function stringClean(str) {
    return str.replace(/_/g, ' ').replace(/-/g, ' - ');

}

export default stringClean