kayttajanystavat.fi
===================

The kayttajanystavat.fi website

Installation to a development environment
-----------------------------------------

Create a database (e.g. kay) and a user with read/write access to it (e.g. kay) on your local MySQL server. Import the production database dump, which you can find e.g. in the server's ~/backup/db_backup.sql.

Create the file library/asetukset.php with the following contents:

```
<?php
$dbhost = "localhost";
$dbuser = "kay";
$dbpass = "<your local db password>";
$dbname = "kay";
?>
```

Copy the IRC user list file from production:

```
machine kayttajanystavat.fi user $ scp kay@otax.ayy.fi:/home/kay/www-data/ircusers/kay-users.txt ircusers/
```
  
Deployment to production
------------------------

Simply log on to Otax via SSH, navigate to ~/www-data and run:

```
git pull
```  
