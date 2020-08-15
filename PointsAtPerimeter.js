/*
1 degree in google map is equal to 111.32 Kilometer
1 Degree = 111.32KM
1KM in Degree = 1 / 111.32 = 0.008983
1M in Degree = 0.000008983    ->     (SphericalOffset)
*/

    var Range = 250;  	// 500 metres
    	
	var SphericalOffset = 0.0000089;
    var Coef = Range * SphericalOffset ; 

	var latitude = [];
    var longitude = [];

// Number of Points on circumference of a circle with radius 500 metres at every 5 degrees
//  = (360 / 5) degrees  =  72 points
// For every quarter circle, no of points = 72/4 = 18 points including first point calculated from origin
// so distance between every two points in this quarter circle is ChangeInDistForLat and ChangeInDistForLong respectively.

  var k = 500;                    // to calulate the coefficient
 
 var marker = [];                 //keep track of markers on estimated locs..


 var lat_coef_old;
 var long_coef_old;
   
 var lat_coef_new;
 var long_coef_new;

 var new_lat;
 var new_long;

 // the origin that is the centre of the map , the destination of all the sources
 
  var my_lat = 28.530782;
  var my_long = 77.362254;
                
  var end = {lat: 28.530782, lng: 77.362254};
  
  var latVal;
  var longVal;


