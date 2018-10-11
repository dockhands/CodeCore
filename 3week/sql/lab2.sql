
-- Build a query that groups the products by their sale price and show the number of products in that price and the sum of remaining quantity. Label the count `product_count`



SELECT name, price
FROM products 
WHERE price > sale_price
ORDER BY price ASC
LIMIT 1;

SELECT sale_price
FROM products
GROUP BY sale_price, COUNT(*); 

--From the students table:

-- Find the number of students named 'Elinore'.

SELECT COUNT(first_name LIKE '%Elinore%' OR last_name LIKE '%Elinore%') AS Num_of_Elinores
FROM students;

SELECT COUNT(first_name) AS Num_of_Elinores
FROM students
WHERE  first_name LIKE '%Elinore%' OR last_name LIKE '%Elinore%';


-- List the `first_name`s that occur more than once in students, with the number occurrences of that name.

SELECT first_name, COUNT (*) AS occurances 
FROM students 
GROUP BY first_name
HAVING COUNT (first_name) > 1;

-- Refine the above query to list the 20 most common first_names among students, in order first of how common they are, and alphabetically when names have the same count.

SELECT first_name, COUNT (*) AS occurances 
FROM students 
GROUP BY first_name
HAVING COUNT (first_name) > 1
ORDER BY COUNT (first_name) DESC
LIMIT 20;

-- From the products table:

-- Find the most expensive product.

SELECT name, price
FROM products 
ORDER BY price DESC
LIMIT 1;

-- Find the cheapest product that is on sale.

SELECT name, price
FROM products 
WHERE price > sale_price
ORDER BY price ASC
LIMIT 1;

-- Find the total value of all inventory in stock (use sale price).

SELECT SUM(sale_price)
FROM products;


