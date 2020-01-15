# modern_health_project
a simple web app for modern health. Note the front-end is in the form of an entire react app and thus cloning this repo might take a little longer than expected (minute or so). 


## BACKEND (API)

This is a django graphql api using python 3 

1) create a virtual environment : ``` python3 -m venv envName ```
2) activate the virtual environment: ``` . envName/bin/activate```
3) clone this repo and cd into it 
4) install dependencies``` pip install -r requirements.txt``` 
5) cd into api folder 
6) If you want to seed the database before you run the application please run ```python manage.py loaddata library.json``` 
7) Run the local server by issuing this command: ``` python manage.py runserver ```
8) At this point you can visit **http://localhost:8000/graphql** to make graphql querries on the graphql playground . For example if you run ``` query{programs{sectionList{name,imageName }}} ``` in the playground you should get a response back, provided that you seeded the db
9) If at any point you want to delete the seeded data simply issue : ``` python manage.py flush ```



## FRONTEND (REACT APP)
**Requirements: Node >= 8.10 and npm >= 5.6** 

Note: I do not have alot of experience with front end. The front-end is an entire react app and thus does have alot of boiler plate with it. I did this becasue this was my past experience with react. 

1) In a seperate terminal window cd into the modern_health_front_end folder of this repo
2) install dependencies: ```npm install```
3) install react horizontal scroller (used in front end) ```npm install --save react-horizontal-scroll-container```
3) yarn start (you can do do npm start if yarn is not installed)
4) visit **http://localhost:3000/** to see the app displaying data rendered from the graphql api 
