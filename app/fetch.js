// Create a garment
fetch("/api/garments/new", {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({
    user_id: 1,
    title: "Create New Garment",
    price: 200,
    discounted_price: 99.99,
    description:
      "Add a touch of sporty style to your child's wardrobe with the Striped Night Kids' Jacket. This sleek black jacket features a bold white stripe running down the sleeves, creating a dynamic, modern look. Made from a durable, water-resistant fabric, it provides reliable protection against the elements while ensuring comfort. The jacket includes a full-zip front, adjustable hood, and elastic cuffs for a snug fit. With its eye-catching design and practical features, it's perfect for school, sports, or casual outings.",
    inventory: 50,
    category: "MEN",
  }),
});

// Read all garments
fetch("/api/garments/", {
  method: "GET",
  headers: {
    "content-type": "application/json",
  },
});

// Read all garments for men
fetch("/api/garments/men", {
  method: "GET",
  headers: {
    "content-type": "application/json",
  },
});

// Read all garments for women
fetch("/api/garments/women", {
  method: "GET",
  headers: {
    "content-type": "application/json",
  },
});

// Read all garments for kids
fetch("/api/garments/kids", {
  method: "GET",
  headers: {
    "content-type": "application/json",
  },
});

// Read garment by it's id
fetch("/api/garments/1", {
  method: "GET",
  headers: {
    "content-type": "application/json",
  },
});

// Update a portfolio's name by its id
fetch("/api/garments/1", {
  method: "PUT",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({
    portfolio_name: "New Portfolio Name",
  }),
});

// Delete a garment by it's id
fetch("/api/garments/1", {
  method: "DELETE",
  headers: {
    "content-type": "application/json",
  },
});

//---------------------------------------------------------------------------------------//

// Create a review
fetch("/api/reviews/1/new", {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({
    user_id: 1,
    title: "Create New Garment",
    review: "This is a new review to test. I love this jacket",
    stars: 5,
  }),
});

// Read all reviews for a garment by garment id
fetch("/api/reviews/1", {
  method: "GET",
  headers: {
    "content-type": "application/json",
  },
});

// Update a review by garment id
fetch("/api/reviews/1", {
  method: "PUT",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({
    review: "New updated review to test out",
    stars: 1,
  }),
});

// Delete a review by garment id
fetch("/api/reviews/1", {
  method: "DELETE",
  headers: {
    "content-type": "application/json",
  },
});

//---------------------------------------------------------------------------------------//

// Add to cart
fetch("/api/cart", {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({
    garment_id: 1,
  }),
});

// Read all items in cart
fetch("/api/cart", {
  method: "GET",
  headers: {
    "content-type": "application/json",
  },
});

// Update a cart item
fetch("/api/cart/2", {
  method: "PUT",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({
    quantity: 9,
  }),
});

// Delete a cart item
fetch("/api/cart/1", {
  method: "DELETE",
  headers: {
    "content-type": "application/json",
  },
});

// Delete cart
fetch("/api/cart", {
  method: "DELETE",
  headers: {
    "content-type": "application/json",
  },
});

//---------------------------------------------------------------------------------------//

// Add to favorites
fetch("/api/favorites", {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({
    garment_id: 1,
  }),
});

// Read all favorites
fetch("/api/favorites", {
  method: "GET",
  headers: {
    "content-type": "application/json",
  },
});

// Delete a favorite by garment id
fetch("/api/favorites/1", {
  method: "DELETE",
  headers: {
    "content-type": "application/json",
  },
});
