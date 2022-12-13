#Get all users

curl --location --request GET 'http://localhost:3000/user'

#Get user by id

curl --location --request GET 'http://localhost:3000/user/22fdbaac-5e36-40e1-87d0-ffb45146d7a7'

#Get user by id -> id does not exists -> error

curl --location --request GET 'http://localhost:3000/user/22fdbaac-5e36-40e1-87d0-ffb45146d7a6'

#Create a new user

curl --location --request POST 'http://localhost:3000/user' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "user10@example.com",
    "password": "fdsa"
}'

#Create new user missing parameters -> error

curl --location --request POST 'http://localhost:3000/user' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "notanemail",
    "password": ""
}'

#Create new user with already registered email -> error

curl --location --request POST 'http://localhost:3000/user' \
--header 'Content-Type: application/json' \
--data-raw '{
        "email": "user1@example.com",
        "password": "asdf"
}'

#Update user

curl --location --request PUT 'http://localhost:3000/user/75112abd-e7aa-4bbd-af4a-3747e6f533c1' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "user2Updated@example.com",
    "password": "fdsa"
}'

#Update user missing parameters -> error

curl --location --request PUT 'http://localhost:3000/user/22fdbaac-5e36-40e1-87d0-ffb45146d7a7' \
--header 'Content-Type: application/json' \
--data-raw '{
        "email": "not an email",
        "password": "",
        "active": true
}'

#Update user which id does not exists -> error

curl --location --request PUT 'http://localhost:3000/user/22fdbaac-5e36-40e1-87d0-ffb45146d7a6' \
--header 'Content-Type: application/json' \
--data-raw '{
        "email": "user1@example.com",
        "password": "asdf",
        "active": true
}'

#Delete user with associated teacher -> error message

curl --location --request DELETE 'http://localhost:3000/user/beaf1980-1429-478a-9a41-19f017388b34' 

#Delete user with no teacher associated

curl --location --request DELETE 'http://localhost:3000/user/3c90241d-e28c-45a7-9d0b-a2456d1d2638' 

#Delete user which id does not exist -> error

curl --location --request DELETE 'http://localhost:3000/user/22fdbaac-5e36-40e1-87d0-ffb45146d7a6' \
--header 'Content-Type: application/json' \
--data-raw '{
        "email": "user1@example.com",
        "password": "asdf"
}'

#Get all teachers 

curl --location --request GET 'http://localhost:3000/teacher' 

#Get teacher by id

curl --location --request GET 'http://localhost:3000/teacher/5e052f07-d7da-452e-b0a2-9ee607cb93b0' 

#Get teacher by id -> id does not exist -> error

curl --location --request GET 'http://localhost:3000/teacher/5e052f07-d7da-452e-b0a2-9ee607cb93b1'

#Create new teacher

curl --location --request POST 'http://localhost:3000/teacher' \
--header 'Content-Type: application/json' \
--data-raw '{
    "dni": "88888888H",
    "name": "Teacher",
    "last_name": "Eight",
    "date_of_birth": "1985-07-30",
    "UserId": "651bf859-ef3d-4824-bdca-50dc937060a3"
}'

#Create new teacher -> missing parameters -> error

curl --location --request POST 'http://localhost:3000/teacher' \
--header 'Content-Type: application/json' \
--data-raw '{
    "dni": "",
    "name": "",
    "last_name": "",
    "date_of_birth": "",
    "UserId": "22fdbaac-5e36-40e1-87d0-ffb45146d7a7"
}'

#Create teacher whixh dni already registered -> error

curl --location --request POST 'http://localhost:3000/teacher' \
--header 'Content-Type: application/json' \
--data-raw '{
    "dni": "11111111A",
    "name": "Teacher",
    "last_name": "One",
    "date_of_birth": "1996-05-25",
    "UserId": "22fdbaac-5e36-40e1-87d0-ffb45146d7a7"
}'

#Create teacher with an UserId that already has a teacher associated with it -> error

curl --location --request POST 'http://localhost:3000/teacher' \
--header 'Content-Type: application/json' \
--data-raw '{
    "dni": "11111111B",
    "name": "Teacher",
    "last_name": "One",
    "date_of_birth": "1996-05-25",
    "UserId": "22fdbaac-5e36-40e1-87d0-ffb45146d7a7"
}'

#Create teacher with a non existing UserId -> error

curl --location --request POST 'http://localhost:3000/teacher' \
--header 'Content-Type: application/json' \
--data-raw '{
    "dni": "11111111B",
    "name": "Teacher",
    "last_name": "One",
    "date_of_birth": "1996-05-25",
    "UserId": "22fdbaac-5e36-40e1-87d0-ffb45146d7a6"
}'

#Update teacher

curl --location --request PUT 'http://localhost:3000/teacher/bfdfc44d-3b76-4573-91c5-558cb176a963' \
--header 'Content-Type: application/json' \
--data-raw '{
    "dni": "22222222B",
    "name": "Teacher",
    "last_name": "TwoUpdated",
    "date_of_birth": "1985-07-30",
    "UserId": "75112abd-e7aa-4bbd-af4a-3747e6f533c1"
}'

#Update teacher missing parameters -> error

curl --location --request PUT 'http://localhost:3000/teacher/5e052f07-d7da-452e-b0a2-9ee607cb93b0' \
--header 'Content-Type: application/json' \
--data-raw '{
    "dni": "",
    "name": "",
    "last_name": "",
    "date_of_birth": "",
    "UserId": "22fdbaac-5e36-40e1-87d0-ffb45146d7a7"
}'

#Update teacher which id does not exist -> error

curl --location --request PUT 'http://localhost:3000/teacher/5e052f07-d7da-452e-b0a2-9ee607cb93b1' \
--header 'Content-Type: application/json' \
--data-raw '{
    "dni": "11111111A",
    "name": "Teacher",
    "last_name": "One",
    "date_of_birth": "1996-05-25",
    "UserId": "22fdbaac-5e36-40e1-87d0-ffb45146d7a7"
}'

#Update teacher trying to change UserId -> error

curl --location --request PUT 'http://localhost:3000/teacher/5e052f07-d7da-452e-b0a2-9ee607cb93b0' \
--header 'Content-Type: application/json' \
--data-raw '{
    "dni": "11111111A",
    "name": "Teacher",
    "last_name": "One",
    "date_of_birth": "1996-05-25",
    "UserId": "22fdbaac-5e36-40e1-87d0-ffb45146d7a6"
}'

#Delete teacher with no students associated

curl --location --request DELETE 'http://localhost:3000/teacher/d864009c-d072-4a0d-b13c-e34b48f8ed01'

#Delete teacher with associated students -> error

curl --location --request DELETE 'http://localhost:3000/teacher/285a48ed-877a-49ed-86a9-d74a83a0d11f'

#Delete teacher which id does not exists -> error

curl --location --request DELETE 'http://localhost:3000/teacher/5e052f07-d7da-452e-b0a2-9ee607cb93b1'

#Get all students 

curl --location --request GET 'http://localhost:3000/student'

#Get student by id

curl --location --request GET 'http://localhost:3000/student/f08b23b0-a52b-4039-8f1a-c5c517c84868'

#Get student by id which id does not exist -> error

curl --location --request GET 'http://localhost:3000/student/f08b23b0-a52b-4039-8f1a-c5c517c84867'

#Create new student

curl --location --request POST 'http://localhost:3000/student' \
--header 'Content-Type: application/json' \
--data-raw '{
    "dni": "00000021Z",
    "name": "Student",
    "last_name": "Twentyne",
    "date_of_birth": "1934-05-25",
    "TeacherId": "5e052f07-d7da-452e-b0a2-9ee607cb93b0"
}'

#Create new student which dni is already registered -> error

curl --location --request POST 'http://localhost:3000/student' \
--header 'Content-Type: application/json' \
--data-raw '{
    "dni": "00000001A",
    "name": "Student",
    "last_name": "Twentyne",
    "date_of_birth": "1934-05-25",
    "TeacherId": "5e052f07-d7da-452e-b0a2-9ee607cb93b0"
}'

#Create student which teacher id does not exist -> error

curl --location --request POST 'http://localhost:3000/student' \
--header 'Content-Type: application/json' \
--data-raw '{
    "dni": "00000021B",
    "name": "Student",
    "last_name": "Twentyne",
    "date_of_birth": "1934-05-25",
    "TeacherId": "5e052f07-d7da-452e-b0a2-9ee607cb93b1"
}'

#Create student -> missing parameters -> error

curl --location --request POST 'http://localhost:3000/student' \
--header 'Content-Type: application/json' \
--data-raw '{
    "dni": "",
    "name": "",
    "last_name": "",
    "date_of_birth": "",
    "TeacherId": "5e052f07-d7da-452e-b0a2-9ee607cb93b0"
}'

#Update student

curl --location --request PUT 'http://localhost:3000/student/76da19ce-1d03-4138-869a-78652c534b8c' \
--header 'Content-Type: application/json' \
--data-raw '{
    "dni": "00000002B",
    "name": "Student",
    "last_name": "TwoUpdated",
    "date_of_birth": "1985-07-30",
    "TeacherId": "5e052f07-d7da-452e-b0a2-9ee607cb93b0"
}'

#Update student missing parameters -> error

curl --location --request PUT 'http://localhost:3000/student/042aeb1b-7b11-4bde-84b1-f1bc43c2307f' \
--header 'Content-Type: application/json' \
--data-raw '{
    "dni": "",
    "name": "",
    "last_name": "",
    "date_of_birth": "",
    "TeacherId": "5e052f07-d7da-452e-b0a2-9ee607cb93b0"
}'

#Update student which id does not exist -> error

curl --location --request PUT 'http://localhost:3000/student/1ceeff38-2ac7-49d2-b3ef-3e214313ddfc' \
--header 'Content-Type: application/json' \
--data-raw '{

    "dni": "00000021Z",
    "name": "Student",
    "last_name": "Twentyne",
    "date_of_birth": "1996-05-25",
    "TeacherId": "5e052f07-d7da-452e-b0a2-9ee607cb93b0"
}'

#Update student trying to change teacher id -> error

curl --location --request PUT 'http://localhost:3000/student/f08b23b0-a52b-4039-8f1a-c5c517c84868' \
--header 'Content-Type: application/json' \
--data-raw '{
    "dni": "00000001A",
    "name": "Student",
    "last_name": "One",
    "date_of_birth": "1996-05-25",
    "TeacherId": "5e052f07-d7da-452e-b0a2-9ee607cb93b7"
}'

#Delete student 

curl --location --request DELETE 'http://localhost:3000/student/59b4b32f-5354-4c67-a598-443b4c12dd90'

#Delete student shich id does not exist -> error

curl --location --request DELETE 'http://localhost:3000/student/f08b23b0-a52b-4039-8f1a-c5c517c84867'

#GET/teacher/:id/students -> teacher does not exist -> error

curl --location --request GET 'http://localhost:3000/teacher/5e052f07-d7da-452e-b0a2-9ee607cb93b1/students'

#GET/teacher/:id/students -> associated user not active

curl --location --request GET 'http://localhost:3000/teacher/a07b9b99-6916-4c27-b963-ccb692debaf3/students'

#GET/teacher/:id/students ordered

curl --location --request GET 'http://localhost:3000/teacher/5e052f07-d7da-452e-b0a2-9ee607cb93b0/students'

#GET/user/:id/active -> user does not exist -> error

curl --location --request GET 'http://localhost:3000/user/beaf1980-1429-478a-9a41-19f017388b33/active'

#GET/user/:id/active -> active:true

curl --location --request GET 'http://localhost:3000/user/beaf1980-1429-478a-9a41-19f017388b34/active'

#GET/user/:id/active -> active:false

curl --location --request GET 'http://localhost:3000/user/74887cb7-eafa-486e-b3ed-4108fceeaeda/active'

#POST/user/:id/active -> active:false

curl --location --request POST 'http://localhost:3000/user/7c795ccb-6772-4a64-bdd9-e351486d0f0f/active'

#POST/user/:id/active -> active:true

curl --location --request POST 'http://localhost:3000/user/8479ac50-7628-4303-b3b4-7dfd55d55f54/active'

#POST/user/:id/active -> user does not exist -> error

curl --location --request POST 'http://localhost:3000/user/8479ac50-7628-4303-b3b4-7dfd55d55f53/active'