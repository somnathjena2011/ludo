var cells=new Array();
cells=document.getElementsByTagName('table')[0].getElementsByTagName('td');
var cells2=new Array();
cells2.push.apply(cells2,cells);
cells2[8]=cells[10];
var a=3;
for(i=9;i<=13;i++)
{
	cells2[i]=cells[i+a];
	a++;
}
a=28;
for(i=14;i<=21;i++)
{
	cells2[i]=cells[a];
	a--;
}
a=19;
for(i=22;i<=26;i++)
{
	cells2[i]=cells[a];
	a-=2;
}
cells2[27]=cells[8];
cells2[28]=cells[9];
var cells3=new Array();
for(i=0;i<=13;i++)
{
	cells3[i]=cells2[i+14];
}
for(i=0;i<=13;i++)
{
	cells3[i+14]=cells2[i];
}
cells3[28]=cells2[28];
var roll=document.getElementsByTagName("button")[0];
var number=document.getElementsByClassName("number")[0];
var turn=1;
var turns=document.getElementsByClassName("turns")[0];
var a1=document.createElement("span");
var a2=document.createElement("span");
var b1=document.createElement("span");
var b2=document.createElement("span");
cells2[0].appendChild(a1);
cells2[0].appendChild(a2);
cells2[14].appendChild(b1);
cells2[14].appendChild(b2);
a1.innerHTML="a1";
a2.innerHTML="a2";
b1.innerHTML="b1";
b2.innerHTML="b2";
a1.setAttribute("class","a1");
b1.setAttribute("class","b1");
a2.setAttribute("class","a2");
b2.setAttribute("class","b2");
var cellA1=0;
var cellB1=0;
var cellA2=0;
var cellB2=0;
var preA1=-1;var preB1=-1;
var preA2=-1;var preB2=-1;
var scoreA=0,scoreB=0;
var removed;
var a;
roll.onclick=function(){
	a=Math.floor(Math.random()*6)+1;
	number.innerHTML=a;
	if(turn==1)
	{
		if(a==6)
		{
			if(cells2[0].contains(a1)&&cells2[0].contains(a2)&&(preA1==-1)&&(preA2==-1))
			{
				cellA1=0;
				preA1=6;
				turn=1;
			}
			else if(cells2[0].contains(a1)&&cells2[0].contains(a2)&&(preA1==6)&&(preA2==-1))
			{
				a1.onclick=function(){
					removed=cells2[cellA1].removeChild(a1);
					cells2[cellA1+a].appendChild(removed);
					cellA1=cellA1+a;
					turn=1;	  
					if(cells2[cellA1].contains(b1)&&cellA1!=0&&cellA1!=14)
					{
						removed=cells2[cellA1].removeChild(b1);
						cells3[0].appendChild(removed);
					}
					else if(cells2[cellA1].contains(b2)&&cellA1!=0&&cellA1!=14)
					{
						removed=cells2[cellA1].removeChild(b2);
						cells3[0].appendChild(removed);	
					}  	
				}
				a2.onclick=function(){
			    	cellA2=0;
			    	preA2=6;
			    	turn=1;
				}
			}
			else if(cells2[0].contains(a1)&&cells2[0].contains(a2)&&(preA1==6)&&(preA2==6))
			{
			   	removed=cells2[cellA1].removeChild(a1);
				cells2[cellA1+a].appendChild(removed);
				cellA1=cellA1+a;
				turn=1;
				if(cells2[cellA1].contains(b1)&&cellA1!=0&&cellA1!=14)
				{
					removed=cells2[cellA1].removeChild(b1);
					cells3[0].appendChild(removed);
				}
				else if(cells2[cellA1].contains(b2)&&cellA1!=0&&cellA1!=14)
				{
					removed=cells2[cellA1].removeChild(b2);
					cells3[0].appendChild(removed);	
				}
			}
			else if(cells2[0].contains(a2)&&!(cells2[0].contains(a1)))
			{
				if(cellA1+a<=27)
				{
					a1.onclick=function(){
						removed=cells2[cellA1].removeChild(a1);
						cells2[cellA1+a].appendChild(removed);
						cellA1=cellA1+a;
						turn=1;
						if(cells2[cellA1].contains(b1)&&cellA1!=0&&cellA1!=14)
					    {
							removed=cells2[cellA1].removeChild(b1);
							cells3[0].appendChild(removed);
						}
						else if(cells2[cellA1].contains(b2)&&cellA1!=0&&cellA1!=14)
						{
							removed=cells2[cellA1].removeChild(b2);
							cells3[0].appendChild(removed);	
						}
					}
					a2.onclick=function(){
						if(preA2==-1)
						{
							cellA2=0;
							preA2=6;
							turn=1;
						}
						else if(preA2==6)
						{
							removed=cells2[cellA2].removeChild(a2);
				        	cells2[cellA2+a].appendChild(removed);
				        	cellA2=cellA2+a;
				        	turn=1;
				        	if(cells2[cellA2].contains(b1)&&cellA2!=0&&cellA2!=14)
							{
								removed=cells2[cellA2].removeChild(b1);
								cells3[0].appendChild(removed);
							}
							else if(cells2[cellA2].contains(b2)&&cellA2!=0&&cellA2!=14)
							{
								removed=cells2[cellA2].removeChild(b2);
								cells3[0].appendChild(removed);	
							}	           
						}
					}
				}
				else
				{
					if(preA2==-1)
					{
						cellA2=0;
						preA2=6;
						turn=1;
					}
					else if(preA2==6)
					{
						removed=cells2[cellA2].removeChild(a2);
			        	cells2[cellA2+a].appendChild(removed);
			        	cellA2=cellA2+a;
			        	turn=1;
			        	if(cells2[cellA2].contains(b1)&&cellA2!=0&&cellA2!=14)
						{
							removed=cells2[cellA2].removeChild(b1);
							cells3[0].appendChild(removed);
						}
						else if(cells2[cellA2].contains(b2)&&cellA2!=0&&cellA2!=14)
						{
							removed=cells2[cellA2].removeChild(b2);
							cells3[0].appendChild(removed);	
						}	           
					}
				}
			}
			else if(!(cells2[0].contains(a2))&&!(cells2[0].contains(a1)))
			{
				if((cellA1+a<=27)&&(cellA2+a<=27))
				{
					a1.onclick=function(){
						removed=cells2[cellA1].removeChild(a1);
						cells2[cellA1+a].appendChild(removed);
						cellA1=cellA1+a;
						turn=1;
						if(cells2[cellA1].contains(b1)&&cellA1!=0&&cellA1!=14)
						{
							removed=cells2[cellA1].removeChild(b1);
							cells3[0].appendChild(removed);
						}
						else if(cells2[cellA1].contains(b2)&&cellA1!=0&&cellA1!=14)
						{
							removed=cells2[cellA1].removeChild(b2);
							cells3[0].appendChild(removed);	
						}				
					}
					a2.onclick=function(){
			        	removed=cells2[cellA2].removeChild(a2);
						cells2[cellA2+a].appendChild(removed);
						cellA2=cellA2+a;
						turn=1;
						if(cells2[cellA2].contains(b1)&&cellA2!=0&&cellA2!=14)
						{
							removed=cells2[cellA2].removeChild(b1);
							cells3[0].appendChild(removed);
						}
						else if(cells2[cellA2].contains(b2)&&cellA2!=0&&cellA2!=14)
						{
							removed=cells2[cellA2].removeChild(b2);
							cells3[0].appendChild(removed);	
						}
					}
				}
				else if((cellA1+a<=27)&&!(cellA2+a<=27))
				{
			    	a1.onclick=function(){
			        	removed=cells2[cellA1].removeChild(a1);
						cells2[cellA1+a].appendChild(removed);
						cellA1=cellA1+a;
						turn=1;
						if(cells2[cellA1].contains(b1)&&cellA1!=0&&cellA1!=14)
						{
							removed=cells2[cellA1].removeChild(b1);
							cells3[0].appendChild(removed);
						}
						else if(cells2[cellA1].contains(b2)&&cellA1!=0&&cellA1!=14)
						{
							removed=cells2[cellA1].removeChild(b2);
							cells3[0].appendChild(removed);	
						}
			    	}
				}
				else if((cellA2+a<=27)&&!(cellA1+a<=27))
				{
			    	a2.onclick=function(){
			        	removed=cells2[cellA2].removeChild(a2);
						cells2[cellA2+a].appendChild(removed);
						cellA2=cellA2+a;
						turn=1;
			    	}
			    	if(cells2[cellA2].contains(b1)&&cellA2!=0&&cellA2!=14)
					{
						removed=cells2[cellA2].removeChild(b1);
						cells3[0].appendChild(removed);
					}
					else if(cells2[cellA2].contains(b2)&&cellA2!=0&&cellA2!=14)
					{
						removed=cells2[cellA2].removeChild(b2);
						cells3[0].appendChild(removed);	
					}
				}
				else
				{
			    	turn=2;
			    	turns.innerHTML="YELLOW TURN";
				}
			}
		}
		else
		{
			if(preA1==6&&preA2==6)
			{
		    	if((cellA1+a<=27)&&(cellA2+a<=27))
		    	{
			     	a1.onclick=function(){
			        	removed=cells2[cellA1].removeChild(a1);
						cells2[cellA1+a].appendChild(removed);
						cellA1=cellA1+a;
						if(cells2[cellA1].contains(b1)&&cellA1!=0&&cellA1!=14)
						{
							removed=cells2[cellA1].removeChild(b1);
							cells3[0].appendChild(removed);
						}
						else if(cells2[cellA1].contains(b2)&&cellA1!=0&&cellA1!=14)
						{
							removed=cells2[cellA1].removeChild(b2);
							cells3[0].appendChild(removed);	
						}
			     	}
			     	a2.oncick=function(){
			        	removed=cells2[cellA2].removeChild(a2);
						cells2[cellA2+a].appendChild(removed);
						cellA2=cellA2+a;
						if(cells2[cellA2].contains(b1)&&cellA2!=0&&cellA2!=14)
						{
							removed=cells2[cellA2].removeChild(b1);
							cells3[0].appendChild(removed);
						}
						else if(cells2[cellA2].contains(b2)&&cellA2!=0&&cellA2!=14)
						{
							removed=cells2[cellA2].removeChild(b2);
							cells3[0].appendChild(removed);	
						}
			     	}
		    	}
		    	else if((cellA1+a<=27)&&!(cellA2+a<=27))
		    	{
			       	removed=cells2[cellA1].removeChild(a1);
					cells2[cellA1+a].appendChild(removed);
					cellA1=cellA1+a;
					if(cells2[cellA1].contains(b1)&&cellA1!=0&&cellA1!=14)
					{
						removed=cells2[cellA1].removeChild(b1);
						cells3[0].appendChild(removed);
					}
					else if(cells2[cellA1].contains(b2)&&cellA1!=0&&cellA1!=14)
					{
						removed=cells2[cellA1].removeChild(b2);
						cells3[0].appendChild(removed);	
					}
		    	}	
		    	else if((cellA2+a<=27)&&!(cellA1+a<=27))
		    	{
			    	removed=cells2[cellA2].removeChild(a2);
					cells2[cellA2+a].appendChild(removed);
					cellA2=cellA2+a;
					if(cells2[cellA2].contains(b1)&&cellA2!=0&&cellA2!=14)
					{
						removed=cells2[cellA2].removeChild(b1);
						cells3[0].appendChild(removed);
					}
					else if(cells2[cellA2].contains(b2)&&cellA2!=0&&cellA2!=14)
					{
						removed=cells2[cellA2].removeChild(b2);
						cells3[0].appendChild(removed);	
					}
		    	}	
		    	turn=2;
		    	turns.innerHTML="YELLOW TURN";
			}
			else if(preA1==6&&preA2!=6)
			{
				if(cellA1+a<=27)
				{
			    	removed=cells2[cellA1].removeChild(a1);
					cells2[cellA1+a].appendChild(removed);
					cellA1=cellA1+a;
					if(cells2[cellA1].contains(b1)&&cellA1!=0&&cellA1!=14)
					{
						removed=cells2[cellA1].removeChild(b1);
						cells3[0].appendChild(removed);
					}
					else if(cells2[cellA1].contains(b2)&&cellA1!=0&&cellA1!=14)
					{
						removed=cells2[cellA1].removeChild(b2);
						cells3[0].appendChild(removed);	
					}
				}
				turn=2;
				turns.innerHTML="YELLOW TURN";
			}
			else
			{
				turn=2;
				turns.innerHTML="YELLOW TURN";
			}
		}
		if(cells2[27].contains(a1)&&cells2[27].contains(a2))
		{
			scoreA=2;
		}
		else if(cells2[27].contains(a1)||cells2[27].contains(a2))
		{
			scoreA=1;
		}
		else
			scoreA=0;
	}
	else if(turn==2)
	{
		if(a==6)
		{
			if(cells3[0].contains(b1)&&cells3[0].contains(b2)&&(preB1==-1)&&(preB2==-1))
			{
				cellB1=0;
				preB1=6;
				turn=2;
			}
			else if(cells3[0].contains(b1)&&cells3[0].contains(b2)&&(preB1==6)&&(preB2==-1))
			{
				b1.onclick=function(){
					removed=cells3[cellB1].removeChild(b1);
					cells3[cellB1+a].appendChild(removed);
					cellB1=cellB1+a;
					turn=2;	
					if(cells3[cellB1].contains(a1)&&cellB1!=0&&cellB1!=14)
					{
						removed=cells3[cellB1].removeChild(a1);
						cells2[0].appendChild(removed);
					}
					else if(cells3[cellB1].contains(a2)&&cellB1!=0&&cellB1!=14)
					{
						removed=cells3[cellB1].removeChild(a2);
						cells2[0].appendChild(removed);	
					}    	
				}
				b2.onclick=function(){
			    	cellB2=0;
			    	preB2=6;
			    	turn=2;
				}
			}
			else if(cells3[0].contains(b1)&&cells3[0].contains(b2)&&(preB1==6)&&(preB2==6))
			{
			   	removed=cells3[cellB1].removeChild(b1);
				cells3[cellB1+a].appendChild(removed);
				cellB1=cellB1+a;
				turn=2;
				if(cells3[cellB1].contains(a1)&&cellB1!=0&&cellB1!=14)
				{
					removed=cells3[cellB1].removeChild(a1);
					cells2[0].appendChild(removed);
				}
				else if(cells3[cellB1].contains(a2)&&cellB1!=0&&cellB1!=14)
				{
					removed=cells3[cellB1].removeChild(a2);
					cells2[0].appendChild(removed);	
				} 
			}
			else if(cells3[0].contains(b2)&&!(cells3[0].contains(b1)))
			{
				if(cellB1+a<=27)
				{
					b1.onclick=function(){
						removed=cells3[cellB1].removeChild(b1);
						cells3[cellB1+a].appendChild(removed);
						cellB1=cellB1+a;
						turn=2;
						if(cells3[cellB1].contains(a1)&&cellB1!=0&&cellB1!=14)
						{
							removed=cells3[cellB1].removeChild(a1);
							cells2[0].appendChild(removed);
						}
						else if(cells3[cellB1].contains(a2)&&cellB1!=0&&cellB1!=14)
						{
							removed=cells3[cellB1].removeChild(a2);
							cells2[0].appendChild(removed);	
						} 
					}
					b2.onclick=function(){
						if(preB2==-1)
						{
							cellB2=0;
							preB2=6;
							turn=2;
						}
						else if(preB2==6)
						{
							removed=cells3[cellB2].removeChild(b2);
				        	cells3[cellB2+a].appendChild(removed);
				        	cellB2=cellB2+a;
				        	turn=2;
				        	if(cells3[cellB2].contains(a1)&&cellB2!=0&&cellB2!=14)
							{
								removed=cells3[cellB2].removeChild(a1);
								cells2[0].appendChild(removed);
							}
							else if(cells3[cellB2].contains(a2)&&cellB2!=0&&cellB2!=14)
							{
								removed=cells3[cellB2].removeChild(a2);
								cells2[0].appendChild(removed);	
							} 	           
						}
					}
				}
				else
				{
					if(preB2==-1)
					{
						cellB2=0;
						preB2=6;
						turn=2;
					}
					else if(preB2==6)
					{
						removed=cells3[cellB2].removeChild(b2);
			        	cells3[cellB2+a].appendChild(removed);
			        	cellB2=cellB2+a;
			        	turn=2;	   
			        	if(cells3[cellB2].contains(a1)&&cellB2!=0&&cellB2!=14)
						{
							removed=cells3[cellB2].removeChild(a1);
							cells2[0].appendChild(removed);
						}
						else if(cells3[cellB2].contains(a2)&&cellB2!=0&&cellB2!=14)
						{
							removed=cells3[cellB2].removeChild(a2);
							cells2[0].appendChild(removed);	
						}         
					}
				}				
			}
			else
			{
				if((cellB1+a<=27)&&(cellB2+a<=27))
				{
					b1.onclick=function(){
						removed=cells3[cellB1].removeChild(b1);
						cells3[cellB1+a].appendChild(removed);
						cellB1=cellB1+a;
						turn=2;
						if(cells3[cellB1].contains(a1)&&cellB1!=0&&cellB1!=14)
						{
							removed=cells3[cellB1].removeChild(a1);
							cells2[0].appendChild(removed);
						}
						else if(cells3[cellB1].contains(a2)&&cellB1!=0&&cellB1!=14)
						{
							removed=cells3[cellB1].removeChild(a2);
							cells2[0].appendChild(removed);	
						} 				
					}
					b2.onclick=function(){
			        	removed=cells3[cellB2].removeChild(b2);
						cells3[cellB2+a].appendChild(removed);
						cellB2=cellB2+a;
						turn=2;
						if(cells3[cellB2].contains(a1)&&cellB2!=0&&cellB2!=14)
						{	
							removed=cells3[cellB2].removeChild(a1);
							cells2[0].appendChild(removed);
						}
						else if(cells3[cellB2].contains(a2)&&cellB2!=0&&cellB2!=14)
						{
							removed=cells3[cellB2].removeChild(a2);
							cells2[0].appendChild(removed);	
						} 
					}
				}
				else if((cellB1+a<=27)&&!(cellB2+a<=27))
				{
			    	b1.onclick=function(){
			        	removed=cells3[cellB1].removeChild(b1);
						cells3[cellB1+a].appendChild(removed);
						cellB1=cellB1+a;
						turn=2;
						if(cells3[cellB1].contains(a1)&&cellB1!=0&&cellB1!=14)
						{
							removed=cells3[cellB1].removeChild(a1);
							cells2[0].appendChild(removed);
						}
						else if(cells3[cellB1].contains(a2)&&cellB1!=0&&cellB1!=14)
						{
							removed=cells3[cellB1].removeChild(a2);
							cells2[0].appendChild(removed);	
						} 
			    	}
				}
				else if((cellB2+a<=27)&&!(cellB1+a<=27))
				{
			    	b2.onclick=function(){
			        	removed=cells3[cellB2].removeChild(b2);
						cells3[cellB2+a].appendChild(removed);
						cellB2=cellB2+a;
						turn=2;
			    	}
			    	if(cells3[cellB2].contains(a1)&&cellB2!=0&&cellB2!=14)
					{
						removed=cells3[cellB2].removeChild(a1);
						cells2[0].appendChild(removed);
					}
					else if(cells3[cellB2].contains(a2)&&cellB2!=0&&cellB2!=14)
					{
						removed=cells3[cellB2].removeChild(a2);
						cells2[0].appendChild(removed);	
					} 
				}
				else
				{
			    	turn=1;
			    	turns.innerHTML="RED TURN";
				}
			}
		}
		else
		{
			if(preB1==6&&preB2==6)
			{
		    	if((cellB1+a<=27)&&(cellB2+a<=27))
		    	{
			     	b1.onclick=function(){
			        	removed=cells3[cellB1].removeChild(b1);
						cells3[cellB1+a].appendChild(removed);
						cellB1=cellB1+a;
						if(cells3[cellB1].contains(a1)&&cellB1!=0&&cellB1!=14)
						{
							removed=cells3[cellB1].removeChild(a1);
							cells2[0].appendChild(removed);
						}
						else if(cells3[cellB1].contains(a2)&&cellB1!=0&&cellB1!=14)
						{
							removed=cells3[cellB1].removeChild(a2);
							cells2[0].appendChild(removed);	
						} 
			     	}
			     	b2.oncick=function(){
			        	removed=cells3[cellB2].removeChild(b2);
						cells3[cellB2+a].appendChild(removed);
						cellB2=cellB2+a;
						if(cells3[cellB2].contains(a1)&&cellB2!=0&&cellB2!=14)
						{
							removed=cells3[cellB2].removeChild(a1);
							cells2[0].appendChild(removed);
						}
						else if(cells3[cellB2].contains(a2)&&cellB2!=0&&cellB2!=14)
						{
							removed=cells3[cellB2].removeChild(a2);
							cells2[0].appendChild(removed);	
						} 
			     	}
		    	}
		    	else if((cellB1+a<=27)&&!(cellB1+a<=27))
		    	{
			       	removed=cells3[cellB1].removeChild(b1);
					cells3[cellB1+a].appendChild(removed);
					cellB1=cellB1+a;
					if(cells3[cellB1].contains(a1)&&cellB1!=0&&cellB1!=14)
					{
						removed=cells3[cellB1].removeChild(a1);
						cells2[0].appendChild(removed);
					}
					else if(cells3[cellB1].contains(a2)&&cellB1!=0&&cellB1!=14)
					{
						removed=cells3[cellB1].removeChild(a2);
						cells2[0].appendChild(removed);	
					} 
		    	}	
		    	else if((cellB2+a<=27)&&!(cellB1+a<=27))
		    	{
			    	removed=cells3[cellB2].removeChild(b2);
					cells3[cellB2+a].appendChild(removed);
					cellB2=cellB2+a;
					if(cells3[cellB2].contains(a1)&&cellB2!=0&&cellB2!=14)
					{
						removed=cells3[cellB2].removeChild(a1);
						cells2[0].appendChild(removed);
					}
					else if(cells3[cellB2].contains(a2)&&cellB2!=0&&cellB2!=14)
					{
						removed=cells3[cellB2].removeChild(a2);
						cells2[0].appendChild(removed);	
					} 
		    	}	
		    	turn=1;
		    	turns.innerHTML="RED TURN";
			}
			else if(preB1==6&&preB2!=6)
			{
				if(cellB1+a<=27)
				{
			    	removed=cells3[cellB1].removeChild(b1);
					cells3[cellB1+a].appendChild(removed);
					cellB1=cellB1+a;
					if(cells3[cellB1].contains(a1)&&cellB1!=0&&cellB1!=14)
					{
						removed=cells3[cellB1].removeChild(a1);
						cells2[0].appendChild(removed);
					}
					else if(cells3[cellB1].contains(a2)&&cellB1!=0&&cellB1!=14)
					{
						removed=cells3[cellB1].removeChild(a2);
						cells2[0].appendChild(removed);	
					} 
				}
				turn=1;
				turns.innerHTML="RED TURN";
			}
			else
			{
				turn=1;
				turns.innerHTML="RED TURN";
			}
		}
		if(cells3[27].contains(b1)&&cells3[27].contains(b2))
		{
			scoreB=2;
		}
		else if(cells3[27].contains(b1)||cells3[27].contains(b2))
		{
			scoreB=1;
		}
		else
			scoreB=0;		
	}
	if(scoreA==2&&scoreB!=2)
		turns.innerHTML="RED WINS";
	else if(scoreB==2&&scoreA!=2)
		turns.innerHTML="YELLOW WINS";
}
