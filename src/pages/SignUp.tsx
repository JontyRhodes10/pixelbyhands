import React, { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Footer from '../components/Footer';

const SignUp = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    instructions: ''
  });
  const [files, setFiles] = useState<File[]>([]);
  const [showNotification, setShowNotification] = useState(false);

  // Add effect for auto-redirect
  useEffect(() => {
    let redirectTimer: NodeJS.Timeout;
    if (showNotification) {
      redirectTimer = setTimeout(() => {
        navigate('/blog');
      }, 5000);
    }
    return () => {
      if (redirectTimer) {
        clearTimeout(redirectTimer);
      }
    };
  }, [showNotification, navigate]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (files.length + acceptedFiles.length > 10) {
      alert('You can only upload up to 10 files');
      return;
    }
    setFiles(prev => [...prev, ...acceptedFiles]);
  }, [files]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif']
    },
    maxFiles: 10
  });

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    // console.log('Form submitted:', { ...formData, files });
    setShowNotification(true);
  };

  const handleNotificationClick = () => {
    navigate('/blog');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#bb4430]">
      {/* Simplified Header */}
      <header className="bg-white dark:bg-gray-900 shadow-sm fixed w-full z-50 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/">
                <img 
                  src={isDark 
                    ? "https://www.pixelbyhand.com/wp-content/uploads/2025/02/pixel-by-hand-logo-white-100px.png"
                    : "https://www.pixelbyhand.com/wp-content/uploads/2024/09/Pixelbyhand-logo-design.png"
                  }
                  alt="Pixel By Hand" 
                  className="h-6 w-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex pt-16 min-h-[calc(100vh-64px)]">
        {/* Notification */}
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-300 ${
            showNotification ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={handleNotificationClick}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div 
            className="relative bg-white rounded-lg shadow-xl p-8 max-w-md mx-4 cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <p className="text-gray-900 text-lg text-center">
              Thank You for submitting your Free Trial Images. We will get started on your images asap. Please check your email for updates.
            </p>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center p-8">
          <div className="bg-white rounded-2xl p-8 shadow-2xl w-full max-w-xl">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Submit For A Free Trial
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Business Email <span className="text-[#bb4430]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#bb4430] focus:border-transparent transition-colors duration-300"
                  placeholder="your@business.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label 
                    htmlFor="firstName" 
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    First Name <span className="text-[#bb4430]">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#bb4430] focus:border-transparent transition-colors duration-300"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="lastName" 
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Last Name <span className="text-[#bb4430]">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#bb4430] focus:border-transparent transition-colors duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Choose Your Image <span className="text-[#bb4430]">*</span>
                </label>
                <div
                  {...getRootProps()}
                  className={`border-2 border-dashed rounded-lg p-6 transition-colors duration-300 ${
                    isDragActive 
                      ? 'border-[#bb4430] bg-[#bb4430]/5' 
                      : 'border-gray-300 hover:border-[#bb4430]'
                  }`}
                >
                  <input {...getInputProps()} required={files.length === 0} />
                  <div className="flex flex-col items-center text-center">
                    <Upload className="w-12 h-12 text-gray-400 mb-4" />
                    <p className="text-gray-600">
                      Click or drag files to this area to upload
                    </p>
                    <p className="text-sm text-gray-500">
                      You can upload up to 10 files
                    </p>
                  </div>
                </div>

                {/* File Preview */}
                {files.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {files.map((file, index) => (
                      <div 
                        key={index}
                        className="flex items-center justify-between bg-gray-50 p-2 rounded-lg"
                      >
                        <span className="text-sm text-gray-600 truncate">
                          {file.name}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-gray-500 hover:text-[#bb4430]"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <label 
                  htmlFor="instructions" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Instructions <span className="text-[#bb4430]">*</span>
                </label>
                <textarea
                  id="instructions"
                  name="instructions"
                  rows={4}
                  required
                  value={formData.instructions}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#bb4430] focus:border-transparent transition-colors duration-300 resize-none"
                  placeholder="Include as much detail as possible please"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#bb4430] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#bb4430]/90 transition-colors duration-300"
              >
                Get Started
              </button>
            </form>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="hidden lg:flex flex-1 items-center justify-center p-8">
          <div className="relative w-full max-w-lg">
            <div className="absolute inset-0 bg-white/10 rounded-2xl transform rotate-6" />
            <div className="absolute inset-0 bg-white/10 rounded-2xl transform -rotate-3" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://www.pixelbyhand.com/wp-content/uploads/2024/09/fashion-ecomerce-shirt-after-editing.png"
                alt="Fashion e-commerce shirt"
                className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignUp;