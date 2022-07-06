import {useRef, useEffect} from "react";
import Editor from '@toast-ui/editor';

const MarkdownEditor = (props) => {
    const element = useRef(null);

    useEffect(() => {
        const editor = new Editor({
            el: element.current,
            hideModeSwitch: true,
        });

        editor.addHook('change', props.onContentChange);
    })

    return (
        <div id="editor" ref={element}></div>
    )
}

export default MarkdownEditor;