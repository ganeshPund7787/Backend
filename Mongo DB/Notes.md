<h4>Types of DBMS: </h4> 
       1} Relational dbms Exa:- mysql<br>
       2} Non-relationla dbms Exa: MongoDB<br>


<h1><pre> Code Side                    MongoDB side</pre> </h1>
<pre>DB setup                                           DB Formation</pre>
<pre>Model                                              Collection </pre>
<pre>Scheme                                             Documents </pre>
 
For Code = DBMS * Scheme<br>
Formation => Collection => Documents<br>
Models (Code) => Collections<br>
schme (code) => Documents<br>




<h1>############################################################################</h1>

<br>
Mongo DB<br>
*MongoDB is used in many modern apps and systems that need to be flexible, handle lots of data quickly, like websites, analytics tools, mobile apps, and more
<br>


<br>show dbs<br>
>>>>>> Display the databases available in the system
<br>
show collections<br>
>>>>>> It's show the data that means The tables in mysql
       * collection of document and Object
<br>
// Create<br>
use ganu<br>
>>>>> This create and use it now 
<br>

//put<br>
db.collectionname.insertOne() <br>
>>>>> This is for insert data into collecvtion which is awailable in the database
Example:- ganu> db.student.insertOne({name: "Ganesh", email: "ganupund@gmail.com"});
<br>
db.collectionname.insertMany()<br>
>>>> This is for insert multiple data into collecvtion which is awailable in the database
<br>
db.collection_name.find()<br>
>>> This is used for show availble record in the collections(table)
<br>

// Read<br>
<br>
 db.clg.find({name: "Any Name"})<br>
 >>>>>>> This is fo<br>r condtionalrecord find
<br>
db.collection_name.find({name: "Ganesh"}).limit(1)
>>>> It's find first (1)
OR
db.collection.findOne({name: "ganesh"})
<br>

//Update<br>

 db.clg.updateOne({namd: "ganesh"},{$set: {namd: "Ganu Don"}})
 >>>>>> Update record
OR<br>
db.clg.updateMany({namd: "ganesh"},{$set: {namd: "Ganu Don"}})

<br>

* Mongoos :-<br>
       Mongoos is a mongoDB liabrary Which is used to connect MongoDB to Node.js(Express.js)
<br>
set up and connect<br>

mongoos.connect("mongo://localhost: 2900/DBname"); => This line create databse<br>
const clg = new mongoose.Schema({<br>
    name: String,<br>
    email: String,<br>
    login: Boolean<br>
});   => Structure of MongoDB <br> 

const Student = new mongoose.model("studentCollection", clg); <br>
=>  This create collection<br>
in this example studentCollection is a collection name <br>
<br>
collections => Exam: Users<br>
Document => Exam: oneUser <br>
<br>


########################################################################################
