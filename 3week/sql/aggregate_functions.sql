SELECT COUNT (*) FROM students WHERE age > 25;

-- SELECT * FROM students WHERE age > 30 ORDER BY first_name, last_name LIMIT 5;

SELECT COUNT (*) AS "Student Count" FROM students WHERE age > 25;


SELECT SUM(age) FROM students;

SELECT AVG(age) AS "Average Age of students" FROM students;

SELECT first_name, COUNT (*) AS occurances 
FROM students GROUP BY age;


SELECT age, COUNT(*) AS occurances
FROM students 
WHERE age IS NOT NULL
GROUP BY age
ORDER BY age ASC;

SELECT * FROM students WHERE id=505;

UPDATE students
SET first_name = "John"
WHERE id = 504;

DELETE FROM students WHERE id=503;

