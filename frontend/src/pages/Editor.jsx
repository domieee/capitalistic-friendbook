import Form from "../components/editor/Form";

import './Editor.scss'

const Editor = ({ friends, setFriends }) => {
    return (
        <section className="editor">
            <Form friends={friends} setFriends={setFriends} />
        </section>
    );
}

export default Editor;