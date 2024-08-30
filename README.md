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
     "id": self.id,
     "first_name": self.first_name,
     "last_name": self.last_name,
     "email": self.email,
     "username": self.username,
     "hashed_password": self.hashed_password,
     "created_at": self.created_at,
     "updated_at": self.updated_at,
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
     "id": self.id,
     "first_name": self.first_name,
     "last_name": self.last_name,
     "email": self.email,
     "username": self.username,
     "hashed_password": self.hashed_password,
     "created_at": self.created_at,
     "updated_at": self.updated_at,
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
     "id": self.id,
     "first_name": self.first_name,
     "last_name": self.last_name,
     "email": self.email,
     "username": self.username,
     "hashed_password": self.hashed_password,
     "created_at": self.created_at,
     "updated_at": self.updated_at,
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
* URL: ```/api/cart/```
* Body:
```python
{
   'garment_id': 1
}
```
* Successful Response: HTTP Status 201
```python
{
   'message': "Added item to cart"
}
```
* Error Response: HTTP Status 404
```python
{
   'error': 'Item with given id Not Found'
}
```

### Read Cart Items
##
* Purpose: This fetch is sent and gets the items in the cart.
* Method: ```GET```
* URL: ```/api/cart/```
* Successful Response: HTTP Status 200
```python
{
     "id": self.id,
     "user_id": self.user_id,
     "created_at": self.created_at,
     "updated_at": self.updated_at,
     "cart_items": [
      cart_item.to_dict_with_garments() for cart_item in self.cart_items
     ],
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
* URL: ```/api/cart/<int:cart_item_id>```
* Body:
```python
{
   'quantity': 5,
}
```
* Successful Response: HTTP Status 200
```python
{
     "id": self.id,
     "cart_id": self.cart_id,
     "garment_id": self.garment_id,
     "quantity": self.quantity,
     "created_at": self.created_at,
     "updated_at": self.updated_at,
     "garment": self.garment.to_dict(),
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
   'message': 'Cart item deleted'
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
* URL: ```/api/cart/```
* Successful Response: HTTP Status 200
```python
{
   'message': 'Cart and cart items deleted'
}
```
* Error Response: HTTP Status 404
```python
{
   'errors': 'Cart with given id Not Found'
}
```

## Reviews Routes

### Get Reviews for a Garment
##
* Purpose: This fetch is sent to retrieve all the reviews for a garment specified by the garment's id.
* Method: ```GET```
* URL: ```/api/reviews/<int:garment_id>```
* Successful Response: HTTP Status 200
```python
[
   {
        "id": self.id,
        "user_id": self.user_id,
        "garment_id": self.garment_id,
        "review": self.review,
        "stars": self.stars,
        "created_at": self.created_at,
        "updated_at": self.updated_at,
   }
]
```
* Error Response: HTTP Status 404
```python
{
   'errors': 'Not Found'
}
```

### Create a new Review
##
* Purpose: This fetch is sent to add a new review to the reviews table.
* Method: ```POST```
* URL: ```/api/reviews/<int:garment_id>/new```
* Body:
```python
   {
      garment_id: 1,
      review: "This is a very nice jacket. I love to wear it in winter",
      stars: 5,
   }
```
* Success Response: HTTP Status 201
```python
{
     "id": self.id,
     "user_id": self.user_id,
     "garment_id": self.garment_id,
     "review": self.review,
     "stars": self.stars,
     "created_at": self.created_at,
     "updated_at": self.updated_at,
}
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

### Update Review Record
##
* Purpose: This fetch is sent to update the shipping info record specified by the shipping id.
* Method: ```PUT```
* URL: ```/api/reviews/<int:garment_id>```
* Body:
```python
   {
      garment_id: 1,
      review: "Updated the review for this garment",
      stars: 2,
   }
```
* Successful Response: HTTP Status 200
```python
{
     "id": self.id,
     "user_id": self.user_id,
     "garment_id": self.garment_id,
     "review": self.review,
     "stars": self.stars,
     "created_at": self.created_at,
     "updated_at": self.updated_at,
}
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
   'errors': 'Review Record with given id Not Found'
}
```

### Delete Review Record
##
* Purpose: This fetch sends a shipping info id in the body of the request of the record to be deleted.
* Method: ```DELETE```
* URL: ```/api/reviews/<int:garment_id>```
* Successful Response: HTTP Status 200
```python
{
     'message' : 'Review deleted'
}
```
* Error Response: HTTP Status 404
```python
{
   'errors': 'Review Record with given id Not Found'
}
```
## Favorites Routes

### Get Current User Favorites
##
* Purpose: This fetch is sent to retrieve all billing info records for the user specified by the id.
* Method: ```GET```
* URL: ```/api/favorites/```
* Successful Response: HTTP Status 200
```python
[
   {
        "id": self.id,
        "user_id": self.user_id,
        "garment_id": self.garment_id,
        "created_at": self.created_at,
        "updated_at": self.updated_at,
   }
]
```
* Error Response: HTTP Status 404
```python
{
   'errors': 'User with the given id Not Found'
}
```

### Create new a Favorite Record
* Purpose: This fetch is sent to add a new entry to the billing info table.
* Method: ```POST```
* URL: ```/api/favorites/```
* Body:
```python
{
     garment_id: 1,
}
```
* Successful Response: HTTP 201
```python
{
     "id": self.id,
     "user_id": self.user_id,
     "garment_id": self.garment_id,
     "created_at": self.created_at,
     "updated_at": self.updated_at
}
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

### Delete a Favorite Record
##
* Purpose: This fetch sends a billing info id in the body of the request. Upon successful deletion we return the updated array of user entries.
* Method: ```DELETE```
* URL: ```/api/favorite/<int:garment_id>```
* Successful Response: HTTP Status 200
```python
{
     'message': 'Favorite item deleted'
}
```
* Error Response: HTTP Status 404
```python
{
   'errors': 'Favorite record with given id Not Found'
}
```

# Feature List
1. Cart
2. Reviews
3. Favorites
4. Garments

# Connect
[LinkedIn](https://www.linkedin.com/in/bayode-olaoye/)
