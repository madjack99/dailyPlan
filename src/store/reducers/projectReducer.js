const initState = {
    projects: [
        {
            "id": "1",
            "title": "help me find peach",
            "content": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum"
          },
          {
            "id": "2",
            "title": "collect all the stars",
            "content": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor"
          },
          {
            "id": "3",
            "title": "egg hunt with yoshi",
            "content": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus"
          },
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT': {
            console.log('created project', action.project)
        }
    }
    return state
}

export default projectReducer