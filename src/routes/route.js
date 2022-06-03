const express = require('express');
const underscore = require('underscore')
const _=require('lodash')

const router = express.Router();


router.get('/hello', function (req, res) {
    console.log(_.chunk(["january","feb","mar","april","may","june","july","august","sept","oct","nov","dec"],4));
    
    console.log(_.tail([1,3,5,7,9,11,13,15,17,19]));
    
    let array1=[1,2,3];
    let array2=[2,5,90];
    let array3=[5,1,31];
    let array4=[6,70,9];
    let array5=[1,6,7];
    console.log(_.union(array1,array2,array3,array4,array5))
    
    const arr=[['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']];
    console.log(_.fromPairs(arr))
    // res.send('Hello there!')
    res.send("check console");
});
//Q.1
router.get('/movies',function(req,res){
    const movie=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins','The Shining',"Titanic","Shutter Island","Pans Labyrinth","Wrath of Titans","Edge of Tommorrow"];
    res.send(movie);
});
//Q.2
router.get('/movies/:index',function(req,res){
    const value=req.params.index;
    const movies=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins','The Shining',"Titanic","Shutter Island","Pans Labyrinth","Wrath of Titans","Edge of Tommorrow"];
    res.send(movies[value]);  
});

//Q.3
router.get('/movies2/:index',function(req,res){
    const value=req.params.index;
    const movies=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins','The Shining',"Titanic","Shutter Island","Pans Labyrinth","Wrath of Titans","Edge of Tommorrow"];
    if(value<movies.length){
        res.send(movies[value]);
    }else{
        res.send("Index Number Does not Exist");
    }
});


//Q.4
router.get("/films",function(req,res){
    const film=[ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }];
    res.send(film)
       
});

//Q.5

router.get("/films/:indexID",function(req,res){
    let value=req.params.indexID;
    const film=[ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }];
    if(value<film.length){
        res.send(film[value]);
    }else{
        res.send("don't exist")
    }
       
});


module.exports = router;
// adding this comment for no reason