# Create a minimalist Express, MongoDB application.

This is a small application created to facilitate your life creating small applications using express, ejs, and MongoDB. After one line of code, the only thing left that you will need to do is create the routers for the application and you will have your app connected to MongoDB atlas and express.

<hr>

## Please follow the steps bellow to get your application up and running with express and mongoDB.

- Download this application to your computer, do not fork.  {link repo}.
- Unzip the application and go into the directory.
- In your terminal, go to the folder and run 'npm install' to install all the dependencies.

In your **packaged.json** you will notice that will have installed the following dependencies:

dotenv | ejs | express | mongoose | morgan

<hr>

## Important folders and files.

<b> public/ </b> - A folder for images, css, and scss files.

<b> models/ </b> - A folder for mongoose schema.

<b> routes/ </b> - A folder for express routes of the application.

<b> views/ </b> - A folder with ejs view templates.

<b> .env </b> - A file responsable for the connection to the mongoDB collection db.
*(in case this file does not exisit, create one in the main of your project)*

<b> Procfile </b> - A file responsable for Heroku process types.

<b> App.js </b> - Responsable for running the application.



<hr>

## Connecting MongoDB Atlas

1 - First go to https://www.mongodb.com/ and sign up into your account.

2 - Create a Cluster, and then click to ' connect ' into that cluster.

3 - Connect your application.

4 - Copy the connection line that atlas MongoDB provides...

Example:
> *mongodb+srv://**username**:**password**@**namesofSandbox**.az2vk.mongodb.net/**dbname**?retryWrites=true&w=majority*


5 - Open your **.env** file and change the file with the following information, do not forget to pass your username, password, name of sandbox, and database name inside the query. Do not worry this information will not be available when your application goes live.

    MANGO_DB= mongodb+srv://username:password@namesofSandbox.az2vk.mongodb.net/dbname?retryWrites=true&w=majority

 <hr>

You're almost done, by now, you should have a connection to the MongoDB database. The last thing you need to do is create the schema inside the model's folder and start using it.

##### Sandbox files

The sandboxMongoose - have examples of get, post, patch, and delete using mongoose.
The models/example/blogExample.js - have examples of how to create the mongoose schemas.



### You are all set!!

Just go to the folder inside your terminal and **run** '***node app.js***' or '**nodemon app.js**'

#### Happy coding! :)
