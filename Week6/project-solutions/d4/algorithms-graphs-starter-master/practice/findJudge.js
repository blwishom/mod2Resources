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

https://leetcode.com/problems/find-the-town-judge
*/

