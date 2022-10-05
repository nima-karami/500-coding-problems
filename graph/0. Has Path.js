// https://structy.net/problems/has-path


// Recursive depth first search
const hasPathR = (graph, src, dst) => {
    
    if (src === dst ) return true;
    
    for (neighbor of graph[src]) {
      if (hasPath(graph, neighbor, dst)) return true;
    }
    
    return false;
};
  
// Iterative breadth first search
const hasPath = (graph, src, dst) => {
    const queue = [src];
    
    while (queue.length > 0) {
      let curr = queue.shift();
      if (curr === dst) return true;
      
      for (neighbor of graph[curr]) {
        queue.push(neighbor);
      }
    }
    
    return false;
  };