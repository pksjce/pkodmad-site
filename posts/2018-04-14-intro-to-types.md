---
path: "/blog/learn-flow"
date: "2018-04-14"
title: "Introduction to types"
tags:  
    - "js"
---

Bring a front end developer from the past 6-7 years, I've been completely alien to the concept of typing one's code. In fact, with Javascript, I hardly understood the benefits of static checks and the compilation step. I didn't understand the need for it and the syntax was abhorrent to me. I didn't know what people meant when they talked about things like Static typing, weakly typing etc. I felt really dumb for a pretty long time because of this. Most people around me had used a language like C++ or Java which have static typing built into them. So, they were familiar with the jargon and began conversations as if everyone else knows them too. 

This is a series of posts that are about typing for Javascript and more specifically about Flow. I have been working on a codebase that uses Flow, for more than 6 months now. I have been continously striving to understand how typing works and how to get flow to stop yelling at me. I wish I had this guide when I first started working with Flow.

## Introduction to Type systems

A program deals with values. A value can be an object, an array, a string, a number, a method, a class. This is the type of the value. What you can do with a value, while you program completely depends on what type it is. If it is an array, you can loop over it. If it is a string, you can concatenate it. If it is a number, you can perform arithmetic operations with it. But, sometimes you may end up performing an operation on a value that it cannot handle. If you try to loop over an object, you may at best get an error, or at worst get an unpredictable result. So, it is important for you as a developer to be aware of the types of values in your program. This way you will not perform operations on values that it cannot handle.

### Static typed languages

If a program can find the type of a value, during its compilation and warn the developer about erroneous operations at that time, then it is said to be statically typed. This results in a compile time error. This is what programming languages like Haskell, Java and C++ can do. Basically, a static typed language will not generate a runnable binary if it is not convinced that all operations on its values are correct.

### Dynamic typed languages

In a dynamic typed language, the program determines the type of a value during run-time, that is just before it actually runs an operation on the value. This results in a run-time error if the operation on a value is not valid. Javascript does just this. Run-time for a Javascript program is during testing, staging or production. And you will see an error on your console for erroneous operations only when you actually run the program. Many bugs in Javascript are because the developer did not run the particular condition where an erroneous operation gets performed on an value during testing. This is pretty common if you have written any reasonably complex Javascript program. 

Duck typing is a popular phrase used in connection with dynamic typed programming languages. For eg - in Javascript, it is common to have code like

```
    let bar = [];
    if(foo.length > 0) {
        bar = foo.map(item => item.id);
    } 
```

Here the program assumes that by having a numerical length property `foo` is an array. ie if something acts like an array, it will get assumed to be one. This is called duck-typing.


### Type System

Static typed languages have a type system. That is, they provide the developer a way to define the type of a value. When you define the type of a value, you are "annotating" a type on the value and that is called a type annotation. When the type system digests these annotations and checks your code for errors, it is said to "type-checking". The resilience that a typed language has towards run-time errors is called "type-safety".

### Type Soundness and Completenes

A type system is said to be sound if all the errors it points to are possible error. It is said to be complete if there is no error that it cannot catch. The difference between the two is very subtle. It is hard for a type system to be both sound and complete. An unsound type system may be unable to find certain errors in your program and an incomplete type system may throw errors in a correct program! Different systems may have different goals in this matter. Most type systems prioritize the goal of becoming more sound, which appeals to the interest of the developers. More debate on the topic mostly belongs in academic circles.

### Type Inference

A type system may be classified in terms of manifested or inferred. For a manifested system,  a program would have to clearly provide all the annotations for the system to check the program reliably. But you can also find inferred type systems. These can predict the type of the values in programs using type inference.

### Gradual typing

With all the information above, it is pretty obvious that as a programmer, you'd rather have the compiler catching errors for you before they affect your user/business by throwing run-time errors.Javascript does not inherently support types, hence there have been many efforts to add a layer of a type system over Javascript. Since there is a lot of Javascript code out there that does not and probably will not have types, these type systems must be able to add or infer types for parts of your codebase and try to be effective while doing so. This is done using a technique called gradual typing. In typescript, you can have both .ts files (which have types) and .js files( which do not have types), inter-operate. Similarly, in Flow, any file which has the comment `// @flow` as the first line of a file is type-checked and other files are not. To accomodate for untyped parts of the code, the type system will generally provide escape-hatches so that you can still continue to program, even though some values flowing into the typed codebase may not be type-checked in other parts of the codebase.

## Why bother with types

As we've learnt so far, type systems are a great way to avoid run-time errors in your programs. Although, this is the fundamental reason to use types, there are a few other reason why developers like to type their programs.

1. Types act as live documentation for programs. API interfaces can be defined in terms of types and these are guaranteed to be up to date and come verified by the type checker. For example in plain javascript, a method definition would be 
```
    export const normalise = (obj) => {
        /* does some stuff */
        return anotherObj
     }
```  
At one glance, you can see that it takes an object and returns another one. But you will have to read the complete source code to understand what the `normalise` function does.

If you use a type system, this can be annotated further as

```
    type Obj = {
        [string]: [{
            age: number
        }, {
            height: number
        }, {
            weight: number
        }]
    }

    type AnotherObj = {
        name: string,
        age: number,
        height: number,
        weight: number
    }

    type NormalizeMethod = (obj: Obj) => AnotherObj
```

The above type definition provides a much more clear perspective of the data flowing in and out of the method and is strictly up to date.

2. It forces developers to think of the structures of values that they are programming with. While thinking in the abstraction of structures, the developer makes concious and unambigious decisions as opposed to looking at raw values. They will look to reuse types throughout their modules, thus bringing more uniformity to the codebase.

3. Though this is not strictly applicable to Javascript, when a program is typed, then the run time can reliably skip some costly checks during execution. This has a positive effect on the performance of the program.

## A case for dynamic typing.

While the advantages of type systems and their use are widely publicised, there is still a case to be made for using dynamic typing.
1. Typing diminishes the expressiveness of a language. The number of type-correct programs you can write with a language is a subset of the number of runnable programs you can write. This turns off meta-programmers and does not support some performance tricks that developers may employ while using an expressive language like Javascript.
2. The presence of a type system encourages the developer to rely on it. But all type systems are not formally proved and have different probablities of failing. When it fails, it is not pretty. Also, while using third party apis, type systems provide no guarantees of the api adhering to types. This may fail spectacularly in run time. A developer must protect her programs by extensive integration testing even if using a robust type system.




## Bibliograph

http://web.archive.org/web/20071028191526/http://www.amazon.com/Types-Programming-Languages-Benjamin-Pierce/dp/0262162091
http://bracha.org/pluggableTypesPosition.pdf
https://www.brandonbloom.name/blog/2014/01/08/unsound-and-incomplete/
https://blog.acolyer.org/2017/11/08/fast-and-precise-type-checking-for-javascript/
https://blog.acolyer.org/2017/09/19/to-type-or-not-to-type-quantifying-detectable-bugs-in-javascript/
https://www.youtube.com/watch?v=5n3v3Bohv38
http://blog.steveklabnik.com/posts/2010-07-17-what-to-know-before-debating-type-systems