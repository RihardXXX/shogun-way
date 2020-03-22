const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGES_TEXT = 'UPDATE_MESSAGES_TEXT';

let initial_dialog_page = {
    dialogs: [
        {id: 1, name: "Саня", css: "activ"},
        {id: 2, name: "Виктор"},
        {id: 3, name: "Света"},
        {id: 4, name: "Семён"},
    ],
    messages: [
        {
            id: 1,
            message: "Привет, как твои дела?",
            src: "https://i.pinimg.com/originals/bc/b3/19/bcb319b817317a6416f9f726bc96747f.jpg",
            acount: "I`am"
        },
        {
            id: 2,
            message: "нормально, а твои?",
            src: "https://www.crazytips.org/wp-content/uploads/2018/06/PicsArt_06-17-05.03.08.jpg",
            acount: "HE"
        }
    ],
    new_messages_text: 'please send new message',
};

const dialogs_reducer = (state=initial_dialog_page, action) => {
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