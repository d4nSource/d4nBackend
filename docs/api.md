# API documentation

All interfaces follow the REST principle and uses HTTP methods to provide or receive informations/action requests

An API can be called via a simple HTTP request sending the URL extended by the API name.

List of APIs

* [/](#root)
* [/user](#user) 

## root

**not implemented**

Should return a default page with short information about this service

## user

| URL     | Method | Request | Repsonse                      | Description
|---      |---     |---      |---                            |---
|/user    | GET    | id      | {fistname,lastname, email }   | returns a single user identified by an id
|/user/all| GET    | none    | [{fistname,lastname, email}]  | returns an array of all users
