# Images from the app:

Home Page:

![desgin](https://res.cloudinary.com/dvgqyejfc/image/upload/v1726859885/Screenshot_2024-09-20_220204_fshipi.png)

Doctors Page:
![design](https://res.cloudinary.com/dvgqyejfc/image/upload/v1726860839/Screenshot_2024-09-20_220244_wgtefe.png)

![design](https://res.cloudinary.com/dvgqyejfc/image/upload/v1726861393/Screenshot_2024-09-20_223512_tqxukm.png)

Book Consultation Page:
![design](https://res.cloudinary.com/dvgqyejfc/image/upload/v1726861413/Screenshot_2024-09-20_220317_qx6c40.png)

Articles Page:
![design](https://res.cloudinary.com/dvgqyejfc/image/upload/v1726861532/Screenshot_2024-09-20_220259_wtdlep.png)

Programs Page:
![design](https://res.cloudinary.com/dvgqyejfc/image/upload/v1726904869/Screenshot_2024-09-20_220225_pc0wbg.png)


Built with:
- **[Next.js 14](https://nextjs.org/docs)** - React framework for server-side rendering and static site generation.
- **[React](https://react.dev/)** - Library for building user interfaces.
- **[TypeScript](https://www.typescriptlang.org/docs/)** - Typed JavaScript for better code quality and maintainability.
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for rapid UI development.
- **[shadcn/ui](https://ui.shadcn.com/docs)** - Modern UI components built for React and Tailwind.
- **[brijr/craft](https://github.com/brijr/craft)** - Advanced build setup for developing Next.js projects.


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev

```
### Key Features
- **Fetch WordPress Content**: Built-in functions to fetch posts, categories, tags, authors,data information and featured media via the WordPress REST API.
- **Dynamic Sitemaps**: Automatically generated sitemaps for better SEO.
- **Filterable Content**: Includes components to filter posts by tags, categories, and authors.
- **Type Safety**: TypeScript types provided for all WordPress entities, ensuring robust and error-free code.



To connect your Next.js application with WordPress, update the `.env.local` file:
```bash
WORDPRESS_URL="https://admin.toggle-eg.com/"
WORDPRESS_HOSTNAME="admin.toggle-eg.com
