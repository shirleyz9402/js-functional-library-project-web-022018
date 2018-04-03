fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
        for (const el in collection) {
          iteratee(collection[el])
        }
      return collection
    },

    map: function(collection, iteratee) {
      let newCollection = []
      for (const el in collection) {
        newCollection.push(iteratee(collection[el]))
      }
    return newCollection
    },

    reduce: function(collection, iteratee, acc) {
      for (const el in collection) {
        acc = iteratee(acc,collection[el])
      }
      return acc
    },

    find: function(collection, predicate) {
      for (const el in collection){
        if (predicate(collection[el])) {
        return true
        }
      }
      return false
    },
    filter: function(collection, predicate) {
      let newCollection = []
      for (const el in collection){
        if (predicate(collection[el])){
          newCollection.push(collection[el])
        }
      }
      return newCollection
    },

    size: function(collection) {
      let count = 0
      for (const el in collection){
        count ++
      }
      return count
    },

    first: function(collection, n=0){
      if (n === 0){
        return collection[0]
      } else {
        return collection.slice(0,n)
      }
    },

    last: function(collection, n = -1){
      if (n === -1){
        return collection[collection.length - 1]
      } else {
        return collection.slice(collection.length - n, collection.length)
      }
    },

    compact: function(collection){
      let newCollection = []
      for (const el in collection){
        if (collection[el]){
          newCollection.push(collection[el])
        }
      }
      return newCollection
    },

    sortBy: function(collection, iteratee){
      return this.map(collection, iteratee).sort(function(a,b){return a-b})
    },

    sortReturnValues: function(collection, iteratee){
      return collection.sort(function(a,b){return iteratee(a)-iteratee(b)})
    },

    // uniq: function(collection, isSorted=false, iteratee = null){
    //   if (iteratee === null){
    //     iteratee = function(num){ return num }
    //   }
    //   if (isSorted){
    //     newCollection = this.map(collection, iteratee)
    //   }
    //   else {
    //    newCollection = this.sortReturnValues(collection, iteratee)
    //   }
    //   let index = 1
    //         while (index < newCollection.length){
    //           if (iteratee(newCollection[index]) === iteratee(newCollection[index-1])){
    //              delete newCollection[index]
    //           }
    //
    //           index ++
    //         }
    //   newCollection = this.compact(newCollection)
    //   console.log(collection, 'returning', newCollection.sort())
    //   return newCollection.sort()
    // }
    keys: function(object){
      let arr = []
      for (const el in object){
      arr.push(el)
      }
      return arr
    },
    values: function(object){
      let arr = []
      for (const el in object){
      arr.push(object[el])
      }
      return arr
    },
    functions: function(object){
      let arr = []
      for (const el in object){
        if (typeof object[el] === "function"){
          arr.push(el)
        }
      }
      return arr
    }
  }
})()

fi.libraryMethod()
