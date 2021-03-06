import React from "react"
//import { useStaticQuery, graphql } from "gatsby"

export default () => (
	<div className="container views-home-latest-news-section-block-container block-views " id="views-home-latest-news-section-block-container">
		<div className="view view-home-latest-news-section view-id-home_latest_news_section view-display-id-block home-news view-article-wrapper ancestry-green view-dom-id-f5064092e870dc303f36308d7d988cfa">
			<header className="view-header">
				<h2 className="header-title">News Subheader</h2>
				<p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet leo eget purus consequat convallis. Duis in dui suscipit, malesuada dui ac, posuere nulla</p>
			</header>
			<div className="view-content">
				<ul className="article-list list-bordered list-unstyled row">
					<li className="views-row views-row-1 views-row-odd views-row-first col-24 col-md-8 node-94 in-view">
						<article>
							<img typeof="foaf:Image" src="http://dev-ancestry.pantheonsite.io/sites/default/files/styles/medium/public/Caroline-2081v2%401x.jpg?itok=X5yGbg-n" width="600" height="600" alt="" className="medium img-fluid"></img>
							<div className="content">
								<header className="article-title trim-three-liner">
									<h3><a href="https://fortune.com/2019/07/15/dna-testing-privacy-ancestry/">Ancestry CEO on Genetic Data Privacy: ‘Consumers Need to Think About Who They Do Business With’</a></h3>
								</header>
								<section>
									<p className="meta">
										<span>Aug 07, 2019</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>Fortune</span>
									</p>
								</section>
								<footer>
									<a className="read-more" href="/content/ancestry-ceo-genetic-data-privacy-%E2%80%98consumers-need-think-about-who-they-do-business-%E2%80%99">Read Full Story &gt;</a>
								</footer>
							</div>
						</article>
					</li>
					<li className="views-row views-row-2 views-row-even col-24 col-md-8 node-31 in-view">
						<article>
							<img typeof="foaf:Image" src="http://dev-ancestry.pantheonsite.io/sites/default/files/styles/medium/public/DNA%20Kit-Box-Front%20View-Traits-HighRes%20Copy%401x.jpg?itok=XUucbllv" width="600" height="600" alt="" className="medium img-fluid"></img>
							<div className="content">
								<header className="article-title trim-three-liner">
									<h3><a href="https://www.today.com/video/dna-kit-discoveries-leading-to-new-travel-trend-1446689859528">DNA kit discoveries leading to new travel trend</a></h3>
								</header>
								<section>
									<p className="meta">
										<span>Aug 07, 2019</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>TODAY Show</span>
									</p>
								</section>
								<footer>
									<a className="read-more" href="/content/dna-kit-discoveries-leading-new-travel-trend">Read Full Story &gt;</a>
								</footer>
							</div>
						</article>
					</li>
					<li className="views-row views-row-3 views-row-odd views-row-last col-24 col-md-8 node-2437 in-view">
						<article>
							<img typeof="foaf:Image" src="http://dev-ancestry.pantheonsite.io/sites/default/files/styles/medium/public/railroad-02%20copy%401x.jpg?itok=76f5QoQD" width="600" height="600" alt="" className="medium img-fluid"></img>
							<div className="content">
								<header className="article-title trim-three-liner">
									<h3><a href="https://www.cbsnews.com/news/strangers-discover-underground-railroad-connections-and-surprising-family-history/">Strangers discover their Underground Railroad connection: "We all inherit slavery in a different way"</a></h3>
								</header>
								<section>
									<p className="meta">
										<span>Aug 06, 2019</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>CBS This Morning</span>
									</p>
								</section>
								<footer>
									<a className="read-more" href="/content/strangers-discover-their-underground-railroad-connection-we-all-inherit-slavery-different">Read Full Story &gt;</a>
								</footer>
							</div>
						</article>
					</li>
				</ul>
			</div>
			<footer className="view-footer">
				<a className="btn btn-outline-ancestry btn-green btn-lg" href="#" onClick={e => e.preventDefault()}>View All News Articles</a>
			</footer>
		</div>
	</div>
)

