
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog-data";

export default function BlogPage() {
  const blogPosts = getAllPosts();

  return (
    <div className="fade-in bg-background">
      {/* Header Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-poppins font-semibold tracking-tight">
            The Omniai Blog
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground">
            Insights on AI, automation, and building smarter businesses.
          </p>
        </div>
      </section>

      {/* Posts Section */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Blog Post Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-2xl">
                <Link href={`/blog/${post.slug}`} className="block">
                  <Image src={post.image} data-ai-hint={post.hint} alt={post.title} width={600} height={400} className="w-full h-56 object-cover" />
                </Link>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">{post.category}</Badge>
                  <h2 className="text-xl font-poppins font-semibold pt-2">{post.title}</h2>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground line-clamp-3">{post.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="px-0 font-semibold">
                    <Link href={`/blog/${post.slug}`}>Read More <ArrowRight className="w-4 h-4 ml-1" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 mt-16">
            <Button variant="outline" size="icon" disabled>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <span className="text-sm text-muted-foreground">Page 1 of 1</span>
            <Button variant="outline" size="icon" disabled>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
