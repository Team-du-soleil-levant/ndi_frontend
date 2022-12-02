import React from 'react';
import Scene from '../../components/common/scene';
import '../../style/chapter1/chapter1.css';
import data from '../../data/chapter1/dialog.json';

function Chapter1() {
  const data_string = JSON.stringify(data);
  return (
    <div className="App">
      <Scene data={data_string}></Scene>
      {/* <div className="main room">
        <Dialog speaker={'MOI'} paragraph={"Hello World j'adore le react blabla"}></Dialog>
         
      </div> */}
    </div>
  );
}

export default Chapter1;
