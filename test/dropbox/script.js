let data;
$.ajax({
  type: "GET",
  url: "http://localhost:9000/read"
}).then(d =>{
  data = d;
  CreateList();

  let list = $('#module').children();
  console.log($("#module>button:nth-child(1)")[0]);
  for(let i = 0; i < list.length; i++){
    console.log(i, list[i]);
  }
});


const CreateList = () =>{
  const names = Object.keys(data);
  const module = $("#module");
  for(let i = 0; i < names.length; i++){
    let button = $("<button/>", {
                  text:names[i],
                  className:'candidate-names',
                  draggable:true,
                  id:names[i]
                });
    button.on('dragstart', dragStart);
    module.append(button)
  }
}
let ds, od;
const dragStart = (e) => {
  ds = e;
  e.originalEvent.dataTransfer.setData("name", e.target.id);
  console.log("ds",ds);
  // console.log("dragstart",e.originalEvent.dataTransfer.getData("name"));
}
const clickButton = (e) =>{
  e.preventDefault();

  console.log(e.target.innerHTML);
}
function allowDrop(e){
  e.preventDefault();
  e.stopPropagation();
  console.log("allowDrop", e.originalEvent.dataTransfer.getData("name"));
}

function onDrop(e){
  e.preventDefault();
  event.stopPropagation();

  od = e;
console.log("od", od);
  const button = e.originalEvent.dataTransfer.getData("name");
  // console.log("onDrop",button);

}



$('#module').on('ondrop', onDrop);
$('#module').on('ondragover',  function(e){
  console.log("sldjfl")
  allowDrop(e)});
// $('#module').on('ondragleave', allowDrop);
// $('#module').on('ondragenter', allowDrop);
$('#other').on('ondrop', onDrop);
$('#other').on('ondragover', allowDrop);
