
/*
Word Ladder
Given a start word, an end word, and a wordList, create function that finds the minimum number of transformations needed to transform start to end. A transformation is defined as a one letter from the current word.

Example:

let start = 'hit';
let end = 'cog';
const wordList = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];

ladderLength(start, end, wordList);   // => 5, hit, hot, dog, cog, is one 
                                      // possible sequence

const wordList2 = ['hot', 'dot', 'dog', 'lot', 'log'];
ladderLength(start, end, wordList);   // => 0, because the end word doesn't
                                      // exist in the word list

https://leetcode.com/problems/word-ladder/
*/
const ladderLength = (start, end, wordList) => {
    
};

/***************************************************************************** */

/*
Number of Islands
Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example:

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

https://leetcode.com/problems/number-of-islands/
*/
const numIslands = grid => {
    
};
/*********************************************************************** */
/*
Minimum Number of Vertices to Reach All Nodes
Given a directed acyclic graph, with n vertices numbered from 0 to n-1, and an array edges where edges[i] = [from, to] represents a directed edge from node from to node to.

Find the smallest set of vertices from which all nodes in the graph are reachable. It's guaranteed that a unique solution exists.

Notice that you can return the vertices in any order.

Example:

let n = 6;
let edges = [[0,1],[0,2],[2,5],[3,4],[4,2]];

minSetVertices(n, edges);       // => [0, 3], It's not possible to reach all 
                                // the nodes from a single vertex. From 0 we 
                                // can reach [0,1,2,5]. From 3 we can reach 
                                // [3,4,2,5]. So we output [0,3].

https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/
*/
const minSetVertices = (n, edges) => {

};
/********************************************************************** */

/*
Find Town Judge
In a town, there are N people labelled from 1 to N. There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

If the town judge exists and can be identified, return the label of the town judge. Otherwise, return -1.

Example:

const trust1 = [[1,2]];
const trust2 = [[1,3],[2,3]];
const trust3 = [[1,3],[2,3],[3,1]];
const trust4 = [[1,3],[1,4],[2,3],[2,4],[4,3]];

findJudge(trust1);      // => 2
findJudge(trust2);      // => 3
findJudge(trust3);      // => -1
findJudge(trust4);      // => 3

https://leetcode.com/problems/find-the-town-judge/
*/
const findJudge = trust => {

};

