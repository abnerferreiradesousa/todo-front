# Project: todolist

## End-point: Login
### Method: POST
>```
>http://localhost:8000/users/login
>```
### Body (**raw**)

```json
{
    "email": "ode@gmail.com",
    "password": "aaaaaa"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: GetTasksByUser
### Method: GET
>```
>http://localhost:8000/tasks
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoib2RlQGdtYWlsLmNvbSIsInVzZXJJZCI6IjY1M2E4ZGUyOGIzN2RjNTYwNDYwOTdkZSJ9LCJpYXQiOjE2OTgzMzYyODN9.np4pdDl6FQod_k4whSvklH4h7STBQHo1SO_F3b0bvM8|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: CreateUser
### Method: POST
>```
>http://localhost:8000/users
>```
### Body (**raw**)

```json
{
    "email": "ode@gmail.com",
    "password": "aaaaaa"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: CreateTask
### Method: POST
>```
>http://localhost:8000/tasks
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoib2RlQGdtYWlsLmNvbSIsInVzZXJJZCI6IjY1M2E4ZGUyOGIzN2RjNTYwNDYwOTdkZSJ9LCJpYXQiOjE2OTgzMzYyODN9.np4pdDl6FQod_k4whSvklH4h7STBQHo1SO_F3b0bvM8|


### Body (**raw**)

```json
{
    "title": "Tarefas de casa",
    "details": "Estudar, trabalhar, arrumar a casa e lavar o carro.",
    "isDone": false
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: UpdateTask
### Method: PUT
>```
>http://localhost:8000/tasks/653a8f268b37dc56046097e1
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoib2RlQGdtYWlsLmNvbSIsInVzZXJJZCI6IjY1M2E4ZGUyOGIzN2RjNTYwNDYwOTdkZSJ9LCJpYXQiOjE2OTgzMzYyODN9.np4pdDl6FQod_k4whSvklH4h7STBQHo1SO_F3b0bvM8|


### Body (**raw**)

```json
{
    "title": "Tarefas do trabalho e estudos",
    "details": "Estudar matemática, português, terminar o projeto final",
    "isDone": true
}
```

### Query Params

|Param|value|
|---|---|
|id|653a8f268b37dc56046097e1|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: DeleteTask
### Method: DELETE
>```
>http://localhost:8000/tasks/653a8f268b37dc56046097e1
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoib2RlQGdtYWlsLmNvbSIsInVzZXJJZCI6IjY1M2E4ZGUyOGIzN2RjNTYwNDYwOTdkZSJ9LCJpYXQiOjE2OTgzMzYyODN9.np4pdDl6FQod_k4whSvklH4h7STBQHo1SO_F3b0bvM8|


### Query Params

|Param|value|
|---|---|
|id|653a8f268b37dc56046097e1|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
