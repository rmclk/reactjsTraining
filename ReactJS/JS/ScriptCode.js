class App extends React.Component {
    render(){
        return(
            <div>
                <Header />
                <Content />
            </div>
        );
    }
};

class Header extends React.Component {
    render(){
        return(
            <div>
                <h1>ReactJs Course</h1>
            </div>
        );
    }
};

class Content extends React.Component{
    render(){
        return(
            <div>
                <h2>Location: Allstate Northern ireland</h2>
                <p>Room: May Meadows Training Room 3</p>
            </div>
        );
    }
};

ReactDOM.render(<App />, document.getElementById('contentgoeshere'));