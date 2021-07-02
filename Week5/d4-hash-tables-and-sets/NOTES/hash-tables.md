# Hash Tables

Hash tables are all around you. You've actually been using them all along. JavaScript Arrays are
actually hash tables under the hood. That is why they are able to take in multiple types of data in
one array.

Hash tables store indexed key/value pairs.

Hash tables utilize a hashing function to generate an integer index to store your data.

A hashing function will convert keys to integers. It will take a set of _deterministic_ steps and return a scrambled output.

The next step is to use that hashing function, and then utilize the % (modulo) operation to return an integer that can be used as an idex to store the key value pair.

Example hashing function (very insecure...don't use):

```js
function simpleHash(str) {
  let hashValue = 0;

  for (let i = 0; i < str.length; i++) {
    hashValue += str.charCodeAt(i);
  }

  return hashValue;
}
```

Each key value pair is then stored at that index.

When the same index is returned by hashing (which can and does happen), we refer to that as a hash collision.

There are several ways to handle hash collisions: - resize the array - this can avoid the collision, but you still have a good chance that you will again hit another collision in the future - institute a linked list chaining pattern - by doing this, you would then utilize the next property on the KeyValuePair node, and chain multiple pairs together at the same index - this works to alleviate the problems with collisions, but you then have the problem that adding more key value pairs increases your BigO time complexity
One thing to note is that if you return the same index by hashing, and subsequently have the same key in your key value pairs, you will need to override the existing value. You should only have unique keys in the 'list' at a certain index.

Example implementation of a hash table:

First the KeyValuePair Node class:

```js
class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}
```

Then the HashTable class:
** You will work on completing this table in your project **

```js
class HashTable {
  // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    // Initialize your buckets here
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.data.length;
  }

  read(key) {}

  insert(key, value) {}

  resize() {}

  delete(key) {}
}
```

