var  sliderImages = document.querySelectorAll('.slide');
var arrowLeft =document.querySelector('#arrow-left');
var arrowRight =document.querySelector('#arrow-right');
var current= 0;

// Clear images 

function reset()
{
	for (var i=0; i<sliderImages.length; i++)
	{
		sliderImages[i].style.display = 'none';
	}

}

function starSlide()
{
	reset();
	sliderImages[0].style.display = 'block';
}


// Show anterior

function slideLeft ()
{
	reset();
	sliderImages[current -1 ].style.display ='block';
	current --;

}

	//
	function slideRight()
	{
		reset();
		sliderImages[current+1].style.display='block';
		current ++;
	}

	// click left arrow

	arrowLeft.addEventListener('click', function()
	{
		if(current === 0)
		{
			current= sliderImages.length;

		}

		slideLeft();
	});


	arrowRight.addEventListener('click', function()
	{
		if(current === sliderImages.length -1 )
		{
			current= -1;

		}

		slideRight();
	});


	starSlide();

