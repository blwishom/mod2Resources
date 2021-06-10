function getNeighbors(row, col, graph) {

  // Check top

  // Check bottom

  // Check left

  // Check right

  // Return neighbors
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes

  // Create a stack, put the starting node in the stack

  // Initialize size to 0

  // While the stack is not empty,

    // Pop the first node

    // Stringify node (needed for visited check)

    // Check if it's been visited

      // If not, mark it as visited

      // DO THE THING (increment size by 1)

      // Then push all the neighbors on top of the stack

  // return size
}

module.exports = [getNeighbors, islandSize];