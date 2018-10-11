
-- cross join 
SELECT * FROM students
CROSS JOIN projects 
LIMIT 100;


--- Inner Join
SELECT * FROM students
INNER JOIN projects 
ON students.id = projects.student_id
ORDER BY first_name;



SELECT students.id, first_name, last_name, title FROM students
INNER JOIN projects 
ON students.id = projects.student_id
ORDER BY title;

-- select students who are enrolled in a course titled hybrid matrix
SELECT * FROM students
INNER JOIN enrolments ON students.id = enrolments.student_id
--INNER JOIN courses ON courses.id = enrolments.course_id
WHERE course_id ILIKE '%Jo';


SELECT title, first_name, last_name, score 
FROM courses
INNER JOIN enrolments ON enrolments.course_id = courses.id
INNER JOIN students ON students.id = enrolments.student_id
WHERE first_name ILIKE 'Jo%';


SELECT title, ROUND(AVG(score)) AS avg_score
FROM courses
INNER JOIN enrolments ON courses.id = enrolments.course_id
GROUP BY title
ORDER BY avg_score DESC;

SELECT title, max(registration_date) AS max_reg_date
FROM courses 
INNER JOIN enrolments ON courses.id = enrolments.course_id
INNER JOIN students ON students.id = enrolments.student_id
GROUP BY title
ORDER BY max_reg_date DESC;


SELECT course_title, student_count
FROM ( 
	SELECT title AS course_title, COUNT(student_id) AS student_count
	FROM courses 
	INNER JOIN enrolments ON courses.id = enrolments.course_id
	GROUP BY course_title
) AS course_count 
WHERE student_count > 2 
ORDER BY student_count DESC;


SELECT students.id, first_name, last_name, title 
FROM students 
INNER JOIN projects ON projects.student_id = students.id
WHERE students.id IN (4, 6, 10, 12, 20);



SELECT products.name, SUM(line_items.quantity) AS total_sold, SUM(products.remaining_quantity) AS total_remaining
FROM line_items
INNER JOIN products ON products.id = line_items.product_id
GROUP BY products.name


-- Next Module
-- Write the following SQL Queries:

-- Select all the products that have been purchased in the last 12 months.


-- Select the top 10 products in terms of last year's gross sales.
-- Select all the products that weren't purchased during the last 12 months.
-- [Note] the price in the line_items table is price per unit and not total price.



SELECT products.name, products.id, products.remaining_quantity +SUM(line_items.quantity) AS total_ever
FROM line_items
INNER JOIN products ON products.id = line_items.product_id
GROUP BY products.name, products.id, remaining_quantity
ORDER BY products.id

