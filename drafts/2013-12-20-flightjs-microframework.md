---
layout: post
category : lessons
tags :
tagline: Things I learnt
---

{% include JB/setup %}

## FlightJs

[Flight](http://twitter.github.io/flight/) is a tiny framework put forth by twitter. The crux of its usage is based on events.  

Basically how things work are as follows - 
- Divide your potential application into various components. These must ideally be self sustaining.
- The components must respond to certain events and after thier respective jobs must send out certain events too. One of the components (UI one preferably) will start the chain by auto triggering a paint event on the page.  
- The components are created and attached to the DOM - either to the document or to some element. Unique components can be created by attaching them to different elements.  
- The framework enables every component to listen to events on a dom element or document itself. The Dom events and custom events are propogated identically.
- Nobody has access to another component but only to the data propagated through events.  

I was able to create my own TodoList aka Todo MVC style at [Flight -Todo](https://github.com/pksjce/pksjce.github.com)  

This style of programming was a very liberating one to me. Programming in a certain paradigm for a long time can get you into a rut. It was refreshing to implement my own MVC by structuring the components in a certain way. It was a good thinking exercise too, to make sure all components were self sufficient and decoupled.