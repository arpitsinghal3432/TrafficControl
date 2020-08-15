	var ChangeInDist = Range/18;        // (500/18 = 27.7778)

	// Point at origin (y1,x1)
	var y1 = 0;
	var x1 = 0;

	// Point at circumference (y2,x2)
	var y2,x2;

	var m = 0;                         // m -> slope for line between origin and point
	var c = 0;                         // As every line passes through origin                  

	var CoefForLat;                         
	var CoefForLong;                                 

   // ChangeOnLong -> change on y-axis
   // ChangeOnLat -> change on x-axis
   
   var ChangeOnLong = 0;                
   var ChangeOnLat = 0;  
 
   var i = 0;
   
// Clockwise First Quadrant of the circle

function CoefForPointsClockwiseFirst()
{

   for(var PointNumber = 1; PointNumber <= 18; PointNumber++)
  {
	ChangeForAnyPoint = ChangeInDist * PointNumber;
	
	if(PointNumber == 18)
	{
		CoefForLat = Range - ChangeForAnyPoint;
		CoefForLong = (ChangeForAnyPoint * SphericalOffset)/Math.cos(my_lat * 0.018);
	}
	
	else{
	
	    y2 = Range - ChangeForAnyPoint;
		x2 = ChangeForAnyPoint;
		
		// For calculating slope (m)
		m = (y2-y1)/(x2-x1);                                                       
		
		// x(2) + y(2) = r(2)  -> circle equation
		ChangeOnLat = Math.sqrt(Math.pow(Range,2) / (1 + Math.pow(m,2)));                

		// y = m * x + c   ->  equation of line
		ChangeOnLong = ChangeOnLat * m;                                              
		
		CoefForLat = Coef - ((Range - ChangeOnLong) * SphericalOffset);
		
		CoefForLong = ((ChangeOnLat) * SphericalOffset)/Math.cos(my_lat * 0.018);
		
	}
	
	latitude[i] = my_lat + CoefForLat;
	longitude[i] = my_long + CoefForLong;
	
	i++;
  }
}


// Clockwise Second Quadrant of the circle

function CoefForPointsClockwiseSecond()
{
	
  for(var PointNumber = 1; PointNumber <= 18; PointNumber++)
  {
		ChangeForAnyPoint = ChangeInDist * PointNumber;
		
		if(PointNumber == 18)
	{
		CoefForLat = ChangeForAnyPoint * SphericalOffset;
		CoefForLong = Range - ChangeForAnyPoint;	
	}
	
	else{
		y2 = ChangeForAnyPoint;
        x2 = Range - ChangeForAnyPoint;
		
        m = (y2-y1)/(x2-x1);                                                             // For calculating slope (m)
	
		ChangeOnLat = Math.sqrt(Math.pow(Range,2) / (1 + Math.pow(m,2)));                // x(2) + y(2) = r(2)  -> circle equation

		ChangeOnLong = ChangeOnLat * m;                                              // y = m * x + c   ->  equation of line
		
		CoefForLat = ChangeOnLong * SphericalOffset;
		
		CoefForLong = (ChangeOnLat * SphericalOffset)/Math.cos(my_lat * 0.018);
		
	}
	latitude[i] = my_lat - CoefForLat;
	longitude[i] = my_long + CoefForLong;
	
	i++; 
  }
}

// Clockwise Third Quadrant of the circle

function CoefForPointsClockwiseThird()
{

	for(var PointNumber = 1; PointNumber <= 18; PointNumber++)
  {
	ChangeForAnyPoint = ChangeInDist * PointNumber;
	
	if(PointNumber == 18)
	{
		CoefForLat = Range - ChangeForAnyPoint;
		CoefForLong = (ChangeForAnyPoint * SphericalOffset)/Math.cos(my_lat * 0.018);	
	}
	
	else{
	
	    y2 = Range - ChangeForAnyPoint;
		x2 = ChangeForAnyPoint;
		
		// For calculating slope (m)
		m = (y2-y1)/(x2-x1);                                                       
		
		// x(2) + y(2) = r(2)  -> circle equation
		ChangeOnLat = Math.sqrt(Math.pow(Range,2) / (1 + Math.pow(m,2)));                

		// y = m * x + c   ->  equation of line
		ChangeOnLong = ChangeOnLat * m;                                              
		
		CoefForLat = Coef - ((Range - ChangeOnLong) * SphericalOffset);
		
		CoefForLong = ((ChangeOnLat) * SphericalOffset)/Math.cos(my_lat * 0.018);
		
	}
	
	latitude[i] = my_lat - CoefForLat;
	longitude[i] = my_long - CoefForLong;
	
	i++;
  }
}

// Clockwise Fourth Quadrant of the circle

function CoefForPointsClockwiseFourth()
{
	
  for(var PointNumber = 1; PointNumber <= 18; PointNumber++)
  {
		ChangeForAnyPoint = ChangeInDist * PointNumber;
		
		if(PointNumber == 18)
	{
		CoefForLat = ChangeForAnyPoint * SphericalOffset;
		CoefForLong = Range - ChangeForAnyPoint;
	}
	
	else{
		
		y2 = ChangeForAnyPoint;
        x2 = Range - ChangeForAnyPoint;
		
        m = (y2-y1)/(x2-x1);                                                             // For calculating slope (m)
	
		ChangeOnLat = Math.sqrt(Math.pow(Range,2) / (1 + Math.pow(m,2)));                // x(2) + y(2) = r(2)  -> circle equation

		ChangeOnLong = ChangeOnLat * m;                                              // y = m * x + c   ->  equation of line
		
		CoefForLat = ChangeOnLong * SphericalOffset;
		
		CoefForLong = (ChangeOnLat * SphericalOffset)/Math.cos(my_lat * 0.018);
	
	}
	
	latitude[i] = my_lat + CoefForLat;
	longitude[i] = my_long - CoefForLong;
	
	i++; 
  }
}
