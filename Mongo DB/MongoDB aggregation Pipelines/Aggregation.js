// this query for the find the data on the basis of condition
[
    {
        $match: {
            isActive: false
        }
    },
    {
        $count: 'isActive'
    }
]

// this is for the grop of data based on the filte type:
[
    {
        $group: {
            _id: "email",
        }
    }
]

// Find the average of based on null
[
    {
        $group: {
            _id: null,
            AverageAge: {
                $avg: "$year"
            }
        }
    }
]

// find the categery wise
[
    {
        $group: {
            _id: "$year",
            AverageAge: {
                $avg: "$year"
            }
        }
    }
]

// Count this perticular model is famous in how many country example: type, title, isActive
[
    {
        $group: {
            _id: "$type",
            CountCountry: {
                $sum: 1,
            },
        },
    }
]

// how many countries and find greaest count
[
    {
        $group: {
            _id: "$countries",
            count: {
                $sum: 1
            }
        }
    },
    {
        $sort: {
            count: -1
        }
    }
]

// find the top five countries theire are these moies famous

[
    {
        $group: {
            _id: "$countries",
            count: {
                $sum: 1
            }
        }
    },
    {
        $sort: {
            count: -1
        }
    },
    {
        $limit: 5
    }
]

// find the how many males and females user in the database

[
    {
        $group: {
            _id: "$gender",
            genderCount: {
                $sum: 1
            }
        }
    }
]

// which country has the higest number of register users ?

[
    {
        $group: {
            _id: "$company.location.country",
            countryCount: {
                $sum: 1
            }
        }
    },
    {
        $sort: {
            countryCount: -1
        }
    },
    {
        $limit: 1
    }
]


// List all unique eye colors present in the collection

[
    {
        $group: {
            _id: "$eyeColor"
        }
    }
]

// unwind Operater :- This operater is used to create seperrate Document on the basis of  the
// provided array field. which we arew provide.

// What is the avrage number of tags per user ?

[
    {
        $unwind: {
            path: "$tags"
        }
    }
]

[
    {
        $unwind: "$tags"
    }
]


//Answer: 
[
    {
        $unwind: "$tags"
    },
    {
        $group: {
            _id: "$_id",
            numberOfTags: {
                $sum: 1
            }
        }
    },
    {
        $group: {
            _id: null,
            AvrageOfTags: {
                $avg: "$numberOfTags"
            }
        }
    }
]

// find the higest number value tags: value in the user :: which tag is most of the time availabel
[
    {
        $unwind: "$tags"
    },
    {
        $group: {
            _id: "$tags",
            count: {
                $sum: 1
            }
        }
    },
    {
        $sort: {
            count: -1
        }
    },
    {
        $limit: 1
    }
]


// how many users have 'enim' as one of their tags?

[
    {
        $match: {
            tags: "enim"
        }
    },
    {
        $count: 'numberOfEnim'
    }
]


// Project is a pipeline which is used to filter out them which we want to show on screen.
// What are the names and age of users who are inactive and have 'vlit' as a tag ? 

[
    {
        $match: {
            tags: "velit",
            isActive: false,
        },
    },
    {
        $project: {
            name: 2,
            age: 1,
        },
    }
]

// How many users have a phone number starting withe '+1 (940)' ? And count them


[
    {
        $match: {
            "company.phone": /^\+1 \(940\)/
        }
    },
    {
        $count: "numberOfUsers"
    }
]

// who has registered the most recentely

[
    {
        $sort: {
            registered: -1
        }
    },
    { $limit: 5 },
    {
        $project: {
            name: 1, age: 1
        }
    }
]

// Push : is an acumlater which is give us using group users in the form of array;
//: ::: we can only used push when we used group stage in the pipeline 
/// categorize users of theire favorite fruit

[
    {
        $group: {
            _id: "$favoriteFruit",
            users: { $push: "$name" }
        }
    }
]

// How many users have 'ad' as second tag in theire list of tags;
[
    {
        $match: {
            "tags.1": "ad",
        }
    },
    {
        $count: "userCount"
    }
]

//$all: all operater is used to find all match record in the database

// Find users who have both "enim" and "id" as their tag;

[
    {
        $match: {
            tags: {
                $all: ["id", "enim"]
            }
        }
    }
]

//list all companies located in the USA  with theire corresponding user count?
// here we want to count on company wise 
[
    {
        $match: {
            "company.location.country": "USA",
        }
    },
    {
        $group: {
            _id: "$company.title",
            userCount: { $sum: 1 }
        }
    }
]

// Final video ******  LOOKUP     ********

// Syntax: 
[
    {
        $lookup: {
            from: collection_Name,
            localField: current_Field(key_name),
            foreignField: another_collection_field(key_name),
            as: what_do_you_want(key_name)
        }
    }
]

// Practce lookup

[
    {
        $lookup: {
            from: "Authers",
            localField: "author_id",
            foreignField: "_id",
            as: "author_detail"
        }
    }
]

// Example: 

[
    {
        $lookup: {
            from: "Authers",
            localField: "author_id",
            foreignField: "_id",
            as: "title"
        }
    }
]


// Using first keyword its used to covert array to a one object it gives first value of anarray 
[
    {
        $lookup: {
            from: "Authers",
            localField: "author_id",
            foreignField: "_id",
            as: "author_details"
        }
    },
    {
        $addFields: {
            author_details: {
                $first: "$author_details"
            }
        }
    }
]


// Using ArrayElementAt this is usefuly it's allow to which index value do you you want.

[
    {
        $lookup: {
            from: "Authers",
            localField: "author_id",
            foreignField: "_id",
            as: "author_details"
        }
    },
    {
        $addFields: {
            author_details: {
                $arrayElemAt: ["$author_details", 0]
            }
        }
    }
]





