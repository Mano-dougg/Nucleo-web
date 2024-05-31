// components/LatestPost.js
import React from 'react';
import { AllDocumentTypes } from '../../../prismicio-types';
import { PostItem } from '../PostItem/PostItem';

interface LatestPostProps {
    posts: AllDocumentTypes[];
}

export const LatestPost: React.FC<LatestPostProps> = ({ posts }) => {
    // Ordena os posts por data em ordem decrescente
    const sortedPosts = posts.sort((a, b) => {
        return new Date(b.first_publication_date).getTime() - new Date(a.first_publication_date).getTime();
    });

    // Pega o primeiro post (o mais recente)
    const latestPost = sortedPosts[0];

    return <PostItem post={latestPost} />;
};


