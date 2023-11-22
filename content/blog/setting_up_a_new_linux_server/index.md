---
title: "Setting up a new Linux Server"
date: 2023-11-22T20:25:02+01:00
draft: true
description: ""
categories:
- Guide
tags:
- Linux
- Server
- VPS
- SSH
author:
- "Mia Winter"
---

Every goddamn time I create a new VPS or something and install ubuntu I have to google
together all the little steps and commands I need to run to give it a baseline of security,
I am writing this one down now.

## Creating a custom user

Script kiddies love pinging random servers with root and see where they can get in, I once
ordered a new server but didn't configure it until the next day, and when I logged in with
root it told me there had been 900 logging attempts (over night!). So yea, let's create our
own account:

Add a new user

```sudo useradd -mG sudo rose```

m is to also create a home directory for that user (we put our ssh key there), -G sudo adds
them to the sudoers group

Set up a password: `sudo passwd rose`

now open another terminal, ssh with that new user into the server and see if you can run
commands with `sudo ls` or something. When you have valiated your newly created user works
and can use sudo, you can exit that root-user terminal.

## Transfer SSH keys

You always wanna use ssh with your server, because otherwise if someone gets your password
they can just login as well, so if you don't have a certificate yet, create one like this:

```ssh-keygen -t rsa -b 4096```

I already have my certificates, so I just hope what I just copied from a website actually works,
let me know if it doesn't. And btw, there is apparently a better algorithm than rsa, but 4096
rsa is fine, just don't go below 3k, that's not fine.

Now it comes to uploading this to our server, when you are on linux and have openssh, this is easy.

```ssh-copy-id rose@<server>```

but if you are on windows, things are different, and this one always took me ages to look up, but
you can do this (I believe you need powershell, but not sure since I always use that anyway):

```cat ~/.ssh/id_rsa.pub | ssh rose@<server> "mkdir -p ~/.ssh &&cat >> ~/.ssh/authorized_keys"```

## Secure server

And of course, to round it all down (as we say in Germany), disable root:

```sudo passwd -l root```

And configure ssh by opening

```sudo nano  /etc/ssh/sshd_config```

And add/change/uncomment the following properties:

```
PermitRootLogin no
PermitEmptyPasswords no
PasswordAuthentication no
MaxAuthTries 6
```

___Note___: There is also X11Forwarding, that apparently usually should be disabled, but for me it
always made me unable to connect to the server (maybe because I use my domain to connect to the
server and not the ip), so I leave it. 

apply it by calling

```sudo systemctl restart sshd```

and now **open a new terminal window** and try logging in with root (it shouldn't work, even with
the correct password), and then try logging in with your account (it should work). If not, especially
the second one, you have your first terminal window to fix/debug things. If you have closed it,
congratulations, you are locked out of your server, install your server anew and start from the
beginning, do not take 2.000 USD.

## Change the ssh port?

You can of course change the SSH port, this way no automated attack would even hit the right port
on your server, but in my personal opinion, root is disabled, what they gonna do anyway.
