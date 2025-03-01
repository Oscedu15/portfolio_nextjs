import { EnvelopeIcon } from "@heroicons/react/16/solid";
import { GithubIcon, LinkedInIcon } from "./social-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray800">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6
         lg:px-8 py-12"
      >
        <div className="grid text-center grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About</h3>
            <p className="text-gray-400">
              Construyendo experiencias digitales que combinan tecnología
              moderna con un diseño excepcional.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#projects"
                  className="text-gray-400
                         hover:text-white transition-colors"
                >
                  Projectos
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-400
                         hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400
                         hover:text-white transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#privacy"
                  className="text-gray-400
                         hover:text-white transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="#terms"
                  className="text-gray-400
                         hover:text-white transition-colors"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <ul className="flex space-x-4 items-center justify-center">
              <Link
                href="https://github.com/Oscedu15"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon
                  className="text-gray-400 h-6 w-6
                        hover:text-white transition-colors"
                />
              </Link>
              <Link
                href="https://linkedin.com/in/oscar-eduardo-garcía-leon-a15a14195"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon
                  className="text-gray-400 h-6 w-6
                        hover:text-white transition-colors"
                />
              </Link>
              <Link href="" target="_blank" rel="noopener noreferrer">
                <EnvelopeIcon
                  className="text-gray-400 h-6 w-6
                        hover:text-white transition-colors"
                />
              </Link>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Oscar Garcia. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
