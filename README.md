# mongo_default_driver
Learning operations using mongo db default driver with node.

The first app.js does file reads from a database called 'shopDB' that has a table called 'products.' The contents are shown from a command line find operation:

> db.products.find()
{ "_id" : 1, "name" : "Pen", "price" : 1.2, "stock" : 32 }
{ "_id" : 3, "name" : "SuperPen", "price" : 2.2 }
{ "_id" : 4, "name" : "Rubber", "price" : 1.3, "stock" : 43, "reviews" : [ { "authorName" : "Sally", "rating" : 5, "review" : "Best rubber ever!" }, { "authorName" : "John", "rating" : 5, "review" : "Awesome rubber!" } ] }
{ "_id" : 2, "name" : "Pencil", "price" : 0.8, "stock" : 32, "reviews" : [ { "authorName" : "Bob", "rating" : 4, "review" : "Overall good, printed label can smudge!" }, { "authorName" : "Susan", "rating" : 5, "review" : "Sharpens perfectly and rarely breaks!" } ] }
> 
