---
layout: "post"
title:  "Migrating from Ghost to Jekyll"
date: 2017-05-20 09:23:24
permalink: migrating-from-ghost-to-jekyll
---


### <a href="#migration" name="migration"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Jekyll

Why Jekyll ? I decided to use Jekyll, because I had a blog on [Ghost](https://ghost.org/) platform. I was waiting for a new 1.0 release, but then I suddenly realize that I don't want to use it, because:

* I have to maintain it on my own
* I have to pay 10$ every week for 1GB DigitalOcean instance
* SSL certificates
* Ghost is written on javascript, so there's a specific scalability

Jekyll, on the other hand, is hosted on GitHub and is a great and modern instrument for writing your blog. The idea is that you store all your images and posts on GitHub.

### <a href="#speed" name="speed"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Speed

My first question was about performance. If it's a static files, hosted on GitHub, then they have to be extremely slow. No, that's not true and according to my measures, new version on Jekyll is even faster, than Ghost version.

### <a href="#convenience" name="convenience"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Convenience

Another question I asked myself was how I will write posts. Because Jekyll has no admin gui, I need to find a way to write posts. I find [MacDown](https://macdown.uranusjr.com/) tool very convenient for writing posts on my local laptop.

Another problem comes about pre-showing posts. For example, you want to see how your post will look like before publishing it. I found [this post](http://www.fizerkhan.com/blog/posts/Working-with-upcoming-posts-in-Jekyll.html) very useful, you have two options: setting post as `published:false` or writing it in `drafts` folder.

### <a href="#migrate" name="migrate"><i class="fa fa-link anchor" aria-hidden="true"></i></a> How to migrate all content from Ghost ?

I've wrote a simple [migration script](https://github.com/ivanursul/ghost-to-jekyll-migration), which you can use. Remember to include `clean` before executing it, because all content is stored in `target` folder.

### <a href="#ssl" name="ssl"><i class="fa fa-link anchor" aria-hidden="true"></i></a> How to setup https ?

I used Cloudflare for that. It has free plan for personal sites/blog, so It's super cool. See their [blog post](https://blog.cloudflare.com/secure-and-fast-github-pages-with-cloudflare/) how to do that.
