var { h, render } = require('preact')

function App (props) {
    return <div>
        hello world
    </div>
}

render(<App />, document.getElementById('content'))

