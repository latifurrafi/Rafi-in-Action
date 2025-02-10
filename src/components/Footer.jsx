import React from 'react';

function Footer() {
  return (
    <footer className="py-8 bg-gradient-to-b bg-[#050A30]">
      <div className="container mx-auto px-6">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Md. Latifur Rahman Rafi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;