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
  <p>As we don't distribute Linux or Windows specific binaries, Docker is a must to host Fider. It provides a consistent runtime environment and is widely adopted. You can run it standalone or in your favorite container-orchestration system, whatever floats your boat.</p>
</li> 
<li>
  <b><a href="https://www.postgresql.org" target="_blank">PostgreSQL 9.6+ Database</a></b>
  <p>This tutorial uses a Docker PostgreSQL image for the sake of simplicity, but we <strong>strongly recommend</strong> the usage of a database outside Docker, unless you're very confident on how to host a Database inside Docker.</p>
</li> 
<li>
  <b>E-mail sender service:</b>
  <p>You can choose to use either a <b>SMTP Server</b> or <b><a href="https://www.mailgun.com/" target="_blank">Mailgun</a></b>.</p>
</li>
</ul>

<h3>Installing and Running</h3>

<h5>Step 1: Create a docker compose file</h5>

<p>
Create a <code>/var/fider</code> folder and copy content below into a file <code>/var/fider/docker-compose.yml</code>.
Read the inline comments to know what each setting is used for. 
</p>

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
      - "9999:3000"
    environment:
      ###
      # REQUIRED
      #
      # All these settings are required
      ###

      # Use production for best performance
      # Use development for verbose logs
      GO_ENV: production

      # Public host address (required)
      HOST_DOMAIN: feedback.yoursite.com
      
      # Connection string to the PostgreSQL database. 
      # This example uses the Docker service defined above
      DATABASE_URL: postgres://fider:s0m3g00dp4ssw0rd@db:5432/fider?sslmode=disable
      
      # CHANGE THIS! You can generate a strong secret at https://randomkeygen.com/
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
      
      ###
      # OPTIONAL
      #
      # Following settings are optional
      ###

      # Social OAuth: 
      # Read more on https://getfider.com/docs/configuring-oauth/

      # Facebook
      # OAUTH_FACEBOOK_APPID: &lt;fb_app_id&gt;
      # OAUTH_FACEBOOK_SECRET: &lt;fb_app_secret&gt;

      # Google
      # OAUTH_GOOGLE_CLIENTID: &lt;google_app_id&gt;
      # OAUTH_GOOGLE_SECRET: &lt;google_app_secret&gt;

      # GitHub
      # OAUTH_GITHUB_CLIENTID: &lt;github_client_id&gt;
      # OAUTH_GITHUB_SECRET: &lt;github_secret&gt;

    depends_on:
      - db
</pre>

<p>The Docker Compose above defines two services: <code>db</code> and <code>app</code>. In case you're using an external Postgres database, remove <code>db</code> service and replace <code>DATABASE_URL</code> environment variable with your connection string.</p>

<h5>Step 2: Pull the images and run it</h5>

<p>Open your favorite terminal, navigate to <code>/var/fider</code> and run following command.</p>

<pre>
$ docker-compose pull
$ docker-compose up
</pre>

<p><i><b>Important!</b></i> If you see messages like <code>Error: dial tcp &lt;any_ip&gt;:5432: connect: connection refused</code>. Don't panic, that's expected when using a docker PostgreSQL. That might happen because the application is trying to start while the database is still initializing.</p>

<p>The message <code>http server started on :3000</code> means everything went well and you're ready to go.</p>

<p>Just open your favorite browser and navigate to <a href="http://localhost:9999">http://localhost:9999</a>. You should see a page like the following.</p>

<figure>
    <img src="/images/docs/fider-clean-install.png" />
    <figcaption>Installation page of a clean Fider instance</figcaption>
</figure>

<h3>Going forward</h3>

<p>You now have a brand new Fider instance running, that's great! For a production environment we have a few recommendations.</p>

<ul>
  <li>
    <b>Reverse Proxy</b>
    <p>While you can expose Fider directly to the internet, we recommend the usage of a reverse proxy that supports TLS/SSL termination and load balancing, like Varnish, NGINX, Apache or Traefik.</p>
  </li>
  <li>
    <b>TLS/SSL</b>
    <p>If you choose to expose Fider to the internet, enable SSL. Take a look at <a href="/docs/how-to-enable-ssl" target="_blank">How to enable TLS/SSL</a>.</p>
  </li>
  <li>
    <b>Container Orchestration</b>
    <p>Although not required, we encourage the usage of a Container Orchestration like Kubernetes or Docker Swarm. If you choose to not use one, we recommend the usage of systemd to manage your Container, read more on <a href="https://success.docker.com/article/using-systemd-to-control-the-docker-daemon" target="_blank">Using systemd to control the Docker daemon</a>.</p>
  </li>
</ul>

<h3>F.A.Q.</h3>

<h5>I have filled in the installation form but I haven't got any confirmation email.</h5>
<p>First of all, check your Spam folder, it shouldn't be there, but just be sure about that first. If not, it's highly likely that you either input the wrong email or your email configurations are invalid. When this happens, you'll notice that you can't fill in that form again as you'll be presented with a 404 page. This page will only go away when you click the confirmation link that Fider sends.</p>
<p>To solve this you'll need to log into your Postgres Database and run `TRUNCATE TABLE tenants RESTART IDENTITY CASCADE;`. This command will purge all the data from Fider, thus making the installation page available again. You may now change your email configurations and try again. You can repeat this as much as you need.</p>