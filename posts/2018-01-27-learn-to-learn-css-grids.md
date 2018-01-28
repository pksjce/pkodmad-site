---
path: "/blog/learn-to-learn-css-grids"
date: "2018-01-27"
title: "Learning to learn"
tags:  
    - "css"
    - "learning"
---

This is a wierd kind of blogpost. It is about CSS grids, but you won't necessarily learn CSS grids if you read this, though you might catch a few useful phrases to google up and learn.

What follows, is the process I went through, before I gained sufficient confidence to use CSS grids to bring layouts to reality.

##### Step 1 - A Reason

I had embarked on this small journey of building this very website. I was spending quite a lot of time sketching out how everything should look, what integrations I needed and so on and so forth. Since I was going to be working with CSS quite extensively, I decided I could have a small enough side-quest, to learn CSS grids. I imagined all the beautiful easy layouts I would be creating without using flexbox or floats and got predictably excited.
As much fun as it is, I have stopped learning tech if I cant find a reasonably long lasting use case for it. The learning is much more robust and I don't truly learn something unless I have used it to make something.

##### Step 2 - Too easy

All this was very spur-of-the-moment, without a real idea of what I'm getting into! I was discussing layout designs with my husband and we decided to prototype with CSS grids. I quickly googled CSS grids and it threw up the trusty [CSS-tricks](https://css-tricks.com/snippets/css/complete-guide-grid). I should have been scared by the amount of literature on the pages, but typical newbie me started hunting for something legible. I scrolled until I found [this](https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-14) piece on grid areas. That looked easy, we tried out a few combinations which seemed to work sometimes. With that done, I closed down work for the day feeling accomplished.

##### Step 3 - What is this even??

The next day, I pulled out my app to get some layouts looking good. I started with a container component. Added a simple `display:grid` to its CSS. Messing around with grid-area, I realised I didn't really understand what was going on. I referred to the link above multiple times and tried some `grid-template-rows`, `grid-template-columns` and got even more frustrated. 2 hours in, I didn't have a single working page.

##### Step 4 - Am I ever going to learn this?

I spent the next few days in a limbo from the app. It was a side-project after all. I spent a few evenings trying to watch well-meaning videos on the subject. But somehow, I just didn't understand what was happening. There was so much new jargon. Even though I had a few a-ha moments, I just couldn't visualise how my layouts would get implemented. I even fell asleep watching one of the videos.

##### Step 5 - Back to basics.

A few more days down the line, I found myself staring at a free Sunday afternoon! What a treasure! I had decided that I would go through the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/grid). It looked intimidating and there was a lot of text. But, I had the whole afternoon to do this. I had also got some stuff done on the medium integration for the website, so I was feeling more positive about my skills as a developer.
I had a great time. The documentation laid down the different concepts of CSS grids in an incremental manner. I learned all the jargon around "tracks", "areas", "lines" etc. I learnt to build a simple grid with fixed rows and columns. I then learned about the implicit grid and how grid-areas actually worked. I saw that CSS grids had both verbose and shortcut api. As much as this had mislead me earlier, I found it to be clever.

##### Step 6 - Let's use this stuff.

I was really pumped after this learning session. So the next morning, I challenged myself to implement some basic stuff from [Grid By Example](https://gridbyexample.com/) and stream it. It was a huge success by my standards. I showed the recording to my husband who genuinely learned a few things out of it. I even got a message on twitter from my friend who found the stream useful.

##### Step 7 - Oh-Oh. There are still some gaps.

Soon enough, I started using it on my website. This brought a few more glaring holes in my understanding of grids. I had no idea how to make my pages responsive. I also couldn't develop some of the more fancy grids like pinterest style pages. It was a disappointing feeling actually. Even after expending so much energy learning ALL of this, I still couldn't use this well. This is the point where I usually give up. Motivation levels are at thier lowest.

###### Step 8 - The Last push.

However, I decided to give myself the last push to actually solidify my learning. I signed up to talk about CSS grids at the bi-weekly knowledge sharing session at work. This meant I could not slack! I had to be ready for questions, which is the most intimidating part of tech-speaking for me. Very fortunately, just the day before, [Wes Bos released his awesome course](http://wesbos.com/announcing-my-css-grid-course/). It's gold! He walks through learning CSS grid in the same path as presented by the MDN docs and in the end shows some cool layouts and tricks esp "grid-auto-flow: dense". There's also a great explanation for the responsive behaviour implementations, which were exactly what I needed. Though my talk wasn't a masterpiece, I was very confident in presenting this knowledge!

So yeah, that's me learning CSS grids!

What I actually learned - 

1. Learning with a vision of an end goal is really important. That piece of knowledge must be really useful to you for the forthcoming future.
2. Nothing worth learning is easy. It will take a ton of effort over large swathes of time.
3. There is no shortcut. The longest way is the smoothest, robust way.
4. There's always more to learn.
5. Sharing your learning makes you an expert!