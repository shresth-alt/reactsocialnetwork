/// <reference types="cypress" />

describe("UPDATE Post - (PATCH) /api/post/:id", () => {
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

    // PATCH - /api/post/:id updatePost
    it("Verify a specific post's data can be updated", () => {
        // Register post and save it's id
        cy.request({
            method: "POST",
            url: `${apiUrl}/api/post/`,
            body: testPost,
        }).then((res) => {
            expect(res.body.message).to.eq(
                `Post from ${testPost.accountName} successfully created!`
            );

            const eventId = res.body.id;

            cy.request({
                method: "PATCH",
                url: `${apiUrl}/api/post/${eventId}`,
                body: updatedPost,
            }).then((res) => {
                expect(res.body.message).to.eq(`Post successfully updated!`);

                expect(res.body.data.accountImage).to.eq(
                    updatedPost.accountImage
                );
                expect(res.body.data.accountName).to.eq(
                    updatedPost.accountName
                );
                expect(res.body.data.postDate).to.eq(updatedPost.postDate);
                expect(res.body.data.postText).to.eq(updatedPost.postText);
                expect(res.body.data.postImage).to.eq(updatedPost.postImage);
            });
        });
    });
});
