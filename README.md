<div align="center">
  <img src="./github/logoshrtnit.png"/>
</div>

[![styled-components](https://img.shields.io/badge/styled_components-5.2.1-db7b86?style=flat-square&logo=styled-components)](https://styled-components.com/)
[![eslint](https://img.shields.io/badge/eslint-7.14.0-4b32c3?style=flat-square&logo=eslint)](https://eslint.org/)
[![airbnb-style](https://flat.badgen.net/badge/style-guide/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)
[![MIT License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](https://github.com/BrendoSPinheiro/shrtn-it/blob/main/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)<br>

## Table of Contents
- [About](#about)
- [Web](#web)
  - [Screenshots](#screenshots)
- [API](#api)
  - [Routes](#routes)
  - [Requests](#requests)
  - [Installing](#installing)
  - [Configuring](#configuring)
    - [PostgreSQL](#postgresql)

# About
This project is a URL shortener developed for my TCC. Its main objective is to have more control over the expiration of urls and validations of broken or nonexistent urls

# Web
access the api source code here: [`WEB`](https://github.com/BrendoSPinheiro/shrtn-it/tree/main/web)

## Screenshots
<img src="./github/loginPage.png" width="49%"/> <img src="./github/newUrl.png" width="49%"/>
<img src="./github/detailUrl.png" width="49%"/> <img src="./github/detailUrlSchedule.png" width="49%"/> 
<img src="./github/detailUrlDark.png" width="49%"/> <img src="./github/errorPage.png" width="49%"/>

# API
access the api source code here: [`API`](https://github.com/BrendoSPinheiro/shrtn-it/tree/main/server)
## Routes
|route|HTTP Method|params|description|auth method
|:---|:---:|:---:|:---:|:---:
|`/urls`|GET|:x:|Lists urls.|Bearer
|`/urls/:id`|GET|`:id` of the URL.|Get url details.|Bearer
|`/:slug`|GET|`:slug` of the short url.|Redirect short url.|:x:
|`/urls`|POST|Body with new short url data.|Create a new short url.|Bearer
|`/urls/:id`|DELETE|`:id` of the URL.|Delete short url.|Bearer
|`/users`|POST|Body with new user data.|Create a new user.|:x:
|`/session`|POST|Body with user data.|User authentication.|:x:
> Routes with `Bearer` as auth method expect an `Authorization` header. See [Bearer Token](#bearer-token) section for more information.

## Requests
* `POST /urls`

Request body:
```json
// to shorten an unscheduled URL
{
  "title": "Google",
  "full_url": "https://google.com"
}

// to shorten a URL with scheduling by date
{
  "title": "Google",
  "full_url": "https://google.com",
  "scheduling_type": "date",
  "start_expires_date": "2021-01-20",
  "end_expires_date": "2021-01-22"
}

// to shorten a URL with scheduling by hour
{
  "title": "Google",
  "full_url": "https://google.com",
  "scheduling_type": "hour",
  "start_hour": 0,
  "end_hour": 2
}
```

* `POST /users`

```json
{
  "name": "Fulano",
  "email": "fulano@mail.com",
  "password": "123456"
}
```

* `POST /session`

```json
{
  "email": "fulano@mail.com",
  "password": "123456"
}
```

## Installing
First clone this repository:

```shell
$ git clone https://github.com/BrendoSPinheiro/shrtn-it.git
```
second install the dependencies:

```shell
$ yarn
```
Or:

```shell
$ npm install
```
> Was installed and configured the [`eslint`](https://eslint.org/) to keep the code clean and patterned.
> 
## Configuring

this application uses the [PostgreSQL](https://www.postgresql.org/
) database.

### PostgreSQL
Responsible for storing the data used by the application. For the fastest configuration it is recommended to use [docker](https://www.docker.com), you can create a postgresql container like this

```
$ docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
```

