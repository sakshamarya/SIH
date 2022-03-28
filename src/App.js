import Blog from "./components/MainPage/Blog"
import Header from "./components/Header/Header"
import GetStarted from "./components/GetStarted/GetStarted";

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

function App() {
  return (
    
    <>
    <Header title="Tour Guide Finder" sections={sections} />
    <GetStarted/>
    {/* <Blog/> */}
    </>

  );
}

export default App;
