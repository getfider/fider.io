+++
title = "How to enable SSL"
description = "Host your instance under the HTTPS protocol"
category = "Self-Hosted"
bref = "Follow this quick tutorial to know how you can host your instance under the HTTPS protocol"
+++

<h3>Prerequisites</h3>

To configure HTTPS, you'll need a <code>Certificate</code> file and a <code>Private Key</code> file. You can either buy it or generate one with [Let's Encrypt](https://letsencrypt.org/)

<h3>How to enable it</h3>

These are the two environment variables that have to be defined.

1. <b>SSL_CERT</b>: The name of the <code>Certificate</code> file.
2. <b>SSL_CERT_KEY</b>: The name of the <code>Private Key</code> file.

Fider's Docker image expects both file to be available on `/app/etc`. You can copy these files anywhere you want on your server and share them with your Docker container by using [volumes](https://docs.docker.com/storage/volumes/).

For example, if your files are inside `/home/me/fider`, you can map it to the container with `-v /home/me/fider:/app/etc`