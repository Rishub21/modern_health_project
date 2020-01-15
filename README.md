# modern_health_project
a simple web app for modern health. Note the front-end is in the form of an entire react app and thus cloning this repo might take a little longer than expected (minute or so). 


## BACKEND (API)

This is a django graphql api using python 3 

1) create a virtual environment : ``` python3 -m venv env ```
2) activate the virtual environment: ``` . env/bin/activate```
3) clone this repo and cd into it 
4) ``` pip install requirements.txt``` 
5) cd into api folder 
6) If you want to seed the database before you run the application please run ```python manage.py loaddata library.json``` 
7) Run the application on the **http://localhost:8000/** by issuing this command: ``` python manage.py runserver ```
8) At this point you can visit **http://localhost:8000/graphql** to make graphql querries on the graphql playground 
9) If at any point you want to delete the seeded data simply issue : ``` python manage.py flush ```



## FRONTEND (REACT APP)
**Requirements: Node >= 8.10 and npm >= 5.6** 

Note: I do not have alot of experience with front end. The front-end is an entire react app and thus does have alot of boiler plate with it. I did this becasue this was my past experience with react. 

1) In a seperate terminal window cd into the modern_health_front_end folder of this repo
2) ```npm-install-all```
3) yarn start  
4) visit **http://localhost:3000/** to see the app displaying data rendered from the graphql api 
