import MarkdownEditor from './Components/MarkdownEditor'
import '@toast-ui/editor/dist/toastui-editor.css';

function App() {
    return (
        <div className="App">
            <MarkdownEditor onContentChange={console.log}/>
        </div>
    );
}

export default App;
