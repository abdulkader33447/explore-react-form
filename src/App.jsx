
import './App.css'
import ControlledField from './component/ControlledField/ControlledField'
import FormAction from './component/FormAction/FormAction'
import SimpleForm from './component/SimpleForm/SimpleForm'
import UnControlledField from './component/UnControlledField/UnControlledField'

function App() {
  

  return (
    <>
     <h1>Explore react form</h1>
     {/* <SimpleForm></SimpleForm> */}
     {/* <FormAction></FormAction> */}
     {/* <ControlledField></ControlledField> */}
     <UnControlledField></UnControlledField>
    </>
  )
}

export default App
