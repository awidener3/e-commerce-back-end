# 📝 Homework #13: E-Commerce Backend

## 🎥 Video Walkthrough
[Video Walkthrough](./images/ecommerce-preview.mp4)

## 🔨 Task
Given starter code, I created the back-end of an e-commerce application so that products can be stored on a database which are then connected to categories and tags. The product, category and tags have CRUD methods attached so that the database is highly customizabe and can be easily expanded. This was achieved using Express.js and Sequelize to connect with a MySQL database.

## 📎 How to Use
In an API testing application such as Insomnia or Postman, you are able to make several HTTP requests to different endpoints. The endpoints available are:
- `/api/products`
- `/api/categories`
- `/api/tags`

### GET
To get all information stored on the database for each endpoint, use any of the endpoints above with a **GET** request.

To get one item from a database, attach an `id` paramater at the end to get one piece of information: `/id/products/3`

### POST 
To post an item to one of the databases, use a **POST** request on an endpoint and put the information in the body.

### PUT
To update an item, use one the endpoints above, attach an `id` parameter, and then put the information you would like to update in the body of a **PUT** request.

### DELETE
To delete an item, use one of the endpoints above, attach an `id` parameter, and then make a **DELETE** request.

## 🔍 Preview


## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```