import React from 'react';

function Box({num}) {
    function allowDrop(ev) {
        ev.preventDefault();
      }

      function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        console.log(data);
        ev.target.appendChild(document.getElementById(data));
        console.log('test drop');
      
    }  function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
        console.log('test drag-2');
      }

    
    return<>
    <div id='cel1' onDrop={(event)=>drop(event)} onDragOver={(event)=>allowDrop(event)}></div>
    <div id='cel1' onDrop={(event)=>drop(event)} onDragOver={(event)=>allowDrop(event)}></div>
    <div id='cel1' onDrop={(event)=>drop(event)} onDragOver={(event)=>allowDrop(event)}></div>
    
    </>
}

export default Box;