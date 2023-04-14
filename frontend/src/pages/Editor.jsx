import Form from "../components/editor/Form";

import './Editor.scss'

const Editor = ({ friends, setFriends }) => {
    return (
        <section className="editor">
            <h1>Editor</h1>
            <Form friends={friends} setFriends={setFriends} />
        </section>
    );
}

export default Editor;