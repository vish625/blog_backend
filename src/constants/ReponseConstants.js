const ResponseConstants = {
    FailedResponseMessage: "Failed in Processing the Request",
    SuccessResponseMessage: "Success in Processing the Request",

    User: {
        SuccessRegistration: "User registered successfully",
        SuccessLogin: "User logged in successfully",
        Error: {
            ExistingUser: "A user with this email already exists",
            LoginFailed: "Invalid email or password",
            NotFound: "User not found"
        }
    },

    Blog: {
        SuccessCreation: "Blog created successfully",
        SuccessUpdate: "Blog updated successfully",
        SuccessDeletion: "Blog deleted successfully",
        Error: {
            NotFound: "Blog not found",
            Unauthorized: "You are not authorized to modify this blog"
        }
    },

    Comment: {
        SuccessCreation: "Comment added successfully",
        SuccessDeletion: "Comment deleted successfully",
        Error: {
            NotFound: "Comment not found",
            Unauthorized: "You are not authorized to delete this comment"
        }
    },

   
    Favorite: {
        SuccessAdd: "Blog added to favorites",
        SuccessRemove: "Blog removed from favorites",
        Error: {
            AlreadyFavorited: "Blog is already in your favorites",
            NotFavorited: "Blog is not in your favorites"
        }
    },

    Category: {
        SuccessFetch: "Categories fetched successfully",
        Error: {
            NotFound: "Category not found"
        }
    }
};

module.exports.ResponseConstants = ResponseConstants;
