// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { ArrowLeft } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import Navbar from './../components/Navbar';
// import Footer from './../components/Footer';

// // Define the BlogPost interface
// interface BlogPost {
//   title: string;
//   image_url: string;
//   content: string;
//   slug: string;
// }

// const BlogDetail = () => {
//   const { slug } = useParams();
//   const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get<BlogPost>(`http://localhost:8000/api/blog/post/${slug}`);
//         console.log('Blog Post Data:', response.data); // Log the response data
//         setBlogPost(response.data);
//       } catch (error) {
//         console.error('Error fetching blog post:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [slug]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!blogPost) {
//     return <div>Blog post not found</div>;
//   }

//   return (
//     <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
//       <Navbar />
//       <main className="pt-24 pb-16">
//         <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Back Button */}
//           <Link 
//             to="/blog"
//             className="inline-flex items-center text-[#bb4430] dark:text-[#ff6b52] hover:text-[#bb4430]/80 dark:hover:text-[#ff6b52]/80 mb-8"
//           >
//             <ArrowLeft className="w-4 h-4 mr-2" />
//             Back to Blog
//           </Link>
//           {/* Hero Image */}
//           <div className="relative rounded-2xl overflow-hidden mb-12 shadow-2xl">
//             <img
//               src={blogPost.image_url}
//               className="w-full h-[400px] object-cover"
//             />
//           </div>
//           {/* Article Header */}
//           <header className="mb-12">
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
//               {blogPost.title}
//             </h1>
//             <div className="flex items-center text-gray-600 dark:text-gray-400">
//               <span>March 20, 2024</span>
//               <span className="mx-2">•</span>
//               <span>10 min read</span>
//             </div>
//           </header>
//           {/* Article Content */}
//           <div className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: blogPost.content }} />
//         </article>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default BlogDetail;


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import parse from 'html-react-parser';
import { BounceLoader } from 'react-spinners';

// Define the BlogPost interface
interface BlogPost {
  title: string;
  image_url: string;
  content: string;
  slug: string;
  created_at:string;
  reading_time:string;
}

const applyClasses = (node: any) => {
  if (node.type === 'tag') {
    if (node.name === 'p') {
      node.attribs.class = 'text-gray-600 dark:text-gray-300 mb-8';
    } else if (node.name === 'h2') {
      node.attribs.class = 'text-2xl font-bold text-gray-900 dark:text-white mb-4';
    } else if (node.name === 'ul' || node.name === 'ol') {
      node.attribs.class = 'list-disc pl-6 text-gray-600 dark:text-gray-300 mb-8';
    }
  }
  return node;
};

const BlogDetail = () => {
  const { slug } = useParams();
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<BlogPost>(`https://work-flow-apis-production.up.railway.app/api/blog/post/${slug}`);
        // console.log('Blog Post Data:', response.data); // Log the response data
        setBlogPost(response.data);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <BounceLoader color="#bb4430" size={100} />
      </div>
    );
  }

  if (!blogPost) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">Blog post not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main className="pt-24 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            to="/blog"
            className="inline-flex items-center text-[#bb4430] dark:text-[#ff6b52] hover:text-[#bb4430]/80 dark:hover:text-[#ff6b52]/80 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden mb-12 shadow-2xl">
            <img
              src={blogPost.image_url}
              className="w-full h-[400px] object-cover"
            />
          </div>
          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {blogPost.title}
            </h1>
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <span>{blogPost.created_at}</span>
              <span className="mx-2">•</span>
              <span>{blogPost.reading_time} min read</span>
            </div>
          </header>
          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {parse(blogPost.content, { replace: applyClasses })}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;
