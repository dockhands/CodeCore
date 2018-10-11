

-- Find the average line_item total price (meaning quantity * price) for each order that were completed in January 2016 month.
SELECT order_id, AVG(price * quantity)
FROM line_items
INNER JOIN orders ON orders.id = line_items.order_id
WHERE orders.completed_on  >= '2016-01-01' AND orders.completed_on  <= '2016-02-01'
GROUP BY order_id


-- Select product names, product prices and the lowest price they were sold at during the last 6 months.

SELECT products.name, products.price, MIN(line_items.price) AS lowest_price_per_item
FROM line_items
INNER JOIN orders ON orders.id = line_items.order_id
INNER JOIN products ON products.id = line_items.product_id
WHERE orders.completed_on >= '2018-01-25' 
GROUP BY products.name, products.price;

-- [Note] the total price in the line_items table is price per unit and not total price.




-- Calculate how many items in stock we've ever had for each product (remaining or sold) in the database.
SELECT products.name, products.id, products.remaining_quantity +SUM(line_items.quantity) AS total_ever
FROM line_items
INNER JOIN products ON products.id = line_items.product_id
GROUP BY products.name, products.id, remaining_quantity
ORDER BY products.id

-- Find the average order total price for all the orders in the system



SELECT name, product_id, line_items.price, quantity
FROM orders
INNER JOIN line_items ON line_items.order_id = orders.id
INNER JOIN products ON products.id = line_items.product_id

--Find the average order total price for all the orders in the system
 
-- [Note] the price in the line_items table is price per unit and not total price.


--Find the average order total price for all the orders in the system
SELECT orders.id AS order_NUMBER, name, product_id, 
line_items.price AS price_per_unit, quantity AS quant_sold,
(quantity*line_items.price) AS total_cost
FROM orders
INNER JOIN line_items ON line_items.order_id = orders.id
INNER JOIN products ON products.id = line_items.product_id

ORDER BY order_id

 --Find the average order total price for all the orders in the system

 SELECT AVG(total_cost)
FROM (
	SELECT orders.id, 
	SUM (quantity*line_items.price) AS total_cost
	FROM orders
	INNER JOIN line_items ON line_items.order_id = orders.id
	GROUP BY orders.id
) AS total_cost