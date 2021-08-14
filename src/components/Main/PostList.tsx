import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";

const PostListWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    width: 768ps;
    margin: 0 auto;
    padding: 50px 0 100px;
`;

const PostList: FunctionComponent = () => {
    return <PostListWrapper>

    </PostListWrapper>
};

export default PostList;