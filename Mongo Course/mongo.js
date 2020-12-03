###Terminal Commands for MongoDB
// use mongoCourse

// show dbs 

// db

// #Creating Users
db.createUser({
    user: 'matthew',
    pwd: 'password',
    customData: { startDate: new Date() },
    roles: [
        { role: 'clusterAdmin', db: 'admin' },
        { role: 'readAnyDatabase', db: 'admin' },
        'readWrite'
    ]
})

// #See all users
// db.getUsers()

// #Deleting Users
// db.dropuser('matthew')

// ###Creating a collection in Mongo
// db.createCollection('books')

// show collections 

// ###Inserting Documents into a MongoDB

db.books.insert({
    "name": "OOP Programming",
    "publishedDate": new Date(),
    "authors": [       
        {"name": "Jon Snow Jr"},
        {"name": "Ed Snark"},       
    ]
})
// ###Inserting Many Documents into a MongoDB

db.books.insertMany([
    {
      "name": "Confident Ruby",
      "publishedDate": new Date(),
      "authors": [
        { "name": "Avdi Grimm" }
      ]
    },
    {
      "name": "The War of Art",
      "publishedDate": new Date(),
      "authors": [
        {"name": "Steven Pressfield"}
      ]
    },
    {
      "name": "Blink",
      "publishedDate": new Date(),
      "authors": [
        {"name": "Malcolm Gladwell"}
      ]
    },
    db.books.insert({
        "name": "OOP Programming",
        "publishedDate": new Date(),
        "authors": [       
            {"name": "Jon Snow Jr"},
            {"name": "Ed Snark"},       
        ]
    }),
    db.books.insert({
        "name": "OOP Programming",
        "publishedDate": new Date(),
        "authors": [       
            {"name": "Jon Snow Jr"},
            {"name": "Ed Snark"},       
        ]
    }),
    db.books.insert({
        "name": "OOP Programming",
        "publishedDate": new Date(),
        "authors": [       
            {"name": "Jon Snow Jr"},
            {"name": "Ed Snark"},       
        ]
    })
  ])

//   ###How to Query All Documents in a MongoDB Collection with the find() Method

// db.books.find()

// # Will return a much nicer and more formatted setup
// db.books.find().pretty()

// ### How to Query for Specific Documents in a MongoDB Collection

// db.books.find( {name: "OOP Programming"} ).pretty()

// ### Introduction to MongoDB Projections      
// db.books.find(
//     {
//       name: "Confident Ruby"
//     },
//     {
//       _id: 0,
//       name: 1,
//       authors: 1
//     }
//   ).pretty()

// ###How to Query for a Portion of a String in a MongoDB Document

// db.books.findOne({ name: /.*2873.*/i })

// db.books.insert({
//     "name": "Deep Work: Rules for Focused Success in a Distracted World",
//     "publishedDate": new Date(),
//     "authors": [
//         {"name": "Cal Newport"}
//     ]
// });

// ###How to Delete Documents in MongoDB

// db.books.remove({name: "OOP Programming"}, 1) // Removes a single document
// db.books.remove({name: "OOP Programming"}) // Removes all documents

//###How to Include Nested Fields in a find Query

// db.books.insert({
//     "name": "Blink",
//     "publishedDate": new Date(),
//     "authors": [
//         { "name": "Malcolm Gladwell", "active": "true" },
//         { "name": "Ghost Writer", "active": "true" }
//     ]
// });
// db.books.find(
//   {
//     name: "Blink"
//   },
//   {
//     name: 1,
//     publishedDate: 1,
//     "authors.name": 1
//   }
// ).pretty()

// ###Using the findOne Method in MongoDB to Query for a Single Document

// db.books.findOne({ name: "OOP Programming" } )

// ###How to Check if a Field Exists in a MongoDB Document

// db.books.insert( 
//     {
//       "name": "Deep Work: Rules for Focused Success in a Distracted World",
//       "publishedDate": new Date(),
//       "reviews": 100,
//       "authors": [
//         {"name": "Cal Newport"}
//       ]
//     }
//   )
  
//   db.books.find({ "_id": { $exists: true } })
//   db.books.find({ reviews: { $exists: false } })
