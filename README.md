# JavaScript Object Models Lab [![Build Status](https://travis-ci.org/Servuc/JSObjectModelsLab.svg?branch=master)](https://travis-ci.org/Servuc/JSObjectModelsLab.svg)

This project is a template for the lab sessions of the Master 2 IDOD course at the [University of Le Havre](https://www.univ-lehavre.fr).

The purpose of this template is to ease the completion and testing of labs.

## Assignment


Ce travail est en 3 parties :
  1. rédiger des tests unitaires et compléter un modèle objet _très_ simple, utilisant le pattern de creation `Object.create`
  2. Créer un modèle objet pour la gestion de biens immobiliers à partir de données géographiques (appelé ici le module `Shapes`)
  3. Création de tests assynchrones pour le module `Shapes` et tests avec un fichier de données au format JSON.

### Partie 1 : Tests et Completion d'un modèle simple

Le module SpeedCheck (voir  `app/scripts/modules/SpeedCheck.js`)  est un modèle de données simpliste de gestion de contraventions générique, pouvant être étendu pour différents pays en fonction de leur réglementation (plaque d'immatriculation et vitesse maximum authorisée).

- Rédiger des tests unitaires pour tester individuellement toutes les fonctionnalités du modèle.
- Compléter le code manquant dans le module (repéré par un commentaire `/* TODO */`)


### Partie 2 : Le Modèle Objet `Shapes`

Considering a JSON dataset containing geographical map data, one want to create a read only model (no write access) which represents the various geographical objects.

We want to be able to create javascript objects according to the following class model.

![`Shapes` UML Class Diagram](app/images/uml.png)



Here are some constraints:

- The `Shapes` module is to be created in the `app/scripts/modules` folder (see previous lab for example).
- The `Shapes` uses to [Functional Pattern](https://github.com/ULH-WebDevelopment/lectures/blob/master/js-basics-2.md#inheritance-with-the-functional-pattern) in order to create the Object Model.
- The `nodes` attribute is an array of objects (`[{x:23,y:45},{x:3,y:5},{x:12,y:0}]`) that can be simplified into an array of arrays (`[[23,45],[3,5],[12,0]]`). Use `Array.map()` to do it.
- The  `toSvgPath()` method should return a string such as:
          `"M 23 45 L 3 5 L 12 0"` for a node like the above one. Again `Array.map()` would be useful.

- From the previous UML Model create read only objects with protected/hidden data.
- The created module must validate the unit tests written in `tests/test.js`.

### Part 3 : Create async tests for the `Shapes` module


The Object model must be able to create object given data such as the one in the JSON file : `app/data/eure.json`. Here is a sample :
```json
[
  {
    "_id": "-630059",
    "building": true,
    "nodes": [
        {
            "x": 608.0,
            "y": 302.0
        },
        {
            "x": 610.0,
            "y": 305.0
        },
        {
            "x": 608.0,
            "y": 302.0
        }
    ]
  },
  {
    "_id": "-630043",
    "building": false,
    "name": "Bassin Paul Vatine",
    "natural": "water",
    "nodes": [
        {
            "e": "e"
        }
    ]
  },
  {
    "_id": "-630016",
    "building": false,
    "highway": "residential",
    "name": "Place D\u00e9sir\u00e9 Rebeuf",
    "nodes": [
        {
            "x": 633.0,
            "y": 453.0
        },
        {
            "x": 677.0,
            "y": 438.0
        }
    ]
  },
  ...
]
```


- Building, Road, Amenity, and Natural objects are created based on the JSON data downloaded.
- When testing with the JSON file, store new objects in containers (Arrays).
- Compute the overall and average surface of available buildings and include it in the tests.
- Write JUnit test that are asynchronous. They first load the JSON file then create as much objects there are in the JSON file. Then do some tests on the number of objects created, the surfaces, etc.


Knowing the assignment, follow the steps below in order to complete the lab.

## Setup the Project


### Install necessary tools

**(Just do this step once for all labs)**

This project uses the [Grunt](http://gruntjs.com/) task runner to run the project. Client side dependencies are handled with the  [Bower](http://bower.io/)  package manager. Grunt and Bower have to be installed with `node` and `npm`.

1.  First install <a href="https://nodejs.org/en/download/">NodeJS</a>. You should have `node` or `nodejs` as well as `npm` in your path.  
2.  Then install Grunt and Bower:</p>
    ```sh
    npm install -g grunt-cli
    npm install -g bower
    ```

### Fork the project on github

When you **fork** a project, a copy of its repository with all the history is created for you. You become the **owner** of this **new** project and have write access to it.


### Setup the Project

Inside the Project's main folder, install its dependencies:
```sh
npm  install
bower install
```

## Run The Project

Once the project is installed, it can be run via grunt:

```sh
grunt serve
```

This will launch a Web server and open the index page of the project on your browser.


## Complete the lab - Write the project

The `app/` folder contains the `HTML` `CSS` and `JavaScript` of the application. Depending on the lab (see the "Assignment" section) you will have to write code in these parts.

## Test The Project

Unit test are kept in the `tests/` folder. The `tests/test.js` file contains all the assertions that will be tested. It is formatted with the [QUnit](https://qunitjs.com/)  testing framework. You will have to write unit tests in this file.

- Use `grunt testBrowser` to test on your browser.
- Use `grunt testCI` to test on PhantomJS, the headless browser. This will be use by the Continuous Integration system.

## Send your completed assignment

Once completed with all unit tests passing, you can send me back you assignment as a pull request. The pull request will trigger a build of the project in the Continuous Integration framework [TravisCI](https://travis-ci.org/). For this you will have to [commit](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) your changes.

Note that you can also use Travis with your own project.
