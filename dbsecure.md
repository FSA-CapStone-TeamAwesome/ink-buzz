This is the file for the database authorization log, the current db state will be recorded here.

**BEGIN DB RULLES LOG \***
rules_version = '2';
service cloud.firestore {
match /databases/{database}/documents {
match /{document= \*\*} {
allow read, write: if request.auth !=null
}
}
}

**END DB RULES LOG \***

//drawback, you do not get feedback back for rejected calls

//get - part of read umbrella - good for using validation
//list - part of read umbrella
//create
//delete
//update
// /databases/{authId} is equivalent to the api route /databases/:authid

//requests are contained within the request object, which is just called request
//db items are contained within the resourse object which is just called resource

//https://www.youtube.com/watch?v=eW5MdE3ZcAw&t=208s

//allow read: if resource.data.reviewerId == request.auth.uid

// allow update: if get(/databases/$(database)/documents/restaurants/$()restaurantId)/private_data/private).data.roles(request.auth.uid) in ['editor', 'owner']

//you can create functions
