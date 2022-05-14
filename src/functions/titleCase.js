export default path => {
    if (!path) return ('');
    const title = path
        .replace('-', ' ')
        .split(' ')
        .map(word => {
        word = word.charAt(0).toUpperCase() + word.slice(1);
        return word
    });
    return title.join(' ') + ' | ';
}