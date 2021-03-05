+++
title = "Hosting your own instance"
description = "Up and running in under a minute"
category = "Self-Hosted"
bref = "A one minute guide on how to get your own Fider instance up and running"
+++

<h3>Prerequisites</h3>

<ul>
  <li>
    <b><a href="https://www.docker.com/" target="_blank">Docker</a></b>
    <p>As we don't distribute Linux or Windows specific binaries, Docker is a must to host Fider. It provides a consistent runtime environment and is widely supported by many cloud providers. You can run it standalone or in your favorite container orchestration system.</p>
  </li> 
  <li>
    <b><a href="https://www.postgresql.org" target="_blank">PostgreSQL 9.6+ Database</a></b>
    <p>We <strong>strongly recommend</strong> the usage of a database outside Docker, unless you're very confident on how to host a Database inside Docker. This tutorial uses a Docker PostgreSQL image for the sake of simplicity.</p>
  </li> 
  <li>
    <b>E-mail Sender</b>
    <p>You can choose to use either a <b>SMTP Server</b> or <b><a href="https://www.mailgun.com/" target="_blank">Mailgun</a></b>.</p>
  </li>
</ul>

<h3>Installing and Running</h3>

<h5>Step 1: Create a docker compose file</h5>

<p>
Create a <code>/var/fider</code> folder and copy content below into a file <code>/var/fider/docker-compose.yml</code>.
Read the inline comments to know what each setting is used for. 
</p>

<p>The compose file below defines two services <code>db</code> and <code>app</code>. In case you're using an external Postgres database, remove <code>db</code> service and replace <code>DATABASE_URL</code> environment variable with your connection string.</p>

<pre>
version: '2'
services:
  db:
    restart: always
    image: postgres:9.6
    volumes:
      - /var/fider/pg_data:/var/lib/postgresql/data
    environment:
      POSTGRES_USER: fider
      POSTGRES_PASSWORD: s0m3g00dp4ssw0rd

  app:
    restart: always
    image: getfider/fider:stable
    ports:
      - "3000:3000"
    environment:
      ###
      # REQUIRED
      #
      # All these settings are required
      ###

      # Public host address (required)
      HOST_DOMAIN: feedback.yoursite.com
      
      # Connection string to the PostgreSQL database. 
      # This example uses the Docker service defined above
      DATABASE_URL: postgres://fider:s0m3g00dp4ssw0rd@db:5432/fider?sslmode=disable
      
      # CHANGE THIS! Generate a 512-bit secret here https://www.allkeysgenerator.com/Random/Security-Encryption-Key-Generator.aspx
      JWT_SECRET: tXQhvSMWMS11qZ9euEhE6lf2ferf0FR6RYGd8iMXiTxxXtJ1XDVdTXPaLtV12ZGp

      # From which account e-mails will be sent (required)
      EMAIL_NOREPLY: noreply@yourdomain.com

      ###
      # EMAIL
      #
      # Either EMAIL_MAILGUN_* or EMAIL_SMTP_* is required
      ###

      # EMAIL_MAILGUN_API: key-yourkeygoeshere
      # EMAIL_MAILGUN_DOMAIN: yourdomain.com

      # EMAIL_SMTP_HOST: smtp.yourdomain.com
      # EMAIL_SMTP_PORT: 587
      # EMAIL_SMTP_USERNAME: user@yourdomain.com
      # EMAIL_SMTP_PASSWORD: s0m3p4ssw0rd

    depends_on:
      - db
</pre>

<h5>Step 2: Pull the images and run it</h5>

<p>Open your favorite terminal, navigate to <code>/var/fider</code> and run following commands:</p>

<pre>
$ docker-compose pull
$ docker-compose up
</pre>

<p><i><b>Important!</b></i> If you see messages like <code>Error: dial tcp &lt;any_ip&gt;:5432: connect: connection refused</code>. Don't panic, that's expected when using a docker PostgreSQL. That might happen because the application is trying to start while the database is still initializing.</p>

<p>The message <code>http server started on :3000</code> means everything went well and you're ready to go.</p>

<p>Just open your favorite browser and navigate to <a href="http://localhost:3000">http://localhost:3000</a>. You should see a page like the following.</p>

<figure>
    <img src="/images/docs/fider-clean-install.png" />
    <figcaption>Installation page of a clean Fider instance</figcaption>
</figure>

<h3>TLS/SSL</h3>

<p>If you choose to expose Fider to the internet, enable SSL. Take a look at <a href="/docs/how-to-enable-ssl" target="_blank">How to enable TLS/SSL</a> or use a Reverse Proxy, like NGINX or Caddy.</p>

<h3>F.A.Q.</h3>

<h5>I have submitted the installation form, but I haven't got any confirmation email</h5>
<p>Start with your Spam folder, it shouldn't be there, but just be sure about that first. If not, it's highly likely that you either input the wrong email or your email configurations are invalid. When this happens, you'll notice that you can't fill in that form again as you'll be presented with a 404 page. This page will only go away when you click the confirmation link that Fider sends.</p>
<p>To solve this you'll need to log into your Postgres Database and run `TRUNCATE TABLE tenants RESTART IDENTITY CASCADE;`. This command will purge all the data from Fider, thus making the installation page available again. You may now change your email configurations and try again. You can repeat this as much as you need.</p>