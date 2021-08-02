import React from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/solid";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import {
  readLinkContainer,
  readLinkIcon,
  getStartedLinkContainer,
  getStartedLinkIcon,
} from "./HomePage.module.css";

const HomePage = () => {
  const data = useStaticQuery(pageQuery);
  return (
    <React.Fragment>
      <section className="section">
        <video id="background-video" autoPlay="autoplay" loop="loop" muted>
          <source src="video/bg-video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      <section className="w-10/12 mb-10 mx-5 lg:mx-16 pt-28 lg:pt-40">
        <h1 id="home-head" className="text-white leading-tight">
          We set out to create some healthy competition among securities
          exchanges.
        </h1>
        <div
          id="home-subhead"
          className="font-ranuaLight text-2xl md:text-4xl text-white mt-5 lg:mt-10"
        >
          Nine months later, we’re well on our way.
        </div>
        <div id="head-CTA-link" className={readLinkContainer}>
          Read the June Update
          <ChevronRightIcon className={readLinkIcon} />
        </div>
      </section>
      <section
        name="news-ticker"
        className="w-news-ticker h-news-ticker mt-14 lg:mt-20 text-white mx-5 lg:mx-16"
      >
        <div className="flex justify-between p-5 h-20 bg-blue-dark font-ranuaBold text-sm md:text-base hovmd:text-yellow hover:bg-navy transition-colors ease-out 300">
          <div className="w-9/12">
            MEMX to launch new options exchange Q1 2022
          </div>
          <div className="flex">
            <ChevronLeftIcon className="inline h-7 w-7 cursor-pointer" />
            <ChevronRightIcon className="inline h-7 w-7 cursor-pointer" />
          </div>
        </div>
      </section>
      <section name="trading-volumes" className="mt-16 lg:mt-24 mx-5 lg:mx-16">
        <h2 className="text-yellow">MEMX Trading Volumes</h2>
        <h3 className="text-yellow mt-7 lg:mt-10">SHARES TRADED</h3>
        <div className="font-ranuaBlack text-shares-traded-mobile md:text-shares-traded text-white mt-2">
          215,173,294
        </div>
        <div className="flex flex-col lg:flex-row w-full justify-between">
          <div className="flex flex-col bg-navy relative w-full lg:w-shares-table pt-8 mt-10 space-y-4">
            <div className="absolute top-2 left-2 text-yellow">
              <h3>TRADING VOLUME BY TAPE</h3>
            </div>
            {/* ROW 1*/}
            <div className="flex justify-between items-baseline mx-4 pb-3 border-b border-dotted border-gray-400">
              <div className="text-blue-default flex flex-shrink-0">
                <h4>Tape A</h4>
              </div>
              <div className="font-ranuaBold text-3xl md:text-5xl text-white">
                88,335,530
              </div>
            </div>
            {/* ROW 2*/}
            <div className="flex justify-between items-baseline mx-4 pb-3 border-b border-dotted border-gray-400">
              <div className="text-blue-default flex flex-shrink-0">
                <h4>Tape B</h4>
              </div>
              <div className="font-ranuaBold text-3xl md:text-5xl text-white">
                34,287,012
              </div>
            </div>
            {/* ROW 3*/}
            <div className="flex justify-between items-baseline mx-4 pb-5 flex-shrink-0">
              <div className="text-blue-default flex flex-shrink-0">
                <h4>Tape C</h4>
              </div>
              <div className="font-ranuaBold text-3xl md:text-5xl text-white flex-shrink-0">
                133,860,862
              </div>
            </div>
            {/* --------- */}
          </div>

          <div className="flex flex-col bg-navy relative w-full lg:w-shares-table pt-8 mt-10 space-y-4">
            <div className="absolute top-2 left-2 text-yellow">
              <h3>MARKET SHARE</h3>
            </div>
            {/* ROW 1*/}
            <div className="flex justify-between items-baseline mx-4 pb-3 border-b border-dotted border-gray-400">
              <div className="text-blue-default">
                <h4>Exchange</h4>
              </div>
              <div className="font-ranuaBold text-3xl md:text-5xl text-white">
                4.5%
              </div>
            </div>
            {/* ROW 2*/}
            <div className="flex justify-between items-baseline mx-4 pb-3 lg:border-b lg:border-dotted lg:border-gray-400">
              <div className="text-blue-default">
                <h4>Total</h4>
              </div>
              <div className="font-ranuaBold text-3xl md:text-5xl text-white">
                2.64%
              </div>
            </div>
            {/* --------- */}
          </div>
        </div>

        <div className="mt-6 lg:mt-8 text-white font-ranua text-p-small md:text-sm">
          Trading data for June 28, 2021.
        </div>
      </section>

      <div className="relative bg-gradient-to-b from-navy to-navy-dark">
        <section name="get-started" className="flex mt-16 lg:mt-20">
          <div className="p-16 w-full md:w-10/12 bg-yellow">
            <div className="font-heptaBold text-3xl md:text-get-started-cta">
              Ready to join an exchange focused on the needs of its members?
            </div>
            <div id="get-started-CTA-link" className={getStartedLinkContainer}>
              Get started
              <ChevronRightIcon className={getStartedLinkIcon} />
            </div>
          </div>
          <div className="hidden md:block bg-transparent w-10"></div>
          <div className="hidden md:block bg-yellow w-2/12"></div>
        </section>
        <section name="x-sessions" className="mt-16 lg:mt-20 mx-5 lg:mx-16">
          <h2 className="text-yellow">The X Sessions</h2>
          <p className="text-white mt-4 md:mt-6 md:w-3/4">
            Watch our members discuss everything from the future of exchange
            trading to the concept of healthy competition with MEMX CEO Jonathan
            Kellner.
          </p>

          <div className="flex flex-col lg:flex-row md:hidden lg:flex lg:space-x-8">
            {/* IMAGE PAIR 1*/}
            <div className="flex flex-col">
              <div className="flex mt-8 lg:mt-14">
                <div id="image1">
                  <GatsbyImage
                    alt="person image"
                    image={data.imageOne.childImageSharp.gatsbyImageData}
                  />
                </div>
                &nbsp;
                <div id="image2">
                  <GatsbyImage
                    alt="person image"
                    image={data.imageTwo.childImageSharp.gatsbyImageData}
                  />
                </div>
              </div>

              <div className="-my-5 z-10 px-4">
                <div className=" text-white font-heptaSemiBold text-2xl md:text-4xl">
                  Blackrock
                </div>

                <div className="mt-2 font-ranua text-sm md:text-base text-blue-light">
                  <b>Samara Cohen</b>
                  <br />
                  Co-Head of iShares Markets & Investments
                  <br /> <br />
                  <b>Hubert De Jesus</b>
                  <br />
                  Global Head of Market Structure & Electronic Trading
                </div>
              </div>
            </div>

            {/* IMAGE PAIR 2*/}
            <div className="flex flex-col mt-5 lg:mt-0">
              <div className="flex mt-10 lg:mt-14">
                <div id="image1">
                  <GatsbyImage
                    alt="person image"
                    image={data.imageOne.childImageSharp.gatsbyImageData}
                  />
                </div>
                &nbsp;
                <div id="image2">
                  <GatsbyImage
                    alt="person image"
                    image={data.imageTwo.childImageSharp.gatsbyImageData}
                  />
                </div>
              </div>

              <div className="-my-5 z-10 px-4">
                <div className=" text-white font-heptaSemiBold text-2xl md:text-4xl">
                  Fidelity
                </div>

                <div className="mt-2 font-ranua text-sm md:text-base text-blue-light">
                  <b>Samara Cohen</b>
                  <br />
                  Co-Head of iShares Markets & Investments
                  <br /> <br />
                  <b>Hubert De Jesus</b>
                  <br />
                  Global Head of Market Structure & Electronic Trading
                </div>
              </div>
            </div>

            {/* IMAGE PAIR 3*/}
            <div className="flex flex-col mt-5 lg:mt-0">
              <div className="flex mt-8 lg:mt-14">
                <div id="image1">
                  <GatsbyImage
                    alt="person image"
                    image={data.imageOne.childImageSharp.gatsbyImageData}
                  />
                </div>
                &nbsp;
                <div id="image2">
                  <GatsbyImage
                    alt="person image"
                    image={data.imageTwo.childImageSharp.gatsbyImageData}
                  />
                </div>
              </div>

              <div className="-my-5 z-10 px-4">
                <div className=" text-white font-heptaSemiBold text-2xl md:text-4xl">
                  Hudson River Trading
                </div>

                <div className="mt-2 font-ranua text-sm md:text-base text-blue-light">
                  <b>Samara Cohen</b>
                  <br />
                  Co-Head of iShares Markets & Investments
                  <br /> <br />
                  <b>Hubert De Jesus</b>
                  <br />
                  Global Head of Market Structure & Electronic Trading
                </div>
              </div>
            </div>
          </div>

          {/* TABLET LAYOUT */}
          <div className="hidden lg:hidden md:flex flex-col mt-2">
            {/* Image 1 */}
            <div className="flex items-center justify-between mt-8 lg:mt-14">
              <div className="w-5/12">
                <div className="md:-bottom-4 text-white font-heptaSemiBold text-2xl md:text-4xl">
                  Blackrock
                </div>
                <div className="mt-2 font-ranua text-sm md:text-base text-blue-light">
                  <b>Samara Cohen</b>
                  <br />
                  Co-Head of iShares Markets & Investments
                  <br /> <br />
                  <b>Hubert De Jesus</b>
                  <br />
                  Global Head of Market Structure & Electronic Trading
                </div>
              </div>
              <div className="flex relative w-1/2">
                <div id="image1">
                  <GatsbyImage
                    alt="person image"
                    image={data.imageOne.childImageSharp.gatsbyImageData}
                  />
                </div>
                &nbsp;
                <div id="image2">
                  <GatsbyImage
                    alt="person image"
                    image={data.imageTwo.childImageSharp.gatsbyImageData}
                  />
                </div>
              </div>
            </div>
            {/* Image 2 */}
            <div className="flex items-center justify-between mt-8 lg:mt-14">
              <div className="w-5/12">
                <div className="md:-bottom-4 text-white font-heptaSemiBold text-2xl md:text-4xl">
                  Fidelity
                </div>
                <div className="mt-2 font-ranua text-sm md:text-base text-blue-light">
                  <b>Samara Cohen</b>
                  <br />
                  Co-Head of iShares Markets & Investments
                  <br /> <br />
                  <b>Hubert De Jesus</b>
                  <br />
                  Global Head of Market Structure & Electronic Trading
                </div>
              </div>
              <div className="flex relative w-1/2">
                <div id="image1">
                  <GatsbyImage
                    alt="person image"
                    image={data.imageOne.childImageSharp.gatsbyImageData}
                  />
                </div>
                &nbsp;
                <div id="image2">
                  <GatsbyImage
                    alt="person image"
                    image={data.imageTwo.childImageSharp.gatsbyImageData}
                  />
                </div>
              </div>
            </div>
            {/* Image 3 */}
            <div className="flex items-center justify-between mt-8 lg:mt-14">
              <div className="w-5/12">
                <div className="md:-bottom-4 text-white font-heptaSemiBold text-2xl md:text-4xl">
                  Hudson River Trading
                </div>
                <div className="mt-2 font-ranua text-sm md:text-base text-blue-light">
                  <b>Samara Cohen</b>
                  <br />
                  Co-Head of iShares Markets & Investments
                  <br /> <br />
                  <b>Hubert De Jesus</b>
                  <br />
                  Global Head of Market Structure & Electronic Trading
                </div>
              </div>
              <div className="flex relative w-1/2">
                <div id="image1">
                  <GatsbyImage
                    alt="person image"
                    image={data.imageOne.childImageSharp.gatsbyImageData}
                  />
                </div>
                &nbsp;
                <div id="image2">
                  <GatsbyImage
                    alt="person image"
                    image={data.imageTwo.childImageSharp.gatsbyImageData}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <div id="see-all-link" className={readLinkContainer}>
              See all
              <ChevronRightIcon className={readLinkIcon} />
            </div>
          </div>
        </section>

        <section name="learn-more" className="bg-navy mt-20 mx-5 lg:mx-16">
          <div className="flex flex-col p-10 lg:flex-row lg:items-center min-w-full">
            <div id="team-image" className="opacity-60">
              <GatsbyImage
                alt="team image"
                image={data.teamImage.childImageSharp.gatsbyImageData}
              />
            </div>
            <div className="lg:flex flex-col lg:w-2/4 lg:ml-10 flex-shrink-0">
              <h2 className="text-yellow mt-10 lg:mt-0 w-5/6 lg:-ml-28 z-50">
                Build your career while building the exchange of the future.
              </h2>
              <p className="text-white mt-4 md:mt-6 w-3/4">
                If you have an entrepreneurial spirit and a never-let-if-fail
                attitude, MEMX might be the place for you.
              </p>
              <div id="learn-more-link" className={readLinkContainer}>
                Learn more
                <ChevronRightIcon className={readLinkIcon} />
              </div>
            </div>
          </div>
        </section>
      </div>
      <section
        name="footer"
        className="bg-gradient-to-b from-navy-dark to-navy pt-20"
      >
        <div className="mx-5 lg:mx-16">
          <Link to="/support">
            <div className="flex items-center mt-10 lg:mt-0">
              <h2 className="text-yellow md:pb-1 pr-1">Support Center</h2>
              <ChevronRightIcon className="inline h-7 w-7 md:h-9 md:w-9 mt-1 text-yellow" />
            </div>
          </Link>
          {/* SEARCH  */}
          <div className="border-b-2 border-yellow text-white font-ranuaLight text-lg md:text-xl h-11 mt-6">
            <SearchIcon className="inline h-5 w-5 md:h-6 md:w-6 md:pb-1 text-yellow mr-4" />
            Find answers and resources
          </div>

          {/* FOOTER LINKS */}
          <div className="flex flex-col md:flex-row md:justify-between mt-10">
            {/* LINK SET 1 */}
            <div className="flex flex-col space-y-4 md:w-1/3 lg:w-1/5">
              <Link to="/">
                <div className="flex items-center mt-10 lg:mt-0">
                  <div className="text-xl font-ranuaBold text-yellow pr-1">
                    Home
                  </div>
                  <ChevronRightIcon className="inline h-5 w-5 md:h-7 md:w-7 text-yellow" />
                </div>
              </Link>

              <Link to="/">
                <div className="flex items-center mt-8 lg:mt-0">
                  <div className="text-xl font-ranuaBold text-yellow pr-1">
                    User Portal
                  </div>
                  <ChevronRightIcon className="inline h-5 w-5 md:h-7 md:w-7 text-yellow" />
                </div>
              </Link>

              <Link to="/">
                <div className="flex items-center mt-8 lg:mt-0">
                  <div className="text-xl font-ranuaBold text-yellow">
                    Company
                  </div>
                </div>
              </Link>

              <Link to="/about">
                <div className="text-lg font-ranuaLight text-white mt-4 lg:mt-0">
                  About
                </div>
              </Link>

              <Link to="/about">
                <div className="text-lg font-ranuaLight text-white mt-4 lg:mt-0">
                  Team
                </div>
              </Link>

              <Link to="/about">
                <div className="text-lg font-ranuaLight text-white mt-4 lg:mt-0">
                  Careers
                </div>
              </Link>
            </div>

            {/* LINK SET 2 */}
            <div className="flex flex-col space-y-4 md:w-1/3 lg:w-1/5">
              <Link to="/">
                <div className="text-xl font-ranuaBold text-yellow  mt-10 lg:mt-0">
                  Exchange
                </div>
              </Link>
              <Link to="/">
                <div className="text-lg font-ranuaBold text-white mt-5 lg:mt-0">
                  TRADING & OPERATIONS
                </div>
              </Link>

              <Link to="/">
                <div className="text-lg font-ranuaLight text-white mt-4 lg:mt-0">
                  System Statuses
                </div>
              </Link>

              <Link to="/">
                <div className="text-lg font-ranuaLight text-white mt-4 lg:mt-0">
                  Alerts & Notices
                </div>
              </Link>

              <Link to="/about">
                <div className="text-lg font-ranuaLight text-white mt-4 lg:mt-0">
                  User Manual (pdf)
                </div>
              </Link>

              <Link to="/about">
                <div className="text-lg font-ranuaLight text-white mt-4 lg:mt-0">
                  Fee Schedules
                </div>
              </Link>

              <Link to="/about">
                <div className="text-lg font-ranuaLight text-white mt-4 lg:mt-0">
                  Market Hours & Holidays
                </div>
              </Link>

              <Link to="/about">
                <div className="text-lg font-ranuaLight text-white mt-4 lg:mt-0">
                  Exchange Codes
                </div>
              </Link>

              <Link to="/about">
                <div className="text-lg font-ranuaLight text-white mt-4 lg:mt-0">
                  Instrument Directory (pdf)
                </div>
              </Link>

              <Link to="/about">
                <div className="text-lg font-ranuaLight text-white mt-4 lg:mt-0"></div>
              </Link>
            </div>

            {/* LINK SET 3 */}
            <div className="flex flex-col space-y-4 md:w-1/3 lg:w-1/5">
              <Link to="/" className="hidden md:block">
                <div className="text-xl font-ranuaBold text-yellow  mt-10 lg:mt-0">
                  &nbsp;
                </div>
              </Link>
              <Link to="/">
                <div className="text-lg font-ranuaBold text-white mt-5 lg:mt-0">
                  REGULATORY
                </div>
              </Link>

              <Link to="/">
                <div className="text-lg font-ranuaLight text-white mt-4 lg:mt-0">
                  Alerts & Notices
                </div>
              </Link>

              <Link to="/">
                <div className="text-lg font-ranuaLight text-white mt-4 lg:mt-0">
                  Rules & Filings
                </div>
              </Link>

              <Link to="/about">
                <div className="text-lg font-ranuaLight text-white mt-4 lg:mt-0">
                  Rulebook (pdf)
                </div>
              </Link>

              <Link to="/about">
                <div className="text-lg font-ranuaLight text-white mt-4 lg:mt-0">
                  Rule 605 Reports
                </div>
              </Link>

              <Link to="/about">
                <div className="text-lg font-ranuaLight text-white mt-4 lg:mt-0">
                  FINRA Rules by Reference
                </div>
              </Link>

              <Link to="/about">
                <div className="text-lg font-ranuaLight text-white mt-4 lg:mt-0">
                  Governance Documents
                </div>
              </Link>
            </div>

            {/* LINk SET 4 */}
            <div className="md:hidden lg:flex flex-col space-y-4  lg:w-1/5">
              <div className="text-xl font-ranuaBold text-yellow  mt-10 lg:mt-0">
                Insights
              </div>
              <Link to="/">
                <div className="text-lg font-ranuaLight text-white mt-5 lg:mt-0">
                  Data
                </div>
              </Link>

              <Link to="/">
                <div className="text-lg font-ranuaLight text-white mt-4 lg:mt-0">
                  News & Views
                </div>
              </Link>
            </div>

            {/* LINK SET 5 */}
            <div className="md:hidden lg:flex flex-col space-y-4 w-3/5 lg:w-1/5">
              <div className="text-xl font-ranuaBold text-yellow  mt-10 lg:mt-0">
                Contact
              </div>

              <div className="text-lg font-ranuaLight text-white mt-4 lg:mt-0">
                MEMX LLC 111 Town Square Place Suite 520 Jersey City, NJ 07310
                <br />
                <br />
                +1 (833) 415-6369
                <br />
                memberx@memx.com
              </div>

              <div id="learn-more-link" className={readLinkContainer}>
                More contacts
                <ChevronRightIcon className={readLinkIcon} />
              </div>
            </div>
          </div>
          {/* LINK SET 4 & 5 TABLET */}

          <div className="hidden lg:hidden md:flex">
            {/* LINk SET 4 */}
            <div className="flex flex-col space-y-4  w-1/3">
              <div className="text-xl font-ranuaBold text-yellow  mt-10 lg:mt-0">
                Insights
              </div>
              <Link to="/">
                <div className="text-lg font-ranuaLight text-white mt-5 lg:mt-0">
                  Data
                </div>
              </Link>

              <Link to="/">
                <div className="text-lg font-ranuaLight text-white mt-4 lg:mt-0">
                  News & Views
                </div>
              </Link>
            </div>

            {/* LINK SET 5 */}
            <div className="flex flex-col space-y-4 w-1/3">
              <div className="text-xl font-ranuaBold text-yellow  mt-10 lg:mt-0">
                Contact
              </div>

              <div className="text-lg font-ranuaLight text-white mt-4 lg:mt-0">
                MEMX LLC 111 Town Square Place Suite 520 Jersey City, NJ 07310
                <br />
                <br />
                +1 (833) 415-6369
                <br />
                memberx@memx.com
              </div>

              <div id="learn-more-link" className={readLinkContainer}>
                More contacts
                <ChevronRightIcon className={readLinkIcon} />
              </div>
            </div>
          </div>
        </div>
        {/* ----------- */}

        <div className="flex flex-col md:flex-row md:justify-between items-start space-y-4 md:space-y-0 text-white mt-16 pb-14 mx-5 lg:mx-16">
          <div className="">© 2021 MEMX, LLC. All rights reserved.</div>
          <div className="md:hidden">Privacy Policy</div>
          <div className="md:hidden">Copyright</div>
          <div className="hidden md:flex justify-between">
            <div>Privacy Policy</div>
            <div className="ml-8">Copyright</div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HomePage;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "woman-pic2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    imageTwo: file(relativePath: { eq: "woman-pic2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    teamImage: file(relativePath: { eq: "team.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
`;
