/// <reference types="cypress" />

describe("CREATE Post - (POST) /api/post/", () => {
    const apiUrl = "http://localhost:9000";

    const testPost = {
        accountImage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwordpress.org%2Fplugins%2Fuser-avatar-reloaded%2F&psig=AOvVaw2nbyJIvY_c1K0Q-xucV4BL&ust=1715673395034000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNjHm8yTioYDFQAAAAAdAAAAABAE",
        accountName: "Test user",
        postDate: new Date().toDateString(),
        postText: "Test post API",
        postImage:
            "https://static.vecteezy.com/system/resources/previews/012/168/187/non_2x/beautiful-sunset-on-the-beach-with-palm-tree-for-travel-and-vacation-free-photo.JPG",
    };

    const updatedPost = {
        accountImage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwordpress.org%2Fplugins%2Fuser-avatar-reloaded%2F&psig=AOvVaw2nbyJIvY_c1K0Q-xucV4BL&ust=1715673395034000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNjHm8yTioYDFQAAAAAdAAAAABAE",
        accountName: "Updated Test user",
        postDate: new Date().toDateString(),
        postText: "Test post API",
        postImage:
            "https://static.vecteezy.com/system/resources/previews/012/168/187/non_2x/beautiful-sunset-on-the-beach-with-palm-tree-for-travel-and-vacation-free-photo.JPG",
    };

    // POST - /api/post/ createPost
    it("Verify a post is created with valid data", () => {
        cy.request(`${apiUrl}/api/post/${2}`).then((res) => {
            expect(res.body.message).to.eq("Post successfully retrieved!");
        });

        cy.request({
            method: "POST",
            url: `${apiUrl}/api/post/`,
            body: testPost,
        }).then((res) => {
            expect(res.body.message).to.eq(
                `Post from ${testPost.accountName} successfully created!`
            );
        });
    });
});
