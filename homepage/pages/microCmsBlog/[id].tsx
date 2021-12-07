// pages/blog/[id].js
import type { GetStaticPaths, GetStaticProps } from 'next'
import { client } from "../../src/libs/microCmsClient";
import { Blog } from "../../src/interfaces/blog"
import Layout from '../../src/components/layout';

type Props = {
	blog: Blog
	errors?: string
}

const BlogDetail = ( {blog, errors}: Props ) => {
	if (errors) {
		return (
			<Layout title='Error' description='エラーが発生'>
				<p>
					<span style={{ color: 'red' }}>Error:</span> {errors}
				</p>
			</Layout>
		)
	}

	return (
		<Layout title='ブログ' description='ブログ詳細ページ'>
			<h1>{blog.title}</h1>
			<p>{blog.publishedAt}</p>
			<div
				dangerouslySetInnerHTML={{
					__html: `${blog.body}`,
				}}
			/>
		</Layout>
	)
};


export default BlogDetail

// 静的生成のためのパスを指定
export const getStaticPaths: GetStaticPaths = async () => {
	const data = await client.get({ endpoint: "blog" });

	const paths = data.contents.map((blog: Blog) => `/microCmsBlog/${blog.id}`);
	return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述
export const getStaticProps: GetStaticProps = async (context) => {
	try {
		const id = context.params?.id;
		const data = await client.get({ endpoint: "blog", contentId: String(id) });
	
		return { props: { blog: data } };
	} catch (err: any) {
		return { props: { errors: err.message } }
	}
};
