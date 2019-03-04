function square(n)
{
  return n*n;
}

function howManyLightSabers(n)
{
	if(n === "Zach")
	{
		return 18;
	}

	else
	{
		return 0;
	}
}

function AverageArrayMarks(n)
{
	it = 0;
	total = 0.0;
	for (i = 0; i < n.length; i++)
	{
		total = total + n[i];
		it++;
	}
	average = total/it;
	return average;
}

function pirateCannons(n)
{
	for(var key in n)
	{
		if(n[key] === 'nay')
		{
			return 'Cannon Failed to fire due to Bill';
		}
	}
	return 'Cannon Fired';
}

function crashOverride(n,m)
{
	var firstName = { "A":"Atom", "B":"Bull", "C":"Cheetah", "D":"Dragon"};
	var surName = { "A":"Anaconda", "B":"Beta", "C":"Cipher", "D":"Delta"};

	var alias = "";

	if((n[0] >= "A" && n[0] <= "D") || (n[0] >= "a" && n[0] <= "d"))
	{
		fLetter = n[0].toUpperCase();
		for(var key in firstName)
		{
			if(fLetter == firstName[key][0])
			{
				alias += firstName[key];
			}
		}	
	}
	else
	{
		return "Please enter a proper name beginning with letters";
	}

	if((m[0] >= "A" && m[0] <= "D") || (m[0] >= "a" && m[0] <= "d"))
	{
		fLetter = m[0].toUpperCase();
		for(var key in surName)
		{
			if(fLetter == surName[key][0])
			{
				alias += " " + surName[key];
			}
		}	
	}
	else
	{
		return "Please enter a proper name beginning with letters";
	}

	return alias;
}

function Ship(draft,crew)
{
	this.draft = draft;
	this.crew = crew;
}

Ship.prototype.isWorthIt = function()
{
	var loot = this.draft - (1.5 * this.crew);

	if(loot >= 20)
	{
		return "is worthy to loot";
	}
	else
	{
		return "is not worthy to loot";
	} 
}



function main()
{
	console.log("Is the square of 5 equal to 25?")
	if(square(5)==25)
	{
		console.log("OK");
	}	
	else
	{
		console.log("square FAIL");
	}

	if(howManyLightSabers("Zach") == 18)
	{
		console.log("Zach owns 18 Lightsabers");
	}

	else
	{
		console.log("Zach owns 0 Lightsabers");
	}

	if(howManyLightSabers("Zah") == 18)
	{
		console.log("Zah owns 18 Lightsabers");
	}

	else
	{
		console.log("Zah owns 0 Lightsabers");
	}


	var dArray = [2,4,6];
	console.log("[",dArray[0],",",dArray[1],",",dArray[2],"]");
	dAvergae = AverageArrayMarks(dArray);
	console.log(dAvergae);



	var aDictionary = {'Bob':'aye','Bill':'aye','Jill':'aye'};
	aString = pirateCannons(aDictionary);
	console.log(aString);

	var bDictionary = {'Bob':'aye','Bill':'nay','Jill':'aye'};
	bString = pirateCannons(bDictionary);
	console.log(bString);



	var firstName = 'Arron';
	var surname = 'Byrne';
	console.log(firstName," ",surname);

	alias = crashOverride(firstName, surname);
	console.log(alias);

	var firstName = 'ciaran';
	var surname = 'adams';
	console.log(firstName," ",surname);

	alias = crashOverride(firstName, surname);
	console.log(alias);

	var firstName = '9aul';
	var surname = '0olan';
	console.log(firstName," ",surname);

	alias = crashOverride(firstName, surname);
	console.log(alias);



	var theBelfast = new Ship(100,20);

	console.log("The Belfast " + theBelfast.isWorthIt());

	var theRowBoat = new Ship(10, 2);

	console.log("The Row Boat " + theRowBoat.isWorthIt());
}