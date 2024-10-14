'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

// Interfaces for Post and Media types
interface Post {
  id: number;
  title: { rendered: string };
  featured_media: number;
}

interface Media {
  id: number;
  source_url: string;
  alt_text: string;
}

// The main component to display all images
const ImageGallery = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [mediaList, setMediaList] = useState<Media[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch all the posts
    const fetchPosts = async () => {
      try {
        // Fetch the posts
        const postRes = await fetch('https://admin.toggle-eg.com/wp-json/wp/v2/image');
        const postData: Post[] = await postRes.json();
        setPosts(postData);

        // Fetch all featured media for each post
        const mediaPromises = postData.map(async (post) => {
          if (post.featured_media) {
            const mediaRes = await fetch(
              `https://admin.toggle-eg.com/wp-json/wp/v2/media/${post.featured_media}`
            );
            return mediaRes.json();
          }
        });

        // Wait for all media to be fetched
        const mediaData = await Promise.all(mediaPromises);
        setMediaList(mediaData.filter(Boolean) as Media[]); // Filter out null values

        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts or media:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
      {mediaList.map((media) => (
        <div key={media.id} className="  flex flex-col items-center mx-4">
          {/* Display the image */}
          <Image
            src={media.source_url}
            alt={media.alt_text || 'Image'}
            width={600} // Customize the width as needed
            height={400} // Customize the height as needed
            className="rounded-lg shadow-lg"
          />
          {/* Optionally, display the title or other information */}
          {/* <p className="mt-2 text-lg font-semibold">{media.alt_text || 'Image'}</p> */}
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
