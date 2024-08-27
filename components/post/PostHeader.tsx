import Image from 'next/image';

type Author = {
  id: string;
  name: string;
  profile_image: string | null;
};

type Tag = {
  id: string;
  name: string;
};

type PostHeaderProps = {
  title: string;
  created_at: string;
  feature_image: string | null;
  authors: Author[];
  tags: Tag[];
  excerpt: string;
};

const PostHeader: React.FC<PostHeaderProps> = ({
  title,
  created_at,
  feature_image,
  authors,
  tags,
  excerpt,
}) => {
  return (
    <section className="space-x-2 border border-[F7AB0A] text-white mt-5">
      <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
       
        {feature_image && (
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            <Image
              className="object-cover object-left lg:object-center"
              src={feature_image}
              alt={created_at}
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={true}
            />
          </div>
        )}

        <section className="p-5 bg-[#0AABF7] w-full">

          <div className="flex flex-col md:flex-row justify-between gap-y-5">
            <div>
              <h1 className="text-4xl font-extrabold">{title}</h1>
              <p>
                {new Date(created_at).toLocaleDateString("en-US", {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
            </div>

           
            {authors && authors.length > 0 && (
              <div className="flex items-center space-x-2">
                {authors[0].profile_image && (
                  <Image
                    className="rounded-full"
                    src={authors[0].profile_image}
                    alt={authors[0].name}
                    height={40}
                    width={40}
                    priority={true}
                  />
                )}
                <div className="w-64">
                  <h3 className="text-lg font-bold">{authors[0].name}</h3>
                </div>
              </div>
            )}
          </div>
          <div>
            <p className="italic pt-10">{excerpt}</p>
            <div className="flex items-center justify-end mt-auto space-x-2">
              {tags
                .filter(tag => tag.name !== 'Web3')
                .filter(tag => tag.name !== 'Blockchain')
                .filter(tag => tag.name !== 'IA')
                .map((tag) => (
                  <p
                  key={tag.id}
                  className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4"
                >
                  {tag.name}
                </p>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default PostHeader;
