import React, { FunctionComponent } from "react";

interface PostItemProps {
    titie: string;
    date: string;
    categories: string[],
    summary: string;
    thumbnail: string;
    link: string;
}

const PostItem: FunctionComponent<PostItemProps> = ({
    title,
    date,
    category,
    summary,
    thumbnail,
    link,
}) => {
    return <div />;
};

export default PostItem;