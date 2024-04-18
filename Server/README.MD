server.conf
```
WSGIDaemonProcess server user=www-data group=www-data threads=5 python-home=/var/www/Server/venv python-path=/var/www/Server

<VirtualHost *:80>
    ServerName www.teyehree.co.nz

    WSGIScriptAlias / /var/www/Server/app.wsgi

    <Directory /var/www/Server>
        WSGIProcessGroup server
        WSGIApplicationGroup %{GLOBAL}
        Allow from all
        Require all granted
    </Directory>

    Errorlog /var/www/Server/logs/error.log
    CustomLog /var/www/Server/logs/access.log combined

RewriteEngine on
RewriteCond %{SERVER_NAME} =teyehree.co.nz [OR]
RewriteCond %{SERVER_NAME} =www.teyehree.co.nz
RewriteRule ^ https://%{SERVER_NAME}%{REQUEST_URI} [END,NE,R=permanent]
</VirtualHost>

```

app.wsgi
```
import sys
import site

site.addsitedir('/var/www/Server/venv/lib/python3.x/site-packages')

sys.path.insert(0, '/var/www/Server')


from app import app as application
```