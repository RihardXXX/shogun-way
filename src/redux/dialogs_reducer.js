const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGES_TEXT = 'UPDATE_MESSAGES_TEXT';

const dialogs_reducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let new_message = {
                id: 3,
                message: state.new_messages_text,
                src: "https://i.pinimg.com/originals/bc/b3/19/bcb319b817317a6416f9f726bc96747f.jpg",
                acount: "I`am"
            };
            state.messages.push(new_message);
            state.new_messages_text = '';
            return state;
        case UPDATE_MESSAGES_TEXT:
            console.log(action.new_text); // test connect
            state.new_messages_text = action.new_text;
            return state;
        default:
            return state;
    }
};

export const add_message_action_creator = () => ({ type: ADD_MESSAGE});

export const update_mesage_action_creator = (new_text) => ({type: UPDATE_MESSAGES_TEXT, new_text: new_text});

export default dialogs_reducer;