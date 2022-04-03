/*eslint-disable*/
import React from "react";

import Typewriter from "typewriter-effect";

// reactstrap components
import { Container } from "reactstrap";
// core components

import gsap from "gsap";
import { useRef } from "react";
function IndexHeader() {
	let pageHeader = React.createRef();

	React.useEffect(() => {
		if (window.innerWidth > 991) {
			const updateScroll = () => {
				let windowScrollTop = window.pageYOffset / 3;
				pageHeader.current.style.transform =
					"translate3d(0," + windowScrollTop + "px,0)";
			};
			window.addEventListener("scroll", updateScroll);
			return function cleanup() {
				window.removeEventListener("scroll", updateScroll);
			};
		}
	});

	return (
		<>
			<div className="page-header clear-filter" filter-color="blue">
				<div
					className="page-header-image"
					style={{
						backgroundImage:
							"url(" + require("assets/img/farm.jpg").default + ")",
					}}
					ref={pageHeader}
				></div>
				<Container>
					<div className="content-center brand">
						<img
							alt="..."
							className="n-logo bounce-4"
							src={require("assets/img/now-logo.png").default}
						></img>
						{/* <div className="stage">
							<img src={koala} className="spin" alt="logo" />
						</div> */}
						{/* <h1 className="h1-seo">Now UI Kit.</h1> */}
						{/* <Typewriter
							options={{
								strings: ["Czesc", "Tutaj Leon", "Hodowca Zwierzat !"],
								autoStart: true,
								loop: true,
								wrapperClassName: "typewriter",
								cursorClassName: "cursor",
							}}
							onInit={(typewriter) => {
								typewriter
									.typeString("Czesc Wam")
									.callFunction(() => {
										console.log("String typed out!");
									})
									.pauseFor(2500)
									.deleteAll()
									.callFunction(() => {
										console.log("All strings were deleted");
									})
									.start();
							}}
						/> */}

						{/* <div className="typewriter"> */}
						{/* <h1>Cześć! Tuaj Leon</h1> */}
						{/* </div> */}
						{/* <div className="typewriter2">
							<h2> Hodowca Zwierząt ;)</h2>
						</div> */}

						{/* <h3>A beautiful Bootstrap 4 UI kit. Yours free.</h3> */}
					</div>
					{/* <h6 className="category category-absolute">
						Designed by{" "}
						<a href="http://invisionapp.com/?ref=creativetim" target="_blank">
							<img
								alt="..."
								className="invision-logo"
								src={require("assets/img/invision-white-slim.png").default}
							></img>
						</a>
						. Coded by{" "}
						<a
							href="https://www.creative-tim.com?ref=nukr-index-header"
							target="_blank"
						>
							<img
								alt="..."
								className="creative-tim-logo"
								src={require("assets/img/creative-tim-white-slim2.png").default}
							></img>
						</a>
						.
					</h6> */}
				</Container>
			</div>
		</>
	);
}

export default IndexHeader;
