import Blog from "./components/MainPage/Blog"
import Header from "./components/Header/Header"
import GetStarted from "./components/GetStarted/GetStarted";
import GuideRegister from "./components/GuideRegister/GuideRegister"
import ChatWindow from "./components/ChatWindow/ChatWindow";
import UserList from "./components/UserList/UserList";


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

    {/* <UserList/> */}

    <ChatWindow/>
    {/* <GuideRegister/> */}

    {/* <GetStarted/> */}
    {/* <Blog/> */}
    </>

  );
}

export default App;
