---
path: "/blog/writing-a-js-console"
date: "2014-02-04"
title: "Writing a JS Console"
tags: "javascript"
---

## Objective

The objective of this exercise is to build a working javascript console on the browser. 

## Analysis

The functionality of this console must be as follows -  
1. Should interpret only code that is input into the console box.This maybe single line or multiple lines.
2. Should maintain the history of what was interpreted before and print this below the console.
3. Should show any errors thrown during evaluation.


## Solution

### Trial 1

#### Test cases -  
(Initial) 
1. var s = 1; --> undefined  
2. s --> 1;  
3. z --> Error:z is not defined.

The first thought on interpreting javascript is to use eval() method and start printing its results.  
Add a try/catch to catch any errors and display them;

#### Javascript
```javascript
	
$(document).ready(function(){
	var consoley = $('#console');
	consoley.keypress(function(evt){
		if(evt.keyCode === 13){
			var js = consoley.val();
			var x;
			var type = 'result';
            
			try{
				x = eval(js);
			}catch(e){
				x = e.message;
				type= 'error';
			}
			$('#userjs').html(js);
			var ans = make_nice(x, type);
			$('#answer').html(ans);
		}
	});
});

function make_nice(x, type){
	if(type == "result"){
		if(x === undefined){
			return "undefined";
		}	
	} else{
		return "Error: " + x;
	}
    return x;
	
}
```

#### HTML
```html
	<html>
		<head>
			<script src='jquery.js'>
			</script>
			<script src='main.js'>
			</script>
		</head>
		<body>
			<div>
				<input type = 'text' id='console'>
			</div>
			<div id='userjs'>
			</div>
			<div id='answer'>
			</div>
		</body>
	</html>
```


Since undefined cannot be printed, I had to make a <code>make_nice</code> method where I set <code>undefined</code> as the output.

This method passes the first and third test cases but fails the second one.
The reason for this as per [Context for evals](https://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context), is that eval is executed in the scope of the callback function. This scope is different every different time the callback function is called. Hence the result of the first eval was effectively "deleted" and new scope was created for the next event callback. The solution for this is to call eval with scope that persists and in our case global scope.

### Trial 2

Call <code>eval()</code> as <code>window.eval()</code>

With no change in html lets change the keypress callback to 

#### Javascript
```javascript	
	consoley.keypress(function(evt){
		if(evt.keyCode === 13){
			var js = consoley.val();
			var x;
			var type = 'result';
            
			try{
				x = eval(js);
			}catch(e){
				x = e.message;
				type= 'error';
			}
			$('#userjs').html(js);
			var ans = make_nice(x, type);
			$('#answer').html(ans);
		}
	});

```

This change seems to have done the trick and is passing all 3 of our test cases.  
Let's create another test case.
Add below snippet of code to the javascript of the page.

```javascript
	var s = 1;
```

Now we see that we are able to override the value of <code>s</code> in our mock console. This is highly undesirable behaviour. We do not want users of our console to be able to modify the objects on the page itself and thus mess with the functionality of the page.

Solutions for this could be -   

### Trial 3  

Create a separate object and execute eval in its scope.

```javascript
var s = 2;
$(document).ready(function(){
	var consoley = $('#console');
	consoley.keypress(function(evt){
		if(evt.keyCode === 13){
			var js = consoley.val();
			var x;
			var type = 'result';
            var mockConsole = new mock_console();
			try{
				x = mockConsole.log(js);
			}catch(e){
				x = e.message;
				type= 'error';
			}
			$('#userjs').html(js);
			var ans = make_nice(x, type);
			$('#answer').html(ans);
		}
	});
});

var mock_console = function(){
	return {
		log:function(str){
			var result = eval.call(this, str);
			return result;
		}
	}
}
```

This still does not solve our problem because the global scope can still be modified through this function.


### Trial 4  

After a lot of search, the only way to escape context of the page alltogether is to execute the eval in an iframe. This is the only place where another html page can be created and still be accessed by our page.

So I created an iframe by   

```html
	<iframe id='myframe' style='display:none'>
	</iframe>
```

By changing my mockconsole to point to iframe's contentWindow, we have -

```javascript
	var mockConsole = document.getElementById('myframe').contentWindow;
	try{
		x = mockConsole.eval(js);
	}catch(e){
		x = e.message;
		type= 'error';
	}
```  

Now, when we try to evaluate <code>s</code>, we are not able to access the globally defined <code>s = 2</code>  

Its a pass!

### Add Console features  

#### History on uparrow/downarrow

This seems to be an easy feature to add. But one caveat I found was  
<code>Arrow keys cannot be detected on keypress event.</code>  
Once this was cleared, I added a keydown event on <code>consoley</code> with the following functionality

```javascript
	consoley.keydown(function(evt){
		var len = historyStack.length;
		if(evt.keyCode === 38 && len > 0){
			uparrowhit +=1;
			if(len >= uparrowhit){
				consoley.val(historyStack[len - uparrowhit]);
			}
		} else if(evt.keyCode === 40 && len > 0 && uparrowhit > 0){
			if(len >= uparrowhit && !evt.programmatic){
				uparrowhit -=1;
				consoley.val(historyStack[len - uparrowhit]);
			} else {
				return;
			}
		}
	});
```

This seems to work fine, except I am not able to position the cursor of the text box at the end of the text after addition of the code line from history. Turns out <code>evt.preventDefault()</code> at the end of the event handling does the trick.

### Add autocompletion.
This to me seemed a harder task than the feature above.
Autocompleting would include -  

##### Get all properties of input object.

```javascript
	//always cache window properties - in our case iframe windows properties.
	var mockConsole = document.getElementById('myframe').contentWindow;
	windowProps = function(){
		var props = [];
		for(key in mockConsole){
			props.push(key);
		}
		return props;
	}();
	//now check if a dot seperated object needs to be evaluated.
	function addAutocomplete(consoley, js){
		var inputSplit = js.split('.');
		var len = inputSplit.length;
		var autocompletelist = windowProps;
		var filter = js;
		if(inputSplit.length > 1 && inputSplit[0] !== 'window'){
			filter = inputSplit[len -1];
			var evalStr = inputSplit.slice(0, len-1).join('.');
			var evaled = eval(evalStr);
			autocompletelist = [];
			for(key in evaled){
				autocompletelist.push(key);
			}
		}
		var autocompleteStr = getAutocompleteStr(autocompletelist, filter);
		alert(autocompleteStr);
	}

	function getAutocompleteStr(list, filter){
		var filterList = list.filter(function(item){
			if(item.indexOf(filter) === 0){
				return item;
			}
		})
		filterList.sort(function(a,b){
			if(a>b){
				return 1;
			} else if(a<b){
				return -1;
			} else {
				return 1;
			}
		})
		if(filterList.length){
			return filterList[0];
		} 
		return;
	}
```

The <code>alert(autocompleteStr)</code> now gives me the right autocomplete string after every keystroke.

#### Display the autocomplete as a grayed out string behind the input.
```javascript

		<div>
			<input type = 'text' id='console'>
			<div id='autocomplete'></div>
		</div>

		//CSS
		#console{
			width: 98%;
			border: 0;
			border-bottom: 1px solid lightgray;
			position: absolute;
			background: transparent
		}
		#console:focus{
			outline: 0;
			border-bottom: 1px solid lightgray;
		}
		#autocomplete{
			color: lightgray;
			line-height: 138%;
			position: absolute;
			z-index: 9;
		}

		//Javascript
		var autocompleteElem = $('#autocomplete');
		autocompleteElem.css('left',  offset + autodistance);
		autocompleteStr = autocompleteStr.substr(filterLen, autocompleteStr.length);
		autocompleteElem.html(autocompleteStr);
```
This seems to be somewhat satisfactory.

#### Left Arrow must complete the pending autocomplete.

	```javascript
	consoley.keypress(function(evt){
		var js = consoley.val();
		var key = self._whichKey(evt);
		if(key === 13){
			self._uparrowhit = 0;
			var x;
			var type = 'result';
            
			try{
				x = mockConsole.eval(js);
			}catch(e){
				x = e.message;
				type= 'error';
			}
			self._historyStack.push(js);
			consoley.val('');
			self._autocomplete.html('');
			var ans = self.make_nice(x, type);
			self._write(js, ans);
		}
	});
	```
### Making this a plugin  

The code needs to be modularized and made somewhat like a plugin so that it can be injected to any given div element.  






