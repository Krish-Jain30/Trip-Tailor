export const API_MESSAGES = {
    loading: {
        title: "Loading...",
        message: "Data is being loaded, please wait."
    },
    success: {
        title: "Success",
        message: "Data successfully loaded"
    },
    responseFailure: {
        title: "Error",
        message: "An error occured."
    },
    requestFailure: {
        title: "Error",
        message: "Error"
    },
    networkIssues: {
        title: "Error",
        message: "Unable to connect"
    }
}

export const SERVICE_URLS = {
    userSignup: { url: "/signup", method: 'POST'},
    userLogin: { url: "/login", method: 'POST'},
    uploadFile: {url: "/file/upload", method: "POST"},
    createItenary: {url: "/create", method:"POST"},
    getItenaries: {url: "/itenaries", method: "GET", params: true},
    getPostById: {url: "post", method: "GET", query: true}
}