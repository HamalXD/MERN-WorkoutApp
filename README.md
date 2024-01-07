## WORKOUT TRACKER MERN APP
This app lets you track your workout along with the load , reps and the name of the workout. It also lets you create new workouts or delete remaining workouts. You can even create your different users so that only the user that is logged in can see the workouts that they created<br/>

### Packages Used
### Backend
    ·bcrypt
    ·dotenv
    ·express
    ·jsonwebtoken
    ·mongodb
    ·mongoose
    ·validator

## HOW TO USE

Clone the repository
```bash
git clone https://github.com/HamalXD/MERN-WorkoutApp.git
```

### Backend
·Step 1 - Navigate to the Backend folder

·Step 2 - Open up the terminal and type the following commands
```bash
npm install
or
npm i
```
·Step 3 - Create a new .env file with the following information
```javascript
PORT="The port you want your backend to run on (example: PORT=4000 or PORT= 4001)"
MONGO_URI="mongodb+srv://username:<password>@databasename.fvdogku.mongodb.net/?retryWrites=true&w=majority"
SECRET="A Secret Key that only you know"
```
·Step 4 - Open up your terminal and write the following commands
```bash
npm run dev
```
·Step 5 - Open up postman or insomnia to check if the API is working or not

### Frontend
·Step 1 - Navigate to the Frontend folder

·Step 2 - Open up the terminal and type the following commands
```bash
npm install
or
npm i
```
·Step 3 - Open up your terminal and write type
```bash
npm start
```
·Step 4 - Open up your preferred browser and go to [React App](http://localhost:3000/login)

·Step 5 - Create a user if u haven't made one. After creating a user you can now login to add your workouts
