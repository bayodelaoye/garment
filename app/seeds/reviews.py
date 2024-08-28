from sqlalchemy.sql import text

from app.models import SCHEMA, Review, db, environment


# Adds a demo user, you can add other users here if you want
def seed_reviews():
    for review in [
        {
            "user_id": 4,
            "garment_id": 1,
            "review": "The color is stunning and the multiple pockets are incredibly useful. My child loves it!",
            "stars": 5,
        },
        {
            "user_id": 5,
            "garment_id": 1,
            "review": "Great jacket for outdoor activities, but the fit runs a bit large. Overall, very happy with the purchase.",
            "stars": 4,
        },
        {
            "user_id": 6,
            "garment_id": 2,
            "review": "Lightweight and stylish. Perfect for those breezy days. The white accents make it stand out.",
            "stars": 4,
        },
        {
            "user_id": 7,
            "garment_id": 2,
            "review": "Good quality windbreaker, but the fit is a little tight. My child loves the look though.",
            "stars": 3,
        },
        {
            "user_id": 8,
            "garment_id": 3,
            "review": "The graphic design is really cool and my kid gets lots of compliments. Durable and comfy too.",
            "stars": 5,
        },
        {
            "user_id": 9,
            "garment_id": 3,
            "review": "Nice jacket but the splash design isn't as vibrant in person. Still, it's a good buy.",
            "stars": 3,
        },
        {
            "user_id": 10,
            "garment_id": 4,
            "review": "Bright and bold. The color is exactly as pictured and it fits well. Very warm and stylish.",
            "stars": 5,
        },
        {
            "user_id": 11,
            "garment_id": 4,
            "review": "A bit heavy for a lightweight jacket, but the color and quality are fantastic.",
            "stars": 4,
        },
        {
            "user_id": 12,
            "garment_id": 5,
            "review": "Timeless denim jacket that pairs with everything. The quality is top-notch and it fits perfectly.",
            "stars": 5,
        },
        {
            "user_id": 13,
            "garment_id": 5,
            "review": "A bit stiff initially, but it softens with wear. Classic look and well-made.",
            "stars": 3,
        },
        {
            "user_id": 14,
            "garment_id": 6,
            "review": "Super soft and cozy. My child wears it all the time. The charcoal color is versatile and stylish.",
            "stars": 5,
        },
        {
            "user_id": 15,
            "garment_id": 6,
            "review": "Good hoodie, but the fit is slightly oversized. Still a great addition to the wardrobe.",
            "stars": 4,
        },
        {
            "user_id": 16,
            "garment_id": 7,
            "review": "Stylish and sporty with a great fit. The stripes add a nice touch. My kid loves it!",
            "stars": 5,
        },
        {
            "user_id": 17,
            "garment_id": 7,
            "review": "The jacket is nice but the stripes started to fade after a few washes. Overall, decent quality.",
            "stars": 3,
        },
        {
            "user_id": 18,
            "garment_id": 8,
            "review": "Simple and effective. The navy color is perfect and the jacket is very functional.",
            "stars": 4,
        },
        {
            "user_id": 19,
            "garment_id": 8,
            "review": "A bit plain, but it's a solid jacket for everyday wear. Comfortable and well-made.",
            "stars": 3,
        },
        {
            "user_id": 20,
            "garment_id": 9,
            "review": "The color combination is vibrant and fun. Keeps my child dry in the rain and is easy to put on.",
            "stars": 5,
        },
        {
            "user_id": 21,
            "garment_id": 9,
            "review": "Good raincoat, but it could use more ventilation. Still, it serves its purpose well.",
            "stars": 4,
        },
        {
            "user_id": 22,
            "garment_id": 10,
            "review": "So soft and warm. The white color is crisp and clean. A great hoodie for chilly days.",
            "stars": 5,
        },
        {
            "user_id": 23,
            "garment_id": 10,
            "review": "Love the hoodie, but white tends to get dirty easily. Otherwise, it’s very cozy.",
            "stars": 3,
        },
        {
            "user_id": 24,
            "garment_id": 11,
            "review": "The light yellow color is cheerful and the hoodie is super soft. Perfect for spring.",
            "stars": 5,
        },
        {
            "user_id": 25,
            "garment_id": 11,
            "review": "Nice hoodie but the color is a bit lighter than expected. Still, very comfortable and well-made.",
            "stars": 4,
        },
        {
            "user_id": 26,
            "garment_id": 12,
            "review": "This leather jacket looks and feels amazing. The quality is superb and it fits perfectly.",
            "stars": 5,
        },
        {
            "user_id": 27,
            "garment_id": 12,
            "review": "Expensive but worth it for the quality. The leather is durable and the jacket is stylish.",
            "stars": 3,
        },
        {
            "user_id": 28,
            "garment_id": 13,
            "review": "Extremely warm and fashionable. The puffy design is both cozy and trendy.",
            "stars": 5,
        },
        {
            "user_id": 29,
            "garment_id": 13,
            "review": "Great jacket but a bit bulky. Still, it's perfect for very cold weather.",
            "stars": 3,
        },
        {
            "user_id": 30,
            "garment_id": 14,
            "review": "The blush pink color is lovely and the fit is flattering. Perfect for dressing up or down.",
            "stars": 5,
        },
        {
            "user_id": 31,
            "garment_id": 14,
            "review": "Nice shirt, but the material is a bit thin. Overall, the color and fit are great.",
            "stars": 2,
        },
        {
            "user_id": 32,
            "garment_id": 15,
            "review": "Comfortable and supportive. The cocoa color is a nice change from typical sports bras.",
            "stars": 5,
        },
        {
            "user_id": 33,
            "garment_id": 15,
            "review": "Good fit and support, but the straps could be a bit more adjustable. Still, a solid choice.",
            "stars": 4,
        },
        {
            "user_id": 34,
            "garment_id": 16,
            "review": "Beautiful dress with a flattering fit. The burgundy color is elegant and perfect for special occasions.",
            "stars": 5,
        },
        {
            "user_id": 35,
            "garment_id": 16,
            "review": "Lovely dress, but the fabric is a bit delicate. Overall, very happy with the look and fit.",
            "stars": 4,
        },
        {
            "user_id": 36,
            "garment_id": 17,
            "review": "The fuchsia color is vibrant and the top is very comfortable. Fits true to size.",
            "stars": 5,
        },
        {
            "user_id": 37,
            "garment_id": 17,
            "review": "Great top but the color is a bit brighter than expected. Still, it’s a nice addition to the wardrobe.",
            "stars": 3,
        },
        {
            "user_id": 38,
            "garment_id": 18,
            "review": "Warm and cozy. The autumn color is perfect for the season and the fit is great.",
            "stars": 5,
        },
        {
            "user_id": 39,
            "garment_id": 18,
            "review": "Nice sweater, but it tends to shed a little. The color and warmth are excellent, though.",
            "stars": 2,
        },
        {
            "user_id": 40,
            "garment_id": 19,
            "review": "Extremely soft and comfortable. The ivory color is versatile and looks great with anything.",
            "stars": 5,
        },
        {
            "user_id": 41,
            "garment_id": 19,
            "review": "Lovely sweater but the neck is a bit wide. Overall, very comfortable and stylish.",
            "stars": 3,
        },
        {
            "user_id": 42,
            "garment_id": 20,
            "review": "The polka dot design is adorable and the dress fits perfectly. Great for summer events.",
            "stars": 5,
        },
        {
            "user_id": 43,
            "garment_id": 20,
            "review": "Cute dress but the fabric is a bit thin. Still, the design and fit are lovely.",
            "stars": 4,
        },
        {
            "user_id": 44,
            "garment_id": 21,
            "review": "Beautiful dress with a lovely tiered design. The blush pink color is perfect for spring.",
            "stars": 5,
        },
        {
            "user_id": 45,
            "garment_id": 21,
            "review": "Nice dress, but the sizing runs a bit small. The color and design are fantastic, though.",
            "stars": 2,
        },
        {
            "user_id": 46,
            "garment_id": 22,
            "review": "The scarlet color is stunning and the top is very comfortable. Great for various occasions.",
            "stars": 5,
        },
        {
            "user_id": 47,
            "garment_id": 22,
            "review": "Nice top, but the fabric is slightly see-through. The color and fit are otherwise great.",
            "stars": 2,
        },
        {
            "user_id": 48,
            "garment_id": 23,
            "review": "Perfect crop top with a sleek design. The fit is great and the fabric is very soft.",
            "stars": 5,
        },
        {
            "user_id": 49,
            "garment_id": 23,
            "review": "Nice top but a bit shorter than expected. Overall, it’s stylish and well-made.",
            "stars": 4,
        },
        {
            "user_id": 50,
            "garment_id": 24,
            "review": "A timeless piece that goes with everything. The quality is excellent and it’s very comfortable.",
            "stars": 5,
        },
        {
            "user_id": 51,
            "garment_id": 24,
            "review": "Great sweater, but it tends to pill a bit. The classic black color and fit are fantastic.",
            "stars": 3,
        },
        {
            "user_id": 52,
            "garment_id": 25,
            "review": "The sky blue color is vibrant and the hoodie is super soft. My child wears it all the time.",
            "stars": 5,
        },
        {
            "user_id": 53,
            "garment_id": 25,
            "review": "Good quality but the hoodie shrinks a little after washing. Still, it’s very cute and comfy.",
            "stars": 4,
        },
        {
            "user_id": 54,
            "garment_id": 26,
            "review": "Simple and stylish. The black color is great for everyday wear and the hoodie is cozy.",
            "stars": 5,
        },
        {
            "user_id": 55,
            "garment_id": 26,
            "review": "Nice hoodie but the color fades a bit after a few washes. Comfortable and well-fitting.",
            "stars": 4,
        },
        {
            "user_id": 56,
            "garment_id": 27,
            "review": "The colorful design is amazing and my kid loves it. Very comfortable and well-made.",
            "stars": 5,
        },
        {
            "user_id": 57,
            "garment_id": 27,
            "review": "Great hoodie but the colors are not as bright as shown in the pictures. Still, it's fun and comfy.",
            "stars": 3,
        },
        {
            "user_id": 58,
            "garment_id": 28,
            "review": "The forest green color is rich and the jumper is warm and cozy. My child loves wearing it.",
            "stars": 5,
        },
        {
            "user_id": 59,
            "garment_id": 28,
            "review": "Nice jumper, but it’s a bit itchy. The color and warmth are excellent though.",
            "stars": 2,
        },
        {
            "user_id": 60,
            "garment_id": 29,
            "review": "The color-block design is fantastic and the jacket is very functional. My child looks great in it.",
            "stars": 5,
        },
        {
            "user_id": 61,
            "garment_id": 29,
            "review": "Good jacket but the color-block design isn’t as vibrant as I expected. Still, it’s well-made.",
            "stars": 2,
        },
        {
            "user_id": 62,
            "garment_id": 30,
            "review": "The golden oak color is unique and stylish. The jacket is warm and comfortable.",
            "stars": 5,
        },
        {
            "user_id": 63,
            "garment_id": 30,
            "review": "Nice jacket but the color is a bit different from the picture. Quality and fit are great though.",
            "stars": 3,
        },
        {
            "user_id": 64,
            "garment_id": 31,
            "review": "A classic denim coat that’s well-made and stylish. Fits true to size and looks great.",
            "stars": 5,
        },
        {
            "user_id": 65,
            "garment_id": 31,
            "review": "Good quality coat but a bit stiff initially. The denim softens with wear, making it a good buy.",
            "stars": 3,
        },
        {
            "user_id": 66,
            "garment_id": 32,
            "review": "The ocean blue color is vibrant and the sweater is soft and warm. My child loves it.",
            "stars": 5,
        },
        {
            "user_id": 67,
            "garment_id": 32,
            "review": "Nice sweater but it pills a bit after washing. The color and fit are excellent, though.",
            "stars": 3,
        },
        {
            "user_id": 68,
            "garment_id": 33,
            "review": "Comfortable and warm. The navy color is perfect and it fits well.",
            "stars": 5,
        },
        {
            "user_id": 69,
            "garment_id": 33,
            "review": "Good sweatshirt but it shrinks slightly after washing. Overall, very cozy and stylish.",
            "stars": 3,
        },
        {
            "user_id": 70,
            "garment_id": 34,
            "review": "The midnight blue color is deep and stylish. The jacket is well-made and perfect for cool days.",
            "stars": 5,
        },
        {
            "user_id": 71,
            "garment_id": 34,
            "review": "Nice jacket but the zip can be a bit tricky. Overall, the quality and fit are great.",
            "stars": 3,
        },
        {
            "user_id": 72,
            "garment_id": 35,
            "review": "A sleek black jacket that’s both stylish and functional. My child loves it.",
            "stars": 5,
        },
        {
            "user_id": 73,
            "garment_id": 35,
            "review": "Good jacket but the black color fades slightly over time. Still, it’s very comfortable and practical.",
            "stars": 3,
        },
        {
            "user_id": 74,
            "garment_id": 36,
            "review": "The striped design is fantastic and the jacket fits well. Great quality.",
            "stars": 5,
        },
        {
            "user_id": 1,
            "garment_id": 36,
            "review": "Nice jacket but the stripes aren't as bright as expected. Still a good buy for the price.",
            "stars": 4,
        },
    ]:
        db.session.add(Review(**review))
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()
