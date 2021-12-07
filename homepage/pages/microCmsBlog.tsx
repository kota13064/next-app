import Link from "next/link";
import { GetStaticProps } from 'next'
import { client } from "../src/libs/microCmsClient";
import { Blog } from "../src/interfaces/blog"
import Layout from "../src/components/layout";

type Props = {
	blogs: Blog[]
	errors: string
}

const BlogList = ({ blogs, errors }: Props) => {
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
		<Layout title='ブログ一覧' description='ブログ一覧ページ'>
			<div>
			  <ul>
				{blogs.map((blog: Blog) => (
				  <li key={blog.id}>
					<Link href={`/microCmsBlog/${blog.id}`}>
					  <a>{blog.title}</a>
					</Link>
				  </li>
				))}
			  </ul>
			</div>
		</Layout>
	)
};

export default BlogList

// データをテンプレートに受け渡す部分の処理を記述
export const getStaticProps: GetStaticProps = async () => {
	try {
		const data = await client.get({ endpoint: "blog" });
	
		return { props: { blogs: data.contents } };
	} catch (err: any) {
		return { props: { errors: err.message } }
	}
};
