import { Inter } from "next/font/google";
import Navigation from "./components/navigation";
import { PostProvider } from "./components/PostsArrayContext";
import "./components/styles.scss";

const inter = Inter({ subsets: ["latin"] });

//layout including all pages. The navigation component to be common between all pages
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PostProvider>
          <Navigation />
          {children}
        </PostProvider>
      </body>
    </html>
  );
}
