import './App.css';

function App() {
  return (
    <div className="App">
      <div className="sideBar">
      <div className="upperSide">
          <div className="upperSideTop"><img src="https://www.google.com/url?sa=i&url=https%3A%2F%2F1000logos.net%2Fchatgpt-logo%2F&psig=AOvVaw2eK4BrkjiIb-l6DzssM5jZ&ust=1703224508790000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCMDzo_Lrn4MDFQAAAAAdAAAAABAE" alt="Logo" className="logo" /><span className="brand">Matrix AI</span></div>
          <button className="midBtn"><img src="{addBtn}" alt="New Chat" className="addBtn" /> New Chat</button>
          <div className="upperSideBottom">
            <button className="query"><img src=".assets/message.png" alt="Query" />What Is Programming?</button>
            <button className="query"><img src=".assets/message.png" alt="Query" />How To use an API?</button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems"><img src="{home}" alt="" className="listItemsImg" />Home</div>
          <div className="listItems"><img src="{saved}" alt="" className="listItemsImg" />Saved</div>
          <div className="listItems"><img src="{rocket}" alt="" className="listItemsImg"/>Upgrade to Pro</div>
        </div>
      </div>
      <div className="main">
        
        </div>
    </div>
  );
}

export default App;
