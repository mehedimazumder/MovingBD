# MovingBD
## Used technologies: 
- Angular 9.0.3
- Asp.Net Core Api 2.1
- SQLite
- VS Code
## Generated With:
- Angular CLI
- Dotnet CLI
# How to run:
for client: `npm install`\
			`npm install -g @angular/cli`\
			`ng serve`\
for server: dotnet core 2.1 runtime needed\
			`dotnet ef database update`\
			`dotnet run`\
Navigate to `http://localhost:4200/`

# Authentication
It is simple authentication system having login and registration forms. Authenticated user will redirected to `/members` route.

# AuthWithIdentity
Here, [AspNetCore.Identity] is attached to the server api. \
I used `int` for the key of the identity tables. \
I added some propoerties other then identity users such as- gender, city, country, mobile, memberAs, date of birth etc.
## Some sample users will be seeded on first 'run' of the server project.
Roles are added.\
Initially all registered users are on `member` role.\
`/members` route is for all registered users.\
User may sign up as customer or driver\
Driver and Customer routes are seperated for the user according to their membership information.\
Admin(admin@gmail.com) have also protected route for `admin` role.

## Further improvement
Improving UI according to particular need\
JWT token more options\
Adding more strict options for `cors` policy \
Adding more functionality as needed\
External sign in options\
etc...
