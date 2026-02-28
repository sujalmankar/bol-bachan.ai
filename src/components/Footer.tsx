import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-100 py-6 px-4">
      <div className="flex items-center justify-center gap-2">
        <Mail className="h-5 w-5 text-gray-500" />
        <a
          href="mailto:codeveda01@gmail.com"
          className="text-gray-700 hover:text-purple-700 transition-colors"
        >
          codeveda01@gmail.com
        </a>
      </div>
    </footer>
  );
}