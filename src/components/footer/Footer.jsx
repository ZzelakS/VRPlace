import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-navy py-8 text-center text-sm text-gray-500">
      <p>
        © {new Date().getFullYear()} VR Place Nigeria. All rights reserved.
      </p>
        <a
          href="https://wa.me/2349062288078" // Replace with your actual WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky hover:underline"
        >
          Lamar
        </a>
    </footer>
  );
}
