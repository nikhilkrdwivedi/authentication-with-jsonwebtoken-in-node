# Authentication Using JsonWebToken in Nodejs, express and Mongodb
This is basic node application which able to authenticate user and provide protected routes. I am using following technologies: 

  - Nodejs
  - Expressjs
  - MongoDB
  - Joi (NPM Package)
  - JWT - Json Web Token
  - Bcrypt


### Run Following Commands
For package installation:
```sh
$ npm install or  yarn install
```
for running project:
```sh
$ npm start or yarn start
```
##### Note: Please create .env file and paste your mongoDB database DB_CONNECT and TOKEN_SECRET. 
let's take one .env file example[your path or token depends upon your choice] -
- DB_CONNECT = "mongodb://localhost:27017/mydb"
- TOKEN_SECRET = habdBYUCBNBNXBYQTHXBYUASVXUGQSJXBXN
#### Routes:
- localhost:3000/api/user/register
    Body: {
	"name":"Nikhil Kumar",
	"email" : "nikhil@outlook.com",
	"password":"125qs6"
}
- localhost:3000/api/user/login
        {
	"email" : "nikhil@outlook.com",
	"password":"125qs6"
}
This will return JWT.
- localhost:3000/api/posts 
    Pass in headers "auth-token" - "Your JWT TOKEN which you get after successfully login"
This will return one dummy post. If you pass wrong token, will return access denied.


#### Thanks for checking my code, feel free to give your valuable suggestions.

#### Nikhil Kumar
[linkedin](https://www.linkedin.com/in/nikhilkrdwivedi/) | nikhil.dwivedi@outlook.com | https://www.codeforcoder.com
