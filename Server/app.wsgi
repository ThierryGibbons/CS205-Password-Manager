import sys
import site

site.addsitedir('/var/www/Server/venv/lib/python3.x/site-packages')

sys.path.insert(0, '/var/www/Server')


from app import app as application