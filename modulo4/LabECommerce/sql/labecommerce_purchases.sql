CREATE TABLE labecommerce_purchases(
id INT PRIMARY KEY,
user_id INT NOT NULL,
product_id INT NOT NULL,
FOREIGN KEY (user_id) REFERENCES labecommerce_users(id),
FOREIGN KEY (product_id) REFERENCES labecommerce_products(id),
quantity INT NOT NULL,
total_price INT NOT NULL
);

SELECT labecommerce_users.name, labecommerce_products.name, quantity,total_price  FROM labecommerce_purchases
JOIN labecommerce_users ON user_id = labecommerce_users.id
JOIN labecommerce_products ON product_id = labecommerce_products.id
WHERE user_id LIKE 123456;

INSERT INTO labecommerce_purchases(id, user_id, product_id, quantity, total_price)
VALUES(
"123456", 
"123456",
"123456",
2,
180
);