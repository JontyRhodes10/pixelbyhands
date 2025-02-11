// import React from 'react';
// import { ArrowRight } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// interface BlogPost {
//   title: string;
//   image: string;
//   slug?: string;
// }

// const Blog = () => {
//   const blogPosts: BlogPost[] = [
//     {
//       title: "The Ultimate Guide to Product Photo Post-Production",
//       image: "https://www.pixelbyhand.com/wp-content/uploads/2024/10/Ultimate-Guide-to-Product-Photo-Post-Production.jpeg",
//       slug: "ultimate-guide-product-photo-post-production"
//     },
//     {
//       title: "How to Achieve Consistent Product Photography",
//       image: "https://www.pixelbyhand.com/wp-content/uploads/2024/09/fashion-ecommerce-website.jpeg",
//       slug: "how-to-achieve-consistent-product-photography"
//     },
//     {
//       title: "How N8N is Helping Budding Entrepreneurs in Tech",
//       image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
//       slug: "n8n-helping-entrepreneurs"
//     },
//     {
//       title: "E-commerce Photography Trends for 2024",
//       image: "https://www.pixelbyhand.com/wp-content/uploads/2024/09/model-fashion-ecommerce-shirt.jpg"
//     },
//     {
//       title: "Mastering Ghost Mannequin Photography",
//       image: "https://www.pixelbyhand.com/wp-content/uploads/2024/09/fashion-ecomerce-shirt-after-editing.png"
//     },
//     {
//       title: "Color Correction: The Complete Guide",
//       image: "https://www.pixelbyhand.com/wp-content/uploads/2024/12/photo-studio-professional-with-ecommerce-website.png"
//     },
//     {
//       title: "Scaling Your E-commerce Photography",
//       image: "https://www.pixelbyhand.com/wp-content/uploads/2024/10/fashion-ecommerce-website.jpeg"
//     }]

//   return (
//     <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
//       <Navbar />

//       <main className="pt-16">
//         {/* Hero Section */}
//         <section 
//           className="relative py-24 bg-cover bg-center"
//           style={{
//             backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://www.pixelbyhand.com/wp-content/uploads/2024/10/dedicated-online-account-support-for-High-volume-Fashion-ecommerce-post-production-services.jpeg')`
//           }}
//         >
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center">
//               <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
//                 Our Latest News...
//               </h1>
//               <p className="text-xl text-white/90 max-w-2xl mx-auto">
//                 Discover insights, techniques, and best practices for e-commerce product photography and post-production.
//               </p>
//             </div>
//           </div>

//           {/* Decorative Elements */}
//           <div className="absolute inset-0 pointer-events-none overflow-hidden">
//             <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
//             <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />
//           </div>
//         </section>

//         {/* Blog Posts Grid */}
//         <section className="py-24">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {blogPosts.map((post, index) => (
//                 <article 
//                   key={index}
//                   className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
//                 >
//                   <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
//                     <img
//                       src={post.image}
//                       alt={post.title}
//                       className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   </div>
//                   <div className="p-6">
//                     <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 line-clamp-2 group-hover:text-[#bb4430] dark:group-hover:text-[#ff6b52] transition-colors duration-300">
//                       {post.title}
//                     </h2>
//                     <Link 
//                       to={post.slug ? `/blog/${post.slug}` : "#"} 
//                       className="inline-flex items-center text-[#bb4430] dark:text-[#ff6b52] hover:text-[#bb4430]/80 dark:hover:text-[#ff6b52]/80 transition-colors duration-300"
//                     >
//                       Read More
//                       <ArrowRight className="ml-2 h-4 w-4" />
//                     </Link>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default Blog;






// **** The OG ************


import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import { BounceLoader } from 'react-spinners';

interface BlogPost {
  title: string;
  image_url: string;
  slug: string;
}

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://work-flow-apis-production.up.railway.app/api/blog/titles');
        // console.log('API Response:', response.data); // Log the API response
        setBlogPosts(response.data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <BounceLoader color="#bb4430" size={100} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section 
          className="relative py-24 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://www.pixelbyhand.com/wp-content/uploads/2024/10/dedicated-online-account-support-for-High-volume-Fashion-ecommerce-post-production-services.jpeg')`
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Latest News...
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Discover insights, techniques, and best practices for e-commerce product photography and post-production.
              </p>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />
          </div>
        </section>
        {/* Blog Posts Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article 
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                    <img
                      src={post.image_url}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 line-clamp-2 group-hover:text-[#bb4430] dark:group-hover:text-[#ff6b52] transition-colors duration-300">
                      {post.title}
                    </h2>
                    <Link 
                      to={`/blog/${post.slug}`} 
                      className="inline-flex items-center text-[#bb4430] dark:text-[#ff6b52] hover:text-[#bb4430]/80 dark:hover:text-[#ff6b52]/80 transition-colors duration-300"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;