
import './App.css';
import './css/App.scss';
import './css/hover.scss';
import './css/responsive.scss';
import ArticleBox from "./components/ArticleBox";



function App(props) {
  return (
      <ArticleBox article = {props.state.article}/>
  )
}

export default App;
