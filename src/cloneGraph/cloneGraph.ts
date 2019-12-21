interface Node {
    val : string,
    neighbors : Node[],
}

const cloneGraph = (node) : Node => {
    let nodeCopy = <Node> {
        val: '',
        neighbors: [],
    };
    return nodeCopy;
}
