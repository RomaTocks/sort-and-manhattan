function manhattanDistance(vectors) {
    const [firstArg,secondArg] = vectors.toString().split(':');
    const firstVector = JSON.parse(firstArg);
    const secondVector = JSON.parse(secondArg);
    return (Math.abs(firstVector[0]-secondVector[0])+Math.abs(firstVector[1]-secondVector[1])).toString();
};
module.exports = manhattanDistance;