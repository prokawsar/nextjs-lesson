import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";

export default function FirstPost() {
    return (
        <Layout>
            <div>
                <Head>
                    <title>First post</title>
                </Head>

                <h1>
                    First Post
                    <br></br>
                    <Link href="/"> Home </Link>
                </h1>

                <Image
                    src="/images/profile.jpg" // Route of the image file
                    height={144} // Desired size with correct aspect ratio
                    width={144} // Desired size with correct aspect ratio
                    alt="Your Name"
                    className="borderCircle"
                />

                <style jsx>{``}</style>
            </div>
        </Layout>
    );
}
