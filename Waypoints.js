
var waypointLatitude = [];
  
var waypointLongitude = [];
		
// function func_route1(latVal, longVal){

 // lat_coef_old = (Math.abs(latVal - my_lat))/500;
 // long_coef_old = (Math.abs(longVal - my_long))/500;
   
 // lat_coef_new = lat_coef_old * k ;
 // long_coef_new = long_coef_old * k;

 // new_lat = my_lat + lat_coef_new;
 // new_long = my_long + long_coef_new;

  // k = k - 100;
 // }
 
 var waypointCoef = 0;
 
    function CalculateWaypointsClockwiseFirst(ChangeForAnyPoint)
   {
	    var waypointDistance = Range;
		
		y2 = Range - ChangeForAnyPoint;
		x2 = ChangeForAnyPoint;
		
		// For calculating slope (m)
		m = (y2-y1)/(x2-x1);                                                       
		
		var i = 0;
		
		while(i<4)
		{	
			waypointDistance = waypointDistance - (Range/5);
			
			waypointCoef = waypointDistance * SphericalOffset ; 
			
			if(ChangeForAnyPoint == Range)
			{
				CoefForLat = Range - ChangeForAnyPoint;
				CoefForLong = (waypointDistance * SphericalOffset)/Math.cos(my_lat * 0.018);     // Since CoefForLong will remain zero
			}
	
			else
			{	
				// x(2) + y(2) = r(2)  -> circle equation
				ChangeOnLat = Math.sqrt(Math.pow(waypointDistance,2) / (1 + Math.pow(m,2)));                

				// y = m * x + c   ->  equation of line
				ChangeOnLong = ChangeOnLat * m;                                              
				
				CoefForLat = waypointCoef - ((waypointDistance - ChangeOnLong) * SphericalOffset);
				
				CoefForLong = ((ChangeOnLat) * SphericalOffset)/Math.cos(my_lat * 0.018);
			}
			waypointLatitude[i] = my_lat + CoefForLat;
			waypointLongitude[i] = my_long + CoefForLong;
		
			i++;
		}
    }
	
	 function CalculateWaypointsClockwiseSecond(ChangeForAnyPoint)
   {
	    var waypointDistance = Range;
		
		y2 = ChangeForAnyPoint;
		x2 = Range - ChangeForAnyPoint;
		
		// For calculating slope (m)
		m = (y2-y1)/(x2-x1);                                                       
		
		var i = 0;
		
		while(i<4)
		{
			waypointDistance = waypointDistance - (Range/5);
			
			waypointCoef = waypointDistance * SphericalOffset ; 
			
			if(ChangeForAnyPoint == Range)
			{
				CoefForLat = waypointDistance * SphericalOffset;
				CoefForLong = Range - ChangeForAnyPoint;	       // Since CoefForLong will remain zero
			}
	
			else
			{			
				// x(2) + y(2) = r(2)  -> circle equation
				ChangeOnLat = Math.sqrt(Math.pow(waypointDistance,2) / (1 + Math.pow(m,2)));                

				// y = m * x + c   ->  equation of line
				ChangeOnLong = ChangeOnLat * m;                                              
				
				CoefForLat = ((ChangeOnLong) * SphericalOffset);
				
				CoefForLong = (waypointCoef - ((waypointDistance - ChangeOnLat) * SphericalOffset))/Math.cos(my_lat * 0.018);
			}
			
			waypointLatitude[i] = my_lat - CoefForLat;
			waypointLongitude[i] = my_long + CoefForLong;
		
			i++;
		}
    }
	
	 function CalculateWaypointsClockwiseThird(ChangeForAnyPoint)
   {
	    var waypointDistance = Range;
		
		y2 = Range - ChangeForAnyPoint;
		x2 = ChangeForAnyPoint;
		
		// For calculating slope (m)
		m = (y2-y1)/(x2-x1);                                                       
		
		var i = 0;
		
		while(i<4)
		{	
			waypointDistance = waypointDistance - (Range/5) ;
			
			waypointCoef = waypointDistance * SphericalOffset ; 
			
			if(ChangeForAnyPoint == Range)
			{
				CoefForLat = Range - ChangeForAnyPoint;
				CoefForLong = (waypointDistance * SphericalOffset)/Math.cos(my_lat * 0.018);     // Since CoefForLong will remain zero
			}
	
			else
			{	
				// x(2) + y(2) = r(2)  -> circle equation
				ChangeOnLat = Math.sqrt(Math.pow(waypointDistance,2) / (1 + Math.pow(m,2)));                

				// y = m * x + c   ->  equation of line
				ChangeOnLong = ChangeOnLat * m;                                              
				
				CoefForLat = waypointCoef - ((waypointDistance - ChangeOnLong) * SphericalOffset);
				
				CoefForLong = ((ChangeOnLat) * SphericalOffset)/Math.cos(my_lat * 0.018);
			}
			waypointLatitude[i] = my_lat - CoefForLat;
			waypointLongitude[i] = my_long - CoefForLong;
		
			i++;
		}
    }
	
	 function CalculateWaypointsClockwiseFourth(ChangeForAnyPoint)
   {
	    var waypointDistance = Range;
		
		y2 = ChangeForAnyPoint;
		x2 = Range - ChangeForAnyPoint;
		
		// For calculating slope (m)
		m = (y2-y1)/(x2-x1);                                                       
		
		var i = 0;
		
		while(i<4)
		{
			waypointDistance = waypointDistance - (Range/5);
			
			waypointCoef = waypointDistance * SphericalOffset ; 
			
			if(ChangeForAnyPoint == Range)
			{
				CoefForLat = waypointDistance * SphericalOffset;
				CoefForLong = Range - ChangeForAnyPoint;	       // Since CoefForLong will remain zero
			}
	
			else
			{		
				// x(2) + y(2) = r(2)  -> circle equation
				ChangeOnLat = Math.sqrt(Math.pow(waypointDistance,2) / (1 + Math.pow(m,2)));                

				// y = m * x + c   ->  equation of line
				ChangeOnLong = ChangeOnLat * m;                                              
				
				CoefForLat = ((ChangeOnLong) * SphericalOffset);
				
				CoefForLong = (waypointCoef - ((waypointDistance - ChangeOnLat) * SphericalOffset))/Math.cos(my_lat * 0.018);
			}
			
			waypointLatitude[i] = my_lat + CoefForLat;
			waypointLongitude[i] = my_long - CoefForLong;
		
			i++;
		}
    }

