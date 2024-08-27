import "@/app/postStyles.css";

interface PostContentProps {
  htmlContent: string;
}

const PostContent: React.FC<PostContentProps> = ({ htmlContent }) => {
  return (
    <section className="mt-10">
      <div
        className="post-content stylePostCSS"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </section>
  );
};

export default PostContent;
