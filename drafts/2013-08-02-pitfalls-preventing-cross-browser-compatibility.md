---
layout: post
category : lessons
tags : 
---
{% include JB/setup %}

## Testing in IE8

So you've created a swanky new webapp. You have used all the latest frameworks and a bunch of frameworks and it's looking swell on your chrome browser. And now you decide, that its time you opened up that windows machine and tested it on IE. Windows 8 machine booted up with IE10 and everything is still workalicious. IE9 ditto. IE8 is when shit hits the fan. 

### What I did to get my application to work on IE8

- !IE headers
- Trailing commas
- Click event
- HTTP Patch
- evt.target.classList
- Always refer to object child as object['child'] thank object.child
- add JSON2.js
- IE document mode
- getjSON caching
