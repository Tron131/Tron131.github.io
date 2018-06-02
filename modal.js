$(function() {
	$(".closeModal").click(function() {
		$(".modal").css("opacity",0)
		$(".modal").css("visibility","hidden")		
	})
})

function ModalShow()
{
	$(".modal").css("opacity",1)
	$(".modal").css("visibility","visible")	
}