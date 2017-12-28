---
path: "/blog/prototypal-inheritance-in-javascript"
date: "2014-02-05"
title: "Prototypal Inheritance in Javascript"
draft: false
tags:
- "js"
- "basics"
---

Javascript has prototypal inheritance. 

It is one of the few mainstream languages to have this kind of a method to inherit.  

### What is prototyping?
Prototyping means to copy the base for creation and then extend the base to the desired features. Then what is classical inheritance? It is to have a fixed frame for an object in the form of a class. This class is duplicated into an object form. For objects with more features, one must first extend the class and then create objects out of the extended class.  
In a language where prototypal inheritance is practiced, it generally encourages changing the object properties during run time and **we know for sure this happens in Javascript**  
This also means that Objects in Javascript are mutable.

So to be clear  
Classical Inheritance ---> **define classes and create an instance of these classes**
Prototypal Inheritance ---> **define objects and create new objects from old objects**

#### Code Reuse
In a classical language, it is very clear how code reuse happens. A class is used multiple times to create instances. By extending a class, we make sure the instances of the extended class have the properties of the parent class.  
In a prototypal language, it is a bit hazy as to how the child object gets to use the properties defined in the parent. Usually, the language provides a construct/default property on the object to connect it to its parent. This is called **delegation**.  
 
In Javascript specifically, one is allowed to create Objects ex-nihilio(out of nothing). When this is done, such an object is internally prototyped from a universal object call <code>Object</code>. This base object consists of some basic functions such as <code>toString()</code>  
Now how is delegation practiced in javascript? A property called <code>prototype</code> is given to each of the object(except the object literals). This provides the option to chain objects in a heirarchy.
Lets write some code to demonstrate this.  

{%highlight javascript%}
	var myObj = function(){
		this.a = 1;
	};
	console.log(myObj.prototype);
	// Object {}

	var myChild = function(){
		this.b = 2;
	};
	console.log(myChild.prototype);
	// Object {}

	myChild.prototype = new myObj()
	console.log(myChild.prototype);
	// myObj {a: 1}

	var aa = new myChild()
	console.log(aa.b)
	// 2
	console.log(aa.a)
	// 1
{%endhighlight%}

This is the basic working of the prototype object.  
Lets look deeper.  

{%highlight javascript%}
	//Continuing the above example..
	var obj = new myObj();
	console.log(obj.a)
	// 1
	console.log(myChild.prototype.a)
	// 1
	myChild.prototype.a = 4;
	console.log(aa.a)
	// 4
	//But lets check this
	console.log(obj.a)
	// 1
{%endhighlight%}
This seems like correct behaviour. You dont want the child to be able to upset the parent.  

{%highlight javascript%}
	console.log(myChild.prototype.b);
	//undefined
	console.log(aa.b)
	// 2
	myChild.prototype.b = 5
	console.log(aa.b)
	// 2
	myChild.prototype.c = 6
	console.log(aa.c)
	// 6
{%endhighlight%}

This shows that the value in the object always overrides the value in the prototype object. Thus the priority of a variable decreases as we go up the prototype chain.

**The idea of the prototype is that in the above example, all instances of <code>myChild</code> reuse the prototype object<code>myObj</code>. This means that new instance of <code>myObj</code> is not created. All instances of <code>myChild</code> will share one instance of <code>myObj</code>**

{%highlight javascript%}
	//Continuing on above example
	var bb = new myChild();
	console.log(bb.a)
	// 4
	myChild.prototype.a = 2
	console.log(aa.a)
	// 2
	console.log(bb.a)
	// 2
{%endhighlight%}

#### Creating a new Object from another Object.  

The newer browsers allow us to use <code>Object.create(anotherObj)</code> to create objects while inheriting from another object. For eg
{%highlight javascript%}
	var Shirt = Object.create({});
	// sets prototype to Object.
	var TShirt = Object.create(Shirt);

	//In older IE browsers, polyfill
	Object.create = function(parent){
		function child(){};
		child.prototype = parent;
		return new child();
	}
{%endhighlight%}

#### What is the constructor?

Lets consider this - 
{%highlight javascript%}
	var FantasyAnimal = function(){};
	console.log(FantasyAnimal.constructor);
	//function Function() { [native code] }
	console.log(FantasyAnimal.prototype);
	//Object {}
	console.log(FantasyAnimal.prototype.constructor);
	//function(){}

	function Animal(){};
	console.log(Animal.prototype);
	//Animal {}
	console.log(Animal.prototype.constructor);
	//function Animal(){}
{%endhighlight%}


### Summary

- Javascript reuses code by Delegation of the prototype to all children.
- Change in prototype affects already created children.
- Children can always override parents properties.
- Set the constructor to know your roots!

