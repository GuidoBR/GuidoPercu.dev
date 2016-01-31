Last week I've decided to improve this site performance. It was taking too long to load for such a simple static site. [Research says that every second matters on website performance](https://blog.kissmetrics.com/loading-time/)

I've improved the loading time of my website from 4.7s to 1.6s ! Here is how I did it:

## Measure

Use tools to help you understand your performance problems before you start. I used [WebPageTest](http://www.webpagetest.org/) and [Google Pagespeed Insights](https://developers.google.com/speed/pagespeed/insights)

## Understand your server

[Github Pages has Pros and Cons](http://www.kevinsweet.com/pros-cons-github-pages/)

## Compress and minimize!

http://compressjpeg.com/
http://www.cleancss.com/js-minify/
https://cssminifier.com/
https://tinyjpg.com/

## Test it

ab -n 1000 -c 500 http://www.guidopercu.com.br/

https://alexcican.com/post/guide-hosting-website-dropbox-github/
https://ryanmo.co/2013/11/03/dropboxsharedlinks/
http://webapps.stackexchange.com/questions/16131/may-i-use-dropbox-as-hosting-for-websites-static-files
https://www.maketecheasier.com/4-ways-to-host-your-website-on-dropbox/
http://www.webmonkey.com/2010/09/how-to-speed-up-your-site-with-yslow-and-page-speed/

