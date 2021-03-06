NOTE: this was for a small presentation

# NoSql

This document contains some info about nosql and how it compares to sql

## Simple database

### SQL

| ID | username | password | karma |
|---|---|---|---|
| 1 | foo | 86f7e437faa5a7fce15d1ddcb9eaeaea377667b8 | 322 |
| 2 | bar | e9d71f5ee7c92d6dc9e92ffdad17b8bd49418f98 | 2000 |
| 3 | baz | 84a516841ba77a5b4648de2cd0dfcb30ea46dbb4 | 1400 |

### NOSQL

```js
users = 
[ // Collection
	{ // Document
		_id: "...unique id", // Will be automaticly gegenerated by DB
		username: "foo",
		password: "86f7e437faa5a7fce15d1ddcb9eaeaea377667b8",
		karma: 322
	},
	{
		_id: "...unique id",
		username: "bar",
		password: "e9d71f5ee7c92d6dc9e92ffdad17b8bd49418f98",
		karma: 2000
	},
	{
		_id: "...unique id",
		username: "baz",
		password: "84a516841ba77a5b4648de2cd0dfcb30ea46dbb4",
		karma: 1400
		friends: [ // This can be dune in noSql
			{
				_id: "...unique id",
		                username: "bar",
		                password: "e9d71f5ee7c92d6dc9e92ffdad17b8bd49418f98",
		                karma: 2000
			}		
		]
	}
]
```

## Nested object

```js
a = 
[ // collection
	{ // Document
		_id: "...unique id"
		ColectieInDocument: [ // another Collection in a document
			{
				_id: "...unique id"
				NogEenColectieInDoc: [
					{
						_id: "...unique id"
						some: "sfdsf"
						data: "iaoisdfj"
					}
				]
			}
		]
	}
]
```

## Collections and arrays

```js
a =
{
	itemList: [ // just a normal array
		"item1",
		"item2",
		"item3"	
	],
	nestedObjects: [ // Collection
		{
			a: "..",
			b: ".."
		},
		{
			a: "..",
			b: ".."
		}
	],
	mixedArrayWithDocuments: [ // This can not be dune
		"item1",
		{
			a: "1",
			b: "2"
		}
	]
}
```

## Join data in noSql

You can either point to a object or copy the data  
It depends on the rate of editing / getting the data  
A user probebly changes it username once every year or so, but a hotel review gets asked for maybe like 10.000 times a year.
In that case it's better to copy the data because it's more work to get the data everytime from a ref than change the copies once a username / password is changed

```js
users = 
[
	{
		_id: "356A192B7913B04C54574D18C28D46E6395428AB",
		username: "foo",
		password: "sdfsdf"
	},
	{
		_id: "77DE68DAECD823BABBB58EDB1C8E14D7106E83BB"
		username: "bar",
		password: "sdfsdf"
	}
]

hotels = 
[
	{
		_id: "1B6453892473A467D07372D45EB05ABC2031647A",
		naam: "random hotel naam",
		reviews: [
			{ // Just copy the data over
				_id: "DA4B9237BACCCDF19C0760CAB7AEC4A8359010B0"
				rating: 8,
				user: {
					user_id: "356A192B7913B04C54574D18C28D46E6395428AB",
					username: "foo",
					password: "sdfsdf"
				}
			},
			{ // refrence to object
				_id: "AC3478D69A3C81FA62E60F5C3696165A4E5E6AC4",
				rating: 9,
				user: {
					$ref : "users",
			                $id : ObjectId("77DE68DAECD823BABBB58EDB1C8E14D7106E83BB"),
			                $db : "test"				
				}
			}
		]
	}
]
```

## The perfect data model for noSql

Every request that the server gets it can respond withoud having to look twice or in 2 or more diffrent
collections  
That will make the database request rate supper fast because the database can give you the data without searching for where to find $ref

## Works great together with graphql

Werkt goed samen met graphql

```
[ # Server Data
	{
		_id: "86f7e437faa5a7fce15d1ddcb9eaeaea377667b8",
		username: "user 1",
		voornaam: "foo",
		achernaam: "bar"
},
	{
		_id: "e9d71f5ee7c92d6dc9e92ffdad17b8bd49418f98",
		username: "user 2",
		voornaam: "foo",
		achernaam: "bar"
}
]
```

```
{ # graphql query
	user(_id: 86f7e437faa5a7fce15d1ddcb9eaeaea377667b8) {
		username
	}
}
```

```
[ # return data
	{
		username: "user 1" 
	}
]
```

