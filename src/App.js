import { Component, createContext } from 'react';
import './App.css';
import Greet, { ConnectMe } from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreetings from './components/UserGreetings';
import NameList from './components/NameList';
import Form from './components/Form';
import GetList from './components/GetList';
import PostList from './components/PostList';
import {Route, Routes} from 'react-router-dom';
import Home from './components/IVP/Home';
import About from './components/IVP/About';
import Contact from './components/IVP/Contact';
import Navbar from './components/Navbar';
import OrderSummary from './components/IVP/OrderSummary';
import NoMatch from './components/NoMatch';
import UseStateHook1 from './components/Hooks/UseStateHook1';
import UseStakeHook2 from './components/Hooks/UseStakeHook2';
import Student from './components/MiniProj/Student';
import AddStudent from './components/MiniProj/AddStudent';
import HomePage from './components/MiniProj/HomePage';
import UpdateStudent from './components/MiniProj/UpdateStudent';
import DeleteStudent from './components/MiniProj/DeleteStudent';
import GetAllStudent from './components/MiniProj/GetAllStudent';
import Stream from './components/MiniProj/Stream';
import AddStream from './components/MiniProj/AddStream';
import UpdateStreams from './components/MiniProj/UpdateStreams';
import DeleteStream from './components/MiniProj/DeleteStream';
import UseEffectHook1 from './components/Hooks/UseEffectHook1';
import UseEffectHook2 from './components/Hooks/UseEffectHook2';
import UseEffectHook3 from './components/Hooks/UseEffectHook3';
import ParentComp from './components/Hooks/ParentComp';
import GetStudentById from './components/MiniProj/GetStudentById';
import GetAllStreams from './components/MiniProj/GetAllStreams';
import GetStreambyId from './components/MiniProj/GetStreambyId';
import PatchStudent from './components/MiniProj/PatchStudent';
import HOD from './components/MiniProj/HOD';

const nameData= createContext()
const emailData= createContext()


function App() {
  const name= 'Nikhil';
  const email= 'Ng@gmail.com'

  return (
    <div className="App">
     
       {/* <Greet name="Nikhil" job="Trainer" title="Head"/>
       <Welcome name="Amit" job="IT" title="Trainee"/> */}
        {/* <Message /> */}
       {/* <FunctionClick />
       <ClassClick />
       <EventBind />
       <ParentComponent />
        <UserGreetings />
        <NameList /> */}
        {/* <Form /> */}

        {/* <PostList /> */}

      {

      /* <h2>Welcome to react</h2>
      <Greet name="Nikhil" job="Trainer">

      <button>Click Me</button>
      </Greet>
    
      <Greet name="Jack" job="Manager"/>
      <Greet name="Rose" job="Developer"/>

      <ConnectMe/>
      <Welcome name="Samir">
        <p>I am a cricketer</p>
        </Welcome> */}

         <Navbar></Navbar> 
      {/* <h2>Routing</h2> */}
        <Routes>
          {/* <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/getuser" element={<GetList />}></Route>
          <Route path="/postinfo" element={<PostList />}></Route>
          <Route path="/order" element={<OrderSummary />}></Route>
          <Route path="*" element={<NoMatch />}></Route> */}
          {/* <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/getuser" element={<GetList />}></Route>
          <Route path="/postinfo" element={<PostList />}></Route>
          <Route path="/order" element={<OrderSummary />}></Route> */}

          <Route path="/" element={<HomePage />}></Route>
          <Route path="student/addstudent" element={<AddStudent />}></Route>
          <Route path="/student" element={<Student />}></Route>
          <Route path="student/updatestudent" element={<UpdateStudent />}></Route>
          <Route path="student/deletestudent" element={<DeleteStudent />}></Route>
          <Route path="student/getallstudent" element={<GetAllStudent />}></Route>
          <Route path="student/getstudentbyid" element={<GetStudentById />}></Route>
          <Route path="student/patchstudent" element={<PatchStudent />}></Route>


          <Route path="/stream" element={<Stream />}></Route>
          <Route path="stream/addstream" element={<AddStream />}></Route>
          <Route path="stream/updatestream" element={<UpdateStreams />}></Route>
          <Route path="stream/getallstreams" element={<GetAllStreams />}></Route>
          <Route path="stream/getstreambyid" element={<GetStreambyId />}></Route>

          <Route path="/hod" element={<HOD />}></Route>
          <Route path="hod/addhod" element={<AddStream />}></Route>
          <Route path="hod/updatehod" element={<UpdateStreams />}></Route>
          <Route path="hod/getallhods" element={<GetAllStreams />}></Route>
          <Route path="hod/gethodbyid" element={<GetStreambyId />}></Route>



          <Route path="*" element={<NoMatch />}></Route>


          

        </Routes>

        {/* <UseStateHook1 />
        <UseStakeHook2 /> */}

        {/* <nameData.Provider value={name}>
        <emailData.Provider value={email}>
        <ParentComp/>
        </emailData.Provider>
        </nameData.Provider> */}

        


   
    </div>
  );
}

export default App;
export {nameData, emailData}
