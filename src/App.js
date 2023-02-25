import NoteProvider from './store/NoteProvider';
import './App.css';
import Header from './components/Header/Header';
import { useReducer, useState } from 'react';
import TextArea from './components/TextArea/TextArea';

const reducer = (prev,action) =>{
  switch(action.type){
    case "TOGGLE":
      console.log("Inside toggler");
      return {...prev, toggleIsValid:!prev.toggleIsValid}
    default:
      return {...prev}
  }
}

function App() {
    const [state,dispatch] = useReducer(reducer,{toggleIsValid:false})
    const [darkmode,setDarkmode] = useState(false);
    const onHamToggle = ()=>{
      console.log(state.toggleIsValid);
      dispatch({type:"TOGGLE"})
    }
    const darkModeToggler = () =>{
        setDarkmode(!darkmode);
    }
    return (
      <NoteProvider>
          <Header darkModeToggler={darkModeToggler} onHamToggle={onHamToggle}/>
          <TextArea  toggleIsValid={state.toggleIsValid} />
      </NoteProvider>
    );
}

export default App;
