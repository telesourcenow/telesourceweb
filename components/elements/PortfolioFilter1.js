
import Isotope from "isotope-layout"
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioFilter1() {
    // Isotope
    const isotope = useRef()
    const [filterKey, setFilterKey] = useState("*")
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".grid-loaded", {
                itemSelector: ".masonry-item",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".masonry-item",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            })
        }, 1000)
    }, [])
    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` })
        }
    }, [filterKey])
    const handleFilterKeyChange = useCallback((key) => () => {
        setFilterKey(key)
    },
        []
    )

    const activeBtn = (value) => (value === filterKey ? "trans current" : "")
    return (
        <>
            <div className="masonry-wrap grid-loaded">
                {/* BLOG POST #1 */}
                <div className="masonry-item">
                    <div className="blog-post">
                        {/* BLOG POST IMAGE */}
                        <div className="blog-post-img">
                            <img className="img-fluid" src="/images/blog/post-1-img.jpg" alt="blog-post-image" />
                        </div>
                        {/* BLOG POST TEXT */}
                        <div className="blog-post-txt">
                            {/* Post Tag */}
                            <p className="post-read"><i className="far fa-clock" /> - 12 min read</p>
                            {/* Post Link */}
                            <h5 className="h5-md">
                                <Link href="/single-post">Quisque sapien justo, aliquet non molestie and purus nulla pulvinar
                                    commodo necvenenatis
                                </Link>
                            </h5>
                            {/* Text */}
                            <p className="grey-color">Fringilla risus luctus mauris auctor purus and pretium purus pretium undo
                                dapibus mauris donec ociis et magnis sapien...
                            </p>
                            {/* Post Data */}
                            <p className="post-data">by <Link href="#">Sean McMarthy</Link> - 24 minutes ago</p>
                            <p className="post-tag"><Link href="#">#SocialMedia</Link>, <Link href="#">#Marketing</Link></p>
                        </div>	{/* END BLOG POST TEXT */}
                    </div>
                </div>	{/* END  BLOG POST #1 */}
                {/* BLOG POST #2 */}
                <div className="masonry-item">
                    <div className="blog-post">
                        {/* BLOG POST IMAGE */}
                        <div className="blog-post-img">
                            <img className="img-fluid" src="/images/blog/post-8-img.jpg" alt="blog-post-image" />
                        </div>
                        {/* BLOG POST TEXT */}
                        <div className="blog-post-txt">
                            {/* Post Tag */}
                            <p className="post-read"><i className="far fa-clock" /> - 8 min read</p>
                            {/* Post Link */}
                            <h5 className="h5-md">
                                <Link href="/single-post">Tempor sapien donec gravida ipsum a porta justo vitae</Link>
                            </h5>
                            {/* Text */}
                            <p className="grey-color">Fringilla risus luctus mauris auctor purus euismod and pretium purus and
                                pretium ipsum primis in cubilia laoreet an augue egestas luctus donec efficitur...
                            </p>
                            {/* Post Data */}
                            <p className="post-data">by <Link href="#">Ben Markton</Link> - January 27, 2019</p>
                            <p className="post-tag"><Link href="#">#Advice</Link>, <Link href="#">#LinkBuilding</Link></p>
                        </div>	{/* END BLOG POST TEXT */}
                    </div>
                </div>	{/* END  BLOG POST #2 */}
                {/* BLOG POST #3 */}
                <div className="masonry-item">
                    <div className="blog-post">
                        {/* BLOG POST IMAGE */}
                        <div className="blog-post-img">
                            <img className="img-fluid" src="/images/blog/post-3-img.jpg" alt="blog-post-image" />
                        </div>
                        {/* BLOG POST TEXT */}
                        <div className="blog-post-txt">
                            {/* Post Tag */}
                            <p className="post-read"><i className="far fa-clock" /> - 21 min read</p>
                            {/* Post Link */}
                            <h5 className="h5-md">
                                <Link href="/single-post">Dapibus libero quisque eu tristique neque blandit tristique</Link>
                            </h5>
                            {/* Text */}
                            <p className="grey-color">Fringilla risus luctus mauris auctor purus euismod and pretium purus pretium...</p>
                            {/* Post Data */}
                            <p className="post-data">by <Link href="#">Caroline</Link> - January 19, 2020</p>
                            <p className="post-tag"><Link href="#">#LocalSEO</Link>, <Link href="#">#Marketing</Link>, <Link href="#">#PPC</Link></p>
                        </div>	{/* END BLOG POST TEXT */}
                    </div>
                </div>	{/* END  BLOG POST #3 */}
                {/* BLOG POST #4 */}
                <div className="masonry-item">
                    <div className="blog-post">
                        {/* BLOG POST IMAGE */}
                        <div className="blog-post-img">
                            <img className="img-fluid" src="/images/blog/post-4-img.jpg" alt="blog-post-image" />
                        </div>
                        {/* BLOG POST TEXT */}
                        <div className="blog-post-txt">
                            {/* Post Tag */}
                            <p className="post-read"><i className="far fa-clock" /> - 36 min read</p>
                            {/* Post Link */}
                            <h5 className="h5-md">
                                <Link href="/single-post">Quisque sapien justo, aliquet non molestie a purus venenatis</Link>
                            </h5>
                            {/* Text */}
                            <p className="grey-color">Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna
                                ipsum vitae purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec diam. Curabitur ac dapibus libero...
                            </p>
                            {/* Post Data */}
                            <p className="post-data">by <Link href="#">Sean McMarthy</Link> - January 12, 2020</p>
                            <p className="post-tag"><Link href="#">#SocialMedia</Link>, <Link href="#">#Marketing</Link></p>
                        </div>	{/* END BLOG POST TEXT */}
                    </div>
                </div>	{/* END  BLOG POST #4 */}
                {/* BLOG POST #5 */}
                <div className="masonry-item">
                    <div className="blog-post">
                        {/* BLOG POST IMAGE */}
                        <div className="blog-post-img">
                            <img className="img-fluid" src="/images/blog/post-5-img.jpg" alt="blog-post-image" />
                        </div>
                        {/* BLOG POST TEXT */}
                        <div className="blog-post-txt">
                            {/* Post Tag */}
                            <p className="post-read"><i className="far fa-clock" /> - 17 min read</p>
                            {/* Post Link */}
                            <h5 className="h5-md">
                                <Link href="/single-post">Tempor sapien donec gravida ipsum a porta justo vitae</Link>
                            </h5>
                            {/* Text */}
                            <p className="grey-color">Fringilla risus luctus mauris auctor purus euismod and pretium purus pretium...</p>
                            {/* Post Data */}
                            <p className="post-data">by <Link href="#">Ben Markton</Link> - December 23, 2019</p>
                            <p className="post-tag"><Link href="#">#Advice</Link>, <Link href="#">#LinkBuilding</Link></p>
                        </div>	{/* END BLOG POST TEXT */}
                    </div>
                </div>	{/* END  BLOG POST #5 */}
                {/* BLOG POST #6 */}
                <div className="masonry-item">
                    <div className="blog-post">
                        {/* BLOG POST IMAGE */}
                        <div className="blog-post-img">
                            <img className="img-fluid" src="/images/blog/post-6-img.jpg" alt="blog-post-image" />
                        </div>
                        {/* BLOG POST TEXT */}
                        <div className="blog-post-txt">
                            {/* Post Tag */}
                            <p className="post-read"><i className="far fa-clock" /> - 12 hours read</p>
                            {/* Post Link */}
                            <h5 className="h5-md">
                                <Link href="/single-post">Dapibus libero quisque eu tristique neque blandit tristique</Link>
                            </h5>
                            {/* Text */}
                            <p className="grey-color">Fringilla risus luctus mauris auctor purus euismod and pretium purus and
                                pretium ipsum primis in cubilia laoreet an augue egestas luctus donec efficitur...
                            </p>
                            {/* Post Data */}
                            <p className="post-data">by <Link href="#">Caroline</Link> - December 14, 2019</p>
                            <p className="post-tag"><Link href="#">#LocalSEO</Link>, <Link href="#">#Marketing</Link>, <Link href="#">#PPC</Link></p>
                        </div>	{/* END BLOG POST TEXT */}
                    </div>
                </div>	{/* END  BLOG POST #6 */}
                {/* BLOG POST #7 */}
                <div className="masonry-item">
                    <div className="blog-post">
                        {/* BLOG POST IMAGE */}
                        <div className="blog-post-img">
                            <img className="img-fluid" src="/images/blog/post-7-img.jpg" alt="blog-post-image" />
                        </div>
                        {/* BLOG POST TEXT */}
                        <div className="blog-post-txt">
                            {/* Post Tag */}
                            <p className="post-read"><i className="far fa-clock" /> - 41 min read</p>
                            {/* Post Link */}
                            <h5 className="h5-md">
                                <Link href="/single-post">Quisque sapien justo, aliquet non molestie a purus venenatis
                                    purus aliquam eget lacinia elit
                                </Link>
                            </h5>
                            {/* Text */}
                            <p className="grey-color">Egestas magna ipsum vitae purus efficitur ipsum primis in cubilia laoreet and
                                augue egestas luctus risus luctus mauris auctor purus euismod and pretium pretium...
                            </p>
                            {/* Post Data */}
                            <p className="post-data">by <Link href="#">Sean McMarthy</Link> - December 11, 2019</p>
                            <p className="post-tag"><Link href="#">#SocialMedia</Link>, <Link href="#">#Marketing</Link></p>
                        </div>	{/* END BLOG POST TEXT */}
                    </div>
                </div>	{/* END  BLOG POST #7 */}
                {/* BLOG POST #8 */}
                <div className="masonry-item">
                    <div className="blog-post">
                        {/* BLOG POST IMAGE */}
                        <div className="blog-post-img">
                            <img className="img-fluid" src="/images/blog/post-2-img.jpg" alt="blog-post-image" />
                        </div>
                        {/* BLOG POST TEXT */}
                        <div className="blog-post-txt">
                            {/* Post Tag */}
                            <p className="post-read"><i className="far fa-clock" /> - 6 hours read</p>
                            {/* Post Link */}
                            <h5 className="h5-md">
                                <Link href="/single-post">Tempor sapien donec gravida ipsum a porta justo vitae</Link>
                            </h5>
                            {/* Text */}
                            <p className="grey-color">Fringilla risus luctus mauris auctor purus euismod and pretium purus and
                                pretium ipsum primis in cubilia laoreet an augue egestas luctus donec efficitur...
                            </p>
                            {/* Post Data */}
                            <p className="post-data">by <Link href="#">Ben Markton</Link> - December 05, 2019</p>
                            <p className="post-tag"><Link href="#">#Advice</Link>, <Link href="#">#LinkBuilding</Link></p>
                        </div>	{/* END BLOG POST TEXT */}
                    </div>
                </div>	{/* END  BLOG POST #8 */}
                {/* BLOG POST #9 */}
                <div className="masonry-item">
                    <div className="blog-post">
                        {/* BLOG POST IMAGE */}
                        <div className="blog-post-img">
                            <img className="img-fluid" src="/images/blog/post-9-img.jpg" alt="blog-post-image" />
                        </div>
                        {/* BLOG POST TEXT */}
                        <div className="blog-post-txt">
                            {/* Post Tag */}
                            <p className="post-read"><i className="far fa-clock" /> - 4 hours read</p>
                            {/* Post Link */}
                            <h5 className="h5-md">
                                <Link href="/single-post">Dapibus libero quisque eu tristique neque blandit tristique</Link>
                            </h5>
                            {/* Text */}
                            <p className="grey-color">Fringilla risus luctus mauris auctor purus euismod and pretium purus pretium...</p>
                            {/* Post Data */}
                            <p className="post-data">by <Link href="#">Caroline</Link> - November 28, 2019</p>
                            <p className="post-tag"><Link href="#">#LocalSEO</Link>, <Link href="#">#Marketing</Link>, <Link href="#">#PPC</Link></p>
                        </div>	{/* END BLOG POST TEXT */}
                    </div>
                </div>	{/* END  BLOG POST #9 */}
            </div>
        </>
    )
}
