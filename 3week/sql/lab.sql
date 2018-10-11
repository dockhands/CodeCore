====


INSERT INTO students (first_name, last_name, email, phone_number, age, registration_date) 
VALUES ('John', 'Smith','john@smith.com','778.921.1922','45', '2016-01-01') RETURNING id;

SELECT *
FROM students
ORDER BY id DESC
LIMIT 1;

UPDATE students
SET age = 50
WHERE id=504;

DELETE FROM students 
WHERE id=504;


--Select the first 10 students whose ages are between 35 and 45.

SELECT * FROM students WHERE age>35 AND age< 45 LIMIT 10;

--Select the third set of 10 students whose ages are more than 25 and whose first names contain `le`. The students must be ordered by their id in ascending order then first name in a descending order.

SELECT * FROM students WHERE age>25 AND first_name ILIKE '%le%' ORDER BY id ASC, first_name DESC OFFSET 20 LIMIT 10;


--Select the 10 oldest students (You should ignore students with an age that is `NULL`)

SELECT age
FROM students 
WHERE age IS NOT NULL
ORDER BY age DESC
LIMIT 10;


SELECT *
FROM students 
WHERE age IS NOT NULL
ORDER BY age DESC
LIMIT 10;


-- Select all students with age 45 whose last names contain the letter n.

SELECT *
FROM students 
WHERE age >45 AND last_name ILIKE '%n%';

--Select all the products that are on sale.

SELECT *
FROM products 
WHERE sale_price < price; 

--Select all the products that are on sale and have remaining items in stock ordered by the sale price in ascending order.


SELECT *
FROM products 
WHERE sale_price < price AND remaining_quantity > 0 
ORDER BY sale_price ASC;

-- Select all the products priced between 25 and 50 (regular price) and that are on sale.
SELECT *
FROM products 
WHERE price > 25 AND price < 50 AND sale_price < price;


---- Select the product whose stock has the most value (use sale price)

SELECT *
FROM products 
WHERE sale_price < price ORDER BY sale_price ASC LIMIT 1;


-- Select the most expensive product whose price is between 25 and 50 with remaining quantity

SELECT MAX(price) AS maximum_price
FROM products 
WHERE price > 25 AND price < 50 AND remaining_quantity > 0; 

--Select all products on sale with remaining quantity ordered by their price and then their name

SELECT *
FROM products 
WHERE sale_price < price AND remaining_quantity > 0 
ORDER BY sale_price ASC, name ASC;

-- Select the second set 20 results based on the previous query

SELECT *
FROM products 
WHERE sale_price < price AND remaining_quantity > 0 
ORDER BY sale_price ASC, name ASC OFFSET 20 LIMIT 20;

--Find the average price of all products
SELECT AVG(price) AS average_price
FROM products;

--Find the average sale_price of all products that are on sale
SELECT AVG(sale_price) AS average_sale_price
FROM products
WHERE sale_price < price; 

--Find the average price of all products that are on sale with remaining quantity
SELECT AVG(price) AS average_price
FROM products
WHERE sale_price < price AND remaining_quantity > 0; 


--Update all the products whose name contains `paper` (case insensitive) to have a remaining quantity of 0

UPDATE products
SET remaining_quantity = '0'
WHERE products.name LIKE '%paper%';

--Update all the products whose name contains `paper` or `steel` to have a remaining quantity of a random number between 5 and 25

UPDATE products
SET remaining_quantity = FLOOR(RANDOM()*(25-5+1))+5
WHERE products.name ILIKE '%paper%' OR products.name ILIKE '%steel%';



--Select the second set of 10 cheapest products (by `price` or `sale_price`) with remaining quantity

SELECT price AS lowest_price
FROM products
WHERE remaining_quantity > 0
ORDER BY price ASC OFFSET 10 LIMIT 10;

-- Build a query that groups the products by their sale price and show the number of products in that price and the sum of remaining quantity. Label the count `product_count`


SELECT sale_price, COUNT(*) AS count_of_sale_price, SUM(remaining_quantity) AS sum_of_quant 
FROM products
GROUP BY sale_price;


