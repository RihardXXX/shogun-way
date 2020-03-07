let state = {
    profile_page: {
        data_posts: [
            {id: 1, message: 'Hello Guys', like: 10},
            {id: 2, message: 'It is my first post', like: 4},
            {id: 3, message: 'You super guy', like: 22},
            {id: 4, message: 'How are you', like: 4},
        ]
    },
    dialogs_page: {
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
        ]
    },
}

export default state;