import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getPostAndNeighbors } from "@/lib/blog-data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type BlogPageProps = {
  params: {
    slug: string;
  };
};

export default function BlogPostPage({ params }: BlogPageProps) {
  const { post, nextPost } = getPostAndNeighbors(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="fade-in">
      <div className="container mx-auto px-4 max-w-3xl py-16 md:py-24">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <article>
          <header className="mb-8">
            <Badge variant="secondary" className="mb-4">{post.category}</Badge>
            <h1 className="text-3xl md:text-5xl font-poppins font-bold tracking-tight mb-4">{post.title}</h1>
          </header>
          
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={600}
            className="w-full rounded-2xl mb-8 object-cover aspect-video"
            data-ai-hint={post.hint}
          />
          
          <div className="space-y-6 text-lg text-muted-foreground">
            {post.content.map((block, index) => {
              if (block.type === 'paragraph') {
                return <p key={index}>{block.text}</p>;
              }
              if (block.type === 'quote') {
                return (
                  <blockquote key={index} className="border-l-4 border-primary pl-4 italic text-xl font-semibold text-foreground">
                    {block.text}
                  </blockquote>
                );
              }
              if (block.type === 'list') {
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 my-6 pl-4">
                    {block.items?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>
        </article>

        {nextPost && (
          <div className="mt-20 pt-12 border-t">
            <h3 className="text-xl font-poppins font-semibold mb-6 text-center text-muted-foreground">Continue Reading</h3>
            <Link href={`/blog/${nextPost.slug}`} className="block group">
              <Card className="hover:shadow-xl transition-all duration-300 rounded-2xl">
                <CardHeader>
                  <Badge variant="secondary" className="mb-2 w-fit">{nextPost.category}</Badge>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">{nextPost.title}</CardTitle>
                </CardHeader>
                <CardContent>
                   <p className="text-muted-foreground line-clamp-2">{nextPost.description}</p>
                </CardContent>
                <CardFooter>
                    <span className="flex items-center font-semibold text-primary">
                      Read Next Post <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                </CardFooter>
              </Card>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
