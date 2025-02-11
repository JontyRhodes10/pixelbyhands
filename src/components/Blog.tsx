import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  date: string;
}

const Blog = () => {
  const blogPosts: BlogPost[] = [
    {
      title: "The Ultimate Guide to Product Photo Post-Production",
      excerpt: "Master the art of product photo editing with our comprehensive guide to post-production techniques.",
      image: "https://www.pixelbyhand.com/wp-content/uploads/2024/10/Ultimate-Guide-to-Product-Photo-Post-Production.jpeg",
      date: "March 15, 2024"
    },
    {
      title: "How to Achieve Consistent Product Photography",
      excerpt: "Learn the secrets to maintaining consistency across your entire product catalog.",
      image: "https://www.pixelbyhand.com/wp-content/uploads/2024/09/fashion-ecommerce-website.jpeg",
      date: "March 10, 2024"
    },
    {
      title: "E-commerce Photography Trends for 2024",
      excerpt: "Stay ahead of the curve with the latest trends in e-commerce photography.",
      image: "https://www.pixelbyhand.com/wp-content/uploads/2024/09/model-fashion-ecommerce-shirt.jpg",
      date: "March 5, 2024"
    },
    {
      title: "Mastering Ghost Mannequin Photography",
      excerpt: "Everything you need to know about creating professional ghost mannequin effects.",
      image: "https://www.pixelbyhand.com/wp-content/uploads/2024/09/fashion-ecomerce-shirt-after-editing.png",
      date: "February 28, 2024"
    },
    {
      title: "Color Correction: The Complete Guide",
      excerpt: "Perfect your color correction workflow with our comprehensive guide.",
      image: "https://www.pixelbyhand.com/wp-content/uploads/2024/12/photo-studio-professional-with-ecommerce-website.png",
      date: "February 20, 2024"
    },
    {
      title: "Scaling Your E-commerce Photography",
      excerpt: "Learn how to efficiently scale your product photography operation.",
      image: "https://www.pixelbyhand.com/wp-content/uploads/2024/10/fashion-ecommerce-website.jpeg",
      date: "February 15, 2024"
    }
  ];

  return (
    <section id="group-9" className="bg-[#bb4430] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tips and Tricks From the Blog
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/20 transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-[#ff6b52] text-sm mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2 group-hover:text-[#ff6b52] transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-white/80 text-sm line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-white hover:text-[#ff6b52] transition-colors duration-300"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;