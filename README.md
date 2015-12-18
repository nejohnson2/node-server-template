## Node Server Template

Latest version of node, npm with express, hogan.

First run ```npm install```. Then run ```node.js```.

## Launch to Heroku

```
heroku create
git remote -v 
```

Rename the app:

```
heroku apps:rename newname
```

Add ```mongodb``` addon, then add the environmental variables to your local machine.

```
heroku addons:create mongolab
heroku config | grep MONGOLAB_URI >> .env
```

All of this works but for some reason node doesnt recognize ```process.env.MONGOLAB_URI```.  Therefore I use ```dotevn``` which loads the .env file for me.

