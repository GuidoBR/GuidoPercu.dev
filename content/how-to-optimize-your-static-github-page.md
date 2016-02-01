title:
How to optimize your Github Page static site
---
pub_date:

2016-02-01
---
author:

Guido Percú

---
twitter_handle:

@oumguido
---
body:

Last week I've decided to improve this site performance. It was taking too long to load for such a simple static site. [Research says that every second matters on website performance](https://blog.kissmetrics.com/loading-time/)

I've improved the loading time of my website from 4.7s to 1.6s! Here is how I did it:

## Measure

Use tools to help you understand your performance problems before you start. I used [WebPageTest](http://www.webpagetest.org/) and [Google Pagespeed Insights](https://developers.google.com/speed/pagespeed/insights)

Firefox and Google Chrome also have tools for this. Check them out.

## Understand your server

I use Github Pages to host my site, so I need to understand the [Github Pages has Pros and Cons](http://www.kevinsweet.com/pros-cons-github-pages/) of it.

The main problem here is about cache expire time. I don't change the assets too much, so I'ts really anoying to just have a 10 min max-age cache. Still looking for solutions on this (maybe moving the assets to Dropbox?).


## Compress and minimize!

Compress your images, nobody needs to download a 1MB+ image that's going to be your background. I really liked using [TinyJPG](https://tinyjpg.com/) for this task

This should also be done with JS and CSS, there are some great tools for it:
- [JS-Minify](http://www.cleancss.com/js-minify/)
- [CSS Minifier](https://cssminifier.com/)

Depending on your workflow, you should try using task runners for this, like [GruntJS](http://gruntjs.com/) or [GulpJS](http://gulpjs.com/)

## Test it

Use [Apache Benchmark tool](https://httpd.apache.org/docs/2.2/programs/ab.html) to [load test your web site](https://www.devside.net/wamp-server/load-testing-apache-with-ab-apache-bench). 

ab -n 1000 -c 500 http://www.yourdomain.com.br/


Want to know more? Check them out:
- [Guide: Hosting Website using Dropbox and Github](https://alexcican.com/post/guide-hosting-website-dropbox-github/)
- [How to speed up your site with Yslow and Page Speed](http://www.webmonkey.com/2010/09/how-to-speed-up-your-site-with-yslow-and-page-speed/)

