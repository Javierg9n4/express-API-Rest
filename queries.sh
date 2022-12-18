#Check if all the CRUD endpoints are secured by session or JWT --> error, redirect to error page.
#/api/user CRUD
#GET all users  

curl --location --request GET 'https://localhost/api/user'

#GET user by Id

curl --location --request GET 'https://localhost/api/user/22fdbaac-5e36-40e1-87d0-ffb45146d7a7'

#POST new user

curl --location --request POST 'https://localhost/api/user' \
--header 'Content-Type: application/json' \
--data-raw '{
          "email": "example@example.com",
          "password": "1234",
          "active": true,
          "type": "admin"
}'

#UPDATE user

curl --location --request PUT 'https://localhost/api/user/22fdbaac-5e36-40e1-87d0-ffb45146d7a7' \
--header 'Content-Type: application/json' \
--data-raw '{
          "email": "example@example.com",
          "password": "1234",
          "active": true,
          "type": "admin"
}'

#DELETE USER   

curl --location --request DELETE 'https://localhost/api/user/22fdbaac-5e36-40e1-87d0-ffb45146d7a7'

#/api/teacher CRUD
#GET all teachers 

curl --location --request GET 'https://localhost/api/teacher'

#GET teacher by id

curl --location --request GET 'https://localhost/api/teacher/5e052f07-d7da-452e-b0a2-9ee607cb93b0'

#POST new teacher

curl --location --request POST 'https://localhost/api/teacher' \
--header 'Content-Type: application/json' \
--data-raw '{
    "dni": "11111111A",
    "name": "Teacher",
    "last_name": "One",
    "date_of_birth": "1996-05-25",
    "UserId": "22fdbaac-5e36-40e1-87d0-ffb45146d7a7"
}'

#UPDATE teacher 

curl --location --request PUT 'https://localhost/api/teacher/5e052f07-d7da-452e-b0a2-9ee607cb93b0' \
--header 'Content-Type: application/json' \
--data-raw '{
    "dni": "11111111B",
    "name": "Teacher",
    "last_name": "OneTest",
    "date_of_birth": "1996-05-25",
    "UserId": "22fdbaac-5e36-40e1-87d0-ffb45146d7a7"
}'

#DELETE teacher

curl --location --request DELETE 'https://localhost/api/teacher/5e052f07-d7da-452e-b0a2-9ee607cb93b0'

#/api/student CRUD

#GET all students

curl --location --request GET 'https://localhost/api/student'

#GET student by id

curl --location --request GET 'https://localhost/api/student/9be30696-84bf-4faa-a6b8-6dafc6a7d232'

#POST new student

curl --location --request POST 'https://localhost/api/student' \
--header 'Content-Type: application/json' \
--data-raw '{
    "dni": "00000001B",
    "name": "Student",
    "last_name": "OneTest",
    "date_of_birth": "1996-05-25",
    "TeacherId": "5e052f07-d7da-452e-b0a2-9ee607cb93b0"
}'

#UPDATE student

curl --location --request PUT 'https://localhost/api/student/9be30696-84bf-4faa-a6b8-6dafc6a7d232' \
--header 'Content-Type: application/json' \
--data-raw '{
    "dni": "00000001B",
    "name": "Student",
    "last_name": "OneTest",
    "date_of_birth": "1996-05-25",
    "TeacherId": "5e052f07-d7da-452e-b0a2-9ee607cb93b0"
}'

#DELETE student

curl --location --request DELETE 'https://localhost/api/student/9be30696-84bf-4faa-a6b8-6dafc6a7d232'



#Trying to set a session and JWT with username not registered -> error -> redirects to error-login.html

curl --location --request POST 'https://localhost/login' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3Abv11R06SzNLMV5zDSh_L3ngjYR2BRUVa.Zho%2B1O%2FKUKgfXgYHPc83J9pY%2BhyfUqIc2y0XBHOqq40' \
--data-raw '{
    "username": "user10000@example.com",
    "password": "asdf"
}'

#SET session and JWT to test CRUD endpoints full functionality

curl --location --request POST 'https://localhost/login' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3Abv11R06SzNLMV5zDSh_L3ngjYR2BRUVa.Zho%2B1O%2FKUKgfXgYHPc83J9pY%2BhyfUqIc2y0XBHOqq40' \
--data-raw '{
    "username": "user1@example.com",
    "password": "asdf"
}'

#GET all users

curl --location --request GET 'https://localhost/api/user' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw'

#GET user by id

curl --location --request GET 'https://localhost/api/user/22fdbaac-5e36-40e1-87d0-ffb45146d7a7' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw'

#POST new user

curl --location --request POST 'https://localhost/api/user' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw' \
--data-raw '{
    "email": "example@example.com",
    "password": "asdf"
}'

#UPDATE new user

curl --location --request PUT 'https://localhost/api/user/3c90241d-e28c-45a7-9d0b-a2456d1d2638' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw' \
--data-raw '{
    "email": "user9@example.com",
    "password": "asdf",
    "active": "true",
    "type": "admin"
}'

#DELETE user

curl --location --request DELETE 'https://localhost/api/user/3c90241d-e28c-45a7-9d0b-a2456d1d2638' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw'

#GET all teachers

curl --location --request GET 'https://localhost/api/teacher' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw'

#GET teacher by id

curl --location --request GET 'https://localhost/api/teacher/5e052f07-d7da-452e-b0a2-9ee607cb93b0' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw'

#POST new teacher

curl --location --request POST 'https://localhost/api/teacher' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw' \
--data-raw '{
    "dni": "12345678A",
    "name": "Test",
    "last_name": "Create Teacher",
    "date_of_birth": "1996-05-25",
    "UserId": "651bf859-ef3d-4824-bdca-50dc937060a3"
}'

#UPDATE teacher

curl --location --request PUT 'https://localhost/api/teacher/d864009c-d072-4a0d-b13c-e34b48f8ed01' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw' \
--data-raw '{
    "dni": "77777777G",
    "name": "Teacher",
    "last_name": "Seven Updated",
    "date_of_birth": "1973-01-09",
    "UserId": "7c795ccb-6772-4a64-bdd9-e351486d0f0f"
}'

#DELETE teacher 

curl --location --request DELETE 'https://localhost/api/teacher/d864009c-d072-4a0d-b13c-e34b48f8ed01' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw'


#GET all students

curl --location --request GET 'https://localhost/api/student' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw'

#GET student by id

curl --location --request GET 'https://localhost/api/student/9be30696-84bf-4faa-a6b8-6dafc6a7d232' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw'

#POST new student

curl --location --request POST 'https://localhost/api/student' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw' \
--data-raw '{
    "dni": "98765432A",
    "name": "Test",
    "last_name": "Create Student",
    "date_of_birth": "1959-11-09",
    "TeacherId": "5e052f07-d7da-452e-b0a2-9ee607cb93b0"
}'

#UPDATE student

curl --location --request PUT 'https://localhost/api/student/c0230398-502f-4548-97ac-97605b062b1e' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw' \
--data-raw '{
    "dni": "00000020S",
    "name": "Student",
    "last_name": "TwentyUpdated",
    "date_of_birth": "1959-11-09",
    "TeacherId": "a07b9b99-6916-4c27-b963-ccb692debaf3"
}'

#DELETE student

curl --location --request DELETE 'https://localhost/api/student/c0230398-502f-4548-97ac-97605b062b1e' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw'

#Checking CRUD error cases

#Getting user, teacher and students by wrong id's

curl --location --request GET 'https://localhost/api/user/c0230398-502f-4548-97ac-97605b062b1b' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw'

curl --location --request GET 'https://localhost/api/teacher/c0230398-502f-4548-97ac-97605b062b1b' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw'

curl --location --request GET 'https://localhost/api/student/c0230398-502f-4548-97ac-97605b062b1b' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw'

#Creating user, teacher and student with missing paramaters or already registered unique paramaters

#Create user with existing email

curl --location --request POST 'https://localhost/api/user' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw' \
--data-raw '{

    "email": "user1@example.com",
    "password": "asdf",
    "active": true,
    "type": "no-admin"
}'

#Create user with wrong mail format

curl --location --request POST 'https://localhost/api/user' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw' \
--data-raw '{

    "email": "user1@example",
    "password": "asdf",
    "active": true,
    "type": "no-admin"
}'

#Create user with mising parameters

curl --location --request POST 'https://localhost/api/user' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw' \
--data-raw '{

    "email": "",
    "password": "",
    "active": "",
    "type": ""
}'

#Create teacher with existing DNI

curl --location --request POST 'https://localhost/api/teacher' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw' \
--data-raw '{
    "dni": "11111111A",
    "name": "Teacher",
    "last_name": "One",
    "date_of_birth": "1996-05-25",
    "UserId": "22fdbaac-5e36-40e1-87d0-ffb45146d7a7"
}'

#Create teacher with missing parameters

curl --location --request POST 'https://localhost/api/teacher' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw' \
--data-raw '{
    "dni": "",
    "name": "",
    "last_name": "",
    "date_of_birth": "",
    "UserId": "22fdbaac-5e36-40e1-87d0-ffb45146d7a7"
}'

#Create teacher with non existing UserId

curl --location --request POST 'https://localhost/api/teacher' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw' \
--data-raw '{
    "dni": "11111111B",
    "name": "Teacher",
    "last_name": "One",
    "date_of_birth": "1996-05-25",
    "UserId": "22fdbaac-5e36-40e1-87d0-ffb45146d7a6"
}'

#Create student with already registered DNI

curl --location --request POST 'https://localhost/api/student' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw' \
--data-raw '{
    "dni": "00000001A",
    "name": "Student",
    "last_name": "One",
    "date_of_birth": "1996-05-25",
    "TeacherId": "5e052f07-d7da-452e-b0a2-9ee607cb93b0"
}'

#Create student with missing parameters

curl --location --request POST 'https://localhost/api/student' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw' \
--data-raw '{
    "dni": "",
    "name": "",
    "last_name": "",
    "date_of_birth": "",
    "TeacherId": "5e052f07-d7da-452e-b0a2-9ee607cb93b0"
}'

#Createt student with non existing teacher id

curl --location --request POST 'https://localhost/api/student' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw' \
--data-raw '{
    "dni": "00000001B",
    "name": "Student",
    "last_name": "One",
    "date_of_birth": "1996-05-25",
    "TeacherId": "5e052f07-d7da-452e-b0a2-9ee607cb93b1"
}'


#UPDATE user teacher and student that do not exist or with missing parameters

#Update user with non existing id 

curl --location --request PUT 'https://localhost/api/user/22fdbaac-5e36-40e1-87d0-ffb45146d7a6' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw' \
--data-raw '{
    "email": "user1@example.com",
    "password": "asdf",
    "active": true,
    "type": "no-admin"
}'

#Update user with missing parameters

curl --location --request PUT 'https://localhost/api/user/22fdbaac-5e36-40e1-87d0-ffb45146d7a7' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw' \
--data-raw '{
    "email": "",
    "password": "",
    "active": true,
    "type": "no-admin"
}'

#Update teacher with non existing id

curl --location --request PUT 'https://localhost/api/teacher/5e052f07-d7da-452e-b0a2-9ee607cb93b1' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw' \
--data-raw '{
    "dni": "11111111A",
    "name": "Teacher",
    "last_name": "One",
    "date_of_birth": "1996-05-25",
    "UserId": "22fdbaac-5e36-40e1-87d0-ffb45146d7a7"
}'

#Update teacher with missing parameters

curl --location --request PUT 'https://localhost/api/teacher/5e052f07-d7da-452e-b0a2-9ee607cb93b1' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw' \
--data-raw '{
    "dni": "",
    "name": "",
    "last_name": "",
    "date_of_birth": "",
    "UserId": "22fdbaac-5e36-40e1-87d0-ffb45146d7a7"
}'

#Update student whit non existing id

curl --location --request PUT 'https://localhost/api/student/9be30696-84bf-4faa-a6b8-6dafc6a7d232' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw' \
--data-raw '{
    "dni": "00000001B",
    "name": "Student",
    "last_name": "One",
    "date_of_birth": "1996-05-25",
    "TeacherId": "5e052f07-d7da-452e-b0a2-9ee607cb93b1"
}'

#Update student with missing parameters

curl --location --request PUT 'https://localhost/api/student/9be30696-84bf-4faa-a6b8-6dafc6a7d232' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw' \
--data-raw '{
    "dni": "",
    "name": "",
    "last_name": "",
    "date_of_birth": "",
    "TeacherId": "5e052f07-d7da-452e-b0a2-9ee607cb93b0"
}'

#POST /logout 

curl --location --request POST 'https://localhost/logout' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw' \
--data-raw '{
    "username": "user1@example.com",
    "password": "asdf"
}'

#GET /login

curl --location --request GET 'https://localhost/login' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw'

#POST /login non existing user -> error

curl --location --request POST 'https://localhost/login' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw' \
--data-raw '{
    "username": "user10000@example.com",
    "password": "asdf"
}'

#POST /login existing user

curl --location --request POST 'https://localhost/login' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw' \
--data-raw '{
    "username": "user1@example.com",
    "password": "asdf"
}'

#GET /users being not-admin -> error 401

curl --location --request GET 'https://localhost/users' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw' \
--data-raw '{
    "username": "user1@example.com",
    "password": "asdf"
}'

#POST /logout non-admin user 

curl --location --request POST 'https://localhost/logout' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw' \
--data-raw '{
    "username": "user1@example.com",
    "password": "asdf"
}'

#POST /login admin user

curl --location --request POST 'https://localhost/login' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw' \
--data-raw '{
    "username": "user2@example.com",
    "password": "1234"
}'

#GET /users by admin user

curl --location --request GET 'https://localhost/users' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw' \
--data-raw '{
    "username": "user2@example.com",
    "password": "1234"
}'

#GET /home by admin user

curl --location --request GET 'https://localhost/home' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw' \
--data-raw '{
    "username": "user2@example.com",
    "password": "1234"
}'

#POST logout

curl --location --request POST 'https://localhost/logout' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw' \
--data-raw '{
    "username": "user2@example.com",
    "password": "1234"
}'

#POST /login non admin user

curl --location --request POST 'https://localhost/login' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw' \
--data-raw '{
    "username": "user1@example.com",
    "password": "asdf"
}'

#GET /home non loged in user 

curl --location --request GET 'https://localhost/home' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw' \
--data-raw '{
    "username": "user1@example.com",
    "password": "asdf"
}'

#GET /home by non admin user

curl --location --request GET 'https://localhost/home' \
--header 'Cookie: connect.sid=s%3AnkEvMldjeiHwwCawRwHZw2eVXE-54ciA.9dbiU4cbK%2BxWsvV0jxyD0qYNyfHNg1OEYH7ymVqdmRw'