# SINC
SINC is an acronym for Sinc Is Not the Cloud. The goal is to provide a cloud-like file storage solution without relying on someone else's computer.

SINC aims to achieve the same UX improvements over FTP, or other low-level file transfer methodologies. But the advantage of using SINC over cloud storage solutions like Dropbox or Google Drive are abundant. 
 - SINC is completely free.
 - SINC is faster because shared files don’t need to travel over the internet. Great for transferring large files or large numbers of files.
 - SINC has virtually no file-size limitations, or quotas. You’re only limited by your own hardware.
 - In some ways, SINC is more secure that cloud-based storage because your personal computer is less of a target for hackers compared with Dropbox. Just make sure you back up your stuff regularly.
 - SINC trusts that you know what you’re doing. Share EXEs or other “dangerous” file types without restriction.

Cloud storage is great too, so choose the solution that’s right for you.

## Features
SINC is a Node.js-based web server application that you can run on your personal computer to access a directory of shared files. It’s really that simple. 

## Setup & Usage
I'm working on an installer, but for now you can run the SINC server app by installing node js. 
You'll also need to install the following two dependencies via npm: express, multer. 
Configure your firewall to allow inbound connections via LAN, and connect to the host from remote computers by typing in the IP address and port.
The UI has no way of deleting files yet. Shared files are stored at \sinc\public\shared.

## SINC is a work in progress.
A few major improvements are as follows:
 - Permissions.
 - Encryption.
 - P2P file sharing over the internet.
 - Chat.
 - An option to enable revision history.
 - Track chanegs / diffs.
 - File statistics & information.
 - A mobile version of the web server so that you can remotely access files on your cellphone without a lot of shenanigans.
 - Possibly other cloud-like features like remote-control (e.g. playing music remotely, controlling your Android TV box from your cellphone, etc).

You can help me reach these goals by donating money towards this project. Even a small contribution will allow me to shift time and resources into this project to accelerate the timeline.
