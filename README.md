# Writing Your Node.js Apps Using ES6

ECMAScript 2015 or ES6 is the term used to describe the latest stable iteration of the programing
language commonly called JavaScript.

ES6 is a significant update to the language, and the first update to the language since ES5 was
standardized in 2009. It includes new language syntaxes, some of which might be considered
‘syntactic sugar’ to the already existing language features.

Implementation of these new features in major JavaScript engines is still ongoing at present, and a
conversion is required to enable the use of these latest features in older JavaScript engines.

For this tutorial we will be setting up an Express app using ES6. We will be using the Babel
compiler to compile our ES6 code to ES5.

The Babel compiler will allow us to use the new JavaScript features in our Express app. It is also
required that you have a basic knowledge of JavaScript to successfully complete this tutorial.

According to its website, Babel is a JavaScript compiler that enables one use next generation
JavaScript, today.

This Tutorial assumes that you have installed the Node Package Manager(NPM) and the Node.js Engine
in your development environment.

It's best to follow this tutorial on a linux or mac Os system. That said, a system running the
windows Os can also be setup to run the commands used in this tutorial.

## STEP 1: Setup Our Project Folder
- Create a new folder with any name.
- Navigate into the folder using your Terminal
- Run the command below to initialize your project as an npm package.

```
npm init -y
```

This will walk you through creating a package.json file for your project. At this point
your package.json file would look similar to the example below:

```
    {
        "name": "es6express",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "author": "",
        "license": "ISC"
    }
```

## Step 2: Create Your App's Entry Point.
- In the root directory of your project, create a file called index.js.

## Step 3: Install Required Modules(dependencies/devDependencies)
At this point we will be installing the modules required for developing our express app. Here is
the list:

# Dependencies
Note that these dependencies are optional and are only needed because we are building an express
app.

- express: A fast, unopinionated, minimalist web framework for Node.js
- morgan: An http request logger middleware for Node.js

To install these dependencies run the command below in your terminal inside your project directory.

```
npm install --save express morgan
```

At this point you should have a node_modules folder in your project directory and your
package.json file should look similar to the example below:

```
    {
        "name": "es6express",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "author": "",
        "license": "ISC",
        "dependencies": {
            "express": "^4.15.2",
            "morgan": "^1.8.1"
        }
    }
```

# Development Dependencies
These dependencies are required to use the babel compiler in our project.

- babel-cli: Compile files from the command line using babel
- babel-preset-es2015: Babel preset for all es2015 plugins.
- rimraf: Run the unix command rm -rf in Node.js

Install these dev-dependencies by running the command below in your terminal inside your
project directory.

```
npm install --save-dev babel-cli babel-preset-es2015 rimraf
```

At this point your package.json file should look like the example below:

```
    {
        "name": "es6express",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "author": "",
        "license": "ISC",
        "dependencies": {
            "express": "^4.15.2",
            "morgan": "^1.8.1"
        },
        "devDependencies": {
            "babel-cli": "^6.24.0",
            "babel-preset-es2015": "^6.24.0",
            "rimraf": "^2.6.1"
        }
    }
```

## Step 4: Create a Babel Configuration File in the Root Directory of Your Project.
- Run the command below to create a babel configuration file.

```
touch .babelrc
```

This file is used to tell babel how to transform your JavaScript files. We will be converting
our Es6 code to Es5 code.

- Open up your .babelrc file in a text editor, paste in the following code snippet, and save.

```
{
    "presets": ["es2015"]
}
```

## Step 5: Use Babel To Compile Our Javascript Files
Our next step is to use babel to compile our JavaScript files from ES6 to ES5
(remember we haven't written any lines of JavaScript code yet.).

- In your package.json file, add a new start command and a new build command. Your package.json file should now look similar to the example below:

```
    {
        "name": "es6express",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "build": "rimraf dist/ &&
                babel ./
                    --out-dir dist/
                    --ignore ./node_modules,./.babelrc,./package.json,./npm-debug.log
                    --copy-files",
            "start": "npm run build && node dist/index.js"
        },
        "author": "",
        "license": "ISC",
        "dependencies": {
            "express": "^4.15.2",
            "morgan": "^1.8.1",
            "rimraf": "^2.6.1"
        },
        "devDependencies": {
            "babel-cli": "^6.24.0",
            "babel-preset-es2015": "^6.24.0"
        }
    }
```

Congratulations! You can now use new JavaScript features in your express app.
