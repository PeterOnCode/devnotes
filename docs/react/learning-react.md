---
title: Learning React
pagination_prev: contents
pagination_next: null
keywords:

- react

---

## Chapter 1. Welcome To React

### Resources

- [Why did we build React?](https://reactjs.org/blog/2013/06/05/why-react.html)
    - by [Pete Hunt](https://twitter.com/floydophone)

React is a small library that doesn’t come with everything you might need out of
the box to build your application.

- We’re here to build cool stuff with tools that we like to
  use.
- We’re here for the glory of shipping stuff that we’re proud to say we built.

### 1.1. - A Strong Foundation

A nice side effect of working with React is that it
can make you a stronger JavaScript developer by promoting patterns that are
readable, reusable, and testable.

- We cover foundational React knowledge to understand how to build
  out a user interface with components.
- Then we’ll learn to compose these components
  and add logic with props and state.
- We’ll cover React Hooks, which allow us to reuse
  stateful logic between components.

### 1.2. - React’s Past and Future

React was first created
by [Jordan Walke](https://www.linkedin.com/in/jordan-walke-1250b634/).

React components acted as the view layer or the user interface for your
JavaScript applications.

React was billed as a library: concerned with implementing a specific set of
features, not providing a tool for every
use case.

- The official [React blog](https://reactjs.org/blog/).

### 1.3. - Working with the Files

#### 1.3.1. - File Repository

- [GitHub repository associated with this book](https://github.com/moonhighway/learning-react)

#### 1.3.2. - React Developer Tools

- [React DevTools on GitHub repository](https://github.com/facebook/react-devtools)
    - [Chrome Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
    - [Firefox Extension](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

#### 1.3.3. - Installing Node.js

```shell
# Check Node version
node -v
npm -v

#  Initialize the project and create a package.json file
npm init -y

# An alternative to npm is Yarn
npm i -g yarn

yarn add package-name
yarn remove package-name
```

- [React Documentation](https://facebook.github.io/react/index.html)
- [React Source](https://github.com/facebook/react)
- [React Blog](https://facebook.github.io/react/blog/)
- [React NPM](https://www.npmjs.com/package/react)
- [webpack Documentation](https://webpack.js.org/)
- [Jest Documentation](https://facebook.github.io/jest/)
- [React Router Documentation](https://reacttraining.com/react-router/)

## Chapter 2. JavaScript for React

[The kangax compatibility table](https://kangax.github.io/compat-table/esnext/)
is a great place to stay informed about
the latest JavaScript features and their varying degrees of support by browsers.

### 2.1. Declaring Variables

Prior to ES2015, the only way to declare a variable was with the `var` keyword.

#### 2.1.1. The `const` keyword

A constant is a variable that cannot be overwritten. Once declared, you cannot
change its value.

:::info

1. Without const ([run it](http://jsbin.com/gapoxa/1/edit?js,console))
   
:::

```javascript title="Listing 2.1. - Without const" showLineNumbers
// The value of a variable can change

var pizza = true
pizza = false
console.log(pizza)
```

:::info

2. With const ❌ ([run it](https://jsbin.com/gapoxa/2/edit?js,console))
   
:::

```javascript title="Listing 2.2. - With const ❌" showLineNumbers
// ES6 introduces constants

const pizza = true
pizza = false
```

#### 2.1.2. The `let` keyword

- JavaScript now has _lexical variable scope_.
- In JavaScript, we create code blocks with curly braces (`{}`). In functions,
  these curly braces block off the scope of any variable declared with var.

:::info

1. Without `let` ([run it](https://jsbin.com/gapoxa/3/edit?js,console))

:::

```javascript title="Listing 2.3. - Without let" showLineNumbers
// Variables cannot be scoped to code blocks

var topic = "JavaScript"

if (topic) {
  var topic = "React"
  console.log('block', topic) // block React
}

console.log('global', topic)  // global React
```

The `topic` variable inside the `if` block resets the value of `topic` outside
of the block.

:::info

2. With let ([run it](https://jsbin.com/gapoxa/4/edit?js,console))

:::

:::info

3. Loops with var ([run it](http://jsbin.com/gapoxa/5/edit?js,output))

:::
 
:::info

4. Loops with let ([run it](http://jsbin.com/gapoxa/6/edit?js,output))

:::

#### 2.1.3. Template Strings

### 2.2. Creating Functions

### 2.3. Compiling JavaScript

### 2.4. Objects and Arrays

### 2.5. Asynchronous JavaScript

### 2.6. Classes

### 2.7. ES6 Modules

#### template strings

7. Without Template Strings - Simple
   Concatenation ([run it](https://jsbin.com/gapoxa/7/edit?js,console))
8. With Template Strings - Simple
   concatenation ([run it](https://jsbin.com/gapoxa/8/edit?js,console))
9. Template Strings - Email ([run it](https://output.jsbin.com/gapoxa/9))
10. Template Strings -
    HTML ([run it](https://jsbin.com/gapoxa/10/edit?js,output))

### Default Parameters

1. Default Parameters ([run it](http://jsbin.com/yeqexu/1/edit?js,console))
2. Default Parameters with
   Objects ([run it](http://jsbin.com/yeqexu/2/edit?js,console))

### Arrow functions

1. Regular Function
   ([run it](http://jsbin.com/tegefa/1/edit?js,console))
2. Arrow Function ([run it](http://jsbin.com/tegefa/2/edit?js,console))
3. Arrow Function - Multiple
   Args ([run it](http://jsbin.com/tegefa/3/edit?js,console))
4. Multiple Args - One
   Line ([run it](http://jsbin.com/tegefa/4/edit?js,console))
5. Arrow Functions with if statements
   ❌ ([run it](http://jsbin.com/tegefa/5/edit?js,console))
6. Arrow Functions with errors
   ❌ ([run it](http://jsbin.com/tegefa/6/edit?js,console))
7. setTimeout ❌ ([run it](http://jsbin.com/tegefa/7/edit?js,console))
8. setTimeout with .bind ([run it](http://jsbin.com/tegefa/8/edit?js,console))
9. setTimeout with Arrow
   Function ([run it](http://jsbin.com/tegefa/9/edit?js,console))
10. setTimeout with 'this' problem
    ❌ ([run it](http://jsbin.com/tegefa/10/edit?js,console))
11. Showing 'this'
    problem ([run it](http://jsbin.com/tegefa/11/edit?js,console))

### Objects and Arrays

#### Destructuring Assignment

1. Destructuring
   Assignment ([run it](http://jsbin.com/jukokaf/1/edit?js,console))
2. Destructuring with
   Arguments ([run it](http://jsbin.com/jukokaf/2/edit?js,console))
3. Destructured Object
   Arguments ([run it](http://jsbin.com/jukokaf/3/edit?js,console))
4. Destructuring Arrays ([run it](http://jsbin.com/jukokaf/4/edit?js,console))
5. Destructuring with Comma
   Placeholders ([run it](http://jsbin.com/jukokaf/5/edit?js,console))

#### Object Literal Enhancement

6. Object Literal
   Enhancement ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-02/04-objects-and-arrays/06-object-literal-enhancement.html)
   , [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-02/04-objects-and-arrays/06-object-literal-enhancement.html)
   , [bin](http://jsbin.com/jukokaf/6/edit?js,console))
7. Object Literal Enhancements with
   Functions ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-02/04-objects-and-arrays/07-object-literal-enhancement.html)
   , [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-02/04-objects-and-arrays/07-object-literal-enhancement.html)
   , [bin](http://jsbin.com/jukokaf/7/edit?js,console))
8. Literal Enhancements: The Old
   Way ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-02/04-objects-and-arrays/08-object-literal-enhancement.html)
   , [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-02/04-objects-and-arrays/08-object-literal-enhancement.html)
   , [bin](http://jsbin.com/jukokaf/8/edit?js,console))
9. Literal Enhancements
   Now ([demo](https://rawgit.com/MoonHighway/learning-react/master/chapter-02/04-objects-and-arrays/09-object-literal-enhancement.html)
   , [code](http://github.com/MoonHighway/learning-react/blob/master/chapter-02/04-objects-and-arrays/09-object-literal-enhancement.html)
   , [bin](http://jsbin.com/jukokaf/9/edit?js,console))

#### The Spread Operator

10. Spread Operator with
    Arrays ([run it](http://jsbin.com/jukokaf/10/edit?js,console))
11. Array Destructuring with
    .reverse() ([run it](http://jsbin.com/jukokaf/11/edit?js,console))
12. Spread Operator with Destructuring and
    .reverse() ([run it](http://jsbin.com/jukokaf/12/edit?js,console))
13. Destructuring and the Spread
    Operator ([run it](http://jsbin.com/jukokaf/13/edit?js,console))
14. Directions Functions ([run it](http://jsbin.com/jukokaf/14/edit?js,console))
15. Spread Operator with
    Objects ([run it](http://jsbin.com/jukokaf/15/edit?js,console))

### Promises

1. getFakeMembers ([run it](http://jsbin.com/pupojik/1/edit?js,console))
2. fetch members ([run it](http://jsbin.com/haguhe/1/edit?js,console))

### ES6 Class Syntax

1. The Constructor and the
   Prototype ([run it](http://jsbin.com/hoqileh/1/edit?js,console))
2. Classes ([run it](http://jsbin.com/hoqileh/2/edit?js,console))
3. Class Inheritance ([run it](http://jsbin.com/hoqileh/3/edit?js,console))

## Chapter 3 : Functional Programming with JavaScript

## Chapter 4 : How React Works

## Chapter 5 : React with JSX

## Chapter 6 : React State Management

## Chapter 7 : Enhancing Components with Hooks

## Chapter 8 : Incorporating Data

## Chapter 9 : Suspense

## Chapter 10 : React Testing

## Chapter 11 : React Router

## Chapter 12 : React and the Server