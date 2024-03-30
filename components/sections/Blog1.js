import Link from "next/link"


export default function Blog1({ cls }) {
    return (
        <>
            <section id="blog-1" className="wide-60 blog-section division">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title wow fadeInUp" data-wow-delay="0.2s">
                            {/* Title 	*/}
                            <h3 className="h3-lg indigo-color">Our Insights And Latest News</h3>
                            {/* Text */}
                            <p className="p-lg">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero
                                tempus, blandit posuere and ligula varius magna a porta elementum massa risus
                            </p>
                        </div>
                    </div>	{/* END SECTION TITLE */}
                    {/* BLOG POSTS */}
                    <div className="row">
                        {/* BLOG POST #1 */}
                        <div id="blog_post-1" className="col-md-6 col-lg-4">
                            <div className="blog-post wow fadeInUp" data-wow-delay="0.4s">
                                {/* BLOG POST IMAGE */}
                                <div className="blog-post-img">
                                    <img className="img-fluid" src="/images/blog/post-1-img.jpg" alt="blog-post-image" />
                                </div>
                                {/* BLOG POST TEXT */}
                                <div className="blog-post-txt">
                                    {/* Post Tag */}
                                    <p className="post-read"><i className="far fa-clock" /> - 12 min read</p>
                                    {/* Post Link */}
                                    <h5 className="h5-md indigo-color">
                                        <Link href="/single-post">Quisque sapien justo, aliquet non molestie a purus venenatis</Link>
                                    </h5>
                                    {/* Text */}
                                    <p className="grey-color">Fringilla risus luctus mauris auctor purus euismod and pretium purus pretium...</p>
                                    {/* Post Data */}
                                    <p className="post-data">by <Link href="#">Sean McMarthy</Link> - 24 minutes ago</p>
                                    <p className="post-tag"><Link href="#">#SocialMedia</Link>, <Link href="#">#Marketing</Link></p>
                                </div>	{/* END BLOG POST TEXT */}
                            </div>
                        </div>	{/* END  BLOG POST #1 */}
                        {/* BLOG POST #2 */}
                        <div id="blog_post-2" className="col-md-6 col-lg-4">
                            <div className="blog-post wow fadeInUp" data-wow-delay="0.6s">
                                {/* BLOG POST IMAGE */}
                                <div className="blog-post-img">
                                    <img className="img-fluid" src="/images/blog/post-2-img.jpg" alt="blog-post-image" />
                                </div>
                                {/* BLOG POST TEXT */}
                                <div className="blog-post-txt">
                                    {/* Post Tag */}
                                    <p className="post-read"><i className="far fa-clock" /> - 8 min read</p>
                                    {/* Post Link */}
                                    <h5 className="h5-md indigo-color">
                                        <Link href="/single-post">Tempor sapien donec gravida ipsum a porta justo vitae</Link>
                                    </h5>
                                    {/* Text */}
                                    <p className="grey-color">Fringilla risus luctus mauris auctor purus euismod and pretium purus pretium...</p>
                                    {/* Post Data */}
                                    <p className="post-data">by <Link href="#">Ben Markton</Link> - January 27, 2019</p>
                                    <p className="post-tag"><Link href="#">#Advice</Link>, <Link href="#">#LinkBuilding</Link></p>
                                </div>	{/* END BLOG POST TEXT */}
                            </div>
                        </div>	{/* END  BLOG POST #2 */}
                        {/* BLOG POST #3 */}
                        <div id="blog_post-3" className="col-md-6 col-lg-4">
                            <div className="blog-post wow fadeInUp" data-wow-delay="0.8s">
                                {/* BLOG POST IMAGE */}
                                <div className="blog-post-img">
                                    <img className="img-fluid" src="/images/blog/post-3-img.jpg" alt="blog-post-image" />
                                </div>
                                {/* BLOG POST TEXT */}
                                <div className="blog-post-txt">
                                    {/* Post Tag */}
                                    <p className="post-read"><i className="far fa-clock" /> - 21 min read</p>
                                    {/* Post Link */}
                                    <h5 className="h5-md indigo-color">
                                        <Link href="/single-post">Dapibus libero quisque eu tristique neque blandit tristique</Link>
                                    </h5>
                                    {/* Text */}
                                    <p className="grey-color">Fringilla risus luctus mauris auctor purus euismod and pretium purus pretium...</p>
                                    {/* Post Data */}
                                    <p className="post-data">by <Link href="#">Caroline</Link> - December 27, 2019</p>
                                    <p className="post-tag"><Link href="#">#LocalSEO</Link>, <Link href="#">#Marketing</Link>, <Link href="#">#PPC</Link></p>
                                </div>	{/* END BLOG POST TEXT */}
                            </div>
                        </div>	{/* END  BLOG POST #3 */}
                    </div>	{/* END BLOG POSTS */}
                </div>	   {/* End container */}
            </section>

        </>
    )
}
