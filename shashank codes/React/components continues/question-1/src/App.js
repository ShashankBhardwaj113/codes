import React from 'react';
import SelectField from './lib/user/SelectField';
import InputField from './lib/user/InputField';

const App = (props) => {
  let display = [1,2,3,4,5,6];

  return(
    <div>
      {display.map((nums)=>{
        if(nums%2===0){
          return <SelectField key={nums} number={nums}/>
        }
        else{
          return <InputField key={nums} number={nums}/>
        }
      })}
    </div>
  );
}

export default App;
