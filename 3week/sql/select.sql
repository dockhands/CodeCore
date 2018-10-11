SELECT * FROM students;

SELECT * FROM students WHERE id=100;

SELECT * FROM students WHERE registration_date>'2018-02-23';

SELECT * FROM students WHERE age>40 OR age< 20;

SELECT * FROM students WHERE first_name LIKE 'Jo%';

SELECT * FROM students WHERE first_name OR last_name LIKE '%nn%' ;

SELECT * FROM students WHERE first_name ILIKE '%nn%'  OR last_name ILIKE '%nn%';

SELECT * FROM students WHERE age > 30 ORDER BY first_name, last_name LIMIT 5;

SELECT * FROM students OFFSET 20 LIMIT 10; 


=====


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
