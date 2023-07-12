let array=[
    {
        Id:1,
        Name:"nishika",
        Age:21
    },
    {
        Id:2,
        Name:"abc",
        Age:24
    },
    
    {
        Id:3,
        Name:"xyz",
        Age:30
    },
    {
        Id:4,
        Name:"kjh",
        Age:13
    },
    {
        Id:5,
        Name:"ghj",
        Age:20
    },
    {
        Id:6,
        Name:"mlp",
        Age:34
    },
    {
        Id:7,
        Name:"ftp",
        Age:27
    },
    {
        Id:8,
        Name:"efg",
        Age:19
    },
    {
        Id:9,
        Name:"ujk",
        Age:29
    },
    

];

let sortAge=array.sort((a,b)=>a.Age - b.Age);
console.log(sortAge);

let sortname=array.sort((a,b)=>a.Name < b.Name);
console.log(sortname);