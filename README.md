# node-set-helper
provides set operations for input arrays. All functions will return values in the form of Set object. 
You can convert the result of these functions into array by using
```
const iAmArray = Array.from(set);
```
or
```
const iAmArray = [...set];
```

## Installation
`npm i @aloysius-software-factory/set-helper`

## SetUnion
Given 2 array of objects, it will combine both arrays and remove duplicates. It will return a set of values. 

## SetIntersection
Given 2 array of objects (`a` and `b`) and an optional transformation function, 
it will perform the transformation function, if any, to each member of `a` before performing matching with members of `b`. 
It will only yield elements of set `a` which also exists in set `b`.

## SetDifference
Given 2 array of objects (`a` and `b`) and an optional tranformation function, 
it will perform the transformation function, if any, to each member of `a` before performing matching with members of `b`. 
It will yield elements of set `a` that does not exists in set `b`.
