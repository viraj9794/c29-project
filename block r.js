class Redblock
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false,
			density:0.7		
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(myWorld, this.body);

	}
	display()
	{
			var groundPos=this.body.position;		
			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255, 0, 0)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}