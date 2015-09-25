// ==============
//  Assignment 1
// ==============

var x = "Early in the morning, Gretel had to go out and hang up the cauldron with the water, and light the fire. 'We will bake first,' said the old woman, 'I have already heated the oven, and kneaded the dough.' She pushed poor Gretel out to the oven, from which flames of fire were already darting. 'Creep in,' said the witch, 'and see if it is properly heated, so that we can put the bread in.' And once Gretel was inside, she intended to shut the oven and let her bake in it, and then she would eat her, too. But Gretel saw what she had in mind, and said: 'I do not know how I am to do it; how do I get in?' 'Silly goose,' said the old woman. 'The door is big enough; just look, I can get in myself!' and she crept up and thrust her head into the oven. Then Gretel gave her a push that drove her far into it, and shut the iron door, and fastened the bolt. Oh! then she began to howl quite horribly, but Gretel ran away and the godless witch was miserably burnt to death. " ;
x = x. replace ("Gretel","I");


//line searching thing
//var i = x.lastIndexOf("Gretel gave her a push");
//console.log (i);


var q = "Gretel:" +  x.slice(13,99); 
q = q. replace ("had", "have");

var w = "Old Woman:" + x.slice(100,119) + x.slice(142, 196);

var e = "Gretel:" + x.slice(546,595);

var r = "Old Woman:" + x.slice(598,610);
r = r + x.slice(632,657);
r = r + x.slice(662,688);

var t = "Gretel: " + x.slice(845,848);
t = t + "Bye!";

var y = x.slice(747,822) + x.slice(912,1030); 

console.log (q + "\n\n" + w+ "\n\n" +e+ "\n\n" +r+ "\n\n" +t+ "\n\n" +y+ "\n\n\n The End"); 