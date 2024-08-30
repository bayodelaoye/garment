# Garment

Garment is an e-commerce website that allows users to view, purchase and create garments. It provides a platform for fashion enthusiasts to connect, discover new styles of garments, and engage in transactions. It has the right amount of redundancy to make navigation easy and intuitive.

# Live Link
https://garment-llvd.onrender.com

## Tech Stack
### Frameworks and Libraries
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

 ### Database:
 ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
  
 ### Hosting:
 ![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)

# Index

[Feature List](https://github.com/bayodelaoye/garment/wiki/Feature-List) | [Database Schema](https://github.com/bayodelaoye/garment/wiki/Database-Schema) | [User Stories](https://github.com/bayodelaoye/garment/wiki/User-Stories) | [Wireframes](https://github.com/bayodelaoye/garment/wiki/Wireframes)

# Landing Page
<img width="600px" src="https://github.com/bayodelaoye/garment/blob/dev/react-vite/public/home_page.png" />

 # Product Page
<img width="600px" src="https://github.com/bayodelaoye/garment/blob/dev/react-vite/public/product_page.png" />

# Cart
<img src="https://github.com/bayodelaoye/garment/blob/dev/react-vite/public/cart.png" width="600px" />

<!-- # Endpoints
## Auth
| Request                        | Purpose                | Return Value  |                  
| :----------------------------- | :--------------------: | :------------------------------ |
| GET /api/auth/        | This fetch is sent upon initial app load and on subsequent refreshes.<br>It returns an object representing the current user, if user is logged in.                                 | {<br>&nbsp;&nbsp;&nbsp;'idd': INT,<br>&nbsp;&nbsp;&nbsp;'username': STRING,<br>&nbsp;&nbsp;&nbsp;'email': STRING,<br>}<br><br>Status: 200<br>|
| POST /api/auth/unauthorized      | This endpoint will be routed to in the case that a protected route does not pass validations for the current user.<br>It returns an object with an errors property, which is an array with the value 'Unauthorized'          | {<br>&nbsp;&nbsp;&nbsp;'errors': ARRAY[STRINGS]<br>}<br><br>Status: 401<br>|
| POST /api/auth/signup        | This fetch sends the form data signup from data to the backend to process the creation of a new user.<br>It returns an object representing the current user, after logging them in, if account creation succeeds.                                 | {<br>&nbsp;&nbsp;&nbsp;'id': INT,<br>&nbsp;&nbsp;&nbsp;'username': STRING,<br>&nbsp;&nbsp;&nbsp;'email': STRING,<br>}<br><br>Status: 200<br>|
| POST /api/auth/login | This fetch attempts to login a user with the provided credentials.<br>It returns an object representing the current user, if validation succeeds.                                 | {<br>&nbsp;&nbsp;&nbsp;'id': INT,<br>&nbsp;&nbsp;&nbsp;'username': STRING,<br>&nbsp;&nbsp;&nbsp;'email': STRING,<br>}<br><br>Status: 200<br>|                                                                        
| POST /api/auth/logout | This fetch will logout the current user.<br>It returns an object with the message 'User logged Out' if it succeeds.                                 | {<br>&nbsp;&nbsp;&nbsp;'message': STRING<br>}<br><br>Status: 200<br>| -->

<!-- ## Cart
| Request                        | Purpose                | Return Value  | 
| :----------------------------- | :--------------------: | :------------------------------ |
| POST /api/cart/add        | This fetch is sent to add a new item to the cart table. Upon success, it returns an object representing that item.                 | {<br>&nbsp;&nbsp;&nbsp;'id': INT,<br>&nbsp;&nbsp;&nbsp;'category': STRING,<br>&nbsp;&nbsp;&nbsp;'vendor_name': STRING,<br>&nbsp;&nbsp;&nbsp;'manufacturer_id': STRING,<br>&nbsp;&nbsp;&nbsp;'name': STRING,<br>&nbsp;&nbsp;&nbsp;'model': STRING,<br>&nbsp;&nbsp;&nbsp;'serial': STRING,<br>&nbsp;&nbsp;&nbsp;'description': STRING,<br>&nbsp;&nbsp;&nbsp;'tech_specs': STRING,<br>&nbsp;&nbsp;&nbsp;'price': FLOAT<br>}<br><br>Status: 201<br>|
| PUT /api/cart/quantity        | This fetch is sent to update the quantity value of a cart item. Upon success, it returns an object representing that item in the cart, with a new quantity.                 | {<br>&nbsp;&nbsp;&nbsp;'id': INT,<br>&nbsp;&nbsp;&nbsp;'user_id': INT,<br>&nbsp;&nbsp;&nbsp;'item_id': INT,<br>&nbsp;&nbsp;&nbsp;'quantity': INT,<br>}<br><br>Status: 200<br>|
| DELETE /api/cart/delete/<int:id>        | This fetch is sent to delete an item from the cart. Upon success, it returns the string "Success", otherwise, we throw an error.                | "Success"<br><br>Status: 200<br>|
| DELETE /api/cart/clear        | This fetch is sent to delete all items from the cart. Upon success, it returns the string "Cart Emptied", otherwise, we throw an error.                | "Cart Emptied"<br><br>Status: 200<br>| -->

<!-- ## Shipping Info
| Request                        | Purpose                | Return Value  | 
| :----------------------------- | :--------------------: | :------------------------------ |
| GET /api/shipping/<int:user_id>        | This fetch is sent to retrieve all shipping info records for the user specified by the id. Upon success, we return an array of objects representing that data.           | ARRAY[<br>&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;apt_number: INT,<br>&nbsp;&nbsp;&nbsp;city: STRING,<br>&nbsp;&nbsp;&nbsp;company: STRING,<br>&nbsp;&nbsp;&nbsp;country: STRING,<br>&nbsp;&nbsp;&nbsp;primary: BOOLEAN,<br>&nbsp;&nbsp;&nbsp;shipping_name: STRING,<br>&nbsp;&nbsp;&nbsp;state: STRING,<br>&nbsp;&nbsp;&nbsp;street: STRING,<br>&nbsp;&nbsp;&nbsp;user_id: INT,<br>&nbsp;&nbsp;&nbsp;zip: STRING,<br>&nbsp;&nbsp;&nbsp;},<br>]<br><br>Status: 200<br>|
| POST /api/shipping/add        | This fetch is sent to add a new entry to the shipping info table. Due to the existence of the Primary property, we update the frontend store by sending back an array of all entries and replacing the value of the current state upon success.        | ARRAY[<br>&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;apt_number: INT,<br>&nbsp;&nbsp;&nbsp;city: STRING,<br>&nbsp;&nbsp;&nbsp;company: STRING,<br>&nbsp;&nbsp;&nbsp;country: STRING,<br>&nbsp;&nbsp;&nbsp;primary: BOOLEAN,<br>&nbsp;&nbsp;&nbsp;shipping_name: STRING,<br>&nbsp;&nbsp;&nbsp;state: STRING,<br>&nbsp;&nbsp;&nbsp;street: STRING,<br>&nbsp;&nbsp;&nbsp;user_id: INT,<br>&nbsp;&nbsp;&nbsp;zip: STRING,<br>&nbsp;&nbsp;&nbsp;},<br>]<br><br>Status: 201<br>|
| PUT /api/shipping/update/<int:shipping_id>        | This fetch is sent to update the shipping info record specified by the shipping id. Upon success, we return an array of objects representing all entries for current user.           | ARRAY[<br>&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;apt_number: INT,<br>&nbsp;&nbsp;&nbsp;city: STRING,<br>&nbsp;&nbsp;&nbsp;company: STRING,<br>&nbsp;&nbsp;&nbsp;country: STRING,<br>&nbsp;&nbsp;&nbsp;primary: BOOLEAN,<br>&nbsp;&nbsp;&nbsp;shipping_name: STRING,<br>&nbsp;&nbsp;&nbsp;state: STRING,<br>&nbsp;&nbsp;&nbsp;street: STRING,<br>&nbsp;&nbsp;&nbsp;user_id: INT,<br>&nbsp;&nbsp;&nbsp;zip: STRING,<br>&nbsp;&nbsp;&nbsp;},<br>]<br><br>Status: 200<br>|
| DELETE /api/shipping/delete     | This fetch sends a shipping info id in the body of the request. Upon successful deletion we return the updated array of user entries. | ARRAY[<br>&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;apt_number: INT,<br>&nbsp;&nbsp;&nbsp;city: STRING,<br>&nbsp;&nbsp;&nbsp;company: STRING,<br>&nbsp;&nbsp;&nbsp;country: STRING,<br>&nbsp;&nbsp;&nbsp;primary: BOOLEAN,<br>&nbsp;&nbsp;&nbsp;shipping_name: STRING,<br>&nbsp;&nbsp;&nbsp;state: STRING,<br>&nbsp;&nbsp;&nbsp;street: STRING,<br>&nbsp;&nbsp;&nbsp;user_id: INT,<br>&nbsp;&nbsp;&nbsp;zip: STRING,<br>&nbsp;&nbsp;&nbsp;},<br>]<br><br>Status: 200<br>| -->

<!-- ## Billing Info
| Request                        | Purpose                | Return Value  | 
| :----------------------------- | :--------------------: | :------------------------------ |
| GET /api/billing/<int:user_id>        | This fetch is sent to retrieve all billing info records for the user specified by the id. Upon success, we return an array of objects representing that data.           | ARRAY[<br>&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;apt_number: INT,<br>&nbsp;&nbsp;&nbsp;city: STRING,<br>&nbsp;&nbsp;&nbsp;company: STRING,<br>&nbsp;&nbsp;&nbsp;country: STRING,<br>&nbsp;&nbsp;&nbsp;primary: BOOLEAN,<br>&nbsp;&nbsp;&nbsp;shipping_name: STRING,<br>&nbsp;&nbsp;&nbsp;state: STRING,<br>&nbsp;&nbsp;&nbsp;street: STRING,<br>&nbsp;&nbsp;&nbsp;user_id: INT,<br>&nbsp;&nbsp;&nbsp;zip: STRING,<br>&nbsp;&nbsp;&nbsp;},<br>]<br><br>Status: 200<br>|
| POST /api/billing/add        | This fetch is sent to add a new entry to the billing info table. Due to the existence of the Primary property, we update the frontend store by sending back an array of all entries and replacing the value of the current state upon success.        | ARRAY[<br>&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;apt_number: INT,<br>&nbsp;&nbsp;&nbsp;city: STRING,<br>&nbsp;&nbsp;&nbsp;company: STRING,<br>&nbsp;&nbsp;&nbsp;country: STRING,<br>&nbsp;&nbsp;&nbsp;primary: BOOLEAN,<br>&nbsp;&nbsp;&nbsp;shipping_name: STRING,<br>&nbsp;&nbsp;&nbsp;state: STRING,<br>&nbsp;&nbsp;&nbsp;street: STRING,<br>&nbsp;&nbsp;&nbsp;user_id: INT,<br>&nbsp;&nbsp;&nbsp;zip: STRING,<br>&nbsp;&nbsp;&nbsp;},<br>]<br><br>Status: 201<br>|
| PUT /api/shipping/update/<int:billing_id>        | This fetch is sent to update the billing info record specified by the billing id. Upon success, we return an array of objects representing all entries for current user.           | ARRAY[<br>&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;apt_number: INT,<br>&nbsp;&nbsp;&nbsp;city: STRING,<br>&nbsp;&nbsp;&nbsp;company: STRING,<br>&nbsp;&nbsp;&nbsp;country: STRING,<br>&nbsp;&nbsp;&nbsp;primary: BOOLEAN,<br>&nbsp;&nbsp;&nbsp;shipping_name: STRING,<br>&nbsp;&nbsp;&nbsp;state: STRING,<br>&nbsp;&nbsp;&nbsp;street: STRING,<br>&nbsp;&nbsp;&nbsp;user_id: INT,<br>&nbsp;&nbsp;&nbsp;zip: STRING,<br>&nbsp;&nbsp;&nbsp;},<br>]<br><br>Status: 200<br>|
| DELETE /api/billing/delete     | This fetch sends a billing info id in the body of the request. Upon successful deletion we return the updated array of user entries. | ARRAY[<br>&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;apt_number: INT,<br>&nbsp;&nbsp;&nbsp;city: STRING,<br>&nbsp;&nbsp;&nbsp;company: STRING,<br>&nbsp;&nbsp;&nbsp;country: STRING,<br>&nbsp;&nbsp;&nbsp;primary: BOOLEAN,<br>&nbsp;&nbsp;&nbsp;shipping_name: STRING,<br>&nbsp;&nbsp;&nbsp;state: STRING,<br>&nbsp;&nbsp;&nbsp;street: STRING,<br>&nbsp;&nbsp;&nbsp;user_id: INT,<br>&nbsp;&nbsp;&nbsp;zip: STRING,<br>&nbsp;&nbsp;&nbsp;},<br>]<br><br>Status: 200<br>| -->

# Endpoints

## Auth Routes

### Current User
##
* Purpose: This fetch is sent upon initial app load and on subsequent refreshes and navigations. It returns an object representing the current user, if user is logged in.
* Method: ```POST```
* URL: ```/api/auth/```
* Successful Response: HTTP Status Code 200
```python
{
    'cart': ARRAY_OF_PRODUCT_OBJECTS,
    'createdat': STRING,
    'email': STRING,
    'id': INT,
    'updatedat': STRING,
    'username': STRING
}
```
* Error Response: HTTP Status Code 401
```python
{
  'errors': 'Unauthorized'
}
```
### Unauthorized (from @login_required)
##
* Purpose: This endpoint will be routed to in the case that a protected route does not pass validations for the current user.
* Method ```POST```
* URL: ```/api/auth/unauthorized```
* Successful Response: NA 
* Error Response: HTTP Status Code 401
```python
{
  'errors': 'Unauthorized'
}
```
### Sign Up
##
* Purpose: This fetch sends the signup form data to the backend to process the creation of a new user.
* Method: ```POST```
* URL: ```/api/auth/signup```
* Successful Response: HTTP Status 201
```python
{
   'id': INT,
   'username': STRING,
   'email': STRING,
}
```
* Error Response: HTTP Status 400
```python
{
   'errors': ARRAY_OF_STRINGS
}
```
### Login
##
* Purpose: This fetch attempts to login a user with the provided credentials.
* Method: ```POST```
* URL: ```/api/auth/login```
* Successful Response: HTTP Status 200
```python
{
   'id': INT,
   'username': STRING,
   'email': STRING,
}
```
* Error Response: HTTP Status 400
```python
{
   'errors': ARRAY_OF_STRINGS
}
```
### Logout
##
* Purpose: This fetch will logout the current user.
* Method: ```POST```
* URL: ```/api/auth/logout```
* Successful Response: HTTP Status 200
```python
{
   'message': 'User logged Out'
}
```
* Error Response: HTTP Status 404
```python
{
   'errors': 'No session'
}
```
##

## Cart Routes

### Add Item to Cart
##
* Purpose: This fetch is sent to add a new item to the cart table.
* Method: ```POST```
* URL: ```/api/cart/add```
* Body:
```python
{
   'item_id': INT
}
```
* Successful Response: HTTP Status 201
```python
{
   'id': INT,
   'category': STRING,
   'vendor_name': STRING,
   'manufacturer_id': STRING,
   'name': STRING,
   'model': STRING,
   'serial': STRING,
   'description': STRING,
   'tech_specs': STRING,
   'price': FLOAT,
   'quantity': INT
}
```
* Error Response: HTTP Status 404
```python
{
   'error': 'Item with given id Not Found'
}
```

### Update Cart Item Quantity
##
* Purpose: This fetch is sent to update the quantity value of a cart item.
* Method: ```PUT```
* URL: ```/api/cart/quantity```
* Body:
```python
{
   'id': INT,
   'val': INT
}
```
* Successful Response: HTTP Status 200
```python
{
   'id': INT,
   'category': STRING,
   'vendor_name': STRING,
   'manufacturer_id': STRING,
   'name': STRING,
   'model': STRING,
   'serial': STRING,
   'description': STRING,
   'tech_specs': STRING,
   'price': FLOAT,
   'quantity': INT
}
```
* Error Response1: HTTP Status 404
```python
{
   'errors': 'Item with given id Not Found'
}
```
* Error Response2: HTTP Status 400
```python
{
   'errors': ARRAY_OF_STRINGS
}
```
### Remove Item from Cart
##
* Purpose: This fetch is sent to delete an item from the cart.
* Method: ```DELETE```
* URL: ```/api/cart/delete/int:id```
* Successful Response: HTTP Status 200
```python
{
   'message': 'Success'
}
```
* Error Response: HTTP Status 404
```python
{
   'errors': 'Item with given id Not Found'
}
```

### Empty Cart
##
* Purpose: This fetch is sent to delete all items from the cart.
* Method: ```DELETE```
* URL: ```/api/cart/clear/int:id```
* Successful Response: HTTP Status 200
```python
{
   'message': 'Cart Emptied'
}
```
* Error Response: HTTP Status 404
```python
{
   'errors': 'Cart with given id Not Found'
}
```

## Shipping Info Routes

### Get Current User Shipping Info
##
* Purpose: This fetch is sent to retrieve all shipping info records for the user specified by the id.
* Method: ```GET```
* URL: ```/api/shipping/int:user_id```
* Successful Response: HTTP Status 200
```python
[
   {
      apt_number: INT,
      city: STRING,
      company: STRING,
      country: STRING,
      primary: BOOLEAN,
      shipping_name: STRING,
      state: STRING,
      street: STRING,
      user_id: INT,
      zip: STRING
   }
]
```
* Error Response: HTTP Status 404
```python
{
   'errors': 'User with given id Not Found'
}
```

### Create a new Shipping Record
##
* Purpose: This fetch is sent to add a new entry to the shipping info table.
* Method: ```POST```
* URL: ```/api/shipping/add```
* Body:
```python
   {
      apt_number: INT,
      city: STRING,
      company: STRING,
      country: STRING,
      primary: BOOLEAN,
      shipping_name: STRING,
      state: STRING,
      street: STRING,
      user_id: INT,
      zip: STRING
   }
```
* Success Response: HTTP Status 201
```python
[
   {
      apt_number: INT,
      city: STRING,
      company: STRING,
      country: STRING,
      primary: BOOLEAN,
      shipping_name: STRING,
      state: STRING,
      street: STRING,
      user_id: INT,
      zip: STRING
   }
]
```
* Error Response1: HTTP Status 400
```python
{
   'errors': ARRAY_OF_STRINGS
}
```
* Error Response2: HTTP Status 404
```python
{
   'errors': 'User with given id Not Found'
}
```

### Update Shipping Record
##
* Purpose: This fetch is sent to update the shipping info record specified by the shipping id.
* Method: ```PUT```
* URL: ```/api/shipping/update/int:shipping_id```
* Body:
```python
   {
      apt_number: INT,
      city: STRING,
      company: STRING,
      country: STRING,
      primary: BOOLEAN,
      shipping_name: STRING,
      state: STRING,
      street: STRING,
      user_id: INT,
      zip: STRING
   }
```
* Successful Response: HTTP Status 200
```python
[
   {
      apt_number: INT,
      city: STRING,
      company: STRING,
      country: STRING,
      primary: BOOLEAN,
      shipping_name: STRING,
      state: STRING,
      street: STRING,
      user_id: INT,
      zip: STRING
   }
]
```
* Error Response1: HTTP Status 400
```python
{
   'errors': ARRAY_OF_STRINGS
}
```
* Error Response2: HTTP Status 404
```python
{
   'errors': 'Shipping Record with given id Not Found'
}
```

### Delete Shipping Record
##
* Purpose: This fetch sends a shipping info id in the body of the request of the record to be deleted.
* Method: ```DELETE```
* URL: ```/api/shipping/delete```
* Body:
```python
{
   'id': INT
}
```
* Successful Response: HTTP Status 200
```python
[
   {
      apt_number: INT,
      city: STRING,
      company: STRING,
      country: STRING,
      primary: BOOLEAN,
      shipping_name: STRING,
      state: STRING,
      street: STRING,
      user_id: INT,
      zip: STRING
   }
]
```
* Error Response: HTTP Status 404
```python
{
   'errors': 'Shipping Record with given id Not Found'
}
```
## Billing Info Routes

### Get Current User Billing Info
##
* Purpose: This fetch is sent to retrieve all billing info records for the user specified by the id.
* Method: ```GET```
* URL: ```/api/billing/int:user_id```
* Successful Response: HTTP Status 200
```python
[
   {
      apt_number: INT,
      city: STRING,
      company: STRING,
      country: STRING,
      primary: BOOLEAN,
      shipping_name: STRING,
      state: STRING,
      street: STRING,
      user_id: INT,
      zip: STRING
   }
]
```
* Error Response: HTTP Status 404
```python
{
   'errors': 'User with the given id Not Found'
}
```

### Create new Billing Record
* Purpose: This fetch is sent to add a new entry to the billing info table.
* Method: ```POST```
* URL: ```/api/billing/add```
* Body:
```python
{
   apt_number: INT,
   city: STRING,
   company: STRING,
   country: STRING,
   primary: BOOLEAN,
   shipping_name: STRING,
   state: STRING,
   street: STRING,
   user_id: INT,
   zip: STRING
}
```
* Successful Response: HTTP 201
```python
[
   {
      apt_number: INT,
      city: STRING,
      company: STRING,
      country: STRING,
      primary: BOOLEAN,
      shipping_name: STRING,
      state: STRING,
      street: STRING,
      user_id: INT,
      zip: STRING
   }
]
```
* Error Response1: HTTP Status 400
```python
{
   'errors': ARRAY_OF_STRINGS
}
```
* Error Response2: HTTP Status 404
```python
{
   'errors': 'User with given id Not Found'
}
```

### Update Billing Record
* Purpose: This fetch is sent to update the billing info record specified by the billing id.
* Method: ```PUT```
* URL: ```/api/shipping/update/int:billing_id```
* Body:
```python
{
   apt_number: INT,
   city: STRING,
   company: STRING,
   country: STRING,
   primary: BOOLEAN,
   shipping_name: STRING,
   state: STRING,
   street: STRING,
   user_id: INT,
   zip: STRING
}
```
* Successful Response: HTTP Status 200
```python
[
   {
      apt_number: INT,
      city: STRING,
      company: STRING,
      country: STRING,
      primary: BOOLEAN,
      shipping_name: STRING,
      state: STRING,
      street: STRING,
      user_id: INT,
      zip: STRING
   }
]
```
* Error Response1: HTTP Status 400
```python
{
   'errors': ARRAY_OF_STRINGS
}
```
* Error Response2: HTTP Status 404
```python
{
   'errors': 'Billing Record with given id Not Found'
}
```
* Error Response3: HTTP Status 404
```python
{
   'errors': 'User with given id Not Found'
}
```
### Delete Billing Record
##
* Purpose: This fetch sends a billing info id in the body of the request. Upon successful deletion we return the updated array of user entries.
* Method: ```DELETE```
* URL: ```/api/billing/delete```
* Body:
```python
{
   'id': INT
}
```
* Successful Response: HTTP Status 200
```python
[
   {
      apt_number: INT,
      city: STRING,
      company: STRING,
      country: STRING,
      primary: BOOLEAN,
      shipping_name: STRING,
      state: STRING,
      street: STRING,
      user_id: INT,
      zip: STRING
   }
]
```
* Error Response: HTTP Status 404
```python
{
   'errors': 'Billing record with given id Not Found'
}
```
##


# Feature List
1. Cart
2. Shipping Entries
3. Billing Accounts

# Future Implementation Goals

1. Reviews (w/AWS image uploads)
2. ChatHelpBot (websockets)
3. Search Bar
4. Sales Professionals
5. Payment Accounts (Credit Cards / PayPal)
6. Make pixel perfect to target site.

# Connect
[LinkedIn](https://www.linkedin.com/in/brian-kiesel-94475696/)
