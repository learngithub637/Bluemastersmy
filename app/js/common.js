$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    arrows: false,
    dots: true,
  });
});

function clean(node)
{
  for(var n = 0; n < node.childNodes.length; n ++)
  {
    var child = node.childNodes[n];
    if
    (
      child.nodeType === 8 
      || 
      (child.nodeType === 3 && !/\S/.test(child.nodeValue))
    )
    {
      node.removeChild(child);
      n --;
    }
    else if(child.nodeType === 1)
    {
      clean(child);
    }
  }
}

clean(document.body);

function openNav() {
	document.getElementsByClassName("side-menu")[0].style.display = "block";
}


function closeNav() {
	document.getElementsByClassName("side-menu")[0].style.display = "none";
}