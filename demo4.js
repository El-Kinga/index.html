function por(){
	

	var P1= document.android.P1.value; 
	var P2= document.android.P2.value;
	var P3= document.android.P3.value;
	var P4= document.android.P4.value; 
	var P5= document.android.P5.value;
	var P6= document.android.P6.value;
	var P7= document.android.P7.value; 
	var P8= document.android.P8.value;
	var P9= document.android.P9.value;
	var P10= document.android.P10.value; 
	var P11= document.android.P11.value;
	var P12= document.android.P12.value;
	var P13= document.android.P13.value;
	var P14= document.android.P14.value;
	var P15= document.android.P15.value; 
	var P16= document.android.P16.value;
	var P17= document.android.P17.value;
	 
	var contador=0;
	var porcentaje;
 
	 
	if(P1 == 'A')
	{
		contador++;
	}
	if (P2=='false')
	{
		contador ++;
	}

	if (P3=='true')
	{
		contador ++;
	}

	if (P4=='true')
	{
		contador ++;
	}

	if (P5=='true')
	{
		contador ++;
	}

	if (P6=='false')
	{
		contador ++;
	}

	if (P7=='false')
	{
		contador ++;
	}

	if (P8=='false')
	{
		contador ++;
	}

	if (P9=='false')
	{
		contador ++;
	}

	if (P10=='false')
	{
		contador ++;
	}

	if (P11=='false')
	{
		contador ++;
	}

	if (P12=='false')
	{
		contador ++;
	}
	if (P13=='false')
	{
		contador ++;
	}

	if (P14=='false')
	{
		contador ++;
	}

	if (P15=='false')
	{
		contador ++;
	}

	if (P16=='false')
	{
		contador ++;
	}

	if (P17=='false')
	{
		contador ++;
	}

	porcentaje = contador *100/17;
	
	return porcentaje;
	
	
}