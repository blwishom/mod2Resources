# Graph Problems

In this project, you will be solving graph problems. Remember to use Polya's
Problem Solving framework and the three steps to solve any graph problem.

## Directions

1. Clone the project from the [starter]
2. Install packages with `npm install`
3. Read the test specs and descriptions to understand the problem
4. Run tests with `npm test`
5. Write code until all tests are green

## Practice Problems

### `Minimum Number of Vertices to Reach All Nodes`

Given a directed acyclic graph, with n vertices numbered from 0 to n-1, and an
array edges where `edges[i] = [from, to]` represents a directed edge from node
`from` to node `to`.

Find the smallest set of vertices from which all nodes in the graph are
reachable. It's guaranteed that a unique solution exists.

Notice that you can return the vertices in any order.

Example:

```js
let n = 6;
let edges = [[0,1],[0,2],[2,5],[3,4],[4,2]];

minSetVertices(n, edges);       // => [0, 3], It's not possible to reach all 
                                // the nodes from a single vertex. From 0 we 
                                // can reach [0,1,2,5]. From 3 we can reach 
                                // [3,4,2,5]. So we output [0,3].
```

### `Find Town Judge`

In a town, there are N people labelled from 1 to N.  There is a rumor that one
of these people is secretly the town judge.

If the town judge exists, then:

* The town judge trusts nobody.
* Everybody (except for the town judge) trusts the town judge.
* There is exactly one person that satisfies properties 1 and 2.

You are given trust, an array of pairs `trust[i] = [a, b]` representing that the
person labelled a trusts the person labelled b.

If the town judge exists and can be identified, return the label of the town
judge.  Otherwise, return -1.

Example:

```js
const trust1 = [[1,2]];
const trust2 = [[1,3],[2,3]];
const trust3 = [[1,3],[2,3],[3,1]];
const trust4 = [[1,3],[1,4],[2,3],[2,4],[4,3]];

findJudge(trust1);      // => 2
findJudge(trust2);      // => 3
findJudge(trust3);      // => -1
findJudge(trust4);      // => 3
```

### `Number of Islands`

Given an m x n 2d grid map of '1's (land) and '0's (water), return the number
of islands.

An island is surrounded by water and is formed by connecting adjacent lands
horizontally or vertically. You may assume all four edges of the grid are all
surrounded by water.

Example:

```js
const grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
];

numIslands(grid);         // => 1, all the ones are connected

const grid2 = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
];

numIslands(grid2);        // => 3, there are 3 distinct islands
```


### `Path with Minimum Effort`

You are a hiker preparing for an upcoming hike. You are given heights, a 2D
array of size rows x columns, where `heights[row][col]` represents the height of
cell (row, col). You are situated in the top-left cell, (0, 0), and you hope to
travel to the bottom-right cell, (rows-1, columns-1) (i.e., 0-indexed). You can
move up, down, left, or right, and you wish to find a route that requires the
minimum effort.

A route's effort is the maximum absolute difference in heights between two
consecutive cells of the route.

Return the minimum effort required to travel from the top-left cell to the
bottom-right cell.

Example:

```js
const heights = [
  [1,2,2],
  [3,8,2],
  [5,3,5]
];

const heights2 = [
  [1,2,3],
  [3,8,4],
  [5,3,5]
];

const heights3 = [
  [1,2,1,1,1],
  [1,2,1,2,1],
  [1,2,1,2,1],
  [1,2,1,2,1],
  [1,1,1,2,1]
];

minEffort(heights);     // => 2, the route of [1,3,5,3,5] has a maximum
                        // absolute difference of 2 in consecutive cells.
                        // This is better than the route of [1,2,2,2,5], 
                        // where the maximum absolute difference is 3.

minEffort(heights2);    // => 1, the route of [1,2,3,4,5] has a maximum 
                        // absolute difference of 1 in consecutive cells, 
                        // which is better than route [1,3,5,3,5].

minEffort(heights3);    // => 0, there is a route of all 1s so the absolute
                        // difference is 0.
```

### `Word Ladder`

Given a `start` word, an `end` word, and a `wordList`, create function that
finds the minimum number of transformations needed to transform `start` to
`end`. A transformation is defined as a one letter from the current word.

Example:

```js
let start = 'hit';
let end = 'cog';
const wordList = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];

ladderLength(start, end, wordList);   // => 5, hit, hot, dog, cog, is one 
                                      // possible sequence

const wordList2 = ['hot', 'dot', 'dog', 'lot', 'log'];
ladderLength(start, end, wordList);   // => 0, because the end word doesn't
                                      // exist in the word list
```

[starter]: https://github.com/appacademy-starters/algorithms-graphs-starter
