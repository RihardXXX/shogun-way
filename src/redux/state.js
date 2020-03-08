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
    friends: {
        friends_list: [
            {
                src: "https://1.bp.blogspot.com/-NglqPxOBChE/UNxjZYY1wII/AAAAAAAAAP4/1s3H7FpgRJM/s1600/Brad+Pitt+1.jpg",
                name: "Brad Pitt"
            },
            {src: "https://www.kino-teatr.ru/acter/photo/0/7/48870/255944.jpg", name: "Colin Farel"},
            {src: "https://i.pinimg.com/736x/0c/2d/96/0c2d969ad44c4d5f5dd954834b08f559.jpg", name: "Angelina"},
            {
                src: "https://londonspeakerbureau.com/wp-content/uploads/2017/04/keynote-speaker-arnold-schwarzenegger.png",
                name: "Arnold"
            },
            {
                src: "data:image/jpeg;base64,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",
                name: "Leonardo"
            },
        ]
    }
}

export default state;