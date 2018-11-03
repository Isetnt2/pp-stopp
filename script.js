document.onreadystatechange = () =>
{
  if(document.readyState === 'complete')
  {
      var div1=document.getElementById('node1');
      var div2=document.getElementById('node2');
// dynamicPath helps to create a directional path between two div elements.
      dynamicPath(div1,div2);
  }
}