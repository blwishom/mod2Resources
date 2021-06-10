function getNeighbors(row, col, graph) {
  const neighbors = [];

  // Check top
  if (row > 0 && graph[row - 1][col] === 1) neighbors.push([row - 1, col]);

  // Check bottom
  if (row < graph.length - 1 && graph[row + 1][col] === 1)
    neighbors.push([row + 1, col]);

  // Check left
  if (col > 0 && graph[row][col - 1] === 1) neighbors.push([row, col - 1]);

  // Check right
  if (col < graph[row].length - 1 && graph[row][col + 1] === 1)
    neighbors.push([row, col + 1]);

  return neighbors;
}

function islandSize(row, col, graph) {
  // Create a visited set to store visited nodes
  const visited = new Set();

  // Create a stack, put the starting node in the stack
  const stack = [[row, col]];

  // Initialize size to 0
  let size = 0;

  // While the stack is not empty,
  while (stack.length > 0) {
    // Pop the first node
    let node = stack.pop();
    let currentRow = node[0];
    let currentCol = node[1];

    // Stringify node (needed for visited check)
    let nodeString = `${currentRow},${currentCol}`;

    // Check if it's been visited
    if (!visited.has(nodeString)) {
      // If not, mark it as visited
      visited.add(nodeString);

      // DO THE THING (increment size by 1)
      size++;

      // Then push all the neighbors on top of the stack
      let neighbors = getNeighbors(currentRow, currentCol, graph);
      for (let i = 0; i < neighbors.length; i++) {
        let neighbor = neighbors[i];
        stack.push([neighbor[0], neighbor[1]]);
      }
    }
  }

  return size;
}

module.exports = [getNeighbors, islandSize];
