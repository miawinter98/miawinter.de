---
title: "Why I don't use Apache as a Webserver anymore"
date: 2023-02-26T13:03:10+01:00
draft: false
description: "Why I used Apache for years, and why I don't anymore, and you shouldn't too probably"
categories:
- tech
- personal
- oppinion
tags:
- webdev
- apache
- nginx
- docker
author:
- "Mia Winter"
---

I have been using Apache 2 for Webservers for years, and only recently switched to nginx. As to why, I first start
by explaining how I got into webdev in the first place.

# My early Webdev days

The first time I actually had to do webdev, was when I had my first job. Basically, I was tasked with setting up a
Radius Server and make it configurable to give ppl rate limited internet access through it. My Radius install already
had a frontend, but it was very extensive and in my oppinion back then, confusing and ugly, so I started into how to
do one myself. I reverse engineered what I needed to call to implement the functionallity and then looked into php.
I basically read that back then, the classic stack for a webdev project was PHP, Apache2 and MySQL, and the arguments
for it were there, 4 commands in ubuntu and everything was ready. At the end my frontend was kinda decent, very simple
to use. Sadly, I don't think it ever got used, but that's because my first job was really weird and I would have to go
into more detail, doesn't matter.

But what does matter is that I learned how to configure Apache and how to use it, and it was easy to setup in my opinion.
And thus, I used Apache for years afterwards, although I really never touched PHP ever again.

# Configuring Apache

This is by no means a tutorial, but basically, you have two places for config. Apache has a directory with lots of config
files for defining where your websites are, to what ports they answer, what permissions users have to access files in it,
what headers to use and so on. There are also configs on Apache itself like what modueles to use and so on. To set up a
new Apache Server, you would check if all your modueles that you need are enabled, create a new site and configure it for
HTTP and HTTPS, do automatic redirection to HTTPS and then the site was reachable. Afterwards, when building your site,
you put a .htacces file in the root directory of the site to confiugure some things like compression and redirections and
URL rewrites, also configuring case-insensivity on URLs was usually useful or defining a response file for 404.

Once you learned all of that and got used to it, it was easy enough, but you would also have to go through a checklist later
to fix certain security things, like enabling HSTS and disabling problematic headers.

But end of last year I got to discover something far more simple than all of that.

# Docker, Nginx and Nginx-proxy

If you read my last blog about how my site runs, you know it's running on docker(-compose). The files of this site are served
by a Nginx Container, and Nginx-proxy with ACME-companion does the binding of domains and even requesting SSL Certificates from
Let's encrypt. And that's basically it, the entire config, in like 40 lines of docker-compose. The defaults of nginx are just
way better than that of Apache and my only problem I had previously, that the default logging includes access logs, was solved
by an Issue on Nginx-Proxy that added support for `DISABLE_ACCESS_LOGS` as Environment variable. After years of screwing around
in Apache configs, debugging of htaccess files and probably some security vulnerabilities undiscovered by me, I had a solution
so easy that I could just not use Apache anymore.

Even if I would not use Docker, configuring Nginx is just a little json-like block that defines where a site is, what ports to
bind, what domain to bind, and where the SSL Certificates are if you use SSL, it's like 10 lines.

# Conclusion

Really, the only reason I could picture to use Apache2 is if you need a lot of control how requests are processed and maybe the
build in PHP support, appart from that? Just don't use it, don't be like me and just stick with it because you know how it works.

So yea, this blog is a shoutout to you to use nginx, best you also learn docker-compose and use nginx-proxy, that btw was reconmended
to me by the beautiful and intelligent [Natty](https://natty.sh) and it has made my life much more pleasant, just like she did.