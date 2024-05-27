import './App.css';
import HomeComponent from './components/HomeComponent';
import QuizComponent from './components/QuizComponent';
import ResultComponent from './components/ResultComponent';
import {BrowserRouter , Routes , Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<HomeComponent />} />
        <Route path={'/quizcomponent'} element={<QuizComponent />} />
        <Route path={'/resultcomponent'} element={<ResultComponent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

// export default class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//         page:0
//     }
//   }
//   currpage=(number)=>{
//     this.setState(()=>{
//         return{
//             page: number
//         }
//     })
//   }

//   render() {
//     const {page} = this.state
//     if(page===0){
//       return (<HomeComponent pageProp={this.currpage}/>)
//     }
//     else if(page===1){
//       return (<QuizComponent pageProp={this.currpage}/>)
//     }
//     else if(page===2){
//       return (<ResultComponent pageProp={this.currpage}/>)
//     }
//   }
// }