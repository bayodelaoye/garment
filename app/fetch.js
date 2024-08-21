// Create a portfolio
fetch("/api/garments/", {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({
    portfolio_name: "New Portfolio",
    cash_balance: 100,
    total_amount: 200,
    is_active: true,
    user_id: 1,
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

// Delete a portfolio by its id
fetch("/api/garments/1", {
  method: "DELETE",
  headers: {
    "content-type": "application/json",
  },
});
