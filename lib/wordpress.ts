// Description: WordPress API functions
// Used to fetch data from a WordPress site using the WordPress REST API
// Types are imported from `wp.d.ts`

import querystring from 'query-string'

import {
  Post,
  Category,
  Tag,
  Page,
  Author,
  FeaturedMedia,
} from "./wordpress.d";

// WordPress Config

const baseUrl = process.env.WORDPRESS_URL;

function getUrl(path: string, query?: Record<string, any>) {
    const params = query ? querystring.stringify(query) : null
    
  
    return `${baseUrl}${path}${params ? `?${params}` : ""}`
}

// WordPress Functions

export async function getAllPosts(filterParams?: {
  author?: string;
  tag?: string;
  category?: string;
}): Promise<Post[]> {  
  const url = getUrl("/wp-json/wp/v2/posts", { author: filterParams?.author, tags: filterParams?.tag, categories: filterParams?.category, cashe: "no-store" });
  const response = await fetch(url);
  const posts: Post[] = await response.json();
  return posts;
}

export async function getPostById(id: number): Promise<Post> {
  const url = getUrl(`/wp-json/wp/v2/posts/${id}`, {cashe: "no-store"});
  const response = await fetch(url);
  const post: Post = await response.json();
  return post;
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const url = getUrl("/wp-json/wp/v2/posts", { slug, cashe: "no-store" });
  const response = await fetch(url);
  const post: Post[] = await response.json();
  return post[0];
}

export async function getAllCategories(): Promise<Category[]> {
  const url = getUrl("/wp-json/wp/v2/categories");
  const response = await fetch(url);
  const categories: Category[] = await response.json();
  return categories;
}

export async function getCategoryById(id: number): Promise<Category> {
  const url = getUrl(`/wp-json/wp/v2/categories/${id}`);
  const response = await fetch(url);
  const category: Category = await response.json();
  return category;
}

export async function getCategoryBySlug(slug: string): Promise<Category> {
  const url = getUrl("/wp-json/wp/v2/categories", { slug });
  const response = await fetch(url);
  const category: Category[] = await response.json();
  return category[0];
}

export async function getPostsByCategory(categoryId: number): Promise<Post[]> {
  const url = getUrl("/wp-json/wp/v2/posts", { categories:  categoryId });
  const response = await fetch(url);
  const posts: Post[] = await response.json();
  return posts;
}

export async function getPostsByTag(tagId: number): Promise<Post[]> {
  const url = getUrl("/wp-json/wp/v2/posts", { tags:  tagId });
  const response = await fetch(url);
  const posts: Post[] = await response.json();
  return posts;
}

export async function getTagsByPost(postId: number): Promise<Tag[]> {
  const url = getUrl("/wp-json/wp/v2/tags", { post:  postId });
  const response = await fetch(url);
  const tags: Tag[] = await response.json();
  return tags;
}

export async function getAllTags(): Promise<Tag[]> {
  const url = getUrl("/wp-json/wp/v2/tags");
  const response = await fetch(url);
  const tags: Tag[] = await response.json();
  return tags;
}

export async function getTagById(id: number): Promise<Tag> {
  const url = getUrl(`/wp-json/wp/v2/tags/${id}`);
  const response = await fetch(url);
  const tag: Tag = await response.json();
  return tag;
}

export async function getTagBySlug(slug: string): Promise<Tag> {
  const url = getUrl("/wp-json/wp/v2/tags", { slug });
  const response = await fetch(url);
  const tag: Tag[] = await response.json();
  return tag[0];
}

export async function getAllPages(): Promise<Page[]> {
  const url = getUrl("/wp-json/wp/v2/pages");
  const response = await fetch(url, { cache: "no-store" });
  const pages: Page[] = await response.json();
  return pages;
}
interface Program {
  // Define the properties of the Program type
  featured_media: number;
  // Other properties...
}

interface ProgramWithImage extends Program {
  imageUrl: string;
}

export async function getAllPrograms(): Promise<ProgramWithImage[]> {
  const url = getUrl("/wp-json/wp/v2/program");
  
  // Fetch programs data
  const response = await fetch(url, { cache: "no-store" });
  const programs: Program[] = await response.json();
  
  // Process the programs to include image URLs
  const programsWithImages: ProgramWithImage[] = await Promise.all(
    programs.map(async (program) => {
      if (program.featured_media) {
        // Fetch media data for each program
        const mediaResponse = await fetch(
          `${baseUrl}/wp-json/wp/v2/media/${program.featured_media}`,
          { cache: "no-store" }
        );
        const mediaData = await mediaResponse.json();
        return {
          ...program,
          imageUrl: mediaData.source_url, // Use the image URL for display
        } as ProgramWithImage;
      }
      // If no featured media, return program without the imageUrl
      return {
        ...program,
        imageUrl: "", // Fallback to empty string or placeholder image URL
      } as ProgramWithImage;
    })
  );

  // Return programs with image data
  return programsWithImages;
}

export async function getAllPrograms2(): Promise<ProgramWithImage[]> {
  const url = getUrl("/wp-json/wp/v2/program2");
  
  // Fetch programs data
  const response = await fetch(url, { cache: "no-store" });
  const programs: Program[] = await response.json();
  
  // Process the programs to include image URLs
  const programsWithImages: ProgramWithImage[] = await Promise.all(
    programs.map(async (program) => {
      if (program.featured_media) {
        // Fetch media data for each program
        const mediaResponse = await fetch(
          `${baseUrl}/wp-json/wp/v2/media/${program.featured_media}`,
          { cache: "no-store" }
        );
        const mediaData = await mediaResponse.json();
        return {
          ...program,
          imageUrl: mediaData.source_url, // Use the image URL for display
        } as ProgramWithImage;
      }
      // If no featured media, return program without the imageUrl
      return {
        ...program,
        imageUrl: "", // Fallback to empty string or placeholder image URL
      } as ProgramWithImage;
    })
  );

  // Return programs with image data
  return programsWithImages;
}

/**
 * A program with its featured media image.
 */
interface Doctor {
  id: number;
  title: {
    rendered: string;
  };
  acf: {
    phoneNumber: string;
    description: string;
  };
  featured_media: number;
}

interface MediaImage extends Doctor {
  imageUrl: string;
}


export async function getAllDoctors(): Promise<MediaImage[]> {
  const url = getUrl("/wp-json/wp/v2/doctor");

  // Fetch doctors data
  const response = await fetch(url, { cache: "no-store" });
  const doctors: Doctor[] = await response.json();

  // Process the doctors to include image URLs
  const doctorsWithImages: MediaImage[] = await Promise.all(
    doctors.map(async (doctor) => {
      if (doctor.featured_media) {
        // Fetch media data for each doctor
        const mediaResponse = await fetch(
          `${baseUrl}/wp-json/wp/v2/media/${doctor.featured_media}`,
          { cache: "no-store" }
        );
        const mediaData = await mediaResponse.json();
        return {
          ...doctor,
          imageUrl: mediaData.source_url, // Use the image URL for display
        } as MediaImage;
      }
      // If no featured media, return doctor without the imageUrl
      return {
        ...doctor,
        imageUrl: "", // Fallback to empty string or placeholder image URL
      } as MediaImage;
    })
  );

  // Return doctors with image data
  return doctorsWithImages;
}


export async function getPageById(id: number): Promise<Page> {
  const url = getUrl(`/wp-json/wp/v2/pages/${id}`);
  const response = await fetch(url);
  const page: Page = await response.json();
  return page;
}

export async function getDynamicSlug(slug: string, route: string): Promise<Page> {
  const url = getUrl(`/wp-json/wp/v2/${route}`, { slug });
  const response = await fetch(url, {cache: 'no-store'});
  const page: any[] = await response.json();

// DynamicWithMedia
const DynamicWithMedia: any[] = await Promise.all(
 page.map(async (payload) => {
    if (payload.featured_media) {
      // Fetch media data for each doctor
      const mediaResponse = await fetch(
        `${baseUrl}/wp-json/wp/v2/media/${payload.featured_media}`,
        { cache: "no-store" }
      );
      const mediaData = await mediaResponse.json();
      return {
        ...payload,
        imageUrl: mediaData.source_url, // Use the image URL for display
      } as MediaImage;
    }
    // If no featured media, return doctor without the imageUrl
    return {
      ...payload,
      imageUrl: "", // Fallback to empty string or placeholder image URL
    } as MediaImage;
  })
);
  return DynamicWithMedia[0];
}


export async function getAllAuthors(): Promise<Author[]> {
  const url = getUrl("/wp-json/wp/v2/users");
  const response = await fetch(url);
  const authors: Author[] = await response.json();
  return authors;
}

export async function getAuthorById(id: number): Promise<Author> {
  const url = getUrl(`/wp-json/wp/v2/users/${id}`);
  const response = await fetch(url);
  const author: Author = await response.json();
  return author;
}

export async function getAuthorBySlug(slug: string): Promise<Author> {
  const url = getUrl("/wp-json/wp/v2/users", { slug });
  const response = await fetch(url);
  const author: Author[] = await response.json();
  return author[0];
}

export async function getPostsByAuthor(authorId: number): Promise<Post[]> {
  const url = getUrl("/wp-json/wp/v2/posts", { author: authorId });
  const response = await fetch(url);
  const posts: Post[] = await response.json();
  return posts;
}

export async function getPostsByAuthorSlug(
  authorSlug: string
): Promise<Post[]> {
  const author = await getAuthorBySlug(authorSlug);
  const url = getUrl("/wp-json/wp/v2/posts", { author: author.id });
  const response = await fetch(url);
  const posts: Post[] = await response.json();
  return posts;
}

export async function getPostsByCategorySlug(
  categorySlug: string
): Promise<Post[]> {
  const category = await getCategoryBySlug(categorySlug);
  const url = getUrl("/wp-json/wp/v2/posts", { categories: category.id });
  const response = await fetch(url);
  const posts: Post[] = await response.json();
  return posts;
}

export async function getPostsByTagSlug(tagSlug: string): Promise<Post[]> {
  const tag = await getTagBySlug(tagSlug);
  const url = getUrl("/wp-json/wp/v2/posts", { tags: tag.id });
  const response = await fetch(url);
  const posts: Post[] = await response.json();
  return posts;
}

export async function getFeaturedMediaById(id: number): Promise<FeaturedMedia> {
  const url = getUrl(`/wp-json/wp/v2/media/${id}`);
  const response = await fetch(url);
  const featuredMedia: FeaturedMedia = await response.json();
  return featuredMedia;
}
