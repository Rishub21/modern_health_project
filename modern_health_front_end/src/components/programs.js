import React from 'react'
import HorizontalScroller from 'react-horizontal-scroll-container';

class ProgramLibrary extends React.Component {
  render(){
    var lister = [1,2,3,4,5,6]
    return (
       <div>
         <center><h1>Program Library</h1></center>
          <div>
              {this.createLibrary(this.props.programList)}
          </div>
       </div>

     )
  }

  createLibrary = (programList) => {

    const programLibrary  = programList.map((program, index) =>
    <div >
        <h3 > {"Program " + (index + 1) + ": " + program.name}</h3>
        <div class = "container">
        <div class="row">
                {this.createSectionCards(program)}
        </div>
        </div>
    </div>
    );
    return programLibrary
  }
  createSectionCards = (program) => {

    const divStyle = {
      margin: '20px',
    };

    const scrollBox = {
      overflowY: "scroll",
      height: "50px",
    };
    const checkBoxStyle = {
      margin: "10px",
      marginTop: "10px",
    }

    const pathToCats = require.context('../images/', true);

    var imagePathMap = {  "action":  require('../images/action.png'),
                          "flexibility"  : require('../images/flexible.png'),
                          "mind" : require('../images/mind.png'),
                          "values": require('../images/values.png'),
                          "creative": require('../images/creative.png'),
                          "empathy": require('../images/empathy.png'),
                        }


    const sectionList = program.sectionList.map((section, index) =>
      <div class="col m3">

         <div class="card" style = {divStyle}>
            <div class="card-image waves-effect waves-block waves-light">
               <img class="activator" src= {imagePathMap[section.imageName]}/>

            </div>
            <label >
            <input type="checkbox" class = "filled-in"  />
              <span>Complete</span>
            </label>

            <div class="card-content">
              <span class="card-title activator blue-text text-darken-4">  {"Part " + (index + 1) + ": " + section.name } <i class="material-icons right">more_vert</i></span>

              <p style = {scrollBox}> {section.description} </p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4"> {"PART " + (index + 1) + " " + section.name} <i class="material-icons right">close</i></span>
              <p dangerouslySetInnerHTML={{__html: section.htmlContent}} />

            </div>
        </div>
      </div>
       );
    return sectionList;
  }


}

export default ProgramLibrary
