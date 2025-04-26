import { getBlogWebTotal } from '@/src/utils/web-total';
import { Suspense } from 'react';
import Blogs, { BlogsSkeleton } from 'src/components/Blogs/Blogs';
import LayoutBlog from 'src/components/LayoutBlog/LayoutBlog';
import { fetchMediumBlogs } from '@/src/utils/fetchMediumBlogs';

const BlogPage = async () => {
  const blogsWebtotal = await getBlogWebTotal();
  const blogs = await fetchMediumBlogs();

  return (
    <LayoutBlog>
      <Suspense fallback={<BlogsSkeleton />}>
        <Blogs blogsWebtotal={blogsWebtotal} blogs={blogs} />
      </Suspense>
    </LayoutBlog>
  );
};

export default BlogPage;
