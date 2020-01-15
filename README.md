# modern_health_project
a simple web app for modern health

## BACKEND (API)

This is a django graphql api using python 3 

1) create a virtual environment : ``` python3 -m venv env ```
2) activate the virtual environment: ``` . env/bin/activate```
3) clone this repo and cd into it 
4) ``` pip install requirements.txt``` 
5) cd into api folder 
6) If you want to seed the database before you run the application please run ```python manage.py loaddata library.json``` 
7) Run the application on the localhost:8000 by issuing this command: ``` python manage.py runserver ```
8) At this point you can visit localhost:8000/graphql to make graphql querries 
9) If at any point you want to delete the seeded data simply issue : ``` python manage.py flush ````

