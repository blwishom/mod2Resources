/*
Minimum Number of Vertices to Reach All Nodes
 Given a directed acyclic graph,
with n vertices numbered from 0 to n-1, and an array edges where edges[i] =
[from, to] represents a directed edge from node from to node to.

Find the smallest set of vertices from which all nodes in the graph are
reachable. It's guaranteed that a unique solution exists.

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
