-- Comment: 
INSERT INTO students (first_name, last_name, phone_number, email) 
VALUES ('John', 'Smith','john@smith.com','778.921.1922','45', '2016-01-01') RETURNING id;

//Create a student record with the following attributes: first_name: John, last_name: Smith, Age: 45, email: john@smith.com registration_date: January 1st 2016, phone_number: 778.778.7787

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