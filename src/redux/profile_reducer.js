const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';

const profile_reducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let new_post = {
                id: 5,
                message: state.new_post_text,
                like: 22,
            };
            state.data_posts.push(new_post);
            state.new_post_text = '';
            return state;
        case UPDATE_POST_TEXT:
            console.log(action.new_text); // test connect
            state.new_post_text = action.new_text;
            return state;
        default:
            return state;
    }
};

export const add_post_action_creator = () => ({type: ADD_POST});

export const update_on_post_text_action_creator = (text) => ({type: UPDATE_POST_TEXT, new_text: text});

export default profile_reducer;