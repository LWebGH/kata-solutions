# Exercises

## Retry

Say you have a function primitiveMultiply that, in 50 percent of cases,
multiplies two numbers, and in the other 50 percent, raises an exception
of type MultiplicatorUnitFailure. Write a function that wraps this clunky
function and just keeps trying until a call succeeds, after which it returns
the result.
Make sure you handle only the exceptions you are trying to handle.

## The locked box

Consider the following (rather contrived) object:

```js
const box = {
  locked : true ,
  unlock : function () { this . locked = false ; } ,
  lock : function () { this . locked = true ; } ,
  _content : [] ,
  get content () {
  if ( this . locked ) throw new Error (" Locked !") ;
  return this . _content ;
  }
};
```

It is a box with a lock. Inside is an array, but you can get at it only
when the box is unlocked. Directly accessing the _content property is not
allowed.
Write a function called withBoxUnlocked that takes a function value as
argument, unlocks the box, runs the function, and then ensures that the
box is locked again before returning, regardless of whether the argument
function returned normally or threw an exception.