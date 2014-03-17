# 1 - Creating and styling using HTML5 tags

This example describes some of the new tags and page outlines definied in the HTML5 specification.

## Exercise Overview
1. Add a Home(index) page using HTML5 tags
2. Add an About page using HTML5 tags
3. Add Page Styling

This exercise provides a use for the Header, Footer, Article, and Section tags.  In addition to showing how to create a basic CSS style page.

## Exercise 1
1. Given the below content create an index page
```text
--Header--
Crafty
Portal for buying and selling crafts

--Content--
Latest Crafts
* CraftItem1 By Someone
  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
* CraftItem2 By Someone
  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
* CraftItem3 By Someone
  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.

--Footer--
© 2014 Crafty
```
2. Given the below content create an about page
```
--Header--
Crafty
Portal for buying and selling crafts

--Content--
How We Got Started

Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

Prinicples

Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.


Joining in!

Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

--Footer--
© 2014 Crafty
```
3. Links - Add navigation between the two pages, so you can link between them
4. Style - Add style using a bootstrap theme

## Solution walk through

We will be performing the following tasks:
1. Initiate a new Express application
2. Layout the project structure
3. Create Home(index) page using HTML5 tags
4. Create About page using HTML5 tags
5. Add a bootstrap theme

### Initiate a new Express application
1. Install Express
```
$ npm install express -g
```
2. Change directory into the project directory you will be working
```
$ cd meanWay
```
3. Use Express init to create the project stub
```
$ express
//The directory should now be filled with all the required files
//to start an express init
```
4. Install required npm modules
```
$ npm install
//This will install all the modules listed in the package.json.  The package.json
//was created from the express init method
```
5. Run the application
```
$ node app
//The default port will be 3000.  Point your browser to the port localhost:3000 and you
//should see a default page
```

A default express web application has now been created!

### Layout the project structure

The default express application provides you with the default layout.  This needs to be updated to reflect a standard Angular layout.  Below are the steps to layout the project.  The desired layout is as follows:
```
/
	src/- Web application front end
		scripts/
		styles/
		views/
		routes/ 
		app.js
	package.json - dependendent modules and project setup
```
Ensure the working directory is the project root
1. Create the src foloder
```
$ mkdir src
```
2. Move the scripts, styles, views, routes, and app.js into the src folder
```
$ mv -r styles src/views
$ mv -r styles src/styles
$ mv -r scripts src/scripts
```
3. Update app.js to export starting the server
This allows the project root to tell the application to start.  Update where app.js starts the server.  Change app.js from:
```javascript
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
```
To:
```javascript
module.exports.start = function(){
	http.createServer(app).listen(app.get('port'), function(){
	  console.log('Express server listening on port ' + app.get('port'));
	});
}
```
4. Create a project index.js page to indicate how to start the application
In the root project directory create a file called index.js with the following:
```
var app = require('./src/app');
app.start();
```

Run the application:
```
$ node
```

Now the project has a standard layout.

### Create Home(index) page using HTML5 tags

1. Create an html5 page using the `<!doctype html>` tag
```html
<!DOCTYPE html>
<html>
<head>
	<title>Crafty</title>
</head>
<body>

</body>
</html>
```
2. Add the header details
```html
...
<header>
	<h1>Crafty</h1>
	<p>Portal for buying and selling crafts</p>
</header>
...
```
3. Add the main content details
```html
...
<section>
	<h2>Latest Crafts</h2>
	<ul>
		<li>CraftItem1 By Someone
  			<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
  		</li>
		<li>CraftItem2 By Someone
		  <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
		</li>
		<li>CraftItem3 By Someone
  		<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
  		</li>
	</ul>
</section>
...
```
4. Add the footer content
```
...
<footer>
	© 2014 Crafty
</footer>
...
```
5. All together you get
```html
<!DOCTYPE html>
<html>
<head>
	<title>Crafty</title>
</head>
<body>
	<header>
		<h1>Crafty</h1>
		<p>Portal for buying and selling crafts</p>
	</header>
	<section>
		<h2>Latest Crafts</h2>
		<ul>
			<li>CraftItem1 By Someone
	  			<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
	  		</li>
			<li>CraftItem2 By Someone
			  <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
			</li>
			<li>CraftItem3 By Someone
	  		<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
	  		</li>
		</ul>
	</section>
	<footer>
		© 2014 Crafty
	</footer>
</body>
</html>
```

Run the application
```
$ node
```
And ensure the index page displays.  It should look something like

### Create About page using HTML5 tags

1. Create an html5 page using the `<!doctype html>` tag
```html
<!DOCTYPE html>
<html>
<head>
	<title>About</title>
</head>
<body>

</body>
</html>
```
2. Add the header details
```html
...
<header>
	<h1>Crafty</h1>
	<p>Portal for buying and selling crafts</p>
</header>
...
```
3. Add the main content details. Notice how we use the article and section tags to differentiate the differnt components of the document.
```html
...
<article>
	<section>
		<h2>How We Got Started</h2>
		<p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
	</section>
	<section>
		<h2>Prinicples</h2>
		<p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
	</section>
	<section>
		<h2>Joining in!</h2>
		<p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
	</section>
</article>
...
```
4. Add the footer content
```
...
<footer>
	© 2014 Crafty
</footer>
...
```
5. All together you get
```html
<!DOCTYPE html>
<html>
<head>
	<title>About</title>
</head>
<body>
	<header>
		<h1>Crafty</h1>
		<p>Portal for buying and selling crafts</p>
	</header>
	<article>
		<section>
			<h2>How We Got Started</h2>
			<p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
		</section>
		<section>
			<h2>Prinicples</h2>
			<p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
		</section>
		<section>
			<h2>Joining in!</h2>
			<p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
		</section>
	</article>
	<footer>
		© 2014 Crafty
	</footer>
</body>
</html>
```

Run the application
```
$ node
```
And ensure the about page displays.  It should look something like

### Add a bootstrap theme

[Bootstrap](http://getbootstrap.com/) is very useful in providing scaffolding, css, and consistent look and feel

To use bootstrap we need to install it into our application.  The easiest way to do this is to use [Bower](http://bower.io/).  Bower is a package manager for javascript componenets.  If you don't want to use bower, then you can manually add bootstrap by following directions on the [bootstrap site](http://getbootstrap.com/).

Here is how to install it using bower:
1. Ensure you have bower installed
```
npm install bower -g
```
2. bower install bootstrap

Now that bootstrap is installed add it to the pages.
The index page should now look like this:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Crafty</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
	<!-- Home Page Content -->

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>
```
The about page should now look like this:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>About</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
	<!-- About Page Content -->

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>
```