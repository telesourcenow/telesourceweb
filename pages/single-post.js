import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function SinglePost() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="white-menu navbar-dark" breadcrumbTitle={"Our Blog"}>
                <div>
                    <section id="single-post" className="wide-100 single-post-section division">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1">
                                    {/* SINGLE POST TITLE */}
                                    <div className="single-post-title text-center mb-40">
                                        {/* Post Title */}
                                        <h3 className="h3-sm">5-Step Content Marketing Strategy for 2020</h3>
                                        {/* Post Data */}
                                        <div className="single-post-data">
                                            <p className="post-meta">Posted by
                                                <Link href="#">Sean McMarthy</Link> on February 02, 2020
                                                <Link href="#">in SocialMedia</Link>
                                            </p>
                                        </div>
                                    </div>	{/* END SINGLE POST TITLE */}
                                    {/* BLOG POST TEXT */}
                                    <div className="single-post-txt mb-45">
                                        {/* Post Text */}
                                        <p className="p-md">Mauris donec ociis et magnis sapien etiam sapien sem sagittis congue tempor a gravida donec
                                            ipsum porta justo integer at odio velna. Maecenas gravida porttitor nunc, quis vehicula magna luctus
                                            tempor. Quisque vel laoreet turpis. Urna augue, viverra a augue eget, dictum tempor diam. Sed pulvinar
                                            donec ociis et magnis sapien imperdiet dui varius viverra. Pellentesque ac massa lorem.
                                        </p>
                                    </div>
                                    {/* BLOG MAIN POST IMAGE */}
                                    <div className="blog-post-img mb-40">
                                        <img className="img-fluid" src="/images/image-16.png" alt="blog-post-image" />
                                    </div>
                                    {/* BLOG POST TEXT */}
                                    <div className="single-post-txt">
                                        {/* Post Text */}
                                        <p>Aliqum  mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna
                                            nihil impedit ligula risus. Mauris donec ociis et magnis sapien etiam sapien sem sagittis congue tempor
                                            gravida donec enim ipsum porta justo integer at odio velna. Maecenas gravida porttitor nunc, quis vehicula
                                            magna luctus tempor. Quisque vel laoreet turpis. Urna augue, viverra a augue eget, dictum tempor diam. Sed pulvinar consectetur nibh, vel imperdiet dui varius viverra. Pellentesque ac massa lorem. Fusce eu <Link href="#">cursus fusce non nulla</Link> vitae massa
                                        </p>
                                        {/* Post Text */}
                                        <p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus efficitur
                                            ipsum primis in cubilia laoreet augue egestas luctus donec diam.	Curabitur ac dapibus libero. Mauris donec
                                            ociis a neque. Phasellus blandit tristique justo ut aliquam. Aliquam vitae molestie nunc sapien justo,
                                            aliquet non molestie augue, venenatis nec purus. Aliquam eget lacinia elit. Augue tincidunt tincidunt massa,
                                            et porttitor justo blandit.
                                        </p>
                                        {/* Post Text */}
                                        <p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna purus efficitur ipsum primis
                                            in cubilia laoreet augue egestas luctus donec diam. Curabitur ac dapibus libero. Quisque eu tristique neque. Phasellus blandit tristique justo.
                                        </p>
                                        {/* Post Text */}
                                        <p>Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. Quisque vel laoreet turpis urna augue,
                                            viverra a augue eget, dictum tempor diam. Sed pulvinar consectetur nibh, vel imperdiet dui varius viverra. Sapien justo massa lorem. Fusce eu cursus non nulla vitae massa placerat purus. Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus <Link href="#">efficitur ipsum primis</Link> in cubilia laoreet augue egestas luctus donec diam. Curabitur ac dapibus libero. Quisque eu tristique neque. Phasellus blandit tristique justo ut aliquam.
                                        </p>
                                        {/* Small Title */}
                                        <h4 className="h4-xs">Vitae massa placerat vulputate</h4>
                                        {/* Post Text */}
                                        <p>Nullam non scelerisque lectus. In at mauris vel nisl convallis porta at vitae dui. Nam lacus ligula,
                                            vulputate molestie bibendum quis, aliquet elementum massa. Vestibulum ut sagittis odio. Ac massa lorem.
                                            Fusce eu cursus est. Fusce non nulla vitae massa placerat vulputate vel a purus Aliqum mullam blandit
                                            tempor sapien gravida donec
                                        </p>
                                        {/* INNER IMAGE */}
                                        <div className="post-inner-img">
                                            <img className="img-fluid" src="/images/image-17.jpg" alt="blog-post-image" />
                                        </div>
                                        {/* Small Title */}
                                        <h4 className="h4-xs">Semper lacus cursus porta, feugiat primis</h4>
                                        {/* Post Text */}
                                        <p>Curabitur ac dapibus libero. Quisque eu tristique neque. Phasellus blandit tristique justo ut aliquam.
                                            Aliquam vitae molestie nunc. Quisque sapien justo, aliquet non molestie sed, venenatis nec purus. Aliquam
                                            eget lacinia tincidunt tincidunt massa, et porttitor justo. Quisque vel laoreet turpis. Urna augue, viverra
                                            a augue eget, dictum tempor diam. Sed pulvinar consectetur nibh, vel imperdiet dui varius viverra.
                                            Pellentesque ac massa lorem. Fusce eu cursus est. Fusce non nulla vitae massa placerat bulum tincidunt
                                            tincidunt massa, et porttitor justo
                                        </p>
                                        {/* Post Text */}
                                        <p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus efficitur
                                            ipsum primis in cubilia laoreet augue egestas luctus donec diam.	Curabitur ac dapibus libero. Quisque eu tristique neque. Phasellus blandit tristique justo ut aliquam. Aliquam vitae <Link href="#">molestie nunc
                                                sapien justo</Link>, aliquet non molestie sed, venenatis nec purus. Aliquam eget lacinia elit. Vestibulum
                                            tincidunt tincidunt massa, et porttitor justo.
                                        </p>
                                        {/* Small Title */}
                                        <h4 className="h4-xs">Cubilia laoreet augue egestas luctus</h4>
                                        {/* Post Text */}
                                        <p>Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. Quisque vel laoreet turpis. Urna augue,
                                            viverra a augue eget, dictum tempor diam. Sed pulvinar consectetur nibh, vel imperdiet dui varius viverra. Pellentesque ac massa lorem. Fusce eu cursus est. Fusce non nulla vitae massa placerat vulputate vel a purus
                                        </p>
                                        {/* INNER IMAGES */}
                                        <div className="post-inner-img">
                                            <div className="row">
                                                {/* Inner Image #1 */}
                                                <div className="col-md-6">
                                                    {/* Image */}
                                                    <img className="img-fluid" src="/images/image-18.jpg" alt="blog-image" />
                                                    {/* Text */}
                                                    <p className="p-sm grey-color">Maecenas gravida a tempus at auctor ipsum mauris lectus enim magna luctus tempor</p>
                                                </div>
                                                {/* Inner Image #2 */}
                                                <div className="col-md-6">
                                                    {/* Image */}
                                                    <img className="img-fluid" src="/images/image-19.jpg" alt="blog-image" />
                                                    {/* Text */}
                                                    <p className="p-sm grey-color">Mullam blandit tempor sapien gravida donec ipsum, at porta mauris lectus enim magna luctus</p>
                                                </div>
                                            </div>
                                        </div>	{/* END INNER IMAGES */}
                                        {/* Text List */}
                                        <ul className="txt-list">
                                            <li>Vitae auctor integer congue magna at pretium cubilia laoreet augue egestas luctus donec diam. Curabitur
                                                ac dapibus libero. Quisque eu tristique neque ipsum porta cubilia laoreet augue egestas
                                            </li>
                                            <li>Integer congue magna at pretium purus pretium ligula rutrum luctus risus eros dolor auctor ipsum
                                                blandit purus
                                            </li>
                                            <li>Sagittis congue augue egestas volutpat egestas magna vitae auctor eros congue magna nihil impedit ligula
                                                risus. Mauris donec ociis et magnis sapien an sapien congue tempor gravida enim ipsum porta cubilia
                                                laoreet augue egestas luctus egestas volutpat egestas magna suscipit egestas magna
                                            </li>
                                        </ul>
                                        {/* Post Text */}
                                        <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore. incididunt
                                            ut labore et dolore. Neque turpis vitae eros praesent varius. Egestas pellentesque urna blandit, sed ac leo ut mi, nam wisi, <Link href="#">laborum donec erat diam ociis</Link> ultrice ligula magna suscipit lectus gestas egestas magna ipsum vitae purus ipsum
                                        </p>
                                    </div>	{/* END BLOG POST TEXT */}
                                    {/* SINGLE POST SHARE LINKS */}
                                    <div className="row post-share-links d-flex align-items-center">
                                        {/* POST TAGS */}
                                        <div className="col-md-9 col-xl-8 post-tags-list">
                                            <span><Link href="#">Tips  Tricks</Link></span>
                                            <span><Link href="#">Marketing</Link></span>
                                            <span><Link href="#">SocialMedia</Link></span>
                                        </div>
                                        {/* POST SHARE ICONS */}
                                        <div className="col-md-3 col-xl-4 post-share-list text-right">
                                            <ul className="share-social-icons text-center clearfix">
                                                <li><Link href="#" className="share-ico ico-facebook"><i className="fab fa-facebook-square" /></Link></li>
                                                <li><Link href="#" className="share-ico ico-twitter"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#" className="share-ico ico-like"><i className="far fa-bookmark" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>	{/* END SINGLE POST SHARE */}
                                    {/* ABOUT POST AUTHOR */}
                                    <div className="author-senoff d-flex align-items-center">
                                        {/* Avatar */}
                                        <img src="/images/review-author-1.jpg" alt="author-avatar" />
                                        {/* Text */}
                                        <div className="author-senoff-txt">
                                            {/* Title */}
                                            <h5 className="h5-xs">Published by</h5>
                                            <h5 className="h5-lg">Sean McMarthy</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur elit eiusmod tempor sapien dolore incidide labore dolore
                                                incididunt ut labore turpis vitae raesent varius consectetur nibh, vel imperdiet varius viverra.
                                                Pellentesque ac massa lorem. Fusce eu cursus est. Fusce non nulla vitae massa placerat bulum tincidunt
                                                tincidunt massa, et porttitor justo
                                            </p>
                                            {/* Follow Button */}
                                            <div className="author-follow-btn"><Link href="#">Follow</Link></div>
                                        </div>
                                    </div>	{/* END ABOUT POST AUTHOR */}
                                    {/* POST COMMENTS */}
                                    <div className="single-post-comments">
                                        {/* Title */}
                                        <h5 className="h5-xl mb-40">4 Comments</h5>
                                        {/* COMMENT #1 */}
                                        <div className="media mt-50">
                                            {/* Comment-1 Avatar */}
                                            <img className="mr-3" src="/images/post-author-1.jpg" alt="comment-avatar" />
                                            <div className="media-body">
                                                {/* Comment-1 Meta */}
                                                <div className="comment-meta">
                                                    <h5 className="h5-sm mt-0">Joel Peterson</h5>
                                                    <span className="comment-date">February 08, 2020 at 9:31 pm - </span>
                                                    <span className="btn-reply"><Link href="#leave-comment" className="internal-link">reply</Link></span>
                                                </div>
                                                {/* Comment-1 Text */}
                                                <p>Etiam sapien sem magna at vitae pulvinar congue augue egestas pretium neque id viverra
                                                    suscipit egestas magna porta ratione, mollis risus lectus porta rutrum arcu aenean primis
                                                    in augue luctus neque purus ipsum neque dolor primis
                                                </p>
                                                <hr />
                                                {/* COMMENT #2 */}
                                                <div className="media mt-40">
                                                    {/* Comment-2 Avatar */}
                                                    <Link href="#" className="pr-3">
                                                        <img src="/images/post-author-2.jpg" alt="comment-avatar" />
                                                    </Link>
                                                    <div className="media-body">
                                                        {/* Comment-2 Meta */}
                                                        <div className="comment-meta">
                                                            <h5 className="h5-sm mt-0">Michael</h5>
                                                            <span className="comment-date">February 12, 2020 at 04:17 pm - </span>
                                                            <span className="btn-reply"><Link href="#leave-comment" className="internal-link">reply</Link></span>
                                                        </div>
                                                        {/* Comment-2 Text */}
                                                        <p>Etiam sapien sem magna at vitae pulvinar congue augue egestas pretium neque id viverra suscipit
                                                            porta ratione, mollis risus lectus porta
                                                        </p>
                                                    </div>
                                                </div>	{/* END COMMENT #2 */}
                                            </div>
                                        </div>	{/* END COMMENT #1 */}
                                        <hr />
                                        {/* COMMENT #3 */}
                                        <div className="media mt-40">
                                            {/* Comment-4 Avatar */}
                                            <img className="mr-3" src="/images/post-author-3.jpg" alt="comment-avatar" />
                                            <div className="media-body">
                                                {/* Comment-4 Meta */}
                                                <div className="comment-meta">
                                                    <h5 className="h5-sm mt-0">Samantha</h5>
                                                    <span className="comment-date">January 29, 2020 at 5:26 pm - </span>
                                                    <span className="btn-reply"><Link href="#leave-comment" className="internal-link">reply</Link></span>
                                                </div>
                                                {/* Comment-4 Text */}
                                                <p>Porta ratione, mollis risus lectus porta rutrum arcu aenean primis in augue luctus
                                                    neque purus ipsum neque dolor primis libero tempus, tempor posuere ligula varius
                                                    impedit enim tempor vitae pulvinar congue augue egestas
                                                </p>
                                            </div>
                                        </div>	{/* END COMMENT #3 */}
                                        {/* COMMENT #4 */}
                                        <div className="media mt-40">
                                            {/* Comment-4 Avatar */}
                                            <img className="mr-3" src="/images/post-author-4.jpg" alt="comment-avatar" />
                                            <div className="media-body">
                                                {/* Comment-4 Meta */}
                                                <div className="comment-meta">
                                                    <h5 className="h5-sm mt-0">Aaron Wall</h5>
                                                    <span className="comment-date">January 23, 2020 at 02:34 pm - </span>
                                                    <span className="btn-reply"><Link href="#leave-comment" className="internal-link">reply</Link></span>
                                                </div>
                                                {/* Comment-4 Text */}
                                                <p>Etiam sapien sem magna at vitae pulvinar congue augue egestas pretium neque id viverra
                                                    suscipit egestas magna porta ratione, mollis risus lectus porta rutrum arcu aenean
                                                    primis in augue auctor integer congue
                                                </p>
                                            </div>
                                        </div>	{/* END COMMENT #4 */}
                                    </div>	 {/* END POST COMMENTS */}
                                    {/* COMMENT FORM */}
                                    <div id="leave-comment" className="mt-80">
                                        {/* Title */}
                                        <h5 className="h5-xl">Leave a Comment</h5>
                                        {/* Text */}
                                        <p className="grey-color">Your email address will not be published. Required fields are marked *</p>
                                        {/* Comment Form Inputs */}
                                        <form name="commentform" className="comment-form row mt-40">
                                            {/* Contact Form Input */}
                                            <div id="post-message" className="col-md-12">
                                                <p>Add Comment *</p>
                                                <textarea className="form-control comment" name="message" rows={6} placeholder="Enter your comment here ..." />
                                            </div>
                                            <div id="post-name" className="col-md-12">
                                                <p>Name*</p>
                                                <input type="text" name="name" className="form-control name" placeholder="Your Name" />
                                            </div>
                                            <div id="post-email" className="col-md-12">
                                                <p>Email*</p>
                                                <input type="text" name="email" className="form-control email" placeholder="Email Address" />
                                            </div>
                                            {/* Comment Form Button */}
                                            <div className="col-md-12 comment-form-btn mt-20 text-right">
                                                <button type="submit" className="btn btn-primary black-hover submit">Post Comment</button>
                                            </div>
                                            {/* Comment Form Message */}
                                            <div className="col-md-12 comment-form-msg">
                                                <span className="loading" />
                                            </div>
                                        </form>
                                    </div>	{/* END COMMENT FORM */}
                                </div>
                            </div>    {/* End row */}
                        </div>     {/* End container */}
                    </section>	{/* END SINGLE POST */}
                    {/* CALL TO ACTION-4
				============================================= */}
                    <section id="cta-4" className="bg-06 cta-section division">
                        <div className="container white-color">
                            <div className="row d-flex align-items-center">
                                {/* CALL TO ACTION TEXT */}
                                <div className="col-lg-8">
                                    <div className="cta-txt">
                                        {/* Title */}
                                        <h3 className="h3-xs">Improve your search ranking now!</h3>
                                        {/* Text */}
                                        <p className="p-md">Donec vel sapien augue integer urna vel turpis cursus porta, mauris sed augue
                                            luctus dolor velna auctor congue tempus magna integer
                                        </p>
                                    </div>
                                </div>	{/* END CALL TO ACTION TEXT */}
                                {/* CALL TO ACTION BUTTON */}
                                <div className="col-lg-4">
                                    <div className="cta-btn text-right">
                                        <Link href="/pricing" className="btn btn-md btn-primary tra-white-hover">Get Started Now</Link>
                                    </div>
                                </div>
                            </div>	 {/* End row */}
                        </div>	   {/* End container */}
                    </section>	{/* END CALL TO ACTION-4 */}
                </div>

            </Layout>
        </>
    )
}