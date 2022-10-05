const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

const depthFirstPrintR = (graph, node) => {
    console.log('dfs', node);
    for (neighbor of graph[node]) {
        depthFirstPrint(graph, neighbor);
    }
}

const depthFirstPrint = (graph, node) => {
    const stack = [ node ];
    const result = [];
    while (stack.length > 0) {
        let curr = stack.pop();
        result.push(curr);
        for (neighbor of graph[curr]) {
            stack.push(neighbor);
        }
    }

    console.log('dfs', result);

}

const breadthFirstPrint = (graph, node) => {
    const queue = [ node ];
    const result = [];
    while (queue.length > 0) {
        let curr = queue.shift();
        result.push(curr);
        for (neighbor of graph[curr]) {
            queue.push(neighbor);
        }
    }
    console.log('bfs', result);
}

depthFirstPrint(graph, 'a'); // abdfce

breadthFirstPrint(graph, 'a') // acbedf