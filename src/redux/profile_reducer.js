const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';

let initial_profile_page = {
    data_posts: [
        {id: 1, message: 'Hello Guys', like: 10},
        {id: 2, message: 'It is my first post', like: 4},
        {id: 3, message: 'You super guy', like: 22},
        {id: 4, message: 'How are you', like: 4},
    ],
    new_post_text: 'please enter text',
};

const profile_reducer = (state=initial_profile_page, action) => {
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