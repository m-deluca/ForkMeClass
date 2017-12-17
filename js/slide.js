var  sliderImages = document.querySelectorAll('.slide');
var arrowLeft =document.querySelector('#arrow-left');
var arrowRight =document.querySelector('#arrow-right');
var current= 0;

// Clear images 



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




	

